
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface GoogleBusinessLocation {
  name: string;
  locationName: string;
  primaryPhone: string;
  websiteUri: string;
  regularHours: any;
  categories: { displayName: string }[];
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

    // For now, we'll return mock data since we need to implement token storage first
    // In a real implementation, you would:
    // 1. Retrieve stored Google tokens for this user
    // 2. Use the Google My Business API to fetch actual data
    // 3. Handle token refresh if needed

    console.log('Fetching Google Business data for user:', user.id)

    // Mock data for demonstration
    const mockProfiles = [
      {
        id: '1',
        business_name: 'SightX Consultoria',
        address: 'São Paulo, SP, Brasil',
        phone_number: '+55 11 99999-9999',
        website_url: 'https://www.sightx.com.br',
        rating: 4.8,
        review_count: 127,
        category: 'Consultoria em Marketing',
        last_updated: new Date().toISOString()
      },
      {
        id: '2',
        business_name: 'SightX Analytics',
        address: 'Rio de Janeiro, RJ, Brasil',
        phone_number: '+55 21 88888-8888',
        website_url: 'https://analytics.sightx.com.br',
        rating: 4.9,
        review_count: 89,
        category: 'Análise de Dados',
        last_updated: new Date().toISOString()
      }
    ]

    // Here you would implement the actual Google My Business API calls:
    /*
    const accessToken = await getStoredAccessToken(user.id)
    
    // Get accounts
    const accountsResponse = await fetch(
      'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (!accountsResponse.ok) {
      throw new Error('Failed to fetch Google Business accounts')
    }
    
    const accounts = await accountsResponse.json()
    
    // Get locations for each account
    const allLocations = []
    for (const account of accounts.accounts || []) {
      const locationsResponse = await fetch(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      )
      
      if (locationsResponse.ok) {
        const locations = await locationsResponse.json()
        allLocations.push(...(locations.locations || []))
      }
    }
    */

    return new Response(
      JSON.stringify({ 
        success: true,
        profiles: mockProfiles,
        message: 'Dados sincronizados com sucesso (dados de demonstração)'
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        } 
      }
    )

  } catch (error) {
    console.error('Google Business data error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to fetch business data' 
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
