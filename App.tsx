
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignProcess from './components/DesignProcess';
import FeaturedProjects from './components/FeaturedProjects';
import About from './components/About';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ProjectDetail from './components/ProjectDetail';
import SparkleCursor from './components/SparkleCursor';

type PageView = 'home' | 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Check initial URL hash on mount
  useEffect(() => {
    if (window.location.hash === '#about') {
      setCurrentPage('about');
    }
  }, []);

  useEffect(() => {
    // When a project is selected, active section is 'projects'
    if (selectedProjectId) {
      setActiveSection('projects');
      window.scrollTo(0, 0);
      return;
    }

    // When on dedicated About page, active section is 'about'
    if (currentPage === 'about') {
      setActiveSection('about');
      window.scrollTo(0, 0);
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'process', 'projects', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProjectId, currentPage]);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setSelectedProjectId(null);
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProjects = () => {
    setSelectedProjectId(null);
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateContact = () => {
    setSelectedProjectId(null);
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SparkleCursor />
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      
      <div className="flex flex-col min-h-screen flex-grow">
        {/* Navbar is rendered across all pages */}
        <Navbar 
          activeSection={activeSection} 
          isProjectView={!!selectedProjectId}
          currentPage={selectedProjectId ? 'project-detail' : currentPage}
          onNavigateHome={handleBackToHome}
          onNavigateAbout={handleNavigateAbout}
          onNavigateProjects={handleNavigateProjects}
          onNavigateContact={handleNavigateContact}
          onReplaySplash={() => setShowSplash(true)}
        />
        
        <main className="flex-grow">
          {selectedProjectId ? (
            <ProjectDetail 
              projectId={selectedProjectId} 
              onBack={handleBackToHome} 
            />
          ) : currentPage === 'about' ? (
            <About 
              onNavigateHome={handleBackToHome}
              onNavigateProjects={handleNavigateProjects}
              onNavigateContact={handleNavigateContact}
            />
          ) : (
            <>
              <section id="home">
                <Hero onNavigateAbout={handleNavigateAbout} />
              </section>
              <section id="process">
                <DesignProcess />
              </section>
              <section id="projects">
                <FeaturedProjects onSelectProject={handleProjectSelect} />
              </section>
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
