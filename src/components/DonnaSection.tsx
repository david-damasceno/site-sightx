
import { Bell, Brain, LineChart, MessageCircle, TrendingUp } from 'lucide-react';

const DonnaSection = () => {
  return (
    <section id="donna" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-10 relative">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                  <div className="w-10 h-10 bg-sightx-purple rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Donna</h4>
                    <p className="text-sm text-gray-500">Sua assistente virtual</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Online</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="chat-bubble-bot">
                    Bom dia! Analisei seus dados de vendas e identifiquei um padrão interessante. As vendas do Produto X aumentam significativamente quando há promoções do Produto Y.
                  </div>
                  
                  <div className="chat-bubble-user">
                    Pode me mostrar esses dados? Qual seria a oportunidade aqui?
                  </div>
                  
                  <div className="chat-bubble-bot">
                    <p className="mb-3">Claro! Aqui está o gráfico de correlação:</p>
                    <div className="bg-white bg-opacity-20 p-3 rounded flex items-center justify-center mb-3">
                      <LineChart className="h-16 w-16 text-white" />
                    </div>
                    <p>Recomendo criar um pacote promocional combinando os produtos X e Y. Isso poderia aumentar suas vendas em aproximadamente 23%, baseado no histórico de dados.</p>
                  </div>
                  
                  <div className="chat-bubble-user">
                    Excelente ideia! Vamos implementar isso no próximo mês.
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                  <button className="text-sightx-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sightx-purple opacity-5 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="animate-fade-in">
              <h2 className="mb-6">Conheça <span className="gradient-text">Donna</span>, sua assistente virtual</h2>
              <p className="text-gray-700 mb-8">
                Donna é mais que uma assistente - é uma consultora estratégica alimentada por IA que trabalha proativamente para identificar
                oportunidades, prever problemas e recomendar ações concretas para melhorar seus resultados.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sightx-purple bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="text-sightx-purple h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Alertas Proativos</h4>
                    <p className="text-gray-600">
                      Donna monitora constantemente seus dados e alerta sobre anomalias e padrões importantes antes que se tornem problemas.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sightx-purple bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-sightx-purple h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Análise de Tendências</h4>
                    <p className="text-gray-600">
                      Identificação automática de tendências em seus dados, permitindo que você capitalize oportunidades antes dos concorrentes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sightx-purple bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="text-sightx-purple h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Recomendações Inteligentes</h4>
                    <p className="text-gray-600">
                      Sugestões práticas e personalizadas baseadas na análise avançada dos dados do seu negócio e melhores práticas do setor.
                    </p>
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
