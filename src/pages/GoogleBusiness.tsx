
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, LogOut, RefreshCw, Building, Star, Phone, Globe, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BusinessProfile {
  id: string;
  business_name: string;
  address: string;
  phone_number: string;
  website_url: string;
  rating: number;
  review_count: number;
  category: string;
  last_updated: string;
}

const GoogleBusiness = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [profiles, setProfiles] = useState<BusinessProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  const handleGoogleAuth = async () => {
    setSyncing(true);
    setError('');

    try {
      const { data, error } = await supabase.functions.invoke('google-auth');
      
      if (error) throw error;
      
      if (data?.authUrl) {
        window.location.href = data.authUrl;
      }
    } catch (err) {
      console.error('Google auth error:', err);
      setError('Erro ao conectar com o Google');
      toast({
        variant: "destructive",
        title: "Erro na autenticação",
        description: "Não foi possível conectar com o Google",
      });
    } finally {
      setSyncing(false);
    }
  };

  const syncBusinessData = async () => {
    setSyncing(true);
    setError('');

    try {
      const { data, error } = await supabase.functions.invoke('google-business-data');
      
      if (error) throw error;
      
      // Simulate setting profile data from the response
      if (data && data.profiles) {
        setProfiles(data.profiles);
      }
      
      toast({
        title: "Sincronização concluída",
        description: "Dados do Google Business atualizados com sucesso",
      });
    } catch (err) {
      console.error('Sync error:', err);
      setError('Erro ao sincronizar dados do Google Business');
      toast({
        variant: "destructive",
        title: "Erro na sincronização",
        description: "Não foi possível sincronizar os dados",
      });
    } finally {
      setSyncing(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/sightx-logo.svg" alt="SightX" className="h-8 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Google Business Profile</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {user.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Perfis Empresariais</h2>
              <p className="text-gray-600 mt-1">Gerencie e visualize os dados do seu Google Business Profile</p>
            </div>
            <div className="flex space-x-3">
              <Button
                onClick={handleGoogleAuth}
                disabled={syncing}
                variant="outline"
              >
                {syncing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Building className="h-4 w-4 mr-2" />}
                Conectar Google
              </Button>
              <Button
                onClick={syncBusinessData}
                disabled={syncing}
                className="bg-sightx-purple hover:bg-sightx-purple/90"
              >
                {syncing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}
                Sincronizar Dados
              </Button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : profiles.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum perfil encontrado</h3>
                <p className="text-gray-600 mb-6">
                  Conecte sua conta do Google e sincronize os dados para começar
                </p>
                <Button
                  onClick={handleGoogleAuth}
                  className="bg-sightx-purple hover:bg-sightx-purple/90"
                >
                  <Building className="h-4 w-4 mr-2" />
                  Conectar Google Business
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {profiles.map((profile) => (
                <Card key={profile.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{profile.business_name}</CardTitle>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {profile.category}
                      </span>
                    </div>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {profile.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{profile.rating}</span>
                        <span className="text-sm text-gray-600 ml-1">
                          ({profile.review_count} avaliações)
                        </span>
                      </div>
                    </div>
                    
                    {profile.phone_number && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {profile.phone_number}
                      </div>
                    )}
                    
                    {profile.website_url && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Globe className="h-4 w-4 mr-2" />
                        <a
                          href={profile.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sightx-purple hover:underline"
                        >
                          Website
                        </a>
                      </div>
                    )}
                    
                    <div className="text-xs text-gray-500 pt-2 border-t">
                      Atualizado em: {new Date(profile.last_updated).toLocaleDateString('pt-BR')}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GoogleBusiness;
