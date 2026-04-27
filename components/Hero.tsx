 import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-neutral-background pt-32 lg:pt-20">
      {/* Left Side: Image Section */}
      <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen p-4 lg:p-8">
        <div className={`relative h-full w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <img
            src="professional.png"
            alt="Patricia Eziashi"
            className="h-full w-full object-cover"
          />
          
          {/* Circular Badge Overlay */}
          <div className="absolute top-6 left-6 lg:top-10 lg:left-10 w-24 h-24 lg:w-32 lg:h-32 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center p-2 shadow-lg animate-[spin_10s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-primary">
                <textPath xlinkHref="#circlePath">
                  Patricia Eziashi — UI/UX Designer — 
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl lg:text-3xl">auto_awesome</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Content Section */}
      <div className={`relative w-full lg:w-1/2 min-h-[40vh] lg:h-screen bg-neutral-background flex flex-col justify-center px-8 lg:px-20 py-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl text-neutral-text mb-2 lg:mb-4">
            Hey I'm Patricia,
          </h2>
          <h1 className="font-display text-[6rem] sm:text-[10rem] lg:text-[16rem] font-medium leading-[0.8] text-neutral-text mb-4 tracking-tighter lg:-ml-12">
            UX/UI
          </h1>
          <p className="font-display text-2xl sm:text-3xl lg:text-5xl text-primary mb-12 lg:mb-20 lg:-ml-12">
            Designer and Front-end developer
          </p>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-6 max-w-xs mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <button
                  onClick={scrollToProjects}
                  className="w-14 h-14 rounded-full border border-neutral-text/20 flex items-center justify-center text-neutral-text transition-all hover:border-primary hover:bg-primary hover:text-white group"
                  title="Explore Projects"
                >
                  <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">arrow_downward</span>
                </button>
                <a href="/cv.pdf">
                <button 
                  className="px-8 py-4 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-1 active:scale-95"
                >
                 
                  Download CV
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="absolute bottom-8 left-8 lg:left-20 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 text-xs font-bold uppercase tracking-widest text-neutral-text/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Let's Work Together
          </div>
          <div>Lagos, NIGERIA — 2026</div>
        </div>
      </div>
    </section>
  );
}