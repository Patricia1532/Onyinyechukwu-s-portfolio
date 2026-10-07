
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CERTIFICATES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import TechStackGrid from './TechStackGrid';

interface FeaturedProjectsProps {
  onSelectProject?: (id: string) => void;
}

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  buttonBg?: string;
  buttonText?: string;
  liveLink?: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'spotlyte',
    category: 'Product Design / UX/UI',
    title: 'Spotlyte',
    description: 'Turns ordinary taxis into a measurable outdoor ad network with route-aware planning, live creative deployment, and performance tracking across Lagos.',
    image: '/spotlyte.png',
    buttonBg: '#650000',
    buttonText: '#FFFFFF'
  },
  {
    id: 'fjko-law',
    category: 'Product Design & Web',
    title: 'FKJO Law Firm',
    description: 'An authoritative yet approachable digital experience and client intake flow that clearly communicates the firm’s prestige and practice areas.',
    image: '/firm.png',
    buttonBg: '#650000',
    buttonText: '#FFFFFF',
    liveLink: 'https://fjkolaw.com/'
  },
  {
    id: 'gnc-perfume',
    category: 'E-commerce / Frontend',
    title: 'G&C Perfume',
    description: 'A clean, responsive, and visually engaging luxury fragrance e-commerce experience crafted with fluid front-end architecture and refined typography.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80',
    buttonBg: '#650000',
    buttonText: '#FFFFFF'
  }
];

export default function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05, triggerOnce: true });
  const [showArchives, setShowArchives] = useState(true);
  const [archiveTab, setArchiveTab] = useState<'certificates' | 'tech'>('tech');

  return (
    <section 
      ref={ref} 
      id="projects" 
      className="py-24 sm:py-36 relative overflow-hidden bg-[#EAF5FB]"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(234, 245, 251, 0.35) 0%, rgba(227, 242, 251, 0.15) 45%, rgba(205, 233, 248, 0.35) 100%),
          url("/set-sj-YLmiDAsWheY-unsplash.jpg"), 
          url("/clouds_blue_sky_bg.jpg")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Soft atmospheric overlay tuned to match homescreen light blue palette (#EAF5FB / #E3F2FB / #CDE9F8) */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(244, 250, 253, 0.30) 0%, rgba(227, 242, 251, 0.20) 60%, rgba(205, 233, 248, 0.40) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className={`mb-16 sm:mb-20 max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#89CFF0]/40 text-[#650000] text-xs font-mono tracking-wider mb-5 shadow-xs">
            <span>/ FEATURED PROJECTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#650000] tracking-tight leading-[1.15] drop-shadow-xs">
            Featured Projects
          </h2>
          <p className="mt-4 text-[#650000]/80 font-sans text-base sm:text-lg max-w-xl font-medium">
            Selected product designs, client platforms, and digital interfaces crafted with intent and precision.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BIG EXPANSIVE FEATURED CARDS (Exact match to IMG_6761 & Nadina)            */}
        {/* ========================================================================= */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`featured-card-${project.id}`}
              onClick={() => onSelectProject?.(project.id)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative w-full rounded-[36px] sm:rounded-[44px] lg:rounded-[52px] bg-[#F4F6F8]/98 backdrop-blur-xl p-6 sm:p-10 lg:p-14 xl:p-16 border border-white/90 shadow-[0_24px_64px_rgba(0,0,0,0.22)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.30)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[460px] lg:min-h-[540px]">
                
                {/* Left Side: Category Pill, Large Title, Description & Pill Button */}
                <div className="lg:col-span-6 flex flex-col justify-center items-start pr-0 lg:pr-6 order-2 lg:order-1">
                  
                  {/* Subtle Pill Tag (Exact match to IMG_6761) */}
                  <div className="mb-6 sm:mb-8">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCE4EC] border border-[#CBD5E1]/60 text-[#4A5568] text-xs sm:text-sm font-sans font-medium tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Clean Sans-Serif Project Title */}
                  <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A202C] tracking-tight leading-[1.12] mb-5 group-hover:text-[#650000] transition-colors">
                    {project.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="font-sans text-base sm:text-lg text-[#556170] leading-relaxed font-normal mb-8 sm:mb-10 max-w-lg">
                    {project.description}
                  </p>

                  {/* Pill CTA Button (Exact match to IMG_6761 "View Project") */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject?.(project.id);
                      }}
                      className="px-8 py-3.5 rounded-full bg-[#650000] hover:bg-[#7F0F21] text-white text-sm sm:text-base font-sans font-medium tracking-wide shadow-md shadow-[#650000]/20 flex items-center gap-2.5 transition-all duration-300 transform group-hover:scale-105"
                    >
                      <span>View Project</span>
                      <span className="text-sm sm:text-base">↗</span>
                    </button>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#650000] border border-[#CBD5E1] text-sm sm:text-base font-sans font-medium tracking-wide transition-all shadow-2xs flex items-center gap-2"
                      >
                        <span>Live Site</span>
                        <span className="text-xs">↗</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Side: Tall "Long Square" / Portrait Visual Card */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 h-full">
                  <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[500px] xl:h-[540px] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-white shadow-md border-2 border-white/90">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Subtle soft vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* CERTIFICATES & TECH STACK ARCHIVE (COLLAPSIBLE / EXPANDABLE)              */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-white/20">
          <div className="text-center">
            <button
              onClick={() => setShowArchives(!showArchives)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/95 hover:bg-white border border-white text-[#650000] text-xs font-sans font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all group"
            >
              <span>{showArchives ? 'Hide Archive & Credentials' : 'Explore Certifications & Tech Stack'}</span>
              <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${showArchives ? 'rotate-180' : 'rotate-0'}`}>
                expand_more
              </span>
            </button>
          </div>

          <AnimatePresence>
            {showArchives && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden mt-10"
              >
                {/* Archive Tabs */}
                <div className="flex justify-center mb-10">
                  <div className="inline-flex p-1 bg-white/80 rounded-2xl border border-white shadow-inner">
                    <button
                      onClick={() => setArchiveTab('certificates')}
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        archiveTab === 'certificates' 
                          ? 'bg-[#650000] text-white shadow-sm' 
                          : 'text-[#650000]/70 hover:text-[#650000]'
                      }`}
                    >
                      Certifications
                    </button>
                    <button
                      onClick={() => setArchiveTab('tech')}
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        archiveTab === 'tech' 
                          ? 'bg-[#650000] text-white shadow-sm' 
                          : 'text-[#650000]/70 hover:text-[#650000]'
                      }`}
                    >
                      Tech Stack &amp; Tools
                    </button>
                  </div>
                </div>

                {/* Certificates */}
                {archiveTab === 'certificates' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CERTIFICATES.map((cert) => (
                      <div 
                        key={cert.id} 
                        className="p-8 bg-white/90 rounded-3xl border border-white shadow-sm hover:shadow-lg transition-all group"
                      >
                        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#EAF5FB] text-[#650000] mb-6 shadow-xs group-hover:bg-[#650000] group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#650000] mb-2">{cert.title}</h3>
                        <p className="text-[#650000]/70 text-sm font-medium mb-1">{cert.issuer}</p>
                        <p className="text-xs text-[#89CFF0] font-mono mb-4">{cert.year}</p>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#650000] flex items-center gap-1">
                          Verified Credential
                          <span className="material-symbols-outlined text-sm">verified</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                {archiveTab === 'tech' && (
                  <div className="w-full max-w-5xl mx-auto">
                    <TechStackGrid />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
