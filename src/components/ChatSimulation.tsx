
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatSimulation = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  
  const questions = [
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
  ];
  
  const handleQuestionClick = (id: number) => {
    setActiveQuestion(id);
    setShowResponse(false);
    
    // Simulating loading time before showing response
    setTimeout(() => {
      setShowResponse(true);
    }, 1000);
  };
  
  return (
    <section id="demo" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">Experimente a <span className="gradient-text">SightX</span> em ação</h2>
          <p className="text-gray-700">
            Veja como seria ter a SightX trabalhando para o seu negócio. Escolha uma pergunta abaixo para simular 
            como a plataforma responderia com insights relevantes e acionáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Faça uma pergunta</h3>
              <div className="space-y-3">
                {questions.map((question) => (
                  <Button
                    key={question.id}
                    variant="outline"
                    className={`w-full justify-start text-left h-auto py-3 px-4 ${
                      activeQuestion === question.id
                        ? 'border-sightx-purple text-sightx-purple'
                        : 'border-gray-200'
                    }`}
                    onClick={() => handleQuestionClick(question.id)}
                  >
                    {question.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md h-full">
              <div className="border-b p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-sightx-purple rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">SightX Análise</h4>
                  <p className="text-sm text-gray-500">Assistente de dados inteligente</p>
                </div>
              </div>
              
              <div className="p-6 h-[400px] flex items-center justify-center">
                {!activeQuestion ? (
                  <div className="text-center text-gray-500">
                    <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-20" />
                    <p>Selecione uma pergunta para ver a análise</p>
                  </div>
                ) : !showResponse ? (
                  <div className="text-center text-gray-500">
                    <div className="flex space-x-2 justify-center items-center">
                      <div className="h-3 w-3 bg-sightx-purple rounded-full animate-bounce"></div>
                      <div className="h-3 w-3 bg-sightx-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-3 w-3 bg-sightx-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <p className="mt-4">Analisando dados...</p>
                  </div>
                ) : (
                  <div className="animate-fade-in prose max-w-none">
                    <p className="font-medium text-sightx-black mb-2">
                      {questions.find(q => q.id === activeQuestion)?.text}
                    </p>
                    <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-line">
                      {questions.find(q => q.id === activeQuestion)?.response}
                    </div>
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
