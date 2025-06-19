
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
    console.log('=== Google Auth Function Started ===');
    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      console.error('No authorization header found');
      throw new Error('No authorization header')
    }

    // Verify the user
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (userError || !user) {
      console.error('User authentication failed:', userError);
      throw new Error('User not authenticated')
    }

    console.log('User authenticated:', user.id);

    const url = new URL(req.url)
    const code = url.searchParams.get('code')
    const error = url.searchParams.get('error')
    const errorDescription = url.searchParams.get('error_description')
    
    console.log('URL parameters:', {
      code: code ? 'present' : 'missing',
      error,
      errorDescription
    });

    if (error) {
      console.error('OAuth error from Google:', { error, errorDescription });
      return new Response(null, {
        status: 302,
        headers: {
          ...corsHeaders,
          'Location': `${url.origin}/google-business?error=${encodeURIComponent(error)}&description=${encodeURIComponent(errorDescription || '')}`
        }
      });
    }
    
    const clientId = Deno.env.get('GOOGLE_CLIENT_ID')
    const clientSecret = Deno.env.get('GOOGLE_CLIENT_SECRET')
    
    console.log('Environment variables check:', {
      clientId: clientId ? `present (${clientId.substring(0, 10)}...)` : 'missing',
      clientSecret: clientSecret ? 'present' : 'missing'
    });

    if (!clientId || !clientSecret) {
      console.error('Google credentials not configured');
      throw new Error('Google credentials not configured')
    }

    // Use a more reliable redirect URI
    const redirectUri = `https://kisndnwlvephihwahbrh.supabase.co/functions/v1/google-auth`
    console.log('Redirect URI:', redirectUri);

    if (!code) {
      // Step 1: Generate authorization URL
      const scopes = [
        'https://www.googleapis.com/auth/business.manage',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(' ')

      const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
      authUrl.searchParams.set('client_id', clientId)
      authUrl.searchParams.set('redirect_uri', redirectUri)
      authUrl.searchParams.set('scope', scopes)
      authUrl.searchParams.set('response_type', 'code')
      authUrl.searchParams.set('access_type', 'offline')
      authUrl.searchParams.set('prompt', 'consent')
      authUrl.searchParams.set('state', user.id)

      console.log('Generated auth URL:', authUrl.toString());

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
      console.log('Exchanging code for tokens...');
      console.log('Code received:', code.substring(0, 20) + '...');
      
      const tokenRequestBody = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      });

      console.log('Token request body:', tokenRequestBody.toString());

      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: tokenRequestBody,
      });

      console.log('Token response status:', tokenResponse.status);
      console.log('Token response headers:', Object.fromEntries(tokenResponse.headers.entries()));

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text()
        console.error('Token exchange failed:', {
          status: tokenResponse.status,
          statusText: tokenResponse.statusText,
          body: errorText
        });
        
        return new Response(null, {
          status: 302,
          headers: {
            ...corsHeaders,
            'Location': `${url.origin}/google-business?error=token_exchange_failed&description=${encodeURIComponent(errorText)}`
          }
        });
      }

      const tokens: TokenResponse = await tokenResponse.json()
      console.log('Tokens received successfully:', {
        access_token: tokens.access_token ? 'present' : 'missing',
        refresh_token: tokens.refresh_token ? 'present' : 'missing',
        expires_in: tokens.expires_in
      });

      // Store tokens in the user's metadata or a custom table
      // For now, we'll redirect back with success
      console.log('Redirecting to success page...');
      
      return new Response(null, {
        status: 302,
        headers: {
          ...corsHeaders,
          'Location': `${url.origin}/google-business?success=true`
        }
      });
    }

  } catch (error) {
    console.error('Google auth error:', error);
    console.error('Error stack:', error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Authentication failed',
        details: error.stack
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
