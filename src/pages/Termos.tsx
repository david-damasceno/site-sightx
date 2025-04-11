
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Termos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-sightx-purple">Termos de Uso</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site da SightX, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar o site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Alterações nos Termos</h2>
              <p>
                A SightX reserva-se o direito de revisar e atualizar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após serem publicadas no site. Seu uso continuado do site após tais modificações constitui sua aceitação dos Termos de Uso revisados.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Uso do Site</h2>
              <p>
                Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de qualquer pessoa, não restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Lista de Espera</h2>
              <p>
                Ao se inscrever em nossa lista de espera, você concorda em fornecer informações precisas e atuais. A SightX pode usar essas informações para entrar em contato com você sobre nossos produtos e serviços.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo disponível no site, incluindo, mas não limitado a, texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da SightX ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância, a SightX será responsável por quaisquer danos diretos, indiretos, incidentais, consequentes, especiais ou punitivos resultantes do uso ou da incapacidade de usar o site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Contato</h2>
              <p>
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do email contato@sightx.com.br.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termos;
