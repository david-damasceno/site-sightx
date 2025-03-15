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
    vendas: [{
      id: 1,
      text: "Quais são os produtos mais vendidos este mês?",
      response: "Analisando seus dados, os produtos mais vendidos este mês foram:\n\n1. Notebook ProBook 450 (42 unidades)\n2. Monitor UltraWide 34\" (38 unidades)\n3. Teclado Mecânico RGB (31 unidades)\n\nNotei também que as vendas do Notebook ProBook aumentaram 27% em relação ao mês anterior. Quer que eu analise o motivo desse crescimento?"
    }, {
      id: 2,
      text: "Identifique oportunidades para aumentar margem de lucro",
      response: "Com base na análise dos seus dados, identifiquei 3 oportunidades para aumentar sua margem de lucro:\n\n1. O Fornecedor B oferece os mesmos componentes 12% mais baratos que seu fornecedor atual\n\n2. Seus fretes estão 23% acima da média do mercado - recomendo renegociar com transportadoras\n\n3. Produtos da categoria 'Premium' têm potencial para aumento de preço de 8% sem impacto significativo nas vendas, baseado em elasticidade de preço"
    }, {
      id: 3,
      text: "Preveja as vendas para o próximo trimestre",
      response: "Baseado nos dados históricos e tendências de mercado, as previsões para o próximo trimestre são:\n\nJul: R$ 273.500 (↑ 12%)\nAgo: R$ 298.800 (↑ 18%)\nSet: R$ 342.100 (↑ 24%)\n\nO crescimento é impulsionado principalmente pela linha de produtos tecnológicos e pela expansão na região Sudeste. Recomendo aumentar o estoque dos produtos ProBook 450 e UltraWide 34\" em pelo menos 30% para atender à demanda projetada."
    }],
    marketing: [{
      id: 4,
      text: "Como está o desempenho das nossas campanhas no Instagram?",
      response: "Analisando suas campanhas no Instagram:\n\nSua taxa de engajamento está 18% acima da média do setor. Os posts com produtos em uso real têm 2.3x mais interações que fotos de produto isoladas.\n\nA campanha de influenciadores gerou 432 vendas diretas (ROI de 287%), mas identifiquei que influenciadores com 10-30k seguidores trouxeram conversões 3x melhores que os maiores influenciadores.\n\nRecomendo aumentar budget em micro-influenciadores e conteúdo de demonstração de produtos."
    }, {
      id: 5,
      text: "Quais canais trazem mais conversões para o e-commerce?",
      response: "Analisando os canais de tráfego que mais converteram:\n\n1. Google Ads: 32% das conversões (CAC: R$42)\n2. Instagram: 24% das conversões (CAC: R$38)\n3. Email Marketing: 18% das conversões (CAC: R$12)\n\nSurpreendentemente, o Pinterest gerou apenas 4% do tráfego mas tem a segunda melhor taxa de conversão (4.7%) e menor CAC (R$29). Seus emails de carrinho abandonado têm taxa de recuperação de 22%, que está 8% abaixo do potencial.\n\nRecomendo: teste de alocação de 15% mais budget no Pinterest e otimização dos emails de recuperação de carrinho."
    }],
    financeiro: [{
      id: 6,
      text: "Onde podemos otimizar nossos custos operacionais?",
      response: "Analisando seus custos operacionais, identifiquei estas oportunidades de economia:\n\n1. Seus custos de processamento de pagamento estão 1.2% acima do mercado. Renegociar com a operadora atual ou mudar para os provedores X ou Y pode economizar R$4.200/mês.\n\n2. O consumo de energia apresenta padrões irregulares nos fins de semana (+38% do esperado). Verificar equipamentos ligados desnecessariamente pode reduzir R$1.800/mês.\n\n3. A rotatividade de funcionários custa aproximadamente R$18.000 por substituição. Implementar programa de retenção reduziria estes custos em 62% com base em casos similares."
    }, {
      id: 7,
      text: "Qual o fluxo de caixa projetado para os próximos 6 meses?",
      response: "Projeção de fluxo de caixa para o próximo semestre:\n\nOut: +R$89.400 (alta sazonal)\nNov: +R$112.300 (Black Friday)\nDez: +R$107.600 (Festas)\nJan: -R$22.400 (período negativo)\nFev: +R$41.500 (recuperação)\nMar: +R$63.200 (estabilização)\n\nAtenção para Janeiro, onde os recebíveis cairão 34% enquanto despesas de impostos e 13º terceirizado impactarão o caixa. Recomendo provisionar R$40.000 em Dezembro para cobrir o déficit previsto.\n\nHá também oportunidade de antecipar recebíveis de cartão com taxa menor que seu empréstimo atual, economizando 4.2% ao ano."
    }]
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
  return;
};
export default ChatSimulation;