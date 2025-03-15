
import { useState, useEffect } from 'react';
import { Bell, Brain, LineChart, MessageCircle, TrendingUp, Sparkles, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DonnaSection = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const messages = [
    "Bom dia, Marcos! Analisei seus dados de vendas e notei uma oportunidade.",
    "Suas vendas de acessórios aumentaram 23% quando oferecidos junto com o produto principal.",
    "Recomendo criar pacotes promocionais combinando esses itens para aumentar o ticket médio."
  ];
  
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

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimente o poder da Donna em ação</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Acompanhe como a Donna analisa dados de negócios e fornece insights valiosos em tempo real
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-4">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2 mr-3">
                <Bot size={24} className="text-purple-700" />
              </div>
              <h3 className="text-white font-medium">Donna - Sua Assistente de Negócios</h3>
            </div>
          </div>
          
          <div className="p-4 h-[400px] overflow-y-auto flex flex-col">
            {messages.slice(0, activeMessage + 1).map((message, index) => (
              <div 
                key={index}
                className={`flex ${index === activeMessage && isTyping ? 'items-start' : 'items-center'} mb-4`}
              >
                <div className="bg-purple-100 rounded-full p-2 mr-3">
                  <Bot size={20} className="text-purple-700" />
                </div>
                <div className="bg-purple-50 rounded-lg p-3 max-w-[80%]">
                  {index === activeMessage && isTyping ? (
                    <p>{typedText}<span className="animate-pulse">|</span></p>
                  ) : (
                    <p>{message}</p>
                  )}
                </div>
              </div>
            ))}
            
            {!isTyping && activeMessage === messages.length - 1 && (
              <div className="flex items-center mb-4 mt-4 animate-fade-in">
                <div className="bg-gray-100 rounded-full p-2 mr-3">
                  <User size={20} className="text-gray-700" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p>{userResponse}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-4 justify-center">
              <Button className="flex items-center gap-2" variant="outline">
                <Bell size={16} /> Receber alertas
              </Button>
              <Button className="flex items-center gap-2" variant="default">
                <MessageCircle size={16} /> Falar com a Donna
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 rounded-full p-3 inline-block mb-4">
              <Brain className="text-purple-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Análise Inteligente</h3>
            <p className="text-gray-600">
              A Donna analisa constantemente seus dados de negócios para identificar padrões e oportunidades.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 rounded-full p-3 inline-block mb-4">
              <TrendingUp className="text-purple-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recomendações Estratégicas</h3>
            <p className="text-gray-600">
              Receba sugestões personalizadas baseadas em dados para impulsionar o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 rounded-full p-3 inline-block mb-4">
              <Sparkles className="text-purple-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Assistência 24/7</h3>
            <p className="text-gray-600">
              A Donna está sempre disponível para responder suas perguntas e fornecer insights a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonnaSection;
