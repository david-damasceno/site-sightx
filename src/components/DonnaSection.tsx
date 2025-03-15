import { useState, useEffect } from 'react';
import { Bell, Brain, LineChart, MessageCircle, TrendingUp, Sparkles, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
const DonnaSection = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const messages = ["Bom dia, Marcos! Analisei seus dados de vendas e notei uma oportunidade.", "Suas vendas de acessórios aumentaram 23% quando oferecidos junto com o produto principal.", "Recomendo criar pacotes promocionais combinando esses itens para aumentar o ticket médio."];
  const userResponse = "Ótima ideia, Donna! Pode criar uma sugestão de pacotes para implementarmos na próxima semana?";
  useEffect(() => {
    if (activeMessage < messages.length) {
      setIsTyping(true);
      setTypedText('');
      let currentText = '';
      const message = messages[activeMessage];
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < message.length) {
          currentText += message[index];
          setTypedText(currentText);
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);

          // Auto advance to next message after delay
          if (activeMessage < messages.length - 1) {
            const timer = setTimeout(() => {
              setActiveMessage(prev => prev + 1);
            }, 2000);
            return () => clearTimeout(timer);
          }
        }
      }, 35);
      return () => clearInterval(typeInterval);
    }
  }, [activeMessage, messages]);
  return <section id="donna" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-sightx-purple mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Potencialize suas decisões</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça <span className="gradient-text">Donna</span>, sua assistente estratégica</h2>
          <p className="text-gray-600 text-lg">
            Nossa assistente virtual proativa monitora seus dados e oferece recomendações personalizadas para melhorar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{
            borderLeft: '4px solid #450D82'
          }}>
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

            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{
            borderLeft: '4px solid #450D82'
          }}>
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

            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{
            borderLeft: '4px solid #450D82'
          }}>
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

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative h-[500px] max-w-[600px] mx-auto">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sightx-purple/10 to-sightx-green/10 rounded-3xl"></div>
              
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Chat header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full">
                    <Bot className="h-4 w-4 text-sightx-purple" />
                    <span className="text-sm font-medium text-sightx-purple">Donna AI</span>
                  </div>
                  <div className="w-20"></div>
                </div>
                
                {/* Chat content */}
                <div className="p-6 h-[calc(100%-140px)] overflow-y-auto flex flex-col space-y-6">
                  {messages.map((message, index) => index < activeMessage || index === activeMessage && !isTyping ? <div key={index} className="flex items-start gap-3 animate-fade-in">
                        <div className="bg-sightx-purple text-white p-2 rounded-full">
                          {index === 0 ? <MessageCircle className="h-5 w-5" /> : index === 1 ? <LineChart className="h-5 w-5" /> : <Brain className="h-5 w-5" />}
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%] shadow-sm">
                          <p className="font-medium text-gray-800">{message}</p>
                        </div>
                      </div> : index === activeMessage && isTyping ? <div key={index} className="flex items-start gap-3 animate-fade-in">
                        <div className="bg-sightx-purple text-white p-2 rounded-full">
                          {index === 0 ? <MessageCircle className="h-5 w-5" /> : index === 1 ? <LineChart className="h-5 w-5" /> : <Brain className="h-5 w-5" />}
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%] shadow-sm">
                          <p className="font-medium text-gray-800">{typedText}
                            <span className="inline-block w-2 h-4 bg-gray-400 ml-1 animate-pulse"></span>
                          </p>
                        </div>
                      </div> : null)}
                  
                  {activeMessage === messages.length - 1 && !isTyping && <div className="flex justify-end animate-fade-in">
                      <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="bg-gray-700 text-white p-2 rounded-full">
                          <User className="h-5 w-5" />
                        </div>
                        <div className="bg-sightx-green text-white rounded-2xl p-4 max-w-[80%] shadow-sm">
                          <p className="font-medium">{userResponse}</p>
                        </div>
                      </div>
                    </div>}
                </div>
                
                {/* Chat input */}
                <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-gray-500">
                      Digite sua mensagem...
                    </div>
                    <Button size="sm" className="rounded-full bg-sightx-purple hover:bg-sightx-purple/90 p-2.5 h-10 w-10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button onClick={() => {
          setActiveMessage(0);
          setIsTyping(true);
          setTypedText('');
        }} className="bg-sightx-purple hover:bg-sightx-purple/90 text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Veja Donna em ação
          </Button>
        </div>
      </div>
    </section>;
};
export default DonnaSection;