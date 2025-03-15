
import { ArrowRight, BarChart2, Database, Zap, Target, Brain, TrendingUp, ChevronRight, LineChart, Settings, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Shapes decorativas */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-green-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300 opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-300 opacity-10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 mb-8 bg-white/90 border border-gray-200 rounded-full shadow-sm">
              <span className="flex items-center justify-center w-5 h-5 mr-2 bg-sightx-purple rounded-full">
                <Zap size={12} className="text-white" />
              </span>
              <p className="text-sm font-medium text-gray-700">Soluções exclusivas para PMEs</p>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Transforme seu negócio com a <span className="text-sightx-purple">SightX</span>
            </h1>
            
            {/* Descrição */}
            <p className="text-gray-700 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Potencialize suas decisões estratégicas com inteligência artificial. Transformamos dados complexos em insights acionáveis para pequenas e médias empresas, sem complicações.
            </p>
            
            {/* Cards de benefícios */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-xl">
              <div className="flex items-center p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-purple-100">
                <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <TrendingUp className="text-sightx-purple" size={16} />
                </div>
                <span className="text-sm font-medium">Aumento nas vendas</span>
              </div>
              <div className="flex items-center p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-purple-100">
                <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Target className="text-sightx-purple" size={16} />
                </div>
                <span className="text-sm font-medium">Decisões precisas</span>
              </div>
              <div className="flex items-center p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-purple-100">
                <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Brain className="text-sightx-purple" size={16} />
                </div>
                <span className="text-sm font-medium">IA personalizada</span>
              </div>
              <div className="flex items-center p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-purple-100">
                <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <BarChart2 className="text-sightx-purple" size={16} />
                </div>
                <span className="text-sm font-medium">Insights em tempo real</span>
              </div>
            </div>
            
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-sightx-purple hover:bg-sightx-purple/90 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl group">
                <a href="#waitlist" className="flex items-center gap-2">
                  Comece agora
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ChevronRight size={12} className="text-white" />
                  </span>
                </a>
              </Button>
              <Button className="border-2 border-sightx-purple text-sightx-purple bg-transparent hover:bg-sightx-purple/5 transition-all duration-300 hover:shadow-md" asChild>
                <a href="#demo" className="flex items-center gap-2">
                  Ver demonstração
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Painel principal */}
            <div className={cn(
              "relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100",
              "transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-4px]"
            )}>
              {/* Cabeçalho do dashboard */}
              <div className="bg-gradient-to-r from-sightx-purple to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Settings size={16} className="text-white" />
                    </div>
                    <h3 className="font-semibold">SightX Dashboard</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-xs font-medium text-green-200">Dados atualizados</span>
                  </div>
                </div>
              </div>
              
              {/* Conteúdo do dashboard */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-lg font-semibold">Desempenho do Negócio</h4>
                    <p className="text-gray-500 text-sm">Visão geral atualizada</p>
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium flex items-center">
                    <TrendingUp size={14} className="mr-1" /> +32%
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center">
                    <div className="text-3xl font-bold text-sightx-purple mb-1">84%</div>
                    <div className="text-xs text-gray-500">Taxa de Conversão</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center">
                    <div className="text-3xl font-bold text-sightx-purple mb-1">68k</div>
                    <div className="text-xs text-gray-500">Visitantes</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center">
                    <div className="text-3xl font-bold text-sightx-purple mb-1">R$32k</div>
                    <div className="text-xs text-gray-500">Receita Mensal</div>
                  </div>
                </div>
                
                <div className="h-36 bg-gray-50 rounded-lg mb-6 flex items-center justify-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                    <LineChart className="w-full h-full text-sightx-purple" />
                  </div>
                  
                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">Tendência de vendas</span>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Em alta</span>
                    </div>
                    
                    <div className="w-full h-12 bg-white rounded-lg relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-sightx-purple to-purple-400 w-3/4 rounded-lg"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-medium text-white">75% do objetivo mensal</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-100 p-4 rounded-lg flex items-start gap-3 shadow-sm">
                    <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-sightx-purple" size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Novos clientes</p>
                      <p className="font-semibold">+27% este mês</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 p-4 rounded-lg flex items-start gap-3 shadow-sm">
                    <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Database className="text-sightx-purple" size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Insights gerados</p>
                      <p className="font-semibold">48 esta semana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos atrás do dashboard */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-green-50 rounded-xl"></div>
            <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-purple-50 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
