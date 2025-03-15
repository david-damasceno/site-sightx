
import { ArrowRight, ChevronRight, BarChart2, Database, Zap, Brain, Target, TrendingUp, PieChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Refined background with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-gray-100 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAtMy4zMS0yLjY5LTYtNi02djZjMC0zLjMxLTIuNjktNi02LTZ2NmMwIDYuNjMgNS4zNyAxMiAxMiAxMnYtNmMzLjMxIDAgNi0yLjY5IDYtNmg2YzAgOS45NC04LjA2IDE4LTE4IDE4djZjMTUuNDYgMCAyOC0xMi41NCAyOC0yOGgtNnoiIGZpbGwtb3BhY2l0eT0iLjA1IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMzAgMzBjMC02LjYzLTUuMzctMTItMTItMTJ2MTJoMTJ6IiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')] opacity-[0.015]"></div>
      </div>
      
      {/* More subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/3 right-[5%] w-40 h-40 bg-purple-200 opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-48 h-48 bg-blue-200 opacity-10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        
        {/* More minimal geometric shapes */}
        <div className="absolute top-20 right-[20%] w-16 h-16 border border-purple-200 opacity-20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 left-[15%] w-12 h-12 border border-blue-200 opacity-20 rounded-lg -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* More compact content column */}
          <div className={`lg:col-span-5 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '0.2s'
        }}>
            {/* Smaller, more refined badge */}
            <div className="inline-flex items-center px-2 py-0.5 mb-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white">
              <span className="flex items-center justify-center w-3.5 h-3.5 mr-1 bg-sightx-purple rounded-full">
                <Zap size={8} className="text-white" />
              </span>
              <p className="text-[10px] font-medium text-gray-800">Soluções exclusivas para PMEs</p>
            </div>
            
            {/* More compact heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 leading-tight text-gray-900">
              Transforme seu negócio <br />com a <span className="text-sightx-purple">SightX</span>
            </h1>
            
            {/* More concise subtitle */}
            <p className="text-gray-600 text-sm md:text-base max-w-sm mb-5 leading-relaxed">
              Decisões estratégicas com IA que <span className="text-sightx-purple font-semibold">transforma dados</span> em insights acionáveis.
            </p>
            
            {/* Smaller, more compact benefit cards */}
            <div className="grid grid-cols-2 gap-2 mb-6 max-w-md">
              {[{
              icon: TrendingUp,
              title: "Vendas",
              desc: "+32% crescimento",
              color: "from-purple-50 to-purple-100"
            }, {
              icon: Target,
              title: "Decisões",
              desc: "Baseadas em dados",
              color: "from-blue-50 to-blue-100"
            }, {
              icon: Brain,
              title: "IA personalizada",
              desc: "Para seu negócio",
              color: "from-green-50 to-green-100"
            }, {
              icon: BarChart2,
              title: "Insights",
              desc: "Em tempo real",
              color: "from-amber-50 to-amber-100"
            }].map((item, i) => <div key={i} className={`flex p-2 bg-gradient-to-br ${item.color} rounded-lg shadow-sm border border-white/80 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group`} style={{
              animationDelay: `${0.3 + i * 0.1}s`
            }}>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 transition-transform group-hover:scale-110">
                    <item.icon className="text-sightx-purple" size={12} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs">{item.title}</h3>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                </div>)}
            </div>
            
            {/* Smaller CTA buttons */}
            <div className="flex flex-wrap gap-2">
              <Button className="bg-sightx-purple hover:bg-sightx-purple/90 text-white shadow-md transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg group px-3 py-1.5 h-auto rounded-md text-xs">
                <a href="#waitlist" className="flex items-center gap-1">
                  Comece agora
                  <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ChevronRight size={10} className="text-white" />
                  </span>
                </a>
              </Button>
              
              <Button className="border border-sightx-purple text-sightx-purple bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-md px-3 py-1.5 h-auto rounded-md text-xs" asChild>
                <a href="#demo" className="flex items-center gap-1">
                  Ver demonstração
                  <ArrowRight size={12} />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Dashboard visualization - more compact and modern */}
          <div className={`relative lg:col-span-7 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '0.4s'
        }}>
            {/* More compact dashboard with improved aesthetics */}
            <div className={cn("relative bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100/80 overflow-hidden", "transform transition-all duration-500 hover:shadow-[0_12px_28px_rgba(8,_112,_184,_0.15)] hover:translate-y-[-1px]")}>
              {/* Smaller header */}
              <div className="bg-gradient-to-r from-sightx-purple to-purple-600 p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center">
                      <Zap size={12} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-xs">SightX Dashboard</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="px-1 py-0.5 bg-white/10 rounded text-[9px] font-medium flex items-center">
                      <div className="w-1 h-1 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                      Ao vivo
                    </div>
                  </div>
                </div>
              </div>
              
              {/* More compact dashboard content */}
              <div className="p-3">
                {/* Smaller header */}
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">Visão Executiva</h4>
                    <p className="text-gray-500 text-[9px]">Última atualização: hoje às 15:42</p>
                  </div>
                  <div className="px-1.5 py-0.5 bg-green-50 text-green-600 rounded-full text-[9px] font-medium flex items-center">
                    <TrendingUp size={10} className="mr-0.5" /> +32% em vendas
                  </div>
                </div>
                
                {/* Smaller metrics cards */}
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  {[{
                  value: "84%",
                  label: "Conversão",
                  color: "from-purple-50 to-purple-100"
                }, {
                  value: "68K",
                  label: "Visitantes",
                  color: "from-blue-50 to-blue-100"
                }, {
                  value: "R$32K",
                  label: "Receita",
                  color: "from-green-50 to-green-100"
                }, {
                  value: "47%",
                  label: "Crescimento",
                  color: "from-amber-50 to-amber-100"
                }].map((metric, i) => <div key={i} className={`bg-gradient-to-br ${metric.color} p-1.5 rounded-md flex flex-col items-center`}>
                      <div className="text-sm font-bold text-sightx-purple">{metric.value}</div>
                      <div className="text-[8px] text-gray-500">{metric.label}</div>
                    </div>)}
                </div>
                
                {/* More compact visualization */}
                <div className="h-24 bg-gray-50/80 rounded-md mb-3 flex items-center justify-center p-2 relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="w-full h-full flex items-end justify-around">
                      {[30, 45, 38, 65, 50, 70, 85, 75].map((height, i) => <div key={i} className={`w-[7%] bg-sightx-purple/60 rounded-t-sm transition-all duration-1000 ease-out`} style={{
                      height: `${isVisible ? height : 0}%`,
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${0.5 + i * 0.1}s`
                    }}></div>)}
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/20 via-white/5 to-transparent"></div>
                </div>
                
                {/* Smaller data cards */}
                <div className="grid grid-cols-2 gap-2">
                  {[{
                  icon: Users,
                  title: "Novos clientes",
                  value: "+27% este mês",
                  progress: 65,
                  color: "green-400"
                }, {
                  icon: Database,
                  title: "Insights gerados",
                  value: "48 esta semana",
                  progress: 80,
                  color: "purple-400"
                }].map((card, i) => <div key={i} className="bg-white border border-gray-100 p-2 rounded-md flex items-start gap-1.5 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <card.icon className="text-sightx-purple" size={12} />
                      </div>
                      <div className="w-full">
                        <p className="text-[9px] text-gray-500 mb-0.5">{card.title}</p>
                        <p className="font-semibold text-gray-800 text-[10px]">{card.value}</p>
                        <div className="w-full h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                          <div className={`bg-${card.color} h-full rounded-full transition-all duration-1000 ease-out`} style={{
                        width: isVisible ? `${card.progress}%` : '0%',
                        transitionDelay: `${0.9 + i * 0.1}s`
                      }}></div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
            
            {/* More subtle layered effect */}
            <div className="absolute -z-10 -bottom-2 -right-2 w-full h-full bg-green-50/50 rounded-lg"></div>
            <div className="absolute -z-10 -bottom-1 -right-1 w-full h-full bg-purple-50/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
