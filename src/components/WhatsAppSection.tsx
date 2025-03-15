import { useState } from 'react';
import { Brain, Send, Smartphone, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
const WhatsAppSection = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!phone || !message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Simulating message sending
    toast({
      title: "Enviando mensagem...",
      description: "Aguarde enquanto processamos seu pedido."
    });
    setTimeout(() => {
      setIsMessageSent(true);
      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada com sucesso.",
        variant: "default"
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
  return;
};
export default WhatsAppSection;