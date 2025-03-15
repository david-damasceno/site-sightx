
import { Brain, Database, LineChart, MessageCircle, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white md:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sightx-purple/10 px-3 py-1.5 rounded-full mb-4 text-sm font-medium text-sightx-purple">
            <Sparkles size={16} className="text-sightx-purple" />
            <span>Nossa plataforma</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Como a <span className="gradient-text">SightX</span> Funciona</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Transformamos dados dispersos em insights acionáveis através de tecnologia avançada 
            e inteligência artificial, permitindo decisões estratégicas mais assertivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1 - Integração de Dados */}
          <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sightx-purple to-sightx-purple/50"></div>
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Database className="text-sightx-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integração de Dados</h3>
              <p className="text-gray-600 mb-5">
                Unificamos informações dispersas em diferentes sistemas para oferecer uma visão completa e coerente.
              </p>
              
              <Popover>
                <PopoverTrigger asChild>
                  <button className="mt-auto text-sightx-purple text-sm font-medium flex items-center gap-1 hover:underline">
                    Saiba mais <ArrowRight size={14} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-white">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Integração Inteligente</h4>
                    <p className="text-sm text-gray-600">
                      Conectamos com suas fontes de dados existentes, desde planilhas até sistemas ERP complexos, 
                      sem precisar migrar informações.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Card 2 - Análise Inteligente */}
          <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sightx-purple/50 to-sightx-purple"></div>
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-purple/20 to-sightx-green/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Brain className="text-sightx-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Análise Inteligente</h3>
              <p className="text-gray-600 mb-5">
                Detectamos tendências e oportunidades ocultas nos dados que impulsionam decisões estratégicas mais precisas.
              </p>
              
              <Popover>
                <PopoverTrigger asChild>
                  <button className="mt-auto text-sightx-purple text-sm font-medium flex items-center gap-1 hover:underline">
                    Saiba mais <ArrowRight size={14} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-white">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Modelos Preditivos</h4>
                    <p className="text-sm text-gray-600">
                      Nossos algoritmos de IA analisam padrões históricos para prever comportamentos futuros e 
                      identificar oportunidades de otimização.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Card 3 - Donna, sua Assistente Proativa */}
          <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sightx-green to-sightx-green/50"></div>
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-green/20 to-sightx-purple/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="text-sightx-green h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Donna, sua Assistente</h3>
              <p className="text-gray-600 mb-5">
                Alerta proativamente para riscos e sugere ações estratégicas em tempo real para otimizar seus resultados.
              </p>
              
              <Popover>
                <PopoverTrigger asChild>
                  <button className="mt-auto text-sightx-green text-sm font-medium flex items-center gap-1 hover:underline">
                    Saiba mais <ArrowRight size={14} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-white">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Assistência em Tempo Real</h4>
                    <p className="text-sm text-gray-600">
                      A Donna monitora seus KPIs 24/7 e envia notificações proativas quando detecta 
                      anomalias ou oportunidades relevantes.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Card 4 - Visualização Intuitiva */}
          <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sightx-green/50 to-sightx-green"></div>
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-green/20 to-sightx-green/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <LineChart className="text-sightx-green h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visualização Intuitiva</h3>
              <p className="text-gray-600 mb-5">
                Dashboards personalizáveis e claros que transformam dados complexos em insights visualmente compreensíveis.
              </p>
              
              <Popover>
                <PopoverTrigger asChild>
                  <button className="mt-auto text-sightx-green text-sm font-medium flex items-center gap-1 hover:underline">
                    Saiba mais <ArrowRight size={14} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-white">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Dashboards Personalizáveis</h4>
                    <p className="text-sm text-gray-600">
                      Crie visualizações adaptadas às suas necessidades específicas, com interface intuitiva e responsiva 
                      acessível em qualquer dispositivo.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sightx-purple via-purple-500 to-sightx-green"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sightx-purple to-sightx-green flex items-center justify-center">
                  <Layers className="text-white h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold">Tecnologia que <span className="gradient-text">Transforma Dados</span> em Resultados</h3>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg">
                Nossa plataforma utiliza inteligência artificial de ponta para entregar:
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">Modelos de IA treinados para seu segmento</span>
                    <p className="text-gray-600 text-sm mt-1">Algoritmos personalizados para as particularidades do seu mercado e indústria</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">Análise semântica avançada dos seus dados</span>
                    <p className="text-gray-600 text-sm mt-1">Compreensão contextual de informações para insights mais profundos</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">Processamento de linguagem natural em português</span>
                    <p className="text-gray-600 text-sm mt-1">Comunicação humanizada com sua assistente Donna</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">Dashboards personalizáveis e interativos</span>
                    <p className="text-gray-600 text-sm mt-1">Visualizações adaptadas às necessidades específicas do seu negócio</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 hidden lg:block">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sightx-purple/5 via-transparent to-sightx-green/5"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-video">
                  <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 rotate-2 transform transition-transform hover:rotate-0 duration-500 hover:shadow-xl">
                    <div className="h-4 w-full bg-gray-100 rounded mb-4 flex items-center">
                      <div className="ml-2 flex gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 h-[calc(100%-20px)]">
                      <div className="col-span-2 bg-gradient-to-br from-sightx-purple/10 to-sightx-green/5 rounded p-2">
                        <div className="h-6 w-2/3 bg-gray-100 rounded mb-2"></div>
                        <div className="h-24 bg-sightx-purple/5 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-100 rounded mt-2"></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-100 h-1/4 rounded p-2">
                          <div className="w-8 h-8 rounded-full bg-sightx-purple/10 mx-auto"></div>
                        </div>
                        <div className="bg-gray-100 h-1/4 rounded p-2">
                          <div className="w-8 h-8 rounded-full bg-sightx-green/10 mx-auto"></div>
                        </div>
                        <div className="bg-sightx-purple/10 h-2/4 rounded p-2">
                          <div className="h-3 w-full bg-white rounded mb-1"></div>
                          <div className="h-3 w-2/3 bg-white rounded mb-1"></div>
                          <div className="h-3 w-1/2 bg-white rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sightx-purple/20 rounded-full blur-2xl"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-sightx-green/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
