
import { Brain, Database, LineChart, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="mb-4 text-gray-950">Como a <span className="gradient-text">SightX</span> Funciona</h2>
          <p className="text-gray-700">
            Transformamos dados dispersos em insights acionáveis através de tecnologia avançada e inteligência artificial, 
            permitindo decisões estratégicas mais assertivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Integração de Dados */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="text-sightx-purple h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">Integração de Dados</h3>
              <p className="text-gray-600 text-sm">
                Unificamos informações dispersas para oferecer uma visão completa.
              </p>
            </div>
          </div>

          {/* Card 2 - Análise Inteligente */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-purple/20 to-sightx-green/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="text-sightx-purple h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">Análise Inteligente</h3>
              <p className="text-gray-600 text-sm">
                Detectamos tendências e oportunidades que impulsionam decisões estratégicas.
              </p>
            </div>
          </div>

          {/* Card 3 - Donna, sua Assistente Proativa */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-green/20 to-sightx-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="text-sightx-green h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">Donna, sua Assistente Proativa</h3>
              <p className="text-gray-600 text-sm">
                Alerta para riscos e sugere ações em tempo real.
              </p>
            </div>
          </div>

          {/* Card 4 - Visualização Intuitiva */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sightx-green/20 to-sightx-green/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <LineChart className="text-sightx-green h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visualização Intuitiva</h3>
              <p className="text-gray-600 text-sm">
                Dashboards claros que transformam dados em insights.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4">Tecnologia que <span className="gradient-text">Transforma Dados</span> em Resultados</h3>
              <p className="text-gray-700 mb-6">
                Nossa plataforma utiliza inteligência artificial de ponta para entregar:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Modelos de IA treinados para seu segmento de negócio</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Análise semântica avançada dos seus dados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Processamento de linguagem natural em português</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Dashboards personalizáveis e interativos</span>
                </li>
              </ul>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 hidden lg:block">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sightx-purple/5 via-transparent to-sightx-green/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-video">
                  <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 rotate-2 transform transition-transform hover:rotate-0 duration-500">
                    <div className="h-4 w-full bg-gray-100 rounded mb-4 flex items-center">
                      <div className="ml-2 flex gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 h-[calc(100%-20px)]">
                      <div className="col-span-2 bg-gradient-to-br from-sightx-purple/10 to-sightx-green/5 rounded"></div>
                      <div className="space-y-2">
                        <div className="bg-gray-100 h-1/3 rounded"></div>
                        <div className="bg-gray-100 h-1/3 rounded"></div>
                        <div className="bg-sightx-purple/10 h-1/3 rounded"></div>
                      </div>
                    </div>
                  </div>
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
