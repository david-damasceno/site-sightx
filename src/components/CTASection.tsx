
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface CTASectionProps {
  id?: string;
}

const CTASection = ({ id }: CTASectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    contactName: '',
    whatsapp: '',
    sector: '',
    preferredSolution: '',
    suggestions: '',
    acceptTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.email.trim() || 
        !formData.company.trim() || 
        !formData.contactName.trim() || 
        !formData.whatsapp.trim() || 
        !formData.sector || 
        !formData.preferredSolution || 
        !formData.acceptTerms) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, preencha todos os campos obrigatórios.",
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
    <section id={id} className="section-padding">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-sightx-purple to-sightx-purple/80 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-white"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-sightx-purple font-bold text-xl mb-4">Entre na lista de espera</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-gray-700">
                        Nome completo <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="input-custom"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700">
                        Nome da empresa <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="input-custom"
                        placeholder="Sua empresa"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        E-mail corporativo <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-custom"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-gray-700">
                        WhatsApp <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="input-custom"
                        placeholder="(XX) XXXXX-XXXX"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sector" className="text-gray-700">
                        Setor <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => handleSelectChange('sector', value)}
                      >
                        <SelectTrigger className="input-custom">
                          <SelectValue placeholder="Selecione o setor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="comercio">Comércio</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="industria">Indústria</SelectItem>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="educacao">Educação</SelectItem>
                          <SelectItem value="saude">Saúde</SelectItem>
                          <SelectItem value="alimentacao">Alimentação</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="preferredSolution" className="text-gray-700">
                        Solução preferida <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.preferredSolution}
                        onValueChange={(value) => handleSelectChange('preferredSolution', value)}
                      >
                        <SelectTrigger className="input-custom">
                          <SelectValue placeholder="Escolha uma solução" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google_maps">Análise de Google Maps</SelectItem>
                          <SelectItem value="social_media">Análise de Mídias Sociais</SelectItem>
                          <SelectItem value="geographic">Análise Geográfica</SelectItem>
                          <SelectItem value="donna_assistant">Assistente Virtual Donna</SelectItem>
                          <SelectItem value="todas">Todas as soluções</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="suggestions" className="text-gray-700">
                      Sugestões de outras soluções
                    </Label>
                    <Textarea
                      id="suggestions"
                      name="suggestions"
                      value={formData.suggestions}
                      onChange={handleInputChange}
                      className="input-custom min-h-[80px]"
                      placeholder="Compartilhe suas ideias para novas soluções..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2 mt-4">
                    <Checkbox 
                      id="acceptTerms" 
                      checked={formData.acceptTerms}
                      onCheckedChange={handleCheckboxChange}
                      className="mt-1"
                    />
                    <Label 
                      htmlFor="acceptTerms" 
                      className="text-xs text-gray-600 font-normal"
                    >
                      Concordo em receber comunicações da SightX e confirmo que li e aceito os 
                      <a href="#" className="text-sightx-purple font-medium hover:underline"> Termos de Uso </a> 
                      e a 
                      <a href="#" className="text-sightx-purple font-medium hover:underline"> Política de Privacidade</a>.
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full btn-primary mt-4"
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
                      setFormData({
                        email: '',
                        company: '',
                        contactName: '',
                        whatsapp: '',
                        sector: '',
                        preferredSolution: '',
                        suggestions: '',
                        acceptTerms: false
                      });
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
