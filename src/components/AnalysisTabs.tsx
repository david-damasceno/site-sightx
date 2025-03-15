
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Map, MessageCircle, LineChart, Share2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnalysisTabs = () => {
  const [activeTab, setActiveTab] = useState("google-maps");

  return (
    <section id="data-analysis" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2>Análise <span className="gradient-text">Inteligente</span> e Integrada</h2>
          <p>Nossa plataforma conecta múltiplas fontes de dados para uma visão completa do seu negócio, 
             ajudando você a identificar padrões, tendências e oportunidades que passariam despercebidos.</p>
        </div>

        <Tabs 
          defaultValue="google-maps" 
          className="w-full mt-12"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 gap-2 bg-gray-100 p-1.5 rounded-xl">
              <TabsTrigger 
                value="google-maps"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "google-maps" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <Map size={18} />
                <span className="hidden sm:inline">Google Maps</span>
              </TabsTrigger>
              <TabsTrigger 
                value="social-media"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "social-media" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <Share2 size={18} />
                <span className="hidden sm:inline">Redes Sociais</span>
              </TabsTrigger>
              <TabsTrigger 
                value="geo-analysis"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "geo-analysis" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <Map size={18} />
                <span className="hidden sm:inline">Análise Geográfica</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="google-maps" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="feature-card">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Análise de Avaliações</h3>
                    <span className="text-sm bg-sightx-purple/10 text-sightx-purple py-1 px-3 rounded-full">4.7 ★</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                            <span className="text-xs font-medium">JM</span>
                          </div>
                          <span className="font-medium">João Martins</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-600">Ótimo atendimento, mas a entrega demorou um pouco mais do que o esperado.</p>
                      
                      <div className="mt-4 p-3 bg-sightx-purple/5 rounded-lg border border-sightx-purple/10">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-sightx-purple rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">AI</span>
                          </div>
                          <p className="text-sm font-medium text-sightx-purple">Resposta Sugerida:</p>
                        </div>
                        <p className="text-sm text-gray-700">Olá João, agradecemos seu feedback! Estamos felizes que gostou do nosso atendimento. Pedimos desculpas pelo tempo de entrega e já estamos trabalhando para melhorar esse aspecto. Esperamos vê-lo novamente em breve!</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Tempo de Resposta</h4>
                        <div className="text-2xl font-bold text-sightx-purple flex items-end">
                          4.2h
                          <span className="text-sm text-red-500 ml-2 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            +1.5h
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Taxa de Resposta</h4>
                        <div className="text-2xl font-bold text-sightx-purple flex items-end">
                          68%
                          <span className="text-sm text-green-500 ml-2 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                            12%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <TrendingUp size={18} className="text-sightx-purple mr-2" />
                        <h4 className="font-medium">Insights Competitivos</h4>
                      </div>
                      <p className="text-sm text-gray-600">Seus concorrentes respondem em média 3 horas mais rápido. Recomendamos implementar alertas de novas avaliações para melhorar esse indicador.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Maximize sua presença online com análise de avaliações</h3>
                <p className="text-gray-600">
                  Nossa tecnologia analisa automaticamente suas avaliações no Google Maps, identificando tendências, 
                  sentimentos e oportunidades de melhoria. Com a SightX, você pode:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Responder automaticamente</h4>
                      <p className="text-sm text-gray-600">Nossa IA gera respostas personalizadas para cada avaliação, mantendo uma comunicação eficiente com seus clientes.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Identificar tendências</h4>
                      <p className="text-sm text-gray-600">Reconhecemos padrões nas avaliações para destacar pontos fortes e áreas que precisam de melhorias.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Comparar com concorrentes</h4>
                      <p className="text-sm text-gray-600">Benchmarks automáticos com negócios similares para entender seu posicionamento no mercado.</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="btn-primary mt-4">Comece a Analisar</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="social-media" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold">Transforme dados sociais em estratégias vencedoras</h3>
                <p className="text-gray-600 mt-4 mb-6">
                  A SightX analisa automaticamente o desempenho das suas redes sociais e compara com seus concorrentes, 
                  entregando insights estratégicos para maximizar seu alcance e engajamento.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Análise de conteúdo</h4>
                      <p className="text-sm text-gray-600">Identifique quais tipos de conteúdo geram mais engajamento e resultado para seu negócio.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Monitoramento da concorrência</h4>
                      <p className="text-sm text-gray-600">Acompanhe os movimentos dos concorrentes e identifique oportunidades de diferenciação.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Recomendações de otimização</h4>
                      <p className="text-sm text-gray-600">Receba sugestões práticas para melhorar sua estratégia de conteúdo e alcançar mais pessoas.</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="btn-primary mt-6">Analisar Redes Sociais</Button>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="feature-card">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Análise de Redes Sociais</h3>
                    <div className="flex space-x-2">
                      <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">Engajamento Total</p>
                        <div className="flex items-end">
                          <span className="text-xl font-bold text-sightx-purple">18.452</span>
                          <span className="text-xs text-green-500 ml-2 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                            24%
                          </span>
                        </div>
                      </div>
                      <LineChart size={40} className="text-sightx-purple opacity-70" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Melhor Plataforma</p>
                        <div className="flex items-center mt-1">
                          <span className="w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white mr-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                            </svg>
                          </span>
                          <span className="font-medium">Instagram</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Melhor Horário</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sightx-purple mr-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </span>
                          <span className="font-medium">19:00 - 21:00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-sightx-purple/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart size={18} className="text-sightx-purple" />
                        <h4 className="font-medium">Comparativo com Concorrentes</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Sua Empresa</span>
                            <span className="font-medium">18.452</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-sightx-purple h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Concorrente A</span>
                            <span className="font-medium">24.105</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Concorrente B</span>
                            <span className="font-medium">12.780</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-500 h-2 rounded-full" style={{width: '45%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="geo-analysis" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="feature-card h-full">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Análise Geográfica</h3>
                    <div className="bg-sightx-purple text-white p-1.5 rounded-md">
                      <Map size={18} />
                    </div>
                  </div>
                  
                  <div className="relative h-64 bg-gray-100 rounded-lg mb-6 overflow-hidden">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <Map size={48} className="text-blue-300" />
                    </div>
                    
                    {/* Hotspots */}
                    <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-sightx-purple rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-sightx-green rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-500">Raio de Atuação</p>
                      <p className="text-lg font-bold text-sightx-purple">15 km</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-500">Concentração</p>
                      <p className="text-lg font-bold text-sightx-purple">Zona Sul</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-sightx-purple/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-sightx-purple rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                      <p className="font-medium text-sightx-purple">Insight da Donna:</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      85% dos seus clientes estão concentrados na Zona Sul, mas há uma oportunidade inexplorada 
                      na Zona Oeste, onde seu concorrente principal tem apenas 12% de presença. Considere expandir 
                      sua campanha para essa região.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Estratégia territorial inteligente</h3>
                <p className="text-gray-600">
                  Nossa plataforma oferece uma análise geográfica detalhada para ajudar 
                  seu negócio a entender melhor o território onde atua e identificar oportunidades de expansão.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mapeamento de clientes</h4>
                      <p className="text-sm text-gray-600">Entenda onde estão seus clientes e como eles estão distribuídos geograficamente.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Análise de concorrência territorial</h4>
                      <p className="text-sm text-gray-600">Identifique áreas com menor presença de concorrentes e maior potencial de crescimento.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Recomendações de expansão</h4>
                      <p className="text-sm text-gray-600">Receba sugestões personalizadas sobre onde expandir sua atuação com base em dados demográficos e de mercado.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Otimização de campanhas locais</h4>
                      <p className="text-sm text-gray-600">Direcione suas estratégias de marketing com base na distribuição geográfica do seu público-alvo.</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="btn-primary mt-4">Explorar Dados Geográficos</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AnalysisTabs;
