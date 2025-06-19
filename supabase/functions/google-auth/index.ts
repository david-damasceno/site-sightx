
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    // Verify the user
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (userError || !user) {
      throw new Error('User not authenticated')
    }

    const url = new URL(req.url)
    const code = url.searchParams.get('code')
    
    const clientId = Deno.env.get('GOOGLE_CLIENT_ID')
    const clientSecret = Deno.env.get('GOOGLE_CLIENT_SECRET')
    const redirectUri = `${url.origin}/supabase/functions/v1/google-auth`

    if (!clientId || !clientSecret) {
      throw new Error('Google credentials not configured')
    }

    if (!code) {
      // Step 1: Generate authorization URL
      const scopes = [
        'https://www.googleapis.com/auth/business.manage',
        'https://www.googleapis.com/auth/plus.business.view'
      ].join(' ')

      const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
      authUrl.searchParams.set('client_id', clientId)
      authUrl.searchParams.set('redirect_uri', redirectUri)
      authUrl.searchParams.set('scope', scopes)
      authUrl.searchParams.set('response_type', 'code')
      authUrl.searchParams.set('access_type', 'offline')
      authUrl.searchParams.set('prompt', 'consent')
      authUrl.searchParams.set('state', user.id)

      console.log('Generated auth URL:', authUrl.toString())

      return new Response(
        JSON.stringify({ authUrl: authUrl.toString() }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json'
          } 
        }
      )
    } else {
      // Step 2: Exchange code for tokens
      console.log('Exchanging code for tokens...')
      
      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
          grant_type: 'authorization_code',
          redirect_uri: redirectUri,
        }),
      })

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text()
        console.error('Token exchange failed:', errorText)
        throw new Error(`Token exchange failed: ${errorText}`)
      }

      const tokens: TokenResponse = await tokenResponse.json()
      console.log('Tokens received successfully')

      // Store tokens in Supabase (you may want to create a user_tokens table)
      // For now, we'll return success and redirect to the app
      
      // Redirect back to the application with success
      return new Response(null, {
        status: 302,
        headers: {
          ...corsHeaders,
          'Location': `${url.origin}/google-business?success=true`
        }
      })
    }

  } catch (error) {
    console.error('Google auth error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Authentication failed' 
      }),
      { 
        status: 400,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        } 
      }
    )
  }
})
