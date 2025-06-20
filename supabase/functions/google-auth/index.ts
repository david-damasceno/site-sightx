
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
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));

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
    const state = url.searchParams.get('state')
    
    console.log('URL parameters:', {
      code: code ? `present (${code.substring(0, 20)}...)` : 'missing',
      error,
      errorDescription,
      state
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
      clientId: clientId ? `present (${clientId.substring(0, 20)}...)` : 'missing',
      clientSecret: clientSecret ? 'present' : 'missing',
      supabaseUrl: Deno.env.get('SUPABASE_URL') ? 'present' : 'missing'
    });

    if (!clientId || !clientSecret) {
      console.error('Google credentials not configured');
      throw new Error('Google credentials not configured')
    }

    // Use the exact redirect URI that should be configured in Google Console
    const redirectUri = `https://kisndnwlvephihwahbrh.supabase.co/functions/v1/google-auth`
    console.log('Using redirect URI:', redirectUri);

    if (!code) {
      // Step 1: Generate authorization URL
      console.log('Generating authorization URL...');
      
      // Updated scopes for Google My Business API v4.9
      const scopes = [
        'https://www.googleapis.com/auth/business.manage',
        'openid',
        'email',
        'profile'
      ].join(' ')

      console.log('Using scopes:', scopes);

      const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
      authUrl.searchParams.set('client_id', clientId)
      authUrl.searchParams.set('redirect_uri', redirectUri)
      authUrl.searchParams.set('scope', scopes)
      authUrl.searchParams.set('response_type', 'code')
      authUrl.searchParams.set('access_type', 'offline')
      authUrl.searchParams.set('prompt', 'consent')
      authUrl.searchParams.set('state', user.id)
      authUrl.searchParams.set('include_granted_scopes', 'true')

      console.log('Generated auth URL:', authUrl.toString());

      return new Response(
        JSON.stringify({ 
          authUrl: authUrl.toString(),
          debug: {
            clientId: clientId.substring(0, 20) + '...',
            redirectUri,
            scopes,
            userId: user.id
          }
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json'
          } 
        }
      )
    } else {
      // Step 2: Exchange code for tokens
      console.log('Exchanging authorization code for tokens...');
      console.log('Code received:', code.substring(0, 20) + '...');
      
      const tokenRequestBody = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      });

      console.log('Token request to Google:', {
        url: 'https://oauth2.googleapis.com/token',
        method: 'POST',
        redirectUri,
        clientId: clientId.substring(0, 20) + '...'
      });

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
          body: errorText,
          url: tokenResponse.url
        });
        
        return new Response(null, {
          status: 302,
          headers: {
            ...corsHeaders,
            'Location': `${url.origin}/google-business?error=token_exchange_failed&description=${encodeURIComponent(`Status: ${tokenResponse.status} - ${errorText}`)}`
          }
        });
      }

      const tokens: TokenResponse = await tokenResponse.json()
      console.log('Tokens received successfully:', {
        access_token: tokens.access_token ? `present (${tokens.access_token.substring(0, 20)}...)` : 'missing',
        refresh_token: tokens.refresh_token ? 'present' : 'missing',
        expires_in: tokens.expires_in,
        token_type: tokens.token_type
      });

      // TODO: Store tokens securely in database for the user
      // For now, we'll just redirect back with success
      console.log('Redirecting to success page...');
      
      return new Response(null, {
        status: 302,
        headers: {
          ...corsHeaders,
          'Location': `${url.origin}/google-business?success=true&tokens_received=true`
        }
      });
    }

  } catch (error) {
    console.error('Google auth error:', error);
    console.error('Error stack:', error.stack);
    
    const url = new URL(req.url)
    return new Response(null, {
      status: 302,
      headers: {
        ...corsHeaders,
        'Location': `${url.origin}/google-business?error=function_error&description=${encodeURIComponent(error.message || 'Authentication failed')}`
      }
    });
  }
})
