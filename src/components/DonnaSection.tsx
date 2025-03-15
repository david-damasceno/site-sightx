
import { Bell, Brain, LineChart, MessageCircle, TrendingUp } from 'lucide-react';

const DonnaSection = () => {
  return (
    <section id="donna" className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Donna, sua <span className="gradient-text">assistente estratégica</span></h2>
          <p className="text-gray-600 text-lg">
            Nossa assistente virtual proativa monitora seus dados e oferece recomendações personalizadas para melhorar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 p-3 rounded-lg">
                  <Bell className="text-sightx-purple h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Alertas Proativos</h3>
                  <p className="text-gray-600">Receba notificações sobre anomalias e oportunidades antes que afetem seu negócio.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 p-3 rounded-lg">
                  <Brain className="text-sightx-purple h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Análise Preditiva</h3>
                  <p className="text-gray-600">Antecipe tendências com modelos avançados que aprendem com seus dados.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 p-3 rounded-lg">
                  <TrendingUp className="text-sightx-purple h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Recomendações Estratégicas</h3>
                  <p className="text-gray-600">Receba sugestões personalizadas baseadas na análise contínua do seu negócio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] order-1 md:order-2">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sightx-purple/5 to-sightx-green/5 rounded-3xl"></div>
            
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-2xl shadow-xl p-6 animate-float">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1"></div>
                <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md">
                  <MessageCircle className="h-4 w-4 text-sightx-purple" />
                  <span className="text-sm font-medium">Donna</span>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-sightx-purple text-white p-2 rounded-full">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%]">
                    <p className="font-medium text-gray-800">Bom dia, Marcos! Analisei seus dados de vendas e notei uma oportunidade.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-sightx-purple text-white p-2 rounded-full">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%]">
                    <p className="font-medium text-gray-800">Suas vendas de acessórios aumentaram 23% quando oferecidos junto com o produto principal.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-sightx-purple text-white p-2 rounded-full">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%]">
                    <p className="font-medium text-gray-800">Recomendo criar pacotes promocionais combinando esses itens para aumentar o ticket médio.</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-sightx-green text-white rounded-2xl p-4 max-w-[80%]">
                    <p className="font-medium">Ótima ideia, Donna! Pode criar uma sugestão de pacotes para implementarmos na próxima semana?</p>
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

export default DonnaSection;
