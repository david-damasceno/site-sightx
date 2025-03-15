
import { useState } from 'react';
import { Brain, Send, Smartphone, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const WhatsAppSection = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!phone || !message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulating message sending
    toast({
      title: "Enviando mensagem...",
      description: "Aguarde enquanto processamos seu pedido.",
    });
    
    setTimeout(() => {
      setIsMessageSent(true);
      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada com sucesso.",
        variant: "default",
      });
      
      // Reset form
      setPhone('');
      setMessage('');

      // Reset after 3 seconds
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="whatsapp" className="section-padding py-20 overflow-hidden">
      <div className="container-custom">
        <div className="section-title">
          <h2>SightX <span className="gradient-text">no WhatsApp</span></h2>
          <p className="text-gray-600">
            Receba insights e notificações diretamente no seu WhatsApp, mantendo você informado onde quer que esteja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative">
            <div className="relative bg-white shadow-xl rounded-3xl p-8 max-w-md mx-auto z-10 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">SightX Assistant</h3>
                    <p className="text-xs text-gray-500">Online agora</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-100 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[85%]">
                  <p className="text-sm">Olá! Tenho um alerta importante sobre suas vendas!</p>
                  <p className="text-xs text-gray-500 text-right mt-1">10:42</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[85%]">
                  <p className="text-sm">Detectei uma queda de 15% nas vendas da região Sul nas últimas 48h.</p>
                  <p className="text-xs text-gray-500 text-right mt-1">10:43</p>
                </div>
                
                <div className="bg-green-100 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto max-w-[85%]">
                  <p className="text-sm">O que pode estar causando isso?</p>
                  <p className="text-xs text-gray-500 text-right mt-1">10:44</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[85%]">
                  <p className="text-sm">Analisei os dados e identifiquei problemas logísticos no centro de distribuição de Porto Alegre. Recomendo contatar o gerente regional.</p>
                  <p className="text-xs text-gray-500 text-right mt-1">10:45</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-full">
                <input 
                  type="text" 
                  className="bg-transparent flex-1 outline-none text-sm" 
                  placeholder="Digite uma mensagem..." 
                  disabled
                />
                <button className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <Send className="text-white h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="absolute top-1/3 -left-16 w-32 h-32 bg-sightx-green opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 -right-16 w-32 h-32 bg-sightx-purple opacity-20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sightx-purple/10 p-3 rounded-lg">
                <Smartphone className="text-sightx-purple h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Receba atualizações no WhatsApp</h3>
            </div>
            
            <p className="text-gray-600 mb-8">
              Configure o envio de insights, alertas e notificações diretamente para o seu WhatsApp. Mantenha-se atualizado sobre seu negócio mesmo quando estiver longe do computador.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="phone" className="form-label">Número de WhatsApp</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="input-custom w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">Mensagem</label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem aqui..."
                  className="input-custom min-h-[120px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-sightx-green hover:bg-sightx-green/90 text-white font-medium flex items-center justify-center gap-2"
                disabled={isMessageSent}
              >
                {isMessageSent ? (
                  <>
                    <Check className="h-5 w-5" />
                    Mensagem Enviada
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
              
              <p className="text-xs text-gray-500 text-center pt-2">
                Ao enviar, você concorda com nossos Termos de Serviço e Política de Privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
