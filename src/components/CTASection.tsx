
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface CTASectionProps {
  id?: string;
}

// Define o schema de validação Zod
const waitlistFormSchema = z.object({
  contactName: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  company: z.string().min(2, {
    message: "O nome da empresa deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  whatsapp: z.string().min(10, {
    message: "Por favor, insira um número de WhatsApp válido.",
  }),
  sector: z.string({
    required_error: "Por favor, selecione um setor.",
  }),
  preferredSolution: z.string({
    required_error: "Por favor, selecione uma solução preferida.",
  }),
  suggestions: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos para continuar.",
  }),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

const CTASection = ({
  id
}: CTASectionProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Inicializar o formulário com validação de zod
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      contactName: '',
      company: '',
      email: '',
      whatsapp: '',
      sector: '',
      preferredSolution: '',
      suggestions: '',
      acceptTerms: false,
    },
  });

  const handleSubmit = async (values: WaitlistFormValues) => {
    setLoading(true);

    try {
      // Salvar dados no Supabase com validação
      const { data, error } = await supabase
        .from('waitlist')
        .insert({
          email: values.email,
          company: values.company,
          contact_name: values.contactName,
          whatsapp: values.whatsapp,
          sector: values.sector,
          preferred_solution: values.preferredSolution,
          suggestions: values.suggestions || null
        });

      if (error) {
        if (error.code === '23505') {
          // Violação de restrição única (email já existe)
          toast({
            title: "E-mail já cadastrado",
            description: "Este e-mail já está na nossa lista de espera.",
            variant: "destructive"
          });
        } else {
          console.error('Error inserting data:', error);
          toast({
            title: "Erro ao processar inscrição",
            description: "Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.",
            variant: "destructive"
          });
        }
      } else {
        setSubmitted(true);
        toast({
          title: "Inscrição realizada!",
          description: "Você foi adicionado à nossa lista de espera."
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao processar inscrição",
        description: "Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="section-padding py-[10px]">
      <div className="container-custom py-[10px]">
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sightx-purple font-bold text-xl">Entre na lista de espera</h3>
                      <div className="text-xs text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                        Formulário seguro
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Nome completo <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome" {...field} aria-required="true" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Nome da empresa <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Sua empresa" {...field} aria-required="true" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              E-mail corporativo <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} aria-required="true" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              WhatsApp <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="(XX) XXXXX-XXXX" {...field} aria-required="true" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="sector"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Setor <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="input-custom" aria-required="true">
                                  <SelectValue placeholder="Selecione o setor" />
                                </SelectTrigger>
                              </FormControl>
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
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="preferredSolution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Solução preferida <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="input-custom" aria-required="true">
                                  <SelectValue placeholder="Escolha uma solução" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="google_maps">Análise de Google Maps</SelectItem>
                                <SelectItem value="social_media">Análise de Mídias Sociais</SelectItem>
                                <SelectItem value="geographic">Análise Geográfica</SelectItem>
                                <SelectItem value="donna_assistant">Assistente Virtual Donna</SelectItem>
                                <SelectItem value="todas">Todas as soluções</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="suggestions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">
                            Sugestões de outras soluções
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              className="input-custom min-h-[80px]" 
                              placeholder="Compartilhe suas ideias para novas soluções..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="acceptTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 mt-4">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                              className="mt-1"
                              aria-required="true"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-xs text-gray-600 font-normal">
                              Concordo em receber comunicações da SightX e confirmo que li e aceito os 
                              <a href="/termos" className="text-sightx-purple font-medium hover:underline"> Termos de Uso </a> 
                              e a 
                              <a href="/privacidade" className="text-sightx-purple font-medium hover:underline"> Política de Privacidade</a>.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full btn-primary mt-4" disabled={loading}>
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
                </Form>
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
                  <Button variant="outline" className="btn-outline" onClick={() => {
                    setSubmitted(false);
                    form.reset();
                  }}>
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
