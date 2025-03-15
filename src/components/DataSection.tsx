
import { useState } from 'react';
import { BarChart, LineChart, MapPin, Search, TrendingUp, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DataSection = () => {
  const [activeTab, setActiveTab] = useState('maps');

  return (
    <section id="data-analysis" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">Análise de dados <span className="gradient-text">avançada</span></h2>
          <p className="text-gray-700">
            A SightX integra múltiplas fontes de dados para oferecer insights completos e relevantes para o seu negócio. 
            Explore nossas principais soluções de análise abaixo.
          </p>
        </div>

        <Tabs defaultValue="maps" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full max-w-3xl mx-auto mb-10">
            <TabsTrigger value="maps" className="data-tab">
              <MapPin className="mr-2 h-4 w-4" />
              Google Maps
            </TabsTrigger>
            <TabsTrigger value="social" className="data-tab">
              <Users className="mr-2 h-4 w-4" />
              Mídias Sociais
            </TabsTrigger>
            <TabsTrigger value="geo" className="data-tab">
              <TrendingUp className="mr-2 h-4 w-4" />
              Análise Geográfica
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="maps" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Análise de Google Maps</h3>
                <p className="mb-4 text-gray-700">
                  Nossa IA acessa e analisa os dados do Google Maps da sua empresa, incluindo avaliações e comentários, 
                  permitindo que você:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Search className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Monitore as avaliações e sentimento dos clientes em tempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Search className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Responda automaticamente a comentários com mensagens personalizadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Search className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Identifique pontos fortes e áreas de melhoria com base no feedback dos clientes</span>
                  </li>
                </ul>
                <Button className="btn-primary">Saiba mais</Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="rounded-lg overflow-hidden border border-gray-100 mb-4">
                  <div className="bg-gray-50 p-3 flex items-center border-b border-gray-100">
                    <MapPin className="h-5 w-5 text-sightx-purple mr-2" />
                    <span className="font-medium">Análise de Avaliações</span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="font-bold text-lg">Café Expresso Paulista</h4>
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4].map(star => (
                              <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <span className="ml-1 text-gray-500 text-sm">(4.2/5 - 142 avaliações)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sightx-green font-bold">+12%</span>
                        <p className="text-xs text-gray-500">vs mês anterior</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span>Atendimento</span>
                        <div className="w-48 bg-gray-200 rounded-full h-2">
                          <div className="bg-sightx-green h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-gray-700">78%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Ambiente</span>
                        <div className="w-48 bg-gray-200 rounded-full h-2">
                          <div className="bg-sightx-green h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-gray-700">92%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Produto</span>
                        <div className="w-48 bg-gray-200 rounded-full h-2">
                          <div className="bg-sightx-green h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-gray-700">85%</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg text-sm">
                      <p className="font-medium text-sightx-purple mb-1">Insight:</p>
                      <p className="text-gray-700">Os clientes valorizam o ambiente da cafeteria, porém mencionam que o atendimento nos horários de pico poderia ser mais rápido. Considere adicionar mais funcionários entre 12h e 14h.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Análise de Mídias Sociais</h3>
                <p className="mb-4 text-gray-700">
                  Nossa tecnologia monitora e compara sua presença digital com a dos concorrentes, 
                  analisando engajamento, crescimento e tendências para:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Identificar tendências de conteúdo no seu segmento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Comparar métricas de desempenho com concorrentes diretos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Receber recomendações personalizadas para otimizar suas estratégias</span>
                  </li>
                </ul>
                <Button className="btn-primary">Saiba mais</Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="rounded-lg overflow-hidden border border-gray-100">
                  <div className="bg-gray-50 p-3 flex items-center border-b border-gray-100">
                    <BarChart className="h-5 w-5 text-sightx-purple mr-2" />
                    <span className="font-medium">Comparativo de Engajamento</span>
                  </div>
                  <div className="p-4">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-1">
                          <h5 className="font-medium">Instagram</h5>
                          <span className="text-sm text-gray-500">Últimos 30 dias</span>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex space-x-3">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Sua empresa</span>
                                <span className="text-sm font-medium">5.2%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-sightx-purple h-2 rounded-full" style={{ width: '52%' }}></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Concorrentes</span>
                                <span className="text-sm font-medium">3.8%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-400 h-2 rounded-full" style={{ width: '38%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <h5 className="font-medium">Facebook</h5>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex space-x-3">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Sua empresa</span>
                                <span className="text-sm font-medium">2.7%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-sightx-purple h-2 rounded-full" style={{ width: '27%' }}></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Concorrentes</span>
                                <span className="text-sm font-medium">3.5%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
                      <p className="font-medium text-sightx-purple mb-1">Insight:</p>
                      <p className="text-gray-700">Seu desempenho no Instagram está acima da média do setor. Considere replicar a estratégia de conteúdo para o Facebook, onde há oportunidade de crescimento comparado aos concorrentes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="geo" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Análise Geográfica</h3>
                <p className="mb-4 text-gray-700">
                  Utilizamos dados geoespaciais para entender melhor seu público-alvo e ajudar a 
                  personalizar suas estratégias com base em características locais:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Mapeie demograficamente seus clientes e potenciais clientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Compare dados de vendas por região e identifique oportunidades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-3 w-3 text-sightx-purple" />
                    </div>
                    <span>Otimize sua estratégia de marketing local e distribuição</span>
                  </li>
                </ul>
                <Button className="btn-primary">Saiba mais</Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="rounded-lg overflow-hidden border border-gray-100">
                  <div className="bg-gray-50 p-3 flex items-center border-b border-gray-100">
                    <MapPin className="h-5 w-5 text-sightx-purple mr-2" />
                    <span className="font-medium">Mapa de Calor - Clientes</span>
                  </div>
                  <div className="p-4">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Simplified map visualization */}
                        <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden">
                          <div className="w-full h-full relative">
                            <div className="absolute top-[20%] left-[30%] w-20 h-20 bg-sightx-purple opacity-70 rounded-full blur-xl"></div>
                            <div className="absolute top-[40%] left-[50%] w-24 h-24 bg-sightx-purple opacity-50 rounded-full blur-xl"></div>
                            <div className="absolute top-[30%] left-[60%] w-16 h-16 bg-sightx-purple opacity-40 rounded-full blur-xl"></div>
                            <div className="absolute top-[50%] left-[20%] w-12 h-12 bg-sightx-green opacity-30 rounded-full blur-lg"></div>
                            <div className="absolute top-[60%] left-[40%] w-16 h-16 bg-sightx-green opacity-40 rounded-full blur-xl"></div>
                            
                            {/* Map markers */}
                            <div className="absolute top-[35%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-3 h-3 bg-sightx-purple rounded-full"></div>
                              <div className="absolute top-1/2 left-1/2 -ml-3 -mt-3 w-6 h-6 bg-sightx-purple rounded-full animate-ping opacity-75"></div>
                            </div>
                            <div className="absolute top-[25%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-3 h-3 bg-sightx-purple rounded-full"></div>
                            </div>
                            <div className="absolute top-[45%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-3 h-3 bg-sightx-purple rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <Card className="border border-gray-100">
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm">Zona de maior concentração</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <p className="font-medium">Zona Sul</p>
                          <p className="text-xs text-gray-500">63% dos clientes</p>
                        </CardContent>
                      </Card>
                      <Card className="border border-gray-100">
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm">Potencial de crescimento</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <p className="font-medium">Zona Oeste</p>
                          <p className="text-xs text-gray-500">+28% de oportunidade</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg text-sm">
                      <p className="font-medium text-sightx-purple mb-1">Insight:</p>
                      <p className="text-gray-700">A maior concentração de clientes está na Zona Sul, mas há potencial significativo de crescimento na Zona Oeste. Considere direcionar campanhas geolocalizada para esta região.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DataSection;
