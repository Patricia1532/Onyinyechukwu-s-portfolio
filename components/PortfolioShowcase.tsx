
import React, { useState, useEffect } from 'react';
import { PROJECTS, CERTIFICATES, TECH_STACK } from '../constants';
import { TabType } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PortfolioShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.PROJECTS);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const tabs = Object.values(TabType);

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Selected Works</span>
          <h2 className="text-4xl lg:text-5xl font-black text-neutral-text">Portfolio Showcase</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 no-scrollbar">
          <div className="inline-flex p-1.5 bg-neutral-background rounded-2xl border border-gray-100 shadow-sm relative whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative px-6 sm:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 ${
                  activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-lg shadow-primary/30 animate-in fade-in zoom-in-95 duration-200"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className={`min-h-[600px] relative transition-opacity duration-200 ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
          {activeTab === TabType.PROJECTS && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group relative bg-neutral-background rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {project.badge && (
                      <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/95 backdrop-blur shadow-sm rounded-full z-10 border border-primary/20">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary animate-pulse-soft">
                          {project.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black text-neutral-text mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">{project.description}</p>
                    <a href={project.link} className="inline-flex items-center gap-2 text-primary font-bold group/link">
                      View Project <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">north_east</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === TabType.CERTIFICATES && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="p-8 bg-neutral-background rounded-[2rem] border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 group">
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-text mb-2">{cert.title}</h3>
                  <p className="text-gray-500 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-400 mb-6">{cert.year}</p>
                  <a href={cert.link} className="text-sm font-bold text-primary hover:underline underline-offset-4">View Certificate</a>
                </div>
              ))}
            </div>
          )}

          {activeTab === TabType.TECH_STACK && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center p-8 bg-neutral-background rounded-[2rem] border border-transparent hover:border-primary/20 hover:bg-white transition-all hover:shadow-lg group">
                  <div className={`mb-4 transition-transform group-hover:scale-110 group-hover:animate-bounce ${tech.color}`}>
                    <span className="material-symbols-outlined text-5xl">{tech.icon}</span>
                  </div>
                  <span className="font-bold text-gray-700 text-sm group-hover:text-primary transition-colors text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;