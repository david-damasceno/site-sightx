
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center h-20">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/sightx-logo.svg" alt="SightX Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-sightx-purple">
              Sight<span className="text-sightx-green">X</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-sightx-purple transition-colors">
            Home
          </a>
          <a href="#about" className="font-medium hover:text-sightx-purple transition-colors">
            Sobre
          </a>
          <a href="#donna" className="font-medium hover:text-sightx-purple transition-colors">
            Donna
          </a>
          <a href="#demo" className="font-medium hover:text-sightx-purple transition-colors">
            Demo
          </a>
          <Button className="btn-primary">Entrar na Lista</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sightx-black"
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
            <a 
              href="#home" 
              className="text-xl font-medium hover:text-sightx-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-xl font-medium hover:text-sightx-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#donna" 
              className="text-xl font-medium hover:text-sightx-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donna
            </a>
            <a 
              href="#demo" 
              className="text-xl font-medium hover:text-sightx-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </a>
            <Button 
              className="btn-primary mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entrar na Lista
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
