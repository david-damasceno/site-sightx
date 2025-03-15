
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !company.trim()) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Inscrição realizada!",
        description: "Você foi adicionado à nossa lista de espera.",
      });
    }, 1500);
  };
  
  return (
    <section id="waitlist" className="section-padding">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-sightx-purple to-sightx-purple/80 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-white"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforme o futuro da sua empresa com dados inteligentes
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                A SightX está chegando para revolucionar a forma como PMEs utilizam dados. 
                Entre na nossa lista de espera e seja um dos primeiros a ter acesso 
                a esta tecnologia transformadora.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 md:mb-0">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-sightx-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Acesso prioritário</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-sightx-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Desconto exclusivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-sightx-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Sem compromisso</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-sightx-purple font-bold text-xl mb-4">Entre na lista de espera</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome da empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="input-custom"
                        placeholder="Sua empresa"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail corporativo
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-custom"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full btn-primary mt-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processando...</span>
                        </div>
                      ) : (
                        "Entrar na lista de espera"
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Ao se inscrever, você concorda em receber emails sobre a SightX.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sightx-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sightx-purple mb-2">Inscrição confirmada!</h3>
                  <p className="text-gray-600 mb-4">
                    Obrigado por seu interesse na SightX. Entraremos em contato assim que abrirmos as vagas para o acesso antecipado.
                  </p>
                  <Button
                    variant="outline"
                    className="btn-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                      setCompany('');
                    }}
                  >
                    Voltar ao formulário
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
