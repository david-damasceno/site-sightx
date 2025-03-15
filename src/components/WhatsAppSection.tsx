
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
    <section id="whatsapp" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integração com WhatsApp</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Acesse os insights da Donna diretamente no WhatsApp. Receba alertas, faça consultas e tome decisões em tempo real onde quer que você esteja.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Smartphone className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">SightX no WhatsApp</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-500">
                      <MessageCircle size={20} />
                    </div>
                    <p>Receba alertas importantes sobre mudanças nos seus indicadores de negócio</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-500">
                      <Brain size={20} />
                    </div>
                    <p>Faça perguntas sobre seu negócio e receba respostas instantâneas</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-500">
                      <Send size={20} />
                    </div>
                    <p>Compartilhe insights importantes com sua equipe diretamente do chat</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Experimente agora</h3>
                {isMessageSent ? (
                  <div className="p-4 bg-green-100 text-green-700 rounded-md mb-4">
                    Mensagem enviada com sucesso! Em breve você receberá uma resposta.
                  </div>
                ) : null}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Seu número de WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sightx-purple"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Sua mensagem
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sightx-purple"
                      rows={4}
                      placeholder="Digite sua mensagem para a Donna..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-sightx-purple hover:bg-purple-700 flex items-center justify-center gap-2"
                  >
                    Enviar mensagem <Send size={16} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
