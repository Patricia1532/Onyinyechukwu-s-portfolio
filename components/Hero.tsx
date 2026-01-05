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
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[10rem] -z-10 translate-x-20"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          

          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-neutral-text mb-6">
            Hi, I’m Patricia — <br />
            <span className="gradient-text">UI Designer</span> & <br />
            Developer.
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
            I create thoughtful digital experiences. I specialize in building accessible, pixel-perfect, and performant web interfaces by blending technical skill with design thinking to solve real user problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/30 active:translate-y-0"
            >
              View My Work
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-bold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95">
              <span className="material-symbols-outlined text-primary">download</span>
              Download CV
            </button>
          </div>

        </div>

        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-200 rounded-[3rem] rotate-3 scale-105"></div>
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/professional.png"
                alt="Patricia Eziashi"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400">Experience</p>
                  <p className="text-sm font-bold text-neutral-text">UX/UI Professional</p>
                </div>
              </div>
            </div>

            <div className="absolute top-10 -right-6 bg-white py-2 px-4 rounded-xl shadow-lg flex items-center gap-2 animate-pulse-soft hidden sm:flex">
              <span className="material-symbols-outlined text-yellow-400 fill-current">star</span>
              <span className="font-bold text-sm">Design Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}