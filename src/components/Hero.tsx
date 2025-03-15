
import { ArrowRight, BarChart2, Database, LineChart, Zap, Target, Brain, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-sightx-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-sightx-green opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in z-10">
            <div className="inline-block px-4 py-1.5 mb-6 bg-white/90 border border-gray-200 rounded-full shadow-sm">
              <p className="text-sm font-medium text-gray-700 flex items-center">
                <Zap size={16} className="mr-2 text-sightx-purple" /> Solução exclusiva para PMEs
              </p>
            </div>
            
            <h1 className="mb-4 leading-tight">
              Transforme o seu negócio com a <span className="gradient-text font-extrabold">SightX</span>
            </h1>
            
            <p className="text-gray-700 mb-8 text-lg md:text-xl max-w-xl">
              Unimos inteligência artificial e análise de dados para dar às pequenas e médias empresas o poder 
              de decisão das grandes corporações. Sem complexidade, sem grandes investimentos.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl">
              <div className="flex items-center p-3 bg-white/80 rounded-lg shadow-soft border border-gray-100">
                <TrendingUp className="text-sightx-purple mr-3 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">Aumento de vendas</span>
              </div>
              <div className="flex items-center p-3 bg-white/80 rounded-lg shadow-soft border border-gray-100">
                <Target className="text-sightx-purple mr-3 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">Decisões precisas</span>
              </div>
              <div className="flex items-center p-3 bg-white/80 rounded-lg shadow-soft border border-gray-100">
                <Brain className="text-sightx-purple mr-3 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">IA personalizada</span>
              </div>
              <div className="flex items-center p-3 bg-white/80 rounded-lg shadow-soft border border-gray-100">
                <BarChart2 className="text-sightx-purple mr-3 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">Insights em tempo real</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary flex items-center gap-2 shadow-float group">
                <a href="#waitlist">
                  Transforme seu negócio agora 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button className="btn-outline flex items-center gap-2 hover:shadow-soft" asChild>
                <a href="#demo">Ver Demonstração <ArrowRight size={18} /></a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right hidden lg:block z-10">
            <div className="relative bg-white rounded-xl shadow-2xl p-6 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="inline-block w-3 h-3 bg-sightx-green rounded-full mr-2"></span>
                  Visão Geral do Negócio
                </h3>
                <span className="text-sightx-green font-medium px-3 py-1.5 bg-green-50 rounded-md flex items-center">
                  <TrendingUp size={14} className="mr-1" /> 32%
                </span>
              </div>
              
              <div className="space-y-5">
                <div className="h-48 bg-gradient-to-r from-gray-50 to-white rounded-lg flex items-center justify-center shadow-inner overflow-hidden relative p-4">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <LineChart className="text-sightx-purple h-72 w-72" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 w-full relative">
                    <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-soft">
                      <div className="text-3xl font-bold text-sightx-purple">84%</div>
                      <div className="text-xs text-gray-500 text-center">Taxa de Conversão</div>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-soft">
                      <div className="text-3xl font-bold text-sightx-purple">68k</div>
                      <div className="text-xs text-gray-500 text-center">Visitantes</div>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-soft">
                      <div className="text-3xl font-bold text-sightx-purple">R$32k</div>
                      <div className="text-xs text-gray-500 text-center">Receita Mensal</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3 shadow-soft">
                    <BarChart2 className="text-sightx-purple" />
                    <div>
                      <p className="text-sm text-gray-600">Previsão de vendas</p>
                      <p className="font-semibold">+27% este mês</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3 shadow-soft">
                    <Database className="text-sightx-purple" />
                    <div>
                      <p className="text-sm text-gray-600">Decisões tomadas</p>
                      <p className="font-semibold">48 esta semana</p>
                    </div>
                  </div>
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
