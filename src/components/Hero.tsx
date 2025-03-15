
import { ArrowRight, ChevronRight, BarChart2, Database, BriefcaseBusiness, Target, Brain, TrendingUp, LineChart, Users, PieChart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Gradiente de fundo dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-gray-100 z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-44 h-44 bg-green-200 opacity-20 rounded-full blur-2xl animate-float"></div>
        
        {/* Grid patterns */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAtMy4zMS0yLjY5LTYtNi02djZjMC0zLjMxLTIuNjktNi02LTZ2NmMwIDYuNjMgNS4zNyAxMiAxMiAxMnYtNmMzLjMxIDAgNi0yLjY5IDYtNmg2YzAgOS45NC04LjA2IDE4LTE4IDE4djZjMTUuNDYgMCAyOC0xMi41NCAyOC0yOGgtNnoiIGZpbGwtb3BhY2l0eT0iLjA1IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMzAgMzBjMC02LjYzLTUuMzctMTItMTItMTJ2MTJoMTJ6IiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')] opacity-[0.015]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Coluna do conteúdo */}
          <div className="animate-fade-in">
            {/* Badge superior */}
            <div className="inline-flex items-center px-3 py-1.5 mb-8 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="flex items-center justify-center w-5 h-5 mr-2 bg-sightx-purple rounded-full">
                <BriefcaseBusiness size={12} className="text-white" />
              </span>
              <p className="text-sm font-medium text-gray-800">Soluções exclusivas para PMEs</p>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
              Transforme seu negócio com a <span className="text-sightx-purple">SightX</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-medium">
              Potencialize suas decisões estratégicas com inteligência artificial que <span className="text-sightx-purple font-semibold">transforma dados complexos</span> em insights acionáveis para seu negócio.
            </p>
            
            {/* Cards de benefícios */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg">
              <div className="flex p-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 duration-300">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <TrendingUp className="text-sightx-purple" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Aumento nas vendas</h3>
                  <p className="text-sm text-gray-500">Até 32% de crescimento</p>
                </div>
              </div>
              
              <div className="flex p-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 duration-300">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Target className="text-sightx-purple" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Decisões precisas</h3>
                  <p className="text-sm text-gray-500">Baseadas em dados reais</p>
                </div>
              </div>
              
              <div className="flex p-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 duration-300">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Brain className="text-sightx-purple" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">IA personalizada</h3>
                  <p className="text-sm text-gray-500">Para seu modelo de negócio</p>
                </div>
              </div>
              
              <div className="flex p-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 duration-300">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <BarChart2 className="text-sightx-purple" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Insights em tempo real</h3>
                  <p className="text-sm text-gray-500">Relatórios automatizados</p>
                </div>
              </div>
            </div>
            
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-sightx-purple hover:bg-sightx-purple/90 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl group px-6 py-6 rounded-xl">
                <a href="#waitlist" className="flex items-center gap-2 text-base">
                  Comece agora
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ChevronRight size={14} className="text-white" />
                  </span>
                </a>
              </Button>
              
              <Button className="border-2 border-sightx-purple text-sightx-purple bg-white hover:bg-sightx-purple/5 transition-all duration-300 hover:shadow-lg px-6 py-6 rounded-xl" asChild>
                <a href="#demo" className="flex items-center gap-2 text-base">
                  Ver demonstração
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Coluna do dashboard */}
          <div className="relative hidden lg:block">
            {/* Painel do dashboard */}
            <div className={cn(
              "relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100",
              "transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:translate-y-[-4px]"
            )}>
              {/* Barra superior */}
              <div className="bg-gradient-to-r from-sightx-purple to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap size={18} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">SightX Dashboard</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-white/10 rounded-md text-xs font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-300 rounded-full mr-1.5 animate-pulse"></div>
                      Ao vivo
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Conteúdo do dashboard */}
              <div className="p-6">
                {/* Cabeçalho */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Visão Executiva</h4>
                    <p className="text-gray-500 text-sm">Última atualização: hoje às 15:42</p>
                  </div>
                  <div className="px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-medium flex items-center">
                    <TrendingUp size={14} className="mr-1.5" /> +32% em vendas
                  </div>
                </div>
                
                {/* Cards de métricas */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl flex flex-col items-center">
                    <div className="text-3xl font-bold text-sightx-purple mb-1">84%</div>
                    <div className="text-xs text-gray-500 text-center">Conversão de Leads</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl flex flex-col items-center">
                    <div className="text-3xl font-bold text-sightx-purple mb-1">68K</div>
                    <div className="text-xs text-gray-500 text-center">Visitantes</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl flex flex-col items-center">
                    <div className="text-3xl font-bold text-sightx-purple mb-1">R$32K</div>
                    <div className="text-xs text-gray-500 text-center">Receita Mensal</div>
                  </div>
                </div>
                
                {/* Gráfico */}
                <div className="h-48 bg-gray-50 rounded-xl mb-6 flex items-center justify-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full flex items-end">
                      <div className="w-[8%] h-[30%] bg-purple-200 rounded-t-md mx-[1.2%]"></div>
                      <div className="w-[8%] h-[45%] bg-purple-300 rounded-t-md mx-[1.2%]"></div>
                      <div className="w-[8%] h-[38%] bg-purple-400 rounded-t-md mx-[1.2%]"></div>
                      <div className="w-[8%] h-[65%] bg-purple-500 rounded-t-md mx-[1.2%]"></div>
                      <div className="w-[8%] h-[50%] bg-purple-600 rounded-t-md mx-[1.2%]"></div>
                      <div className="w-[8%] h-[70%] bg-purple-700 rounded-t-md mx-[1.2%]"></div>
                      <div className="w-[8%] h-[85%] bg-purple-800 rounded-t-md mx-[1.2%]"></div>
                      <div className="w-[8%] h-[75%] bg-sightx-purple rounded-t-md mx-[1.2%]"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                  
                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <PieChart className="text-sightx-purple mr-2" size={20} />
                        <span className="font-medium text-gray-800">Desempenho de Vendas</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-xs text-white bg-purple-600 px-2 py-1 rounded-md">Mensal</span>
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md">Anual</span>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Progresso do objetivo mensal</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-sightx-purple w-[75%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Cards inferiores */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-start gap-3 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-sightx-purple" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Novos clientes</p>
                      <p className="font-semibold text-gray-800">+27% este mês</p>
                      <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                        <div className="bg-green-400 h-1 rounded-full w-[65%]"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-start gap-3 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Database className="text-sightx-purple" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Insights gerados</p>
                      <p className="font-semibold text-gray-800">48 esta semana</p>
                      <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                        <div className="bg-purple-400 h-1 rounded-full w-[80%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos atrás do dashboard */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-green-50 rounded-2xl"></div>
            <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full bg-purple-50 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
