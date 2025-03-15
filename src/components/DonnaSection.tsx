import { useState, useEffect } from 'react';
import { Bell, Brain, LineChart, MessageCircle, TrendingUp, Sparkles, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
const DonnaSection = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const messages = ["Bom dia, Marcos! Analisei seus dados de vendas e notei uma oportunidade.", "Suas vendas de acessórios aumentaram 23% quando oferecidos junto com o produto principal.", "Recomendo criar pacotes promocionais combinando esses itens para aumentar o ticket médio."];
  const userResponse = "Ótima ideia, Donna! Pode criar uma sugestão de pacotes para implementarmos na próxima semana?";
  useEffect(() => {
    if (activeMessage < messages.length) {
      setIsTyping(true);
      setTypedText('');
      let currentText = '';
      const message = messages[activeMessage];
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < message.length) {
          currentText += message[index];
          setTypedText(currentText);
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);

          // Auto advance to next message after delay
          if (activeMessage < messages.length - 1) {
            const timer = setTimeout(() => {
              setActiveMessage(prev => prev + 1);
            }, 2000);
            return () => clearTimeout(timer);
          }
        }
      }, 35);
      return () => clearInterval(typeInterval);
    }
  }, [activeMessage, messages]);
  return;
};
export default DonnaSection;