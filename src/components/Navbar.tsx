import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    isScrolled || !isHomePage ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg border-b border-secondary/10' : 'bg-transparent py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl md:text-3xl font-semibold text-secondary italic tracking-wider">
          I Creations
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {[{name: 'Home', path: '/'}, {name: 'Portfolio', path: '/portfolio'}, {name: 'Services', path: '/services'}, {name: 'Gallery', path: '/gallery'}, {name: 'About', path: '/about'}].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-sm uppercase tracking-[0.2em] hover:text-secondary transition-colors font-semibold ${
                location.pathname === item.path ? 'text-secondary' : 'text-accent/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="text-accent/80 hover:text-secondary transition-colors p-2 rounded-full hover:bg-secondary/10 ml-2"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/contact" className="ml-2 px-6 py-2 border border-secondary text-secondary uppercase tracking-widest text-xs font-bold hover:bg-secondary hover:text-[var(--bg-color)] transition-all duration-300">
            Inquire Now
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="text-accent/80 hover:text-secondary transition-colors"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="text-secondary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-lg flex flex-col items-center py-8 gap-6 border-t border-white/10 md:hidden"
        >
           {[{name: 'Home', path: '/'}, {name: 'Portfolio', path: '/portfolio'}, {name: 'Services', path: '/services'}, {name: 'Gallery', path: '/gallery'}, {name: 'About', path: '/about'}, {name: 'Contact', path: '/contact'}].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`text-sm uppercase tracking-[0.2em] transition-colors font-semibold ${
                location.pathname === item.path ? 'text-secondary' : 'text-accent hover:text-secondary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
