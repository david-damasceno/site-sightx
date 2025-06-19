
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/sightx-logo.svg" 
                alt="SightX Logo" 
                className="h-8 mr-3 filter brightness-0 invert" 
              />
              <span className="text-xl font-bold">SightX</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos dados dispersos em insights estratégicos para acelerar o crescimento da sua PME.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/#about" className="hover:text-white transition-colors">Sobre</a></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SightX. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link 
              to="/login" 
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Acesso restrito
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
