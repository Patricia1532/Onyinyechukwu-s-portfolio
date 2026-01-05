import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random incremental steps for a more natural loading feel
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onFinish, 800); // Wait for fade animation to complete
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  const handleSkip = () => {
    setFadeOut(true);
    // Directly trigger finishing to show the home content
    setTimeout(onFinish, 600);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{
        background: 'radial-gradient(circle, rgba(253,231,240,0.3) 0%, rgba(255,255,255,1) 70%)'
      }}
    >
      <div className="flex flex-col items-center w-full max-w-md px-6 text-center">
        {/* Code Icon */}
        <div className="mb-8 p-6 bg-white rounded-3xl shadow-xl shadow-primary/5 flex items-center justify-center border border-gray-50">
          <span className="material-symbols-outlined text-primary text-4xl font-bold">code</span>
        </div>

        {/* Name Heading forced to a single line with whitespace-nowrap */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight whitespace-nowrap">
          &lt;Eziashi Patricia/&gt;
        </h1>
        
        <p className="text-gray-500 font-medium mb-12">
          Building digital experiences
        </p>

        {/* Loading Section */}
        <div className="w-full mb-12">
          <div className="flex justify-between items-end mb-3 px-1">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Loading</span>
            <span className="text-xs font-black text-primary">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Skip Button linking to the home content */}
        <button 
          onClick={handleSkip}
          className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-bold"
        >
          Skip Intro
          <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>

      {/* Footer Version */}
      <div className="absolute bottom-10 text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase">
        V2.4.0 • 2024
      </div>
    </div>
  );
};

export default SplashScreen;
