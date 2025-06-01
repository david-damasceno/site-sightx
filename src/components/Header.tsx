
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Info, Bot, LineChart, BookOpen } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura aproximada do header fixo
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section based on scroll position only on homepage
      if (isHomePage) {
        const sections = ['home', 'about', 'whatsapp', 'data-analysis', 'waitlist'];
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: <Home size={16} className="mr-1" />,
      showOnlyOnHome: false
    }, 
    {
      id: 'about',
      label: 'Sobre',
      path: '/#about',
      icon: <Info size={16} className="mr-1" />,
      showOnlyOnHome: true
    }, 
    {
      id: 'whatsapp',
      label: 'Donna',
      path: '/#whatsapp',
      icon: <Bot size={16} className="mr-1" />,
      showOnlyOnHome: true
    }, 
    {
      id: 'data-analysis',
      label: 'Análise',
      path: '/#data-analysis',
      icon: <LineChart size={16} className="mr-1" />,
      showOnlyOnHome: true
    },
    {
      id: 'blog',
      label: 'Blog',
      path: '/blog',
      icon: <BookOpen size={16} className="mr-1" />,
      showOnlyOnHome: false
    }
  ];

  const NavLink = ({
    id,
    label,
    path,
    icon,
    showOnlyOnHome
  }: {
    id: string;
    label: string;
    path: string;
    icon: React.ReactNode;
    showOnlyOnHome: boolean;
  }) => {
    // Não mostrar este item se deveria aparecer apenas na página inicial e não estamos na página inicial
    if (showOnlyOnHome && !isHomePage) {
      return null;
    }
    
    const isActive = isHomePage 
      ? activeSection === id
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

    const handleClick = (e: React.MouseEvent) => {
      // Se é uma seção da homepage e estamos na homepage
      if (isHomePage && path.startsWith('/#')) {
        e.preventDefault();
        const sectionId = path.substring(2); // Remove '/#'
        scrollToSection(sectionId);
      }
      // Se é uma seção da homepage mas não estamos na homepage
      else if (path.startsWith('/#') && !isHomePage) {
        // Deixa o Link navegar normalmente para a homepage com a âncora
        return;
      }
    };
      
    return (
      <Link 
        to={path} 
        className={`font-medium transition-colors relative px-2 py-1 group ${isActive ? 'text-sightx-purple' : 'text-gray-800 hover:text-sightx-purple'}`} 
        onClick={handleClick}
      >
        <div className="flex items-center">
          {icon}
          {label}
        </div>
        <span 
          className={`absolute bottom-0 left-0 h-0.5 bg-sightx-purple transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
        ></span>
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/sightx-logo.svg" 
              alt="SightX Logo" 
              className="h-10 mr-2 transition-transform hover:scale-105" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map(item => (
            <NavLink 
              key={item.id} 
              id={item.id} 
              label={item.label} 
              path={item.path}
              icon={item.icon}
              showOnlyOnHome={item.showOnlyOnHome}
            />
          ))}
          <Button 
            className="bg-sightx-purple hover:bg-sightx-purple/90 text-white shadow-md hover:shadow-lg transform transition-transform hover:scale-105" 
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                scrollToSection('waitlist');
              }
            }}
            asChild={!isHomePage}
          >
            {isHomePage ? (
              <span>Entrar na Lista</span>
            ) : (
              <Link to="/#waitlist">Entrar na Lista</Link>
            )}
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
            {menuItems
              .filter(item => !item.showOnlyOnHome || isHomePage)
              .map(item => {
                const handleMobileClick = (e: React.MouseEvent) => {
                  if (isHomePage && item.path.startsWith('/#')) {
                    e.preventDefault();
                    const sectionId = item.path.substring(2);
                    scrollToSection(sectionId);
                  }
                  setMobileMenuOpen(false);
                };

                return (
                  <Link 
                    key={item.id} 
                    to={item.path} 
                    className={`text-lg font-medium transition-colors 
                      ${(isHomePage && activeSection === item.id) || 
                        (!isHomePage && location.pathname === item.path) 
                          ? 'text-sightx-purple' 
                          : 'text-gray-800 hover:text-sightx-purple'
                      } flex items-center`} 
                    onClick={handleMobileClick}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })
            }
            <Button 
              className="bg-sightx-purple hover:bg-sightx-purple/90 text-white mt-6 w-3/4 shadow-md" 
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  scrollToSection('waitlist');
                } else {
                  setMobileMenuOpen(false);
                }
              }}
              asChild={!isHomePage}
            >
              {isHomePage ? (
                <span>Entrar na Lista</span>
              ) : (
                <Link to="/#waitlist">Entrar na Lista</Link>
              )}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
