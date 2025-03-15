
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/sightx-logo.svg" alt="SightX Logo" className="h-10 mr-2" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-sightx-purple transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sightx-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="font-medium hover:text-sightx-purple transition-colors relative group">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sightx-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#donna" className="font-medium hover:text-sightx-purple transition-colors relative group">
            Donna
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sightx-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#data-analysis" className="font-medium hover:text-sightx-purple transition-colors relative group">
            Análise
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sightx-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#whatsapp" className="font-medium hover:text-sightx-purple transition-colors relative group">
            WhatsApp
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sightx-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#demo" className="font-medium hover:text-sightx-purple transition-colors relative group">
            Demo
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sightx-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Button className="btn-primary shadow-md hover:shadow-lg" asChild>
            <a href="#waitlist">Entrar na Lista</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sightx-black p-2 rounded-md hover:bg-gray-100" 
          onClick={toggleMobileMenu} 
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 animate-fade-in">
          <nav className="flex flex-col items-center pt-8 space-y-6">
            <a href="#home" className="text-xl font-medium hover:text-sightx-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-xl font-medium hover:text-sightx-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Sobre
            </a>
            <a href="#donna" className="text-xl font-medium hover:text-sightx-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Donna
            </a>
            <a href="#data-analysis" className="text-xl font-medium hover:text-sightx-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Análise
            </a>
            <a href="#whatsapp" className="text-xl font-medium hover:text-sightx-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              WhatsApp
            </a>
            <a href="#demo" className="text-xl font-medium hover:text-sightx-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Demo
            </a>
            <Button className="btn-primary mt-6 w-3/4" onClick={() => setMobileMenuOpen(false)}>
              Entrar na Lista
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
