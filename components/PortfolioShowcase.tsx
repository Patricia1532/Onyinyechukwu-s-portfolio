
import React, { useState, useRef } from 'react';
import { PROJECTS, CERTIFICATES } from '../constants';
import { TabType } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import TechStackGrid from './TechStackGrid';

interface PortfolioShowcaseProps {
  onSelectProject?: (id: string) => void;
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.PROJECTS);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <section ref={ref} id="projects" className="py-24 sm:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-burgundy text-xs font-bold uppercase tracking-widest mb-4">
            <span>02</span>
            <span>•</span>
            <span>Selected Works & Archives</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-burgundy">Portfolio Showcase</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 no-scrollbar">
          <div className="inline-flex p-1.5 bg-creme-light rounded-2xl border border-creme shadow-inner relative whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 z-10 ${
                  activeTab === tab ? 'text-creme' : 'text-neutral-muted hover:text-burgundy'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-burgundy rounded-xl -z-10 shadow-lg shadow-burgundy/20"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className={`min-h-[550px] relative transition-opacity duration-200 ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
          
          {/* Projects Grid */}
          {activeTab === TabType.PROJECTS && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {PROJECTS.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => {
                    if (project.link && project.link !== '#') {
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    } else {
                      onSelectProject?.(project.id);
                    }
                  }}
                  className="group relative bg-creme-light/60 rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-creme hover:border-sand hover:shadow-2xl hover:shadow-burgundy/10 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden relative bg-neutral-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {project.badge && (
                      <div className="absolute top-5 right-5 px-3.5 py-1 bg-white/95 backdrop-blur-md shadow-sm rounded-full z-10 border border-sand/40">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy">
                          {project.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-0.5 bg-dustyPink/20 text-burgundy text-[10px] font-bold uppercase tracking-wider rounded-full border border-dustyPink/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-burgundy mb-2 group-hover:text-burgundy-light transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-creme/80 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-burgundy font-bold text-xs uppercase tracking-widest group/link">
                        {project.link && project.link !== '#' ? 'Visit Live Website' : 'Read Case Study'} 
                        <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">
                          north_east
                        </span>
                      </span>
                      <span className="text-xs text-neutral-muted/60 font-serif italic">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Grid */}
          {activeTab === TabType.CERTIFICATES && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="p-8 bg-creme-light/80 rounded-3xl border border-creme hover:border-sand hover:shadow-xl hover:shadow-burgundy/5 transition-all duration-300 group">
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white text-burgundy mb-6 shadow-sm group-hover:bg-burgundy group-hover:text-creme transition-colors">
                    <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-burgundy mb-2">{cert.title}</h3>
                  <p className="text-neutral-muted font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-sand-dark mb-6">{cert.year}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-burgundy hover:text-dustyPink-dark hover:underline underline-offset-4 flex items-center gap-1"
                  >
                    View Credential
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Grid */}
          {activeTab === TabType.TECH_STACK && (
            <div id="skills" className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <TechStackGrid />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
