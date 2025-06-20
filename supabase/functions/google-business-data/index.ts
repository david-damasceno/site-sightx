
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BusinessLocation {
  name: string;
  title: string;
  storefrontAddress: {
    addressLines: string[];
    locality: string;
    administrativeArea: string;
    postalCode: string;
    regionCode: string;
  };
  websiteUri?: string;
  phoneNumbers?: {
    primaryPhone: string;
  };
  categories?: {
    primaryCategory: {
      displayName: string;
    };
  };
  metadata?: {
    duplicate?: boolean;
    canDelete?: boolean;
    canUpdate?: boolean;
  };
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('=== Business Profile Performance API Data Fetch Started ===');
    
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

    console.log('Fetching Business Profile data for user:', user.id);

    // Get stored tokens for this user
    const { data: tokenData, error: tokenError } = await supabaseClient
      .from('user_google_tokens')
      .select('access_token, refresh_token, expires_at')
      .eq('user_id', user.id)
      .single();

    if (tokenError || !tokenData) {
      console.error('No stored tokens found:', tokenError);
      throw new Error('No Google tokens found. Please reconnect your Google account.');
    }

    console.log('Found stored tokens for user');

    // Check if token is expired
    const expiresAt = new Date(tokenData.expires_at);
    const now = new Date();
    
    if (expiresAt <= now) {
      console.log('Token expired, need to refresh');
      throw new Error('Token expired. Please reconnect your Google account.');
    }

    const accessToken = tokenData.access_token;

    // First, get the accounts
    console.log('Fetching Google Business accounts...');
    const accountsResponse = await fetch(
      'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!accountsResponse.ok) {
      const errorText = await accountsResponse.text();
      console.error('Failed to fetch accounts:', accountsResponse.status, errorText);
      throw new Error(`Failed to fetch Google Business accounts: ${accountsResponse.status}`);
    }

    const accountsData = await accountsResponse.json();
    console.log('Accounts response:', accountsData);

    if (!accountsData.accounts || accountsData.accounts.length === 0) {
      console.log('No business accounts found');
      return new Response(
        JSON.stringify({ 
          success: true,
          profiles: [],
          message: 'Nenhuma conta comercial encontrada. Certifique-se de ter um Google Business Profile configurado.'
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json'
          } 
        }
      );
    }

    // Get locations for each account
    const allProfiles = [];
    
    for (const account of accountsData.accounts) {
      console.log(`Fetching locations for account: ${account.name}`);
      
      const locationsResponse = await fetch(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (locationsResponse.ok) {
        const locationsData = await locationsResponse.json();
        console.log(`Found ${locationsData.locations?.length || 0} locations for account ${account.name}`);
        
        if (locationsData.locations) {
          for (const location of locationsData.locations) {
            try {
              // Format the location data
              const profile = {
                id: location.name.split('/').pop() || Math.random().toString(),
                business_name: location.title || 'Nome não disponível',
                address: formatAddress(location.storefrontAddress),
                phone_number: location.phoneNumbers?.primaryPhone || '',
                website_url: location.websiteUri || '',
                rating: 0, // Performance API doesn't provide ratings directly
                review_count: 0, // Performance API doesn't provide review count directly
                category: location.categories?.primaryCategory?.displayName || 'Categoria não especificada',
                last_updated: new Date().toISOString(),
                google_location_id: location.name
              };
              
              allProfiles.push(profile);
            } catch (locationError) {
              console.error('Error processing location:', locationError);
              continue;
            }
          }
        }
      } else {
        const errorText = await locationsResponse.text();
        console.error(`Failed to fetch locations for account ${account.name}:`, locationsResponse.status, errorText);
      }
    }

    console.log(`Total profiles found: ${allProfiles.length}`);

    return new Response(
      JSON.stringify({ 
        success: true,
        profiles: allProfiles,
        message: `${allProfiles.length} perfis comerciais encontrados e sincronizados com sucesso`
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        } 
      }
    );

  } catch (error) {
    console.error('Business Profile Performance API data error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to fetch business data',
        details: 'Verifique se sua conta Google Business Profile está configurada corretamente'
      }),
      { 
        status: 400,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        } 
      }
    );
  }
});

function formatAddress(address: any): string {
  if (!address) return 'Endereço não disponível';
  
  const parts = [];
  
  if (address.addressLines) {
    parts.push(...address.addressLines);
  }
  
  if (address.locality) {
    parts.push(address.locality);
  }
  
  if (address.administrativeArea) {
    parts.push(address.administrativeArea);
  }
  
  if (address.postalCode) {
    parts.push(address.postalCode);
  }
  
  return parts.join(', ');
}
