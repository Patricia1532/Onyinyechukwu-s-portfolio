
import React, { useEffect, useState, useRef } from 'react';
import { CASE_STUDIES } from '../components/data/caseStudies';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  if (projectId === 'fjko-law') {
    const showcaseViews = [
      { img: 'About.png', label: 'View 01: About' },
      { img: 'tise.png', label: 'View 02: Expertise' },
      { img: 'ppl.png', label: 'View 03: People' },
      { img: 'Resources.png', label: 'View 04: Resources' },
      { img: 'Career.png', label: 'View 05: Careers' },
      { img: 'abo.png', label: 'View 06: styling about' },
      { img: 'exp.png', label: 'styling expertise' },
      { img: 'res.png', label: 'View 08: styling resources' }
    ];

    return (
      <div className="bg-white min-h-screen animate-in fade-in duration-700 relative">
        {/* Lightbox / Modal for Enlarge Prototype */}
        {enlargedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-all duration-300 cursor-zoom-out"
            onClick={() => setEnlargedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[110]"
              onClick={() => setEnlargedImage(null)}
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center p-4">
              <img 
                src={enlargedImage} 
                alt="Enlarged Prototype" 
                className="max-w-full max-h-full rounded-2xl shadow-2xl border-4 border-white/10 animate-in zoom-in-95 duration-300 object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Back Button */}
        <button 
          onClick={onBack}
          className="fixed top-8 left-8 z-50 h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-black hover:bg-white transition-all shadow-md group"
        >
          <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
        </button>

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 pt-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                <span className="material-symbols-outlined text-[12px] align-middle mr-1">assignment</span>
                Case Study: FJKO Law Firm
              </span>
              <h1 className="text-5xl lg:text-7xl font-serif font-black text-neutral-text leading-[1.1] mb-8">
                Designing a Modern Law Firm Website Experience
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
                Establishing a digital presence for FJKO that centers on clarity, accessibility, and professional trust to bridge the gap between legal expertise and client needs.
              </p>
              <div className="flex gap-4">
                <a href="https://fjkolaw.com/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">View Live site</button>
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-2 -z-10 transition-transform group-hover:rotate-1"></div>
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img 
                  src="/firm.png" 
                  alt="Law Firm Dashboard Mockup" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Metadata Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-100 mb-24">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Role</p>
              <p className="font-bold text-neutral-text">UX/UI Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Tools</p>
              <p className="font-bold text-neutral-text">Figma</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Timeline</p>
              <p className="font-bold text-neutral-text">4 weeks (Oct 2025)</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Deliverables</p>
              <p className="font-bold text-neutral-text">Research, UI Design</p>
            </div>
          </div>

          {/* The Challenge */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-serif font-black mb-8 text-center">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
              FJKO is a newly established law firm entering a highly competitive market. They faced the unique challenge of needing to appear as a modern, forward-thinking practice while simultaneously projecting the authority and reliability of a long-standing institution.
              <br /><br />
              The primary goal was to create an approachable yet authoritative digital presence that simplifies the often-intimidating process of seeking legal counsel.
            </p>
            <div className="bg-primary/5 p-12 rounded-[2rem] border border-primary/10 relative">
              <p className="text-xl italic font-medium text-neutral-text text-center relative z-10 leading-relaxed">
                "How might we build a digital foundation for FJKO that balances approachable accessibility with the gravitas required of professional legal services?"
              </p>
            </div>
          </div>

          {/* Research & Discovery */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="material-symbols-outlined text-primary text-3xl">explore</span>
              <h2 className="text-3xl font-serif font-black">Research & Discovery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'smartphone', title: 'Mobile-First Behavior', desc: 'Data showed clients often research legal issues during high-pressure moments, necessitating a robust mobile experience.', color: 'text-pink-500' },
                { icon: 'lightbulb', title: 'Immediate Clarity', desc: 'Users drop off if practice areas aren\'t immediately visible. Navigation must provide answers within three seconds of landing.', color: 'text-rose-400' },
                { icon: 'verified_user', title: 'Trust & Credibility', desc: 'Legal expertise must be validated through clear credential displays, accolades, and transparent service descriptions.', color: 'text-indigo-400' },
                { icon: 'groups', title: 'Human Connection', desc: 'Law is personal. Users prioritize seeing the faces of the attorneys they will be working with to build initial rapport.', color: 'text-red-400' }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white rounded-[2rem] border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`h-12 w-12 flex items-center justify-center mb-6 ${item.color}`}>
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideation */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="material-symbols-outlined text-primary text-3xl">sticky_note_2</span>
              <h2 className="text-3xl font-serif font-black">Ideation</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  The ideation phase was about translating raw empathy maps and user pain points into a cohesive digital structure. We moved from sticky-note brainstorming to a refined information hierarchy.
                </p>
                <ul className="space-y-4">
                  {[
                    'PRIORITIZING CASE EVALUATION',
                    'STREAMLINED ATTORNEY DIRECTORY',
                    'CONTEXTUAL RESOURCES'
                  ].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-black tracking-widest text-primary uppercase">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-2 -z-10 transition-transform group-hover:rotate-1"></div>
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                  <img 
                    src="/sticky.png" 
                    alt="Law Firm sticky notes mock up" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Information Architecture */}
          <div className="mb-32">
            <h2 className="text-3xl font-serif font-black mb-8 text-center">Information Architecture</h2>
            <p className="text-lg text-gray-500 text-center mb-16 max-w-3xl mx-auto">
              A streamlined sitemap was developed to reduce cognitive friction. We grouped content into seven logical pillars that guide a visitor from initial inquiry to hiring.
            </p>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-2 -z-10 transition-transform group-hover:rotate-1"></div>
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img 
                  src="/sitemapp.png" 
                  alt="Law firm sitemap" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-12 text-black/50 text-[10px] font-bold tracking-[0.2em] uppercase text-center">Site Map Structure</div>
          </div>

          {/* Visual Identity */}
          <div className="mb-32">
            <h2 className="text-3xl font-serif font-black mb-16">Visual Identity: Vibrant & Modern</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <p className="text-lg text-gray-500 leading-relaxed">
                  The FJKO palette utilizes Navy blue and gold which i believe are traditional markers of prestige and reliability and also reimagined with modern digital accessibility standards in mind.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 bg-[#0F172A] rounded-lg shadow-inner"></div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest">Midnight Navy #0F172A</p>
                      <p className="text-xs text-gray-400 italic">Primary-Authority, Expertise, Stability</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 bg-[#B59410] border border-gray-100 rounded-lg shadow-inner"></div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest">Heritage Gold #B59410</p>
                      <p className="text-xs text-gray-400 italic">Accent-Precision, Prestige, Action</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-neutral-background rounded-2xl flex items-center gap-8">
                  <div className="h-12 w-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                    <span className="text-xl font-serif font-black">Aa</span>
                  </div>
                  <div>
                    <p className="font-serif font-black text-lg mb-1">Merriweather & Public Sans</p>
                    <p className="text-sm text-gray-500 font-medium italic">Editorial Serif for impact, Neutral Sans for utility</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/mock.png" 
                  alt="Moodboard" 
                  className="rounded-[2.5rem] shadow-xl"
                />
                <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center italic">
                  MOODBOARD: MODERN HIGH-IMPACT PROFESSIONALISM
                </p>
              </div>
            </div>
          </div>

          {/* Final Interface Showcase */}
          <div className="mb-32">
            <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
              <h2 className="text-3xl font-serif font-black">Final Wireframe Showcase and styling</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {showcaseViews.map((view, i) => (
                <div key={i} className="flex flex-col items-center group animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-full aspect-[4/5] bg-neutral-background rounded-[2.5rem] overflow-hidden shadow-lg relative transition-all group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-100">
                    <img 
                      src={view.img} 
                      alt={view.label} 
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setEnlargedImage(view.img)}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="absolute bottom-8 left-0 right-0 px-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <button 
                        onClick={() => setEnlargedImage(view.img)}
                        className="w-full py-4 bg-[#EB2777] text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl hover:bg-primary transition-colors flex items-center justify-center gap-2"
                      >
                        Explore Wireframe
                        <span className="material-symbols-outlined text-sm">open_in_full</span>
                      </button>
                    </div>
                  </div>
                  <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] group-hover:text-primary transition-colors text-center">{view.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-8">
              <span className="material-symbols-outlined text-2xl">check_box</span>
            </div>
            <h2 className="text-3xl font-serif font-black mb-8">Reflection & Outcomes</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Designing for professional services like FJKO requires a deep understanding of <span className="text-primary font-bold">emotional intelligence in UX</span> and visual impact. My goal was to translate complex client objectives into a narrative that speaks to human first and legal experts second.
              The success of this project is hinged on the balance of authoritative aesthetics and user-centered simplicity. By focusing on accessibility and clear call to action, we were able to create a platform that doesn't just display information but actively facilitates the attorney and client relationship.
            </p>
            <div className="h-[2px] w-24 bg-primary mx-auto mb-12"></div>
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-primary transition-all group"
            >
              <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
              Back to Showcase
            </button>
          </div>
        </div>
      </div>
    );
  }

  const data = CASE_STUDIES[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-display mb-4">Project Not Found</h1>
        <button onClick={onBack} className="text-primary font-bold">Return to Portfolio</button>
      </div>
    );
  }

  if (data.layout === 'deck') {
    return (
      <div className="min-h-screen bg-white text-neutral-text font-sans overflow-x-hidden pb-24">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="fixed top-8 left-8 z-50 h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-black hover:bg-white transition-all shadow-md group"
        >
          <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
        </button>

        {/* 1. Hero Section */}
        <section className="relative h-[90vh] w-full overflow-hidden">
          <img 
            src={data.visualIdentity.image} 
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-3xl animate-in slide-in-from-left duration-1000">
                <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                  Personal Project
                </span>
                <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-[1.1] mb-8 drop-shadow-xl">
                  {data.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light drop-shadow-md">
                  {data.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Project Overview Section */}
        <section className="py-24 lg:py-32 bg-neutral-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Left Side */}
              <div className="animate-in fade-in duration-1000">
                <h2 className="text-3xl lg:text-4xl font-display font-black mb-8 leading-tight">
                  Project Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {data.overview}
                </p>
                <motion.a 
                  href={data.deckData?.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all cursor-pointer overflow-hidden relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"
                  />
                  <span className="material-symbols-outlined">code</span>
                  View Project on GitHub
                </motion.a>
              </div>

              {/* Right Side: Progressive Stacked Accordion */}
              <div className="w-full max-w-md mx-auto lg:mx-0 min-h-[400px]">
                <DeckComponent cards={data.deckData?.cards || []} />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="max-w-7xl mx-auto px-6 pt-24 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-primary transition-all group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Showcase
          </button>
        </div>
      </div>
    );
  }

  if (data.layout === 'editorial') {
    return (
      <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] font-sans selection:bg-black selection:text-white relative overflow-hidden">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="fixed top-8 left-8 z-50 h-10 w-10 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full text-black hover:bg-white transition-all shadow-sm group"
        >
          <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
        </button>

        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side: Large Image Area */}
          <div className="lg:w-1/2 h-[50vh] lg:h-screen p-4 lg:p-8">
            <div className="w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative group">
              <img 
                src={data.visualIdentity.image} 
                alt={data.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
              
              {/* Image Overlays (Social/Share style like reference) */}
              <div className="absolute bottom-10 left-10 flex gap-4 animate-in slide-in-from-bottom duration-1000 delay-500">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Details</span>
              </div>
              
              {/* Branding/Year style overlay */}
              <div className="absolute top-10 left-10 flex items-center gap-2">
                 <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
                 <span className="text-[10px] font-black tracking-widest text-white uppercase opacity-40">Featured 2026</span>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Typography Area */}
          <div className="lg:w-1/2 bg-[#f5f5f0] flex flex-col justify-center p-8 lg:p-24 lg:pt-32">
            <div className="max-w-xl mx-auto lg:mx-0 w-full animate-in fade-in slide-in-from-right duration-1000">
              {/* Confidential Badge */}
              {data.editorialData?.isConfidential && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full mb-10 border border-black/5">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Confidential Project</p>
                </div>
              )}

              <h1 className="text-6xl lg:text-8xl font-display font-black tracking-tight mb-10 leading-[0.9]">
                {data.title}
              </h1>

              <div className="space-y-12">
                <section>
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light mb-8">
                    {data.overview}
                  </p>
                  
                  {data.editorialData?.projectNote && (
                    <div className="p-8 bg-black/5 rounded-2xl border border-black/5 mb-16">
                      <p className="text-xs font-black uppercase tracking-[0.15em] opacity-40 mb-4 italic">Project Note</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {data.editorialData.projectNote}
                      </p>
                    </div>
                  )}
                </section>

                <hr className="border-black/5" />

                <section className="space-y-8">
                  <h2 className="text-2xl font-display font-black tracking-tight">
                    {data.editorialData?.sectionTitle}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {data.editorialData?.sectionText}
                  </p>
                </section>

                <section className="pt-8">
                  <div className="relative pl-8 border-l-2 border-black/10 py-2">
                    <p className="text-2xl font-display italic text-neutral-text leading-tight mb-4">
                      "{data.editorialData?.quote}"
                    </p>
                    {data.editorialData?.quoteAuthor && (
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40">— {data.editorialData.quoteAuthor}</p>
                    )}
                  </div>
                </section>

                {/* Role/Metadata */}
                <div className="grid grid-cols-2 gap-12 pt-16 border-t border-black/5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mb-2">Category</p>
                    <p className="text-sm font-bold uppercase tracking-widest">{data.role}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mb-2">Focus</p>
                    <p className="text-sm font-bold uppercase tracking-widest">{data.timeline}</p>
                  </div>
                </div>

                {/* Back Link Footer */}
                <div className="pt-24">
                   <button 
                     onClick={onBack} 
                     className="text-[10px] font-black uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity flex items-center gap-2 group"
                   >
                     <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                     Portfolio Showcase
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700 relative">
      {/* Lightbox / Modal for Enlarge Prototype */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-all duration-300 cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[110]"
            onClick={() => setEnlargedImage(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center p-4">
            <img 
              src={enlargedImage} 
              alt="Enlarged Prototype" 
              className="max-w-full max-h-full rounded-2xl shadow-2xl border-4 border-white/10 animate-in zoom-in-95 duration-300 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 pt-12">
          <div className="animate-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
              <span className="material-symbols-outlined text-[12px] align-middle mr-1">assignment</span>
              Case Study: {data.id.toUpperCase()}
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-neutral-text leading-[1.1] mb-8">
              {data.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              {data.subtitle}
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setEnlargedImage(data.visualIdentity.image)}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all"
              >
                Explore Concepts
              </button>
              <button className="bg-white text-gray-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all border border-gray-200">Portfolio Details</button>
            </div>
          </div>
          <div className="relative group animate-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-2 -z-10 transition-transform group-hover:rotate-1"></div>
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
              <img 
                src={data.visualIdentity.image} 
                alt={`${data.title} Mockup`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                onClick={() => setEnlargedImage(data.visualIdentity.image)}
              />
            </div>
          </div>
        </div>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-100 mb-24 animate-in fade-in duration-1000 delay-200">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Role</p>
            <p className="font-bold text-neutral-text">{data.role}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Tools</p>
            <p className="font-bold text-neutral-text">{data.tools.join(', ')}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Context</p>
            <p className="font-bold text-neutral-text">{data.timeline}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Deliverables</p>
            <p className="font-bold text-neutral-text">{data.deliverables.join(', ')}</p>
          </div>
        </div>

        {/* The Project Overview */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl font-display font-black mb-8 text-center">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
            {data.overview}
          </p>
        </div>

        {/* The Challenge */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl font-display font-black mb-8 text-center">The Challenge</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
            {data.challenge}
          </p>
          <div className="bg-primary/5 p-12 rounded-[2rem] border border-primary/10 relative">
            <p className="text-xl italic font-medium text-neutral-text text-center relative z-10 leading-relaxed">
              "{data.howMightWe}"
            </p>
          </div>
        </div>

        {/* Assumed Insights */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-primary text-3xl">explore</span>
            <h2 className="text-3xl font-display font-black">Assumed Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.researchItems.map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[2rem] border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-12 w-12 flex items-center justify-center mb-6 ${item.color}`}>
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Journey */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-primary text-3xl">route</span>
            <h2 className="text-3xl font-display font-black">User Journey: {data.journeySteps.map(s => s.title).join(' • ')}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                {data.process}
              </p>
              <ul className="space-y-6">
                {data.journeySteps.map((li, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <span className="flex items-center gap-3 text-xs font-black tracking-widest text-primary uppercase">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> {li.title}
                    </span>
                    <p className="text-sm text-gray-500 ml-6">{li.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[450px] bg-neutral-background rounded-[2.5rem] border border-gray-100 p-12 overflow-hidden flex flex-col items-center justify-center gap-4">
               <div className="w-full bg-white p-6 rounded-2xl shadow-sm transform -rotate-1">
                 <h4 className="font-bold text-primary mb-2">Simplified Flow</h4>
                 <div className="flex items-center gap-2 text-xs text-gray-400">
                   <span>Proposal</span>
                   <span className="material-symbols-outlined text-xs">arrow_forward</span>
                   <span>Curated Design</span>
                   <span className="material-symbols-outlined text-xs">arrow_forward</span>
                   <span>Build Phase</span>
                 </div>
               </div>
               <div className="w-full bg-white p-6 rounded-2xl shadow-sm transform rotate-1">
                 <h4 className="font-bold text-gray-700 mb-2">Core Pillar: Planning</h4>
                 <p className="text-xs text-gray-400">Custom scope definitions to align expectations before break ground.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Visual Identity */}
        <div className="mb-32">
          <h2 className="text-3xl font-display font-black mb-16">Visual Identity: {data.visualIdentity.typography.name.split('&')[0]}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <p className="text-lg text-gray-500 leading-relaxed">
                {data.visualIdentity.description}
              </p>
              <div className="space-y-6">
                 {data.visualIdentity.colors.map((color, idx) => (
                   <div key={idx} className="flex items-center gap-6">
                     <div className="h-14 w-14 rounded-lg shadow-inner" style={{ backgroundColor: color.hex }}></div>
                     <div>
                       <p className="font-bold text-sm uppercase tracking-widest">{color.name} {color.hex}</p>
                       <p className="text-xs text-gray-400 italic">{color.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
              <div className="p-8 bg-neutral-background rounded-2xl flex items-center gap-8 border border-gray-100 shadow-sm">
                 <div className="h-12 w-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                    <span className="text-xl font-display font-black">Aa</span>
                 </div>
                 <div>
                    <p className="font-display font-black text-lg mb-1">{data.visualIdentity.typography.name}</p>
                    <p className="text-sm text-gray-500 font-medium italic">{data.visualIdentity.typography.desc}</p>
                 </div>
              </div>
            </div>
            <div className="relative group">
              <img 
                src={data.visualIdentity.image} 
                alt={`${data.title} Moodboard`} 
                className="rounded-[2.5rem] shadow-xl w-full object-cover transition-transform group-hover:scale-[1.01]"
              />
              <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center italic">
                BRAND AESTHETIC: MODERN IMPACT
              </p>
            </div>
          </div>
        </div>

        {/* Interface Showcase */}
        <div className="mb-32">
          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <h2 className="text-3xl font-display font-black">Interface Exploration</h2>
            <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-[0.2em] text-primary">
              <span>{data.showcaseImages.length} Optimized Views</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.showcaseImages.map((view, i) => (
              <div key={i} className="flex flex-col items-center group animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                 <div className="w-full aspect-[4/5] bg-neutral-background rounded-[2.5rem] overflow-hidden shadow-lg relative transition-all group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-100">
                    <img 
                      src={view.img} 
                      alt={view.label} 
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setEnlargedImage(view.img)}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="absolute bottom-8 left-0 right-0 px-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-center">
                      <button 
                        onClick={() => setEnlargedImage(view.img)}
                        className="py-3 px-6 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl hover:bg-primary/90 transition-colors"
                      >
                        Enlarge
                      </button>
                    </div>
                 </div>
                 <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">{view.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="max-w-4xl mx-auto text-center">
           <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 animate-bounce">
             <span className="material-symbols-outlined text-3xl">emoji_objects</span>
           </div>
           <h2 className="text-3xl font-display font-black mb-8">Reflection & Growth</h2>
           <p className="text-lg text-gray-600 leading-relaxed mb-12">
             {data.reflection}
           </p>
           <div className="h-[2px] w-24 bg-primary mx-auto mb-12"></div>
           <div className="flex justify-center gap-12">
             <button onClick={onBack} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
               <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span> Portfolio
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const DeckComponent: React.FC<{ cards: { title: string; text: string; icon: string; color: string }[] }> = ({ cards }) => {
  // activeLevel tracks how many cards are "expanded" or "revealed"
  // 0: Card 1 is visible but collapsed
  // 1: Card 1 expanded, Card 2 revealed (collapsed)
  // 2: Card 1 & 2 expanded, Card 3 revealed (collapsed)
  const [activeLevel, setActiveLevel] = useState(0);

  const handleCardClick = (idx: number) => {
    if (idx === activeLevel) {
      // Open the next level if we clicked the current "reveal" trigger
      if (activeLevel < cards.length) {
        setActiveLevel(activeLevel + 1);
      }
    } else if (idx < activeLevel) {
      // Collapse back to this level if we clicked an already opened card
      setActiveLevel(idx);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {cards.map((card, idx) => {
        // A card is visible if its index is <= activeLevel
        const isVisible = idx <= activeLevel;
        // A card is expanded if its index < activeLevel
        const isExpanded = idx < activeLevel;

        return (
          <AnimatePresence key={idx}>
            {isVisible && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={() => handleCardClick(idx)}
                className={`w-full p-6 rounded-[2rem] border border-black/5 shadow-sm cursor-pointer transition-shadow hover:shadow-md ${card.color} origin-top`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary text-xl">{card.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg">{card.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black opacity-30 tracking-widest">(0{idx + 1})</span>
                    <motion.span 
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="material-symbols-outlined text-gray-400"
                    >
                      expand_more
                    </motion.span>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-600 leading-relaxed border-t border-black/5 pt-4">
                        {card.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default ProjectDetail;

