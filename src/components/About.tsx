import { Brain, Database, Rocket } from 'lucide-react';
const About = () => {
  return <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6 text-gray-950">Como a <span className="gradient-text">SightX</span> Funciona</h2>
          <p className="text-gray-700">
            Transformamos dados dispersos em insights acionáveis através de tecnologia avançada e inteligência artificial, 
            permitindo que PMEs tomem decisões estratégicas com a mesma qualidade que grandes corporações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105 animate-fade-in">
            <div className="w-16 h-16 bg-sightx-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <Database className="text-sightx-purple h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Integração de Dados</h3>
            <p className="text-gray-600">
              Conectamos todas as suas fontes de dados em um único lugar, incluindo ERPs, CRMs, planilhas e APIs de terceiros,
              criando uma base unificada para análises.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="w-16 h-16 bg-sightx-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <Brain className="text-sightx-purple h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Análise Inteligente</h3>
            <p className="text-gray-600">
              Utilizamos algoritmos avançados de IA e banco vetorial com pgvector para identificar padrões, tendências e correlações
              que seriam impossíveis de detectar manualmente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="w-16 h-16 bg-sightx-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="text-sightx-purple h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Insights Acionáveis</h3>
            <p className="text-gray-600">
              Transformamos análises complexas em recomendações claras e práticas que você pode implementar imediatamente
              para melhorar seus resultados.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Tecnologia de Ponta</h3>
              <p className="text-gray-700 mb-6">
                A SightX utiliza as mais modernas tecnologias de processamento de dados e inteligência artificial para entregar
                resultados precisos e confiáveis:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Modelos de IA treinados especificamente para diversos segmentos de negócios</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Integração com banco vetorial pgvector no Supabase para busca semântica avançada</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Processamento de linguagem natural para entender perguntas complexas em português</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-sightx-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Dashboards personalizáveis e interativos para acompanhamento em tempo real</span>
                </li>
              </ul>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-sightx-purple to-sightx-green opacity-10 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg className="w-24 h-24 mx-auto text-sightx-purple opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Tecnologia Avançada</h4>
                    <p className="text-gray-600 max-w-xs mx-auto">
                      Nossa infraestrutura processa milhões de pontos de dados em segundos para entregar insights em tempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;