
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  isProjectView?: boolean;
  currentPage?: 'home' | 'about' | 'project-detail';
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
  onReplaySplash?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  isProjectView, 
  currentPage = 'home',
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateContact,
  onReplaySplash 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Requested headings: Project, About, Resume
  const navItems = [
    { name: 'Project', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Resume', href: '#resume', id: 'resume', hasArrow: true },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();

    if (id === 'resume') {
      setShowResumeModal(true);
      setIsMenuOpen(false);
      return;
    }

    if (id === 'about') {
      if (onNavigateAbout) {
        onNavigateAbout();
      }
      setIsMenuOpen(false);
      return;
    }

    if (id === 'projects') {
      if (onNavigateProjects) {
        onNavigateProjects();
      } else if (onNavigateHome) {
        onNavigateHome();
        setTimeout(() => scrollToId('projects'), 100);
      } else {
        scrollToId('projects');
      }
      setIsMenuOpen(false);
      return;
    }

    if (id === 'contact') {
      if (onNavigateContact) {
        onNavigateContact();
      } else if (onNavigateHome) {
        onNavigateHome();
        setTimeout(() => scrollToId('contact'), 100);
      } else {
        scrollToId('contact');
      }
      setIsMenuOpen(false);
      return;
    }

    if (id === 'home') {
      if (onNavigateHome) {
        onNavigateHome();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }
    
    if (currentPage !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
    
    setIsMenuOpen(false);
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <>
      <nav 
        id="main-navigation" 
        className={`w-full fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 px-6 sm:px-10 lg:px-16 ${
          isScrolled ? 'pt-3 pb-3 sm:pt-4 sm:pb-3' : 'pt-6 pb-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* ========================================================================= */}
          {/* LEFT SIDE: Translucent Glass Pill for [Project, About, Resume ↗]          */}
          {/* Matches the glass capsule in IMG_6745.jpeg with baby blue/cherry red      */}
          {/* ========================================================================= */}
          <div className="flex items-center">
            {/* Desktop Capsule Pill with Transparent Frosted Glass */}
            <div 
              className={`hidden sm:flex items-center gap-6 md:gap-8 px-6 py-2.5 rounded-full border border-white/70 shadow-sm backdrop-blur-md transition-all duration-300 ${
                isScrolled ? 'bg-white/75 shadow-md shadow-[#650000]/5' : 'bg-white/50'
              }`}
              style={{
                boxShadow: isScrolled ? '0 6px 24px 0 rgba(101, 0, 0, 0.08)' : '0 4px 20px 0 rgba(137, 207, 240, 0.15)',
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`group flex items-center gap-1 text-[15px] font-sans font-medium tracking-tight transition-all duration-200 ${
                      isActive 
                        ? 'text-[#650000] font-semibold' 
                        : 'text-[#650000]/80 hover:text-[#650000]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasArrow && (
                      <span className="text-xs text-[#650000]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                        ↗
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Brand indicator */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={(e) => handleNavigation(e as any, 'home')}
                className="font-serif font-bold text-[#650000] text-lg tracking-tight"
              >
                PATRICIA
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: Replay Icon + Solid Cherry Red "Contact me" Pill Button       */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Replay splash screen button */}
            {onReplaySplash && (
              <button
                onClick={onReplaySplash}
                title="Replay Splash Screen"
                className="w-8 h-8 rounded-full text-[#650000]/70 hover:text-[#650000] hover:bg-white/40 flex items-center justify-center transition-all text-xs"
              >
                <span className="material-symbols-outlined text-base">auto_awesome</span>
              </button>
            )}

            {/* "Contact me" Rounded Pill Button in Cherry Red (#650000) */}
            <button
              onClick={(e) => handleNavigation(e as any, 'contact')}
              id="nav-contact-btn"
              className="px-6 sm:px-7 py-2.5 rounded-full bg-[#650000] text-white text-[14px] font-sans font-medium shadow-md shadow-[#650000]/20 hover:bg-[#7F0F21] transition-all transform active:scale-95 whitespace-nowrap"
            >
              Contact me
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex sm:hidden h-9 w-9 items-center justify-center rounded-full text-[#650000] hover:bg-white/50 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown with Translucent Glass Styling */}
        <div 
          className={`sm:hidden mt-3 rounded-2xl border border-white/60 transition-all duration-300 overflow-hidden shadow-xl backdrop-blur-xl pointer-events-auto ${
            isMenuOpen ? 'max-h-[300px] py-4 px-4 opacity-100' : 'max-h-0 py-0 px-4 opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'rgba(234, 245, 251, 0.95)',
          }}
        >
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavigation(e, item.id)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-[#650000] hover:bg-[#89CFF0]/20 transition-all text-left"
              >
                <span>{item.name}</span>
                {item.hasArrow && <span className="text-xs">↗</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* RESUME VIEWER MODAL                                                       */}
      {/* ========================================================================= */}
      {showResumeModal && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowResumeModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: 'radial-gradient(ellipse at 85% 15%, rgba(137, 207, 240, 0.25) 0%, transparent 60%)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#650000]/60 font-bold">
                  Curriculum Vitae
                </span>
                <h3 className="font-bodoni text-2xl sm:text-3xl font-bold text-[#650000]">
                  Patricia Eziashi
                </h3>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="w-9 h-9 rounded-full bg-[#EAF5FB] hover:bg-[#D5EEFB] text-[#650000] flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Resume Summary Details */}
            <div className="py-6 space-y-5 text-sm text-[#650000]/90">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#650000] mb-1">
                  Role & Specialization
                </h4>
                <p className="leading-relaxed">
                  Product Designer &amp; Front-End Developer with a background in Mass Communication. Specializing in UI/UX architecture, design systems, and responsive front-end engineering.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#650000] mb-1">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Product Design', 'UI/UX Design', 'React & TypeScript', 'Tailwind CSS', 'Figma', 'Wireframing & Prototyping', 'Design Systems', 'User Research'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#EAF5FB] text-[#650000] border border-[#89CFF0]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#650000] mb-1">
                  Education &amp; Background
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm">
                  B.Sc. Mass Communication &bull; UI/UX Specialization &bull; Modern Web Technologies
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-5 py-2 rounded-full text-xs font-semibold text-[#650000] hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
              <a href="/CVVS.pdf">
              <button
                onClick={() => {
                  alert('Downloading Patricia Eziashi Resume PDF...');
                  setShowResumeModal(false);
                }}
                className="px-6 py-2.5 rounded-full bg-[#650000] text-white text-xs font-semibold hover:bg-[#7F0F21] transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download Resume (PDF)</span>
              </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
