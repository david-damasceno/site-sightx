
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, LineChart, MessageSquare } from 'lucide-react';

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

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: null
    }, 
    {
      id: 'about',
      label: 'Sobre',
      icon: null
    }, 
    {
      id: 'donna',
      label: 'Donna',
      icon: <MessageSquare size={16} className="mr-1" />
    }, 
    {
      id: 'data-analysis',
      label: 'Análise',
      icon: <LineChart size={16} className="mr-1" />
    }, 
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: null
    }, 
    {
      id: 'demo',
      label: 'Demo',
      icon: null
    }
  ];

  const NavLink = ({
    id,
    label,
    icon
  }: {
    id: string;
    label: string;
    icon: React.ReactNode | null;
  }) => (
    <a 
      href={`#${id}`} 
      className={`font-medium transition-colors relative px-2 py-1 ${activeSection === id ? 'text-sightx-purple' : 'text-gray-800 hover:text-sightx-purple'}`} 
      onClick={() => setMobileMenuOpen(false)}
    >
      <div className="flex items-center">
        {icon}
        {label}
      </div>
      <span 
        className={`absolute bottom-0 left-0 h-0.5 bg-sightx-purple transition-all duration-300 ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`}
      ></span>
    </a>
  );

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/sightx-logo.svg" 
              alt="SightX Logo" 
              className="h-10 mr-2 transition-transform hover:scale-105" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map(item => (
            <NavLink 
              key={item.id} 
              id={item.id} 
              label={item.label} 
              icon={item.icon} 
            />
          ))}
          <Button 
            className="bg-sightx-purple hover:bg-sightx-purple/90 text-white shadow-md hover:shadow-lg transform transition-transform hover:scale-105" 
            asChild
          >
            <a href="#waitlist">Entrar na Lista</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sightx-black p-2 rounded-md hover:bg-gray-100 transition-colors" 
          onClick={toggleMobileMenu} 
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40 animate-fade-in">
          <nav className="flex flex-col items-center pt-8 gap-6">
            {menuItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`text-lg font-medium transition-colors ${activeSection === item.id ? 'text-sightx-purple' : 'text-gray-800 hover:text-sightx-purple'} flex items-center`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <Button 
              className="bg-sightx-purple hover:bg-sightx-purple/90 text-white mt-6 w-3/4 shadow-md" 
              onClick={() => setMobileMenuOpen(false)} 
              asChild
            >
              <a href="#waitlist">Entrar na Lista</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
