
import { ArrowRight, BarChart2, Database, LineChart, Brain, Sparkles, ChartBar, Gauge, Users, MessageSquareText, ShieldCheck, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from "@/components/ui/carousel";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto rotation for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featureSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const featureSlides = [
    {
      title: "Dashboard Inteligente",
      description: "Visualize todos os KPIs importantes do seu negócio em um único lugar, com gráficos interativos e atualizações em tempo real.",
      icon: <LayoutDashboard size={24} className="text-sightx-purple" />,
      stats: [
        { label: "Conversão", value: "68.2%", icon: <BarChart2 size={16} /> },
        { label: "Vendas", value: "+27%", icon: <ChartBar size={16} /> }
      ],
      insight: "As vendas de produtos premium aumentaram 18% após a nova campanha de marketing digital."
    },
    {
      title: "Análise Preditiva",
      description: "Antecipe tendências de mercado e comportamento dos clientes com nossos algoritmos de IA avançada.",
      icon: <LineChart size={24} className="text-sightx-purple" />,
      stats: [
        { label: "Precisão", value: "92.4%", icon: <Gauge size={16} /> },
        { label: "Dados", value: "1.4M", icon: <Database size={16} /> }
      ],
      insight: "Prevemos um aumento de 15% nas vendas do próximo trimestre com base nas tendências atuais."
    },
    {
      title: "Insights por IA",
      description: "Deixe que nossa IA analise seus dados e descubra oportunidades que passariam despercebidas.",
      icon: <Brain size={24} className="text-sightx-purple" />,
      stats: [
        { label: "Insights", value: "237", icon: <Sparkles size={16} /> },
        { label: "Economia", value: "43h", icon: <Users size={16} /> }
      ],
      insight: "Detectamos um padrão de compra recorrente que sugere oportunidade para um programa de fidelidade."
    },
    {
      title: "Chatbot Especialista",
      description: "Converse com a Donna, nossa IA especialista em negócios, para obter insights rápidos sobre seus dados.",
      icon: <MessageSquareText size={24} className="text-sightx-purple" />,
      stats: [
        { label: "Respostas", value: "99.1%", icon: <ShieldCheck size={16} /> },
        { label: "Consultas", value: "24/7", icon: <Users size={16} /> }
      ],
      insight: "Donna identificou uma queda de desempenho em um canal de marketing que necessita atenção imediata."
    }
  ];

  return <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-sightx-purple/10 px-3 py-1.5 rounded-full mb-6 text-sm font-medium text-sightx-purple">
              <Sparkles size={16} className="text-sightx-purple" />
              <span>Tecnologia de ponta para PMEs</span>
            </div>
            
            <h1 className="mb-5 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold">
              Transforme seus dados em{' '}
              <span className="gradient-text font-extrabold">decisões estratégicas</span>
            </h1>
            
            <p className="text-gray-700 mb-6 text-lg max-w-xl">
              A SightX é uma plataforma inteligente que transforma informações dispersas em insights estratégicos para PMEs.
              Pare de perder tempo analisando manualmente seus dados e comece a tomar decisões assertivas.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white shadow-sm rounded-full px-3 py-1.5">
                <div className="h-7 w-7 rounded-full bg-sightx-purple/10 flex items-center justify-center">
                  <Brain size={14} className="text-sightx-purple" />
                </div>
                <span className="text-sm font-medium">IA Avançada</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white shadow-sm rounded-full px-3 py-1.5">
                <div className="h-7 w-7 rounded-full bg-sightx-purple/10 flex items-center justify-center">
                  <LineChart size={14} className="text-sightx-purple" />
                </div>
                <span className="text-sm font-medium">Análise Preditiva</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white shadow-sm rounded-full px-3 py-1.5">
                <div className="h-7 w-7 rounded-full bg-sightx-purple/10 flex items-center justify-center">
                  <Database size={14} className="text-sightx-purple" />
                </div>
                <span className="text-sm font-medium">Integração Fácil</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-sightx-purple hover:bg-sightx-purple/90 text-white shadow-md hover:shadow-lg flex items-center gap-2" asChild>
                <a href="#waitlist">Entrar na Lista de Espera <ArrowRight size={16} /></a>
              </Button>
              
              <Button className="border-2 border-sightx-purple text-sightx-purple bg-transparent hover:bg-sightx-purple/10 flex items-center gap-2" asChild variant="outline">
                <a href="#whatsapp">Conheça a Donna <Brain size={16} /></a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-sightx-purple/10 to-sightx-green/10 rounded-3xl transform -rotate-3"></div>
            
            <Carousel className="relative z-10" setApi={(api) => {
              if (api) {
                api.scrollTo(activeSlide);
              }
            }}>
              <CarouselContent>
                {featureSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative bg-white rounded-2xl shadow-xl p-6 z-10 transform rotate-1 hover:rotate-0 transition-all duration-300">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          {slide.icon}
                          {slide.title}
                        </h3>
                        <span className="text-sightx-green text-sm font-medium px-2 py-0.5 bg-green-50 rounded-md flex items-center">
                          ↑ 27%
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden relative">
                          <LineChart className="text-sightx-purple h-24 w-24 opacity-70" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sightx-purple/5 to-transparent animate-pulse-soft"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {slide.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="bg-gray-50 p-3 rounded-lg flex items-center gap-2 shadow-sm">
                              <div className="text-sightx-purple">{stat.icon}</div>
                              <div>
                                <p className="text-xs text-gray-500">{stat.label}</p>
                                <p className="font-semibold text-sm">{stat.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-sightx-purple/5 p-3 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Brain size={16} className="text-sightx-purple mt-0.5" />
                            <div>
                              <p className="text-xs font-semibold text-sightx-purple mb-1">Insight da Donna</p>
                              <p className="text-xs text-gray-700">{slide.insight}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="mt-4 flex justify-center gap-2">
                {featureSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === index ? "w-8 bg-sightx-purple" : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
            
            <div className="absolute top-8 -right-8 w-32 h-32 bg-sightx-green opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sightx-purple opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
