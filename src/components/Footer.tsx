import { ArrowUp } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-sightx-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <div className="mb-6">
              <a href="#" className="flex items-center">
                <img src="/sightx-logo.svg" alt="SightX Logo" className="h-10 mr-2" />
                <span className="text-2xl font-bold text-white">
                  Sight<span className="text-white">X</span>
                </span>
              </a>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando dados em insights estratégicos para PMEs através de inteligência artificial e análise avançada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.16c-.73.33-1.51.55-2.33.65.84-.5 1.48-1.29 1.78-2.23-.79.47-1.66.81-2.6 1-1.19-1.27-2.84-1.58-4.44-.83-1.6.75-2.63 2.34-2.63 4.08v1c-3.32-.17-6.23-1.73-8.2-4.29-1.04 1.81-.92 4.07.36 5.74a4.06 4.06 0 01-1.87-.52v.05c0 1.88 1.33 3.5 3.19 3.89-.55.15-1.13.17-1.69.07.51 1.61 1.97 2.72 3.65 2.75-1.54 1.21-3.44 1.72-5.36 1.51 1.63 1.05 3.51 1.6 5.44 1.6 6.53 0 10.1-5.41 10.1-10.1 0-.15 0-.3-.01-.45.73-.53 1.36-1.18 1.86-1.93z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">Sobre nós</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">Missão</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">Valores</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">Carreira</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-white">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">Demo</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1 duration-200 block">Suporte</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-4 text-white">Contato</h4>
            <p className="text-gray-400 mb-4">
              Entre em contato conosco para saber mais sobre como a SightX pode transformar o seu negócio.
            </p>
            <div className="flex items-center text-gray-400 mb-3 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
              </svg>
              <span>suporte@sightx.com.br</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+55 (11) 99496-9039</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SightX. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
          
          <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-sightx-purple p-3 rounded-full shadow-lg hover:bg-sightx-green transition-colors duration-300 transform hover:scale-110" aria-label="Voltar ao topo">
            <ArrowUp className="text-white h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;