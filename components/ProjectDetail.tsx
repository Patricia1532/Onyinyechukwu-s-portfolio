

import React, { useEffect } from 'react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  // We'll focus on the Law Firm / Finance Dashboard for this detailed view
  const isFinance = projectId === '2';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
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
              <a href="https://fjkolaw.com/">
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
            {/* <div className="relative h-[450px] bg-neutral-background rounded-[2.5rem] border border-gray-100 p-12 overflow-hidden flex items-center justify-center gap-4 flex-wrap">
               <div className="w-40 h-40 bg-yellow-100 shadow-lg rotate-[-3deg] p-4 flex items-center text-center text-xs font-bold text-yellow-800">
                 Consolidate "Expertise" into clear pillars
               </div>
               <div className="w-40 h-40 bg-cyan-100 shadow-lg rotate-[2deg] p-4 flex items-center text-center text-xs font-bold text-cyan-800">
                 Professional photography over stock
               </div>
               <div className="w-40 h-40 bg-pink-100 shadow-lg rotate-[-1deg] p-4 flex items-center text-center text-xs font-bold text-pink-800">
                 Mobile CTA: One-tap call to trial
               </div>
            </div> */}
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
            <div className="mt-12 text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">Site Map Structure</div>
          
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
                     <p className="font-bold text-sm uppercase tracking-widest">Midnigt Navy #0F172A</p>
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

        {/* Hierarchy Section */}
        <div className="mb-32">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-black">Refining the Hierarchy</h2>
            <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">
              <span>Structural Wireframe</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
              <span className="text-primary">Final Interface</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center group">
               {/* <div className="w-full aspect-[4/5] bg-[#f9fafb] rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col gap-4">
                 <div className="w-full h-8 bg-gray-200/50 rounded-lg"></div>
                 <div className="w-2/3 h-12 bg-gray-200/50 rounded-lg"></div>
                 <div className="w-full flex-grow bg-white border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-200 material-symbols-outlined text-6xl">image</span>
                 </div>
                 <div className="grid grid-cols-3 gap-2">
                   <div className="h-16 bg-gray-100 rounded-lg"></div>
                   <div className="h-16 bg-gray-100 rounded-lg"></div>
                   <div className="h-16 bg-gray-100 rounded-lg"></div>
                 </div>
               </div> */}
               <div className="flex flex-col items-center group">
               <div className="w-full h-65 bg-[#c1bab5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="/Resources.png" 
                    alt="Final UI" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 left-0 right-0 px-8">
                    <button className="w-full py-4 bg-[#EB2777] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl hover:scale-[1.02] transition-transform">
                      Hover to scroll prototype
                    </button>
                  </div>
               </div>
               <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Iteration 01: Core Structure</p>
               </div>
               <div className="flex flex-col items-center group">
               <div className="w-full h-65 bg-[#c1bab5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="/ppl.png" 
                    alt="Final UI" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 left-0 right-0 px-8">
                    <button className="w-full py-4 bg-[#EB2777] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl hover:scale-[1.02] transition-transform">
                      Hover to scroll prototype
                    </button>
                  </div>
               </div>
               <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Iteration 01: Core Structure</p>
               </div>
               <div className="flex flex-col items-center group">
               <div className="w-full h-65 bg-[#c1bab5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="/About.png" 
                    alt="Final UI" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 left-0 right-0 px-8">
                    <button className="w-full py-4 bg-[#EB2777] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl hover:scale-[1.02] transition-transform">
                      Hover to scroll prototype
                    </button>
                  </div>
               </div>
               <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Iteration 01: Core Structure</p>
               </div>
            </div>
            <div className="flex flex-col items-center group">
               <div className="w-full h-60 bg-[#c1bab5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" 
                    alt="Final UI" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 left-0 right-0 px-8">
                    <button className="w-full py-4 bg-[#EB2777] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl hover:scale-[1.02] transition-transform">
                      Hover to scroll prototype
                    </button>
                  </div>
               </div>
               <p className="mt-6 text-[10px] font-black text-primary uppercase tracking-[0.3em]">Final UI: Vibrant Digital Presence</p>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="max-w-4xl mx-auto text-center">
           <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-8">
             <span className="material-symbols-outlined text-2xl">check_box</span>
           </div>
           <h2 className="text-3xl font-serif font-black mb-8">Reflection & Outcomes</h2>
           <p className="text-lg text-gray-600 leading-relaxed mb-12">
             Designing for professional services like FKJO requires a deep understanding of <span className="text-primary font-bold">emotional intelligence in UX</span> and visual impact.My goal was to translate complex client objectives into a narrative that speaks to human first and legal experts second.
             The success of this project is hinged on the balance of authoritative aesthetics and user-centered simplicity. By focusing on accessibility and clear call to action, we were able to create a platform that doesn't just display information but actively facilitates the attorney and client relationship.
           </p>
           <div className="h-[2px] w-24 bg-primary mx-auto mb-12"></div>
           <div className="flex justify-center gap-12">
             <button onClick={onBack} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
               <span className="material-symbols-outlined text-sm">arrow_back</span> Previous Case
             </button>
             <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
               Next Case <span className="material-symbols-outlined text-sm">arrow_forward</span>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;