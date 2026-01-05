import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
        
          <span className="text-lg font-bold tracking-tight text-neutral-text">Patricia Eziashi</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={(e) => scrollToSection(e as any, 'contact')}
            className="hidden md:block rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 active:translate-y-0"
          >
            Let's Talk
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[32rem] py-4 opacity-100 shadow-xl' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col px-6 gap-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeSection === link.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e) => scrollToSection(e as any, 'contact')}
            className="mt-4 block w-full text-center rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;