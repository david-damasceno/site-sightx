
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
    console.log('=== Google Business Profile Performance API Auth Started ===');
    console.log('Request method:', req.method);

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const url = new URL(req.url)
    const code = url.searchParams.get('code')
    const error = url.searchParams.get('error')
    const errorDescription = url.searchParams.get('error_description')
    const state = url.searchParams.get('state') // Este é o user_id que enviamos
    
    console.log('URL parameters:', {
      code: code ? `present (${code.substring(0, 20)}...)` : 'missing',
      error,
      errorDescription,
      state: state ? `present (${state})` : 'missing'
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
      clientSecret: clientSecret ? 'present' : 'missing'
    });

    if (!clientId || !clientSecret) {
      console.error('Google credentials not configured');
      throw new Error('Google credentials not configured')
    }

    const redirectUri = `https://kisndnwlvephihwahbrh.supabase.co/functions/v1/google-auth`
    console.log('Using redirect URI:', redirectUri);

    if (!code) {
      // Step 1: Generate authorization URL for Business Profile Performance API
      // Só executamos esta parte se tivermos autorização (primeira chamada)
      const authHeader = req.headers.get('Authorization')
      if (!authHeader) {
        console.error('No authorization header found for auth URL generation');
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
      console.log('Generating authorization URL for Business Profile Performance API...');
      
      // Simplified scope for Business Profile Performance API
      const scopes = [
        'https://www.googleapis.com/auth/business.manage',
        'email',
        'profile'
      ].join(' ')

      console.log('Using simplified scopes:', scopes);

      const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
      authUrl.searchParams.set('client_id', clientId)
      authUrl.searchParams.set('redirect_uri', redirectUri)
      authUrl.searchParams.set('scope', scopes)
      authUrl.searchParams.set('response_type', 'code')
      authUrl.searchParams.set('access_type', 'offline')
      authUrl.searchParams.set('prompt', 'consent')
      authUrl.searchParams.set('state', user.id) // Pass user ID in state

      console.log('Generated auth URL:', authUrl.toString());

      return new Response(
        JSON.stringify({ 
          authUrl: authUrl.toString(),
          debug: {
            clientId: clientId.substring(0, 20) + '...',
            redirectUri,
            scopes,
            userId: user.id,
            apiType: 'Business Profile Performance API'
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
      // Aqui não precisamos de autorização porque é o callback do Google
      console.log('Exchanging authorization code for tokens...');
      
      if (!state) {
        console.error('No state parameter found in callback');
        return new Response(null, {
          status: 302,
          headers: {
            ...corsHeaders,
            'Location': `${url.origin}/google-business?error=invalid_state&description=${encodeURIComponent('Estado inválido no callback OAuth')}`
          }
        });
      }

      const userId = state; // O state contém o user_id
      console.log('Processing callback for user:', userId);
      
      const tokenRequestBody = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      });

      console.log('Token request to Google...');

      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: tokenRequestBody,
      });

      console.log('Token response status:', tokenResponse.status);

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
            'Location': `${url.origin}/google-business?error=token_exchange_failed&description=${encodeURIComponent(`Status: ${tokenResponse.status} - ${errorText}`)}`
          }
        });
      }

      const tokens: TokenResponse = await tokenResponse.json()
      console.log('Tokens received successfully:', {
        access_token: tokens.access_token ? 'present' : 'missing',
        refresh_token: tokens.refresh_token ? 'present' : 'missing',
        expires_in: tokens.expires_in,
        token_type: tokens.token_type
      });

      // Store tokens in database for the user
      console.log('Storing tokens in database...');
      
      const { error: storeError } = await supabaseClient
        .from('user_google_tokens')
        .upsert({
          user_id: userId,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          expires_at: new Date(Date.now() + (tokens.expires_in * 1000)).toISOString(),
          token_type: tokens.token_type,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (storeError) {
        console.error('Failed to store tokens:', storeError);
        return new Response(null, {
          status: 302,
          headers: {
            ...corsHeaders,
            'Location': `${url.origin}/google-business?error=token_storage_failed&description=${encodeURIComponent('Falha ao armazenar tokens: ' + storeError.message)}`
          }
        });
      } else {
        console.log('Tokens stored successfully');
      }
      
      return new Response(null, {
        status: 302,
        headers: {
          ...corsHeaders,
          'Location': `${url.origin}/google-business?success=true&tokens_stored=true&api_type=business_profile_performance`
        }
      });
    }

  } catch (error) {
    console.error('Google Business Profile Performance API auth error:', error);
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
