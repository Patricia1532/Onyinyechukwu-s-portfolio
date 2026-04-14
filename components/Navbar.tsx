import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  isProjectView?: boolean;
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isProjectView, onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    
    // If we are on a project detail page, we need to go back to home first
    if (isProjectView && onNavigateHome) {
      onNavigateHome();
      // Use a timeout to wait for the home view to mount before scrolling
      setTimeout(() => scrollToId(id), 50);
    } else {
      scrollToId(id);
    }
    
    setIsMenuOpen(false);
  };

  const scrollToId = (id: string) => {
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
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 lg:px-12 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between w-full max-w-[1600px] bg-primary/70 backdrop-blur-xl rounded-full p-2 lg:px-10 lg:py-3 shadow-[0_20px_50px_rgba(239,57,133,0.2)] border border-white/30">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-12 px-4 flex-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap ${
                activeSection === link.id
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* CTA / Email Button */}
        <button
          onClick={(e) => handleNavigation(e as any, 'contact')}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-primary flex items-center justify-center transition-all hover:bg-neutral-background hover:scale-105 active:scale-95 shadow-sm shrink-0"
          title="Contact Me"
        >
          <span className="material-symbols-outlined text-xl lg:text-2xl">mail</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-20 left-6 right-6 bg-primary/95 backdrop-blur-2xl rounded-[2rem] border border-white/20 transition-all duration-500 overflow-hidden shadow-2xl pointer-events-auto ${isMenuOpen ? 'max-h-[32rem] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col px-6 gap-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.id)}
              className={`px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${
                activeSection === link.id
                  ? 'bg-white text-primary'
                  : 'text-white/70 hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;