
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-sightx-purple">Política de Privacidade</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Introdução</h2>
              <p>
                A SightX está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais quando você visita nosso site ou se inscreve em nossa lista de espera.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Coleta de Informações</h2>
              <p>
                Coletamos informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail, número de telefone, nome da empresa e setor quando você se inscreve em nossa lista de espera ou preenche formulários em nosso site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Uso das Informações</h2>
              <p>
                Usamos as informações coletadas para:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Gerenciar sua participação na nossa lista de espera</li>
                <li>Fornecer informações sobre nossos produtos e serviços</li>
                <li>Personalizar sua experiência em nosso site</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Entrar em contato com você sobre atualizações, ofertas especiais ou outras informações que acreditamos ser do seu interesse</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto conforme descrito nesta Política de Privacidade. Podemos compartilhar informações com prestadores de serviços confiáveis que nos ajudam em nossas operações comerciais, sempre garantindo a confidencialidade de suas informações.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Proteção de Informações</h2>
              <p>
                Implementamos medidas de segurança apropriadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição de suas informações pessoais. As informações são armazenadas em ambientes seguros e todos os dados sensíveis são criptografados.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Nosso site pode usar cookies e tecnologias semelhantes para melhorar sua experiência, analisar tendências e administrar o site. Você pode controlar o uso de cookies no nível do navegador, mas isso pode limitar sua capacidade de usar alguns recursos do nosso site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais. Se você deseja exercer qualquer um desses direitos, entre em contato conosco através do email privacidade@sightx.com.br.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível em nosso site, com a data da última atualização indicada.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">9. Contato</h2>
              <p>
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas relacionadas aos seus dados pessoais, entre em contato conosco através do email privacidade@sightx.com.br.
              </p>
            </section>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Última atualização: 11 de abril de 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidade;
