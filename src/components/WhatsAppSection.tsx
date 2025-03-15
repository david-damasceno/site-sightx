
import { useState } from 'react';
import { Brain, Send, Smartphone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppSection = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating message sending
    setTimeout(() => {
      setIsMessageSent(true);
      setPhone('');
      setMessage('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="whatsapp" className="section-padding bg-gradient-to-r from-sightx-purple/95 to-sightx-purple text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white mb-6">Interaja com <span className="text-sightx-green font-bold">Donna</span> onde você estiver</h2>
            <p className="text-white/90 mb-6">
              Tenha a assistência da nossa IA não apenas em nosso site, mas também via WhatsApp. 
              Donna está sempre pronta para ajudar com insights, análises e recomendações para seu negócio, 
              onde quer que você esteja.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Conversa Natural</h4>
                  <p className="text-white/80">
                    Dialogue com Donna como faria com qualquer assistente, usando linguagem natural e descomplicada.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Acesso pelo WhatsApp</h4>
                  <p className="text-white/80">
                    Acesse os mesmos insights poderosos através do seu WhatsApp, sem necessidade de aplicativos adicionais.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Inteligência Contínua</h4>
                  <p className="text-white/80">
                    Donna aprende continuamente com suas interações, tornando-se cada vez mais personalizada para seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-xl text-gray-800 w-full max-w-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-sightx-purple rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Começar com Donna</h3>
                  <p className="text-sm text-gray-500">Preencha os dados para iniciar a conversa</p>
                </div>
              </div>
              
              {!isMessageSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Seu WhatsApp
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Smartphone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-custom pl-10"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem inicial (opcional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="input-custom resize-none"
                      placeholder="Diga olá para Donna..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Iniciar conversa
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sightx-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sightx-purple mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-600">
                    Donna enviará uma mensagem para seu WhatsApp em instantes. Prepare-se para transformar seu negócio!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
