
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const interests = [
    { icon: 'auto_stories', label: 'Reading books', desc: 'Growth, creativity, storytelling' },
    { icon: 'directions_walk', label: 'Long walks', desc: 'Reflection and inspiration' },
    { icon: 'headset', label: 'Listening to music', desc: 'Curated vibes for focus' },
    { icon: 'edit_note', label: 'Writing & Journaling', desc: 'Documenting the journey' },
  ];

  const photos = [
    '/book.png',
    '/walks.png',
    '/music.png',
    '/journal.jpg',
  ];

  return (
    <section ref={ref} className="py-24 bg-neutral-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Patricia</span>
              <h2 className="text-4xl lg:text-5xl font-black text-neutral-text mb-8 leading-tight">
                Design with empathy, <br />
                <span className="text-primary/60">code with purpose.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  As a UI Designer and Frontend Developer with a background in Communication, UI design and software development, I enjoy translating ideas into well-crafted interfaces that balance visual clarity, usability and technical structure. My work sits at the intersection of strategy, design and code, ensuring that experiences are both functional and thoghtfully communicated.
                </p>
                <p>
                   My non-traditional tech background allows me to design with deeper awareness of people, context and intent. i believe the best solutions are born at the intersection of communication, design and technology
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-neutral-text mb-6">Aside from my passion for design...</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-transparent transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-neutral-text">{item.label}</p>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {photos.map((url, i) => (
                <div 
                  key={i} 
                  className={`relative rounded-[2rem] overflow-hidden shadow-lg transition-all duration-700 delay-${i * 100} hover:scale-105`}
                  style={{ height: i % 2 === 0 ? '280px' : '340px' }}
                >
                  <img src={url} alt={`Lifestyle ${i}`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
