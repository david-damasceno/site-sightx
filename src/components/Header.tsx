import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section based on scroll position
      const sections = ['home', 'about', 'donna', 'data-analysis', 'whatsapp', 'demo', 'waitlist'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'Sobre'
  }, {
    id: 'donna',
    label: 'Donna'
  }, {
    id: 'data-analysis',
    label: 'Análise'
  }, {
    id: 'whatsapp',
    label: 'WhatsApp'
  }, {
    id: 'demo',
    label: 'Demo'
  }];
  const NavLink = ({
    id,
    label
  }: {
    id: string;
    label: string;
  }) => <a href={`#${id}`} className={`font-medium transition-colors relative group ${activeSection === id ? 'text-sightx-purple' : 'hover:text-sightx-purple'}`} onClick={() => setMobileMenuOpen(false)}>
      {label}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-sightx-purple transition-all duration-300 ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </a>;
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/sightx-logo.svg" alt="SightX Logo" className="h-10 mr-2 transition-transform hover:scale-105" />
            
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map(item => <NavLink key={item.id} id={item.id} label={item.label} />)}
          <Button className="btn-primary shadow-md hover:shadow-lg transform transition-transform hover:scale-105" asChild>
            <a href="#waitlist">Entrar na Lista</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-sightx-black p-2 rounded-md hover:bg-gray-100 transition-colors" onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-md z-40 animate-fade-in">
          <nav className="flex flex-col items-center pt-8 space-y-6">
            {menuItems.map(item => <a key={item.id} href={`#${item.id}`} className={`text-xl font-medium transition-colors ${activeSection === item.id ? 'text-sightx-purple' : 'hover:text-sightx-purple'}`} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>)}
            <Button className="btn-primary mt-6 w-3/4 shadow-md" onClick={() => setMobileMenuOpen(false)} asChild>
              <a href="#waitlist">Entrar na Lista</a>
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;