
import { useState, useEffect } from 'react';
import { Brain, Send, Smartphone, MessageCircle, Check, Bot, User, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WhatsAppSection = () => {
  const [activeTab, setActiveTab] = useState("business-insights");
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const { toast } = useToast();

  // Use case scenarios
  const scenarios = {
    "business-insights": {
      title: "Insights de Negócio",
      description: "Donna analisa seus dados de vendas e oferece insights valiosos para crescimento.",
      messages: [
        { sender: "user", text: "Donna, como estão as vendas do último trimestre comparadas com o ano passado?" },
        { sender: "donna", text: "Analisei seus dados e identifiquei um crescimento de 18% nas vendas comparado ao mesmo período do ano anterior. Os produtos da linha premium tiveram o melhor desempenho, com aumento de 27%. Recomendo focar suas próximas campanhas nesta categoria." },
        { sender: "user", text: "Quais foram os dias da semana com melhor desempenho?" },
        { sender: "donna", text: "Sextas e sábados representam 43% do seu faturamento total. Sua taxa de conversão é 22% maior nesses dias. Sugiro aumentar seu investimento em marketing nesses períodos de maior engajamento para maximizar o retorno." },
      ]
    },
    "strategic-planning": {
      title: "Planejamento Estratégico",
      description: "Receba sugestões de estratégias baseadas em dados para seu negócio.",
      messages: [
        { sender: "user", text: "Donna, preciso elaborar um plano para o próximo trimestre. O que sugere?" },
        { sender: "donna", text: "Com base na análise dos seus dados, identifiquei 3 oportunidades principais: 1) Expansão da linha premium que cresceu 27% no último trimestre, 2) Campanha de reativação para clientes inativos há mais de 60 dias, e 3) Otimização do seu investimento em marketing nas sextas e sábados quando sua conversão é 22% maior." },
        { sender: "user", text: "Qual dessas oportunidades deve ser priorizada?" },
        { sender: "donna", text: "A campanha de reativação oferece o melhor ROI imediato. Seus dados mostram que clientes reativados têm 35% mais chance de se tornarem recorrentes. Preparei um template de mensagem personalizada para cada segmento de clientes inativos que você pode enviar diretamente pelo WhatsApp." },
      ]
    },
    "alerts": {
      title: "Alertas Proativos",
      description: "Donna monitora seu negócio e alerta sobre situações que precisam de atenção.",
      messages: [
        { sender: "donna", text: "⚠️ Alerta: Detectei um aumento anormal de 43% nas devoluções do produto X nos últimos 5 dias. Isso está impactando negativamente sua margem de lucro." },
        { sender: "user", text: "O que pode estar causando isso?" },
        { sender: "donna", text: "Analisei os comentários dos clientes e 78% mencionam problemas com o fechamento da embalagem. Já reservei uma reunião com seu fornecedor para amanhã às 10h para discutir soluções. Também preparei um relatório detalhado que você pode acessar pelo link em seu WhatsApp." },
        { sender: "user", text: "Ótimo! Pode me enviar também uma análise do impacto financeiro disso?" },
        { sender: "donna", text: "Claro. Se o problema persistir no ritmo atual, o impacto estimado será de R$15.700 no próximo mês. Já enviei para seu WhatsApp um relatório com simulações de cenários e recomendações para mitigar perdas enquanto o problema é resolvido." },
      ]
    }
  };

  // Typing effect
  useEffect(() => {
    if (currentMessageIndex < scenarios[activeTab].messages.length) {
      const currentMessage = scenarios[activeTab].messages[currentMessageIndex];
      
      // Only animate Donna's messages
      if (currentMessage.sender === "donna") {
        setIsTyping(true);
        setTypedText('');
        
        let currentText = '';
        const message = currentMessage.text;
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
            if (currentMessageIndex < scenarios[activeTab].messages.length - 1) {
              const timer = setTimeout(() => {
                setCurrentMessageIndex(prev => prev + 1);
              }, 2000);
              return () => clearTimeout(timer);
            }
          }
        }, 30);
        
        return () => clearInterval(typeInterval);
      } else {
        // Show user messages immediately
        const timer = setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentMessageIndex, activeTab]);

  // Reset conversation when tab changes
  useEffect(() => {
    setCurrentMessageIndex(0);
    setIsTyping(false);
    setTypedText('');
  }, [activeTab]);

  // Restart conversation
  const handleRestart = () => {
    setCurrentMessageIndex(0);
    setIsTyping(false);
    setTypedText('');
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-sightx-purple mb-4">
            <Smartphone className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Disponível também via WhatsApp</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimente o poder da <span className="gradient-text">Donna</span> em ação</h2>
          <p className="text-gray-600 text-lg mb-6">
            Mais que uma I.A., Donna é sua parceira de negócios 24/7, 
            analisando dados, criando estratégias e gerando alertas importantes 
            para impulsionar seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Como Donna pode ajudar seu negócio</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 p-2 rounded-lg mt-0.5">
                    <Brain className="text-sightx-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Análise contínua de dados</h4>
                    <p className="text-gray-600 text-sm">Monitora métricas importantes 24/7 e identifica tendências relevantes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 p-2 rounded-lg mt-0.5">
                    <TrendingUp className="text-sightx-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Planejamento estratégico</h4>
                    <p className="text-gray-600 text-sm">Recomendações personalizadas baseadas nos seus objetivos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 p-2 rounded-lg mt-0.5">
                    <AlertTriangle className="text-sightx-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Alertas proativos</h4>
                    <p className="text-gray-600 text-sm">Notificações imediatas sobre anomalias ou oportunidades</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-sightx-purple/20 to-sightx-purple/5 p-2 rounded-lg mt-0.5">
                    <Smartphone className="text-sightx-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Integração com WhatsApp</h4>
                    <p className="text-gray-600 text-sm">Receba insights, alertas e relatórios no seu WhatsApp</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Tabs 
              defaultValue="business-insights" 
              value={activeTab}
              onValueChange={(value) => setActiveTab(value)}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="business-insights">Insights de Negócio</TabsTrigger>
                <TabsTrigger value="strategic-planning">Planejamento Estratégico</TabsTrigger>
                <TabsTrigger value="alerts">Alertas Proativos</TabsTrigger>
              </TabsList>
              
              {Object.keys(scenarios).map((scenarioKey) => (
                <TabsContent key={scenarioKey} value={scenarioKey} className="mt-0">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Chat header */}
                    <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full">
                          <Bot className="h-4 w-4 text-sightx-purple" />
                          <span className="text-sm font-medium text-sightx-purple">Donna AI</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Smartphone className="h-3.5 w-3.5" />
                          <span>Também no WhatsApp</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat description */}
                    <div className="p-4 bg-gray-50 border-b text-center">
                      <p className="text-sm text-gray-600">{scenarios[scenarioKey].description}</p>
                    </div>
                    
                    {/* Chat content */}
                    <div className="p-4 h-[360px] overflow-y-auto flex flex-col space-y-4">
                      {scenarios[scenarioKey].messages.map((message, index) => (
                        index < currentMessageIndex || (index === currentMessageIndex && (message.sender === "user" || !isTyping)) ? (
                          <div 
                            key={index} 
                            className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""} animate-fade-in`}
                          >
                            <div className={`${message.sender === "donna" ? "bg-sightx-purple" : "bg-gray-700"} text-white p-2 rounded-full`}>
                              {message.sender === "donna" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                            </div>
                            <div 
                              className={`rounded-2xl p-3 max-w-[80%] shadow-sm ${
                                message.sender === "donna" 
                                  ? "bg-gray-100 text-gray-800" 
                                  : "bg-sightx-green text-white"
                              }`}
                            >
                              <p className="font-medium">{message.text}</p>
                            </div>
                          </div>
                        ) : index === currentMessageIndex && message.sender === "donna" && isTyping ? (
                          <div key={index} className="flex items-start gap-3 animate-fade-in">
                            <div className="bg-sightx-purple text-white p-2 rounded-full">
                              <Bot className="h-5 w-5" />
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%] shadow-sm">
                              <p className="font-medium text-gray-800">
                                {typedText}
                                <span className="inline-block w-2 h-4 bg-gray-400 ml-1 animate-pulse"></span>
                              </p>
                            </div>
                          </div>
                        ) : null
                      ))}
                    </div>
                    
                    {/* Chat input */}
                    <div className="border-t p-4 bg-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white rounded-full px-4 py-2.5 border text-gray-500 text-sm">
                          Digite sua mensagem...
                        </div>
                        <Button size="sm" className="rounded-full bg-sightx-purple hover:bg-sightx-purple/90 p-2.5 h-10 w-10 flex items-center justify-center">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <Button 
                          onClick={handleRestart} 
                          variant="outline" 
                          size="sm" 
                          className="text-xs"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                            <path d="M1 4v6h6"></path>
                            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                          </svg>
                          Reiniciar simulação
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
