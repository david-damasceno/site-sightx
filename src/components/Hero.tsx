
import { ArrowRight, BarChart2, Database, LineChart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sightx-purple/10 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-sightx-green/10 rounded-tr-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sightx-purple/10 text-sightx-purple text-sm font-medium mb-6">
              <Zap size={16} className="animate-pulse" /> Transformando PMEs com inteligência
            </div>
            <h1 className="mb-6 leading-tight">
              Transforme seus dados em{' '}
              <span className="gradient-text">decisões vencedoras</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg md:text-xl text-balance">
              Você está cansado de olhar para dados dispersos sem saber o que fazer? A SightX reúne todas as informações 
              do seu negócio e transforma em insights acionáveis que impulsionam resultados reais.
              Chega de adivinhações, é hora de decisões baseadas em dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2 shadow-float" asChild>
                <a href="#waitlist">Entre na Lista de Espera <ArrowRight size={18} /></a>
              </Button>
              <Button className="btn-outline flex items-center gap-2" asChild>
                <a href="#demo">Experimente Agora <ArrowRight size={18} /></a>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="text-sightx-purple font-bold text-2xl">+35%</div>
                <p className="text-gray-600 text-sm text-center">Aumento em produtividade</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-sightx-purple font-bold text-2xl">98%</div>
                <p className="text-gray-600 text-sm text-center">Satisfação de clientes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-sightx-purple font-bold text-2xl">3.2x</div>
                <p className="text-gray-600 text-sm text-center">ROI médio reportado</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right hidden lg:block">
            <div className="relative bg-white rounded-xl shadow-soft p-6 z-10 card-hover">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Dashboard de Desempenho</h3>
                <span className="text-sightx-green font-medium px-3 py-1 bg-green-50 rounded-full text-sm flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  32%
                </span>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <LineChart className="text-sightx-purple h-40 w-full opacity-70" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center card-hover">
                    <BarChart2 className="text-sightx-purple mb-2" />
                    <p className="text-sm text-gray-600">Conversão</p>
                    <p className="font-semibold">68.2%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center card-hover">
                    <Database className="text-sightx-purple mb-2" />
                    <p className="text-sm text-gray-600">Dados</p>
                    <p className="font-semibold">1.4M</p>
                  </div>
                  <div className="bg-sightx-purple/10 p-4 rounded-lg flex flex-col items-center card-hover">
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
                
                <div className="bg-gray-50 p-4 rounded-lg text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-sightx-purple rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <p className="font-medium text-sightx-purple">Insight da Donna:</p>
                  </div>
                  <p className="text-gray-700">A campanha de marketing no Instagram está gerando 32% mais conversões que Facebook. Redirecione 20% do orçamento para maximizar ROI.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-10 -right-10 w-40 h-40 bg-sightx-green opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sightx-purple opacity-20 rounded-full blur-3xl"></div>
            
            {/* Decorative elements */}
            <div className="absolute -right-4 top-1/4 w-8 h-8 bg-sightx-green/20 rounded-full"></div>
            <div className="absolute -left-6 bottom-1/3 w-12 h-12 bg-sightx-purple/20 rounded-full"></div>
            <div className="absolute right-1/3 -bottom-4 w-6 h-6 bg-sightx-green/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
