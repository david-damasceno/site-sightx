
import { ArrowRight, BarChart2, Database, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-6">
              Transforme seus dados em{' '}
              <span className="gradient-text">decisões vencedoras</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg md:text-xl">
              Você está cansado de olhar para dados dispersos sem saber o que fazer? A SightX reúne todas as informações 
              do seu negócio e transforma em insights acionáveis que impulsionam resultados reais.
              Chega de adivinhações, é hora de decisões baseadas em dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2" asChild>
                <a href="#waitlist">Entre na Lista de Espera <ArrowRight size={18} /></a>
              </Button>
              <Button className="btn-outline flex items-center gap-2" asChild>
                <a href="#demo">Experimente Agora <ArrowRight size={18} /></a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right hidden lg:block">
            <div className="relative bg-white rounded-xl shadow-2xl p-6 z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Dashboard de Desempenho</h3>
                <span className="text-sightx-green font-medium">↑ 32%</span>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <LineChart className="text-sightx-purple h-32 w-32 opacity-70" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                    <BarChart2 className="text-sightx-purple mb-2" />
                    <p className="text-sm text-gray-600">Conversão</p>
                    <p className="font-semibold">68.2%</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                    <Database className="text-sightx-purple mb-2" />
                    <p className="text-sm text-gray-600">Dados</p>
                    <p className="font-semibold">1.4M</p>
                  </div>
                  <div className="bg-sightx-purple/10 p-4 rounded-lg flex flex-col items-center">
                    <div className="text-sightx-purple mb-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Receita</p>
                    <p className="font-semibold text-sightx-green">+24%</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg text-sm">
                  <p className="font-medium text-sightx-purple mb-1">Insight da Donna:</p>
                  <p className="text-gray-700">A campanha de marketing no Instagram está gerando 32% mais conversões que Facebook. Redirecione 20% do orçamento para maximizar ROI.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-10 -right-10 w-40 h-40 bg-sightx-green opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sightx-purple opacity-30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
