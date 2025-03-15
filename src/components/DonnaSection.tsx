
import { Bell, Brain, LineChart, MessageCircle, TrendingUp } from 'lucide-react';

const DonnaSection = () => {
  return (
    <section id="donna" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Conheça a Donna</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nossa assistente de IA dedicada para o seu negócio. Donna analisa seus dados e fornece insights relevantes para ajudar nas suas decisões.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="text-sightx-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Análise Inteligente</h3>
            <p className="text-gray-600">
              Donna processa seus dados de negócio e identifica padrões que seriam difíceis de perceber manualmente.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="text-sightx-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunicação Natural</h3>
            <p className="text-gray-600">
              Interaja com Donna usando linguagem natural. Faça perguntas e obtenha respostas claras sobre seu negócio.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="text-sightx-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Insights Acionáveis</h3>
            <p className="text-gray-600">
              Receba recomendações práticas baseadas em dados que você pode implementar imediatamente no seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonnaSection;
