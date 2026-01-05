
import React, { useEffect } from 'react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  // We'll focus on the Finance Dashboard for this detailed view
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
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">Case Study</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-black text-neutral-text leading-[1.1] mb-8">
              {isFinance ? "Optimizing Wealth: A Modern Finance Dashboard" : "Project Case Study"}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              Transforming complex financial data into a client-focused digital platform that prioritizes clarity, accessibility, and professional trust.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">View Live Site</button>
              <button className="bg-neutral-background text-gray-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-100">Read Process</button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-2 -z-10 transition-transform group-hover:rotate-1"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
              alt="Dashboard Mockup" 
              className="rounded-[2.5rem] shadow-2xl border-4 border-white"
            />
          </div>
        </div>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-100 mb-24">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Role</p>
            <p className="font-bold text-neutral-text">Lead UI/UX Designer</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Tools</p>
            <p className="font-bold text-neutral-text">Figma, React, Tailwind</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Timeline</p>
            <p className="font-bold text-neutral-text">4 Weeks (Feb 2024)</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Deliverables</p>
            <p className="font-bold text-neutral-text">Research, UI, Proto</p>
          </div>
        </div>

        {/* The Challenge */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl font-serif font-black mb-8 text-center">The Challenge</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
            Users found traditional banking interfaces cold and intimidating. Analytics showed a high drop-off rate on the "Investment Overview" page, and users reported difficulty tracking real-time asset changes on mobile devices.
          </p>
          <div className="bg-primary/5 p-12 rounded-[2rem] border border-primary/10 relative">
            <span className="material-symbols-outlined absolute top-6 left-6 text-primary/30 text-5xl">format_quote</span>
            <p className="text-xl italic font-medium text-neutral-text text-center relative z-10 leading-relaxed">
              "How might we design a digital experience that retains the brand's legacy of authority while making financial services accessible and less intimidating for new investors?"
            </p>
          </div>
        </div>

        {/* Research & Discovery */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-primary text-3xl">search</span>
            <h2 className="text-3xl font-serif font-black">Research & Discovery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'visibility', title: 'Data Transparency', desc: 'Users expressed frustration with hidden fee structures. They wanted clear, plain-language explanations.' },
              { icon: 'smartphone', title: 'Mobile Urgency', desc: '65% of local traffic came from mobile devices, often during high-volatility market situations.' },
              { icon: 'groups', title: 'Human Connection', desc: 'Potential clients wanted to "see" who was managing their assets. Real human visuals increased trust.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-neutral-background rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-colors">
                <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ideation Corkboard */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
            <h2 className="text-3xl font-serif font-black">Ideation</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <p className="text-lg text-gray-500 leading-relaxed">
                During brainstorming, I mapped out potential features. We focused on the "Investor Journey" from the initial dashboard check to deep-dive analytics.
              </p>
              <ul className="mt-8 space-y-4">
                {['Quick Balance View', 'AI-driven Insights', 'Dark Mode Toggle'].map(li => (
                  <li key={li} className="flex items-center gap-3 font-bold text-gray-400">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full"></span> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 relative h-[400px] bg-neutral-background rounded-[2.5rem] border-2 border-dashed border-gray-200 p-8 overflow-hidden">
               {/* Post-it Notes */}
               <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-100 shadow-xl rotate-[-2deg] p-6 flex items-center text-sm font-bold text-yellow-800">
                 Need a "Real-time" status indicator always visible
               </div>
               <div className="absolute bottom-10 left-32 w-48 h-48 bg-cyan-100 shadow-xl rotate-[3deg] p-6 flex items-center text-sm font-bold text-cyan-800">
                 Trust badges (Bank level security) need to be higher up
               </div>
               <div className="absolute top-24 right-40 w-48 h-48 bg-green-100 shadow-xl rotate-[-5deg] p-6 flex items-center text-sm font-bold text-green-800">
                 Add a direct advisor link for mobile users
               </div>
               <div className="absolute top-10 right-10 w-40 h-40 bg-purple-100 shadow-xl rotate-[4deg] p-4 flex items-center text-xs font-bold text-purple-800">
                 Simplify navigation. Top nav bar hides 80% of tools.
               </div>
            </div>
          </div>
        </div>

        {/* Information Architecture Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif font-black mb-8 text-center">Information Architecture</h2>
          <p className="text-lg text-gray-500 text-center mb-16 max-w-3xl mx-auto">
            We simplified the navigation from 12 top-level items to 5 focused categories, prioritizing the user's primary goal: finding and managing their specific wealth goals.
          </p>
          <div className="bg-neutral-background rounded-[2.5rem] p-12 border border-gray-100">
            <div className="flex flex-col items-center">
              <div className="px-8 py-4 bg-primary text-white font-bold rounded-xl mb-12 shadow-lg">Homepage</div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="w-full h-px bg-gray-200 max-w-4xl"></div>
              <div className="flex justify-between w-full max-w-4xl mt-0">
                {['Overview', 'Portfolio', 'Analytics', 'Insights', 'Settings'].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div className="px-6 py-3 bg-white border border-gray-100 rounded-lg text-sm font-bold shadow-sm">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Design Approach */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif font-black mb-16">Design Approach: Trust & Clarity</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <p className="text-lg text-gray-500 leading-relaxed">
                The visual language needed to strike a balance between professional authority and modern accessibility. I chose a deep navy as the primary anchor for trust, accented with a vibrant pink for calls-to-action.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-center gap-4">
                   <div className="h-14 w-14 bg-[#1a2b4b] rounded-2xl shadow-inner border-2 border-white"></div>
                   <div>
                     <p className="font-bold text-sm">Deep Navy #1A2B4B</p>
                     <p className="text-xs text-gray-400 font-medium italic">Authority, Wealth</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="h-14 w-14 bg-primary rounded-2xl shadow-inner border-2 border-white"></div>
                   <div>
                     <p className="font-bold text-sm">Vibrant Pink #EF3985</p>
                     <p className="text-xs text-gray-400 font-medium italic">Action, Clarity</p>
                   </div>
                 </div>
              </div>
              <div className="p-8 bg-neutral-background rounded-[2rem] flex items-center gap-8">
                 <div className="h-12 w-12 flex items-center justify-center bg-white rounded-xl shadow-sm">
                   <span className="material-symbols-outlined text-gray-400">text_fields</span>
                 </div>
                 <div>
                   <p className="font-serif font-black text-xl mb-1">Merriweather & Inter</p>
                   <p className="text-sm text-gray-500 font-medium">Classic Serif headings, Clean Sans body</p>
                 </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd54867e?auto=format&fit=crop&w=800&q=80" 
                alt="Moodboard" 
                className="rounded-[2.5rem] shadow-xl"
              />
              <p className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-center italic">
                Moodboard Inspiration: Clean lines, organized spaces, authoritative textures.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Section (Lo-Fi to Hi-Fi) */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif font-black">From Lo-Fi to Hi-Fi</h2>
            <div className="flex gap-4 p-1 bg-neutral-background rounded-full border border-gray-100">
              <span className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400">Wireframe</span>
              <span className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-white rounded-full text-primary shadow-sm">Final UI</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lo-Fi Image */}
            <div className="bg-neutral-background rounded-[2.5rem] p-4 flex flex-col items-center border border-gray-200 group">
               <div className="w-full aspect-[4/3] bg-white rounded-[2rem] overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&w=800&q=80" 
                  alt="Low Fidelity Wireframe" 
                  className="w-full h-full object-cover grayscale opacity-60 transition-all group-hover:opacity-100"
                 />
               </div>
               <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Low-Fidelity Wireframe</p>
            </div>
            {/* Hi-Fi Image */}
            <div className="bg-primary/5 rounded-[2.5rem] p-4 flex flex-col items-center border border-primary/10 group">
               <div className="w-full aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-lg">
                 <img 
                  src="https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&w=800&q=80" 
                  alt="High Fidelity Prototype" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                 />
               </div>
               <p className="mt-4 text-xs font-bold text-primary uppercase tracking-widest">High-Fidelity Prototype</p>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="max-w-4xl mx-auto text-center">
           <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
             <span className="material-symbols-outlined text-3xl">psychology</span>
           </div>
           <h2 className="text-3xl font-serif font-black mb-8">Reflection & Learnings</h2>
           <p className="text-lg text-gray-600 leading-relaxed mb-12">
             Redesigning for the financial sector taught me the importance of <span className="text-primary font-black">cognitive load</span> in stressful situations. Users coming to a wealth management portal are often anxious; the design must act as a calming agent, not a source of complexity. If I were to iterate again, I would conduct more A/B testing on the "Contact Advisor" form to optimize conversion rates further.
           </p>
           <button 
             onClick={onBack}
             className="text-primary font-black flex items-center gap-2 mx-auto hover:underline hover:underline-offset-8 transition-all"
           >
             Back to Portfolio <span className="material-symbols-outlined">arrow_forward</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
