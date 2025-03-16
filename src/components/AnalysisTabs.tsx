
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, MapPin, Smartphone, Activity, Database, Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnalysisTabs = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const isMobile = useIsMobile();
  
  return (
    <div className="container-custom py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Análise em Tempo Real</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Visualize e interaja com seus dados de diferentes fontes em um único lugar.
          Descubra padrões e tendências em tempo real.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mx-auto mb-8 max-w-3xl">
          <TabsTrigger value="dashboard" className={isMobile ? "gap-1" : "gap-2"}>
            <BarChart2 className="h-4 w-4" />
            <span>{isMobile ? "Dashboard" : "Dashboard"}</span>
          </TabsTrigger>
          <TabsTrigger value="maps" className={isMobile ? "gap-1" : "gap-2"}>
            <MapPin className="h-4 w-4" />
            <span>{isMobile ? "Maps" : "Google Maps"}</span>
          </TabsTrigger>
          <TabsTrigger value="social" className={isMobile ? "gap-1" : "gap-2"}>
            <Smartphone className="h-4 w-4" />
            <span>{isMobile ? "Social" : "Mídias Sociais"}</span>
          </TabsTrigger>
          <TabsTrigger value="geo" className={isMobile ? "gap-1" : "gap-2"}>
            <Globe className="h-4 w-4" />
            <span>{isMobile ? "Geo" : "Análise Geográfica"}</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="bg-white rounded-xl p-4 border shadow-md">
          <div className="h-96 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-6">
            <BarChart2 className="h-16 w-16 text-sightx-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Dashboard Integrado</h3>
            <p className="text-gray-600 text-center max-w-md">
              Visualize todos seus dados em um único painel com gráficos interativos, 
              métricas personalizadas e alertas em tempo real.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="maps" className="bg-white rounded-xl p-4 border shadow-md">
          <div className="h-96 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-6">
            <MapPin className="h-16 w-16 text-sightx-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Integração com Google Maps</h3>
            <p className="text-gray-600 text-center max-w-md">
              Visualize dados geográficos, análise de território, rotas e muito mais
              diretamente integrados à plataforma Google Maps.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="social" className="bg-white rounded-xl p-4 border shadow-md">
          <div className="h-96 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-6">
            <Smartphone className="h-16 w-16 text-sightx-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Análise de Redes Sociais</h3>
            <p className="text-gray-600 text-center max-w-md">
              Acompanhe menções à sua marca, sentimento do público, engajamento
              e tendências em todas as principais plataformas de mídias sociais.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="geo" className="bg-white rounded-xl p-4 border shadow-md">
          <div className="h-96 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-6">
            <Globe className="h-16 w-16 text-sightx-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Análise Geográfica Avançada</h3>
            <p className="text-gray-600 text-center max-w-md">
              Identifique padrões geográficos, áreas de maior potencial, 
              análise de concorrência por região e planejamento territorial.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalysisTabs;
