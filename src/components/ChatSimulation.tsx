
import { useState, useEffect } from 'react';
import { MessageCircle, MessageSquare, User2, BarChart2, LightbulbIcon, Info, MessageSquareDashed, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ChatSimulation = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [category, setCategory] = useState("vendas");
  
  const categories = {
    vendas: {
      icon: <BarChart2 className="h-5 w-5 text-sightx-purple" />,
      title: "Análise de Vendas",
      description: "Insights sobre desempenho de vendas, produtos mais vendidos e tendências"
    },
    marketing: {
      icon: <MessageSquareDashed className="h-5 w-5 text-sightx-green" />,
      title: "Análise de Marketing",
      description: "Métricas de campanhas, engajamento e retorno sobre investimento"
    },
    financeiro: {
      icon: <Info className="h-5 w-5 text-blue-500" />,
      title: "Análise Financeira",
      description: "Fluxo de caixa, lucratividade e oportunidades de economia"
    }
  };
  
  const questionsData = {
    vendas: [
      {
        id: 1,
        text: "Quais são os produtos mais vendidos este mês?",
        response: "Analisando seus dados, os produtos mais vendidos este mês foram:\n\n1. Notebook ProBook 450 (42 unidades)\n2. Monitor UltraWide 34\" (38 unidades)\n3. Teclado Mecânico RGB (31 unidades)\n\nNotei também que as vendas do Notebook ProBook aumentaram 27% em relação ao mês anterior. Quer que eu analise o motivo desse crescimento?"
      },
      {
        id: 2,
        text: "Identifique oportunidades para aumentar margem de lucro",
        response: "Com base na análise dos seus dados, identifiquei 3 oportunidades para aumentar sua margem de lucro:\n\n1. O Fornecedor B oferece os mesmos componentes 12% mais baratos que seu fornecedor atual\n\n2. Seus fretes estão 23% acima da média do mercado - recomendo renegociar com transportadoras\n\n3. Produtos da categoria 'Premium' têm potencial para aumento de preço de 8% sem impacto significativo nas vendas, baseado em elasticidade de preço"
      },
      {
        id: 3,
        text: "Preveja as vendas para o próximo trimestre",
        response: "Baseado nos dados históricos e tendências de mercado, as previsões para o próximo trimestre são:\n\nJul: R$ 273.500 (↑ 12%)\nAgo: R$ 298.800 (↑ 18%)\nSet: R$ 342.100 (↑ 24%)\n\nO crescimento é impulsionado principalmente pela linha de produtos tecnológicos e pela expansão na região Sudeste. Recomendo aumentar o estoque dos produtos ProBook 450 e UltraWide 34\" em pelo menos 30% para atender à demanda projetada."
      },
    ],
    marketing: [
      {
        id: 4,
        text: "Como está o desempenho das nossas campanhas no Instagram?",
        response: "Analisando suas campanhas no Instagram:\n\nSua taxa de engajamento está 18% acima da média do setor. Os posts com produtos em uso real têm 2.3x mais interações que fotos de produto isoladas.\n\nA campanha de influenciadores gerou 432 vendas diretas (ROI de 287%), mas identifiquei que influenciadores com 10-30k seguidores trouxeram conversões 3x melhores que os maiores influenciadores.\n\nRecomendo aumentar budget em micro-influenciadores e conteúdo de demonstração de produtos."
      },
      {
        id: 5,
        text: "Quais canais trazem mais conversões para o e-commerce?",
        response: "Analisando os canais de tráfego que mais converteram:\n\n1. Google Ads: 32% das conversões (CAC: R$42)\n2. Instagram: 24% das conversões (CAC: R$38)\n3. Email Marketing: 18% das conversões (CAC: R$12)\n\nSurpreendentemente, o Pinterest gerou apenas 4% do tráfego mas tem a segunda melhor taxa de conversão (4.7%) e menor CAC (R$29). Seus emails de carrinho abandonado têm taxa de recuperação de 22%, que está 8% abaixo do potencial.\n\nRecomendo: teste de alocação de 15% mais budget no Pinterest e otimização dos emails de recuperação de carrinho."
      }
    ],
    financeiro: [
      {
        id: 6,
        text: "Onde podemos otimizar nossos custos operacionais?",
        response: "Analisando seus custos operacionais, identifiquei estas oportunidades de economia:\n\n1. Seus custos de processamento de pagamento estão 1.2% acima do mercado. Renegociar com a operadora atual ou mudar para os provedores X ou Y pode economizar R$4.200/mês.\n\n2. O consumo de energia apresenta padrões irregulares nos fins de semana (+38% do esperado). Verificar equipamentos ligados desnecessariamente pode reduzir R$1.800/mês.\n\n3. A rotatividade de funcionários custa aproximadamente R$18.000 por substituição. Implementar programa de retenção reduziria estes custos em 62% com base em casos similares."
      },
      {
        id: 7,
        text: "Qual o fluxo de caixa projetado para os próximos 6 meses?",
        response: "Projeção de fluxo de caixa para o próximo semestre:\n\nOut: +R$89.400 (alta sazonal)\nNov: +R$112.300 (Black Friday)\nDez: +R$107.600 (Festas)\nJan: -R$22.400 (período negativo)\nFev: +R$41.500 (recuperação)\nMar: +R$63.200 (estabilização)\n\nAtenção para Janeiro, onde os recebíveis cairão 34% enquanto despesas de impostos e 13º terceirizado impactarão o caixa. Recomendo provisionar R$40.000 em Dezembro para cobrir o déficit previsto.\n\nHá também oportunidade de antecipar recebíveis de cartão com taxa menor que seu empréstimo atual, economizando 4.2% ao ano."
      }
    ]
  };
  
  const questions = questionsData[category as keyof typeof questionsData];
  
  useEffect(() => {
    // Reset when changing category
    setActiveQuestion(null);
    setShowResponse(false);
    setTypingComplete(false);
    setTypingIndex(0);
  }, [category]);
  
  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;
    
    if (showResponse && !typingComplete) {
      const currentResponse = questions.find(q => q.id === activeQuestion)?.response || "";
      
      if (typingIndex < currentResponse.length) {
        typingTimer = setTimeout(() => {
          setTypingIndex(prev => prev + 1);
        }, 15); // Adjust typing speed here
      } else {
        setTypingComplete(true);
      }
    }
    
    return () => clearTimeout(typingTimer);
  }, [showResponse, typingIndex, activeQuestion, questions, typingComplete]);
  
  const handleQuestionClick = (id: number) => {
    setActiveQuestion(id);
    setShowResponse(false);
    setTypingComplete(false);
    setTypingIndex(0);
    
    // Simulating loading time before showing response
    setTimeout(() => {
      setShowResponse(true);
    }, 1000);
  };
  
  const getCurrentText = () => {
    if (!activeQuestion || !showResponse) return "";
    const fullResponse = questions.find(q => q.id === activeQuestion)?.response || "";
    return fullResponse.substring(0, typingIndex);
  };
  
  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-sightx-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-sightx-green rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">Experimente a <span className="gradient-text">SightX</span> em ação</h2>
          <p className="text-gray-700">
            Veja como seria ter a SightX trabalhando para o seu negócio. Escolha uma pergunta abaixo para simular 
            como a plataforma responderia com insights relevantes e acionáveis.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1 shadow-md">
            <div className="flex space-x-1">
              <Button 
                onClick={() => setCategory("vendas")}
                variant={category === "vendas" ? "default" : "ghost"}
                className={`rounded-full px-6 py-5 ${category === "vendas" ? "bg-sightx-purple" : ""}`}
              >
                <BarChart2 className="mr-2 h-5 w-5" />
                Vendas
              </Button>
              <Button 
                onClick={() => setCategory("marketing")}
                variant={category === "marketing" ? "default" : "ghost"}
                className={`rounded-full px-6 py-5 ${category === "marketing" ? "bg-sightx-purple" : ""}`}
              >
                <MessageSquareDashed className="mr-2 h-5 w-5" />
                Marketing
              </Button>
              <Button 
                onClick={() => setCategory("financeiro")}
                variant={category === "financeiro" ? "default" : "ghost"}
                className={`rounded-full px-6 py-5 ${category === "financeiro" ? "bg-sightx-purple" : ""}`}
              >
                <Info className="mr-2 h-5 w-5" />
                Financeiro
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                {categories[category as keyof typeof categories].icon}
                <div>
                  <h3 className="text-xl font-bold">{categories[category as keyof typeof categories].title}</h3>
                  <p className="text-sm text-gray-500">{categories[category as keyof typeof categories].description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {questions.map((question) => (
                  <Button
                    key={question.id}
                    variant="outline"
                    className={`w-full justify-start text-left h-auto py-4 px-4 transition-all duration-300 ${
                      activeQuestion === question.id
                        ? 'border-sightx-purple text-sightx-purple shadow-md'
                        : 'border-gray-200 hover:border-sightx-purple/50'
                    }`}
                    onClick={() => handleQuestionClick(question.id)}
                  >
                    <div className="flex items-start gap-3">
                      <User2 className={`h-5 w-5 mt-0.5 ${activeQuestion === question.id ? "text-sightx-purple" : "text-gray-400"}`} />
                      <span>{question.text}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md h-full transform transition-all duration-300 hover:shadow-lg overflow-hidden">
              <div className="border-b p-4 flex items-center gap-3 bg-gray-50">
                <div className="w-10 h-10 bg-sightx-purple rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    SightX Análise
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-500 font-normal">IA</span>
                  </h4>
                  <p className="text-sm text-gray-500">Assistente de dados inteligente</p>
                </div>
              </div>
              
              <div className="p-6 min-h-[400px] flex items-start justify-center">
                {!activeQuestion ? (
                  <div className="text-center text-gray-500 my-auto">
                    <Bot className="h-16 w-16 mx-auto mb-4 opacity-20" />
                    <p>Selecione uma pergunta para ver a análise</p>
                    <p className="text-sm mt-2 max-w-sm">Nossa IA analisará seus dados e fornecerá insights valiosos para sua tomada de decisão</p>
                  </div>
                ) : !showResponse ? (
                  <div className="text-center text-gray-500 my-auto w-full">
                    <div className="relative w-16 h-16 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full bg-sightx-purple/10 animate-ping"></div>
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-sightx-purple/20">
                        <Sparkles className="h-8 w-8 text-sightx-purple" />
                      </div>
                    </div>
                    <p className="mb-2">Analisando seus dados...</p>
                    <div className="w-full max-w-xs mx-auto bg-gray-200 rounded-full h-1.5">
                      <div className="bg-sightx-purple h-1.5 rounded-full animate-pulse" style={{width: '70%'}}></div>
                    </div>
                    <p className="text-xs mt-2 text-gray-400">Processando métricas e identificando padrões</p>
                  </div>
                ) : (
                  <div className="animate-fade-in w-full">
                    <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-start gap-3">
                      <User2 className="h-5 w-5 mt-1 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Sua pergunta:</p>
                        <p className="font-medium text-gray-800">
                          {questions.find(q => q.id === activeQuestion)?.text}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 mt-1 bg-sightx-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="p-4 bg-gradient-to-br from-sightx-purple/5 to-sightx-purple/10 rounded-lg whitespace-pre-line w-full">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-sm font-semibold text-sightx-purple">SightX</p>
                          <span className="text-xs px-1.5 py-0.5 bg-sightx-purple/10 rounded-full text-sightx-purple">Análise em tempo real</span>
                        </div>
                        <div className="prose prose-purple max-w-none">
                          {getCurrentText()}
                          {!typingComplete && <span className="inline-block w-2 h-4 bg-sightx-purple ml-1 animate-pulse"></span>}
                        </div>
                      </div>
                    </div>
                    
                    {typingComplete && (
                      <div className="mt-6 flex items-center gap-2 justify-end">
                        <Button variant="outline" size="sm" className="rounded-full">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Fazer nova pergunta
                        </Button>
                        <Button size="sm" className="rounded-full bg-sightx-green hover:bg-sightx-green/90">
                          <Sparkles className="mr-2 h-4 w-4" />
                          Aprofundar análise
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSimulation;
