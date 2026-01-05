
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    // When a project is selected, we are effectively in the 'projects' context
    if (selectedProjectId) {
      setActiveSection('projects');
      window.scrollTo(0, 0);
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
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
  }, [selectedProjectId]);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      
      <div className={`transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navbar is now always rendered */}
        <Navbar 
          activeSection={activeSection} 
          isProjectView={!!selectedProjectId}
          onNavigateHome={handleBackToHome}
        />
        
        <main className="flex-grow">
          {selectedProjectId ? (
            <ProjectDetail 
              projectId={selectedProjectId} 
              onBack={handleBackToHome} 
            />
          ) : (
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <PortfolioShowcase onSelectProject={handleProjectSelect} />
              </section>
              <section id="contact">
                <Contact />
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

