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
  return;
};
export default WhatsAppSection;