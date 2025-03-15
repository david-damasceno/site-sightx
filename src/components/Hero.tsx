
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
              <span className="gradient-text">decisões estratégicas</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg md:text-xl">
              A SightX é uma plataforma inteligente que transforma informações dispersas em insights estratégicos para PMEs.
              Pare de perder tempo analisando manualmente seus dados e comece a tomar decisões assertivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2" asChild>
                <a href="#waitlist">Entrar na Lista de Espera <ArrowRight size={18} /></a>
              </Button>
              <Button className="btn-outline flex items-center gap-2" asChild>
                <a href="#demo">Ver Demonstração <ArrowRight size={18} /></a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right hidden lg:block">
            <div className="relative bg-white rounded-xl shadow-2xl p-6 z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Dashboard de Vendas</h3>
                <span className="text-sightx-green font-medium">↑ 27%</span>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <LineChart className="text-sightx-purple h-32 w-32 opacity-70" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                    <BarChart2 className="text-sightx-purple" />
                    <div>
                      <p className="text-sm text-gray-600">Conversão</p>
                      <p className="font-semibold">68.2%</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                    <Database className="text-sightx-purple" />
                    <div>
                      <p className="text-sm text-gray-600">Dados</p>
                      <p className="font-semibold">1.4M</p>
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
