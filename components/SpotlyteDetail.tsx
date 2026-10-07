
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlyteCaseStudy } from './SpotlyteCaseStudy';

interface SpotlyteDetailProps {
  onBack: () => void;
}

export const SpotlyteDetail: React.FC<SpotlyteDetailProps> = ({ onBack }) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (mq.matches) {
        v.pause();
        setIsPlaying(false);
      } else {
        v.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    if (mq.addEventListener) {
      mq.addEventListener('change', apply);
    } else if ((mq as any).addListener) {
      (mq as any).addListener(apply);
    }
    apply();
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', apply);
      }
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-white font-sans selection:bg-amber-400 selection:text-black relative">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
            onClick={() => setEnlargedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setEnlargedImage(null)}
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center p-4">
              <img
                src={enlargedImage}
                alt="Enlarged Visual"
                className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/20 object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back Button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-50 h-11 w-11 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full border border-white/20 transition-all shadow-xl group cursor-pointer"
        title="Return to Portfolio"
      >
        <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-0.5">
          arrow_back
        </span>
      </button>

      {/* Subtle Ambient Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] pointer-events-none -z-0 opacity-70"
        style={{
          background: 'radial-gradient(circle at 50% 18%, rgba(251, 191, 36, 0.12) 0%, rgba(20, 35, 75, 0.35) 45%, transparent 75%)',
        }}
      />

      {/* ========================================================================= */}
      {/* 1. HOMESCREEN HERO: EXACT MATCH TO FIRST USER IMAGE                       */}
      {/* ========================================================================= */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Hero Title: Yellow Bold Uppercase Two Lines */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-[#FBBF24] tracking-tight leading-[1.06] mb-8 font-sans"
          >
            DESIGNED THE PLATFORM.
            <br />
            LAUNCHED THE NETWORK.
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl sm:max-w-3xl mx-auto mb-12 sm:mb-14 font-normal"
          >
            Spotlyte turns ordinary taxis into a measurable outdoor ad network. I designed the web platform end to end, route-aware planning, live creative deployment, and performance tracking, for a product now running across Lagos.
          </motion.p>

          {/* Metadata Card: 5 Columns with Subtle Borders */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-5xl mx-auto rounded-2xl bg-[#0E1628]/85 backdrop-blur-md border border-slate-700/60 p-5 sm:p-6 mb-12 shadow-2xl text-left"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60 gap-4 sm:gap-0">
              
              {/* Column 1: ROLE */}
              <div className="sm:px-5 py-2 sm:py-0">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  ROLE
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                   Product Designer
                </p>
              </div>

              {/* Column 2: RESPONSIBILITIES */}
              <div className="sm:px-5 py-2 sm:py-0">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  RESPONSIBILITIES
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  UX Research, UI Design, Design System
                </p>
              </div>

              {/* Column 3: PLATFORM */}
              <div className="sm:px-5 py-2 sm:py-0">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  PLATFORM
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  Web App &amp; Marketing Site
                </p>
              </div>

              {/* Column 4: TOOLS */}
              <div className="sm:px-5 py-2 sm:py-0">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  TOOLS
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  Figma, Claude
                </p>
              </div>

              {/* Column 5: TIMELINE */}
              <div className="sm:px-5 py-2 sm:py-0">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  TIMELINE
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  December 2025 – April 2026
                </p>
              </div>

            </div>
          </motion.div>

          {/* Section Kicker handled inside product__frame */}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MACBOOK MOCKUP & LIVE VIDEO: EXACT CODE PROVIDED BY USER               */}
      {/* ========================================================================= */}
      <section className="pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <style>{`
          .product__frame{
            max-width:860px;
            margin:20px auto 0;
            width:100%;
          }
          .macbook{
            width:100%;
          }
          .macbook__screen{
            background:linear-gradient(180deg,#3a3a3d,#1c1c1e 40%);
            border-radius:20px 20px 8px 8px;
            padding:16px 16px 10px;
            box-shadow:
              0 40px 90px -20px rgba(0,0,0,.65),
              0 10px 30px -10px rgba(0,0,0,.55),
              inset 0 1px 0 rgba(255,255,255,.12);
            position:relative;
          }
          .macbook__cam{
            width:6px; height:6px; border-radius:50%;
            background:#0a0a0b;
            box-shadow:0 0 0 2px rgba(255,255,255,.04), inset 0 0 2px rgba(80,140,255,.6);
            margin:0 auto 10px;
          }
          .macbook__display{
            position:relative;
            background:#050608;
            border-radius:6px;
            overflow:hidden;
            aspect-ratio:16/9.15;
            cursor:pointer;
          }
          .macbook__display video{
            width:100%; height:100%; object-fit:cover; object-position:top center;
            display:block;
          }
          .macbook__hinge{
            height:16px;
            background:linear-gradient(180deg,#d8d8dc,#adadb2);
            border-radius:0 0 4px 4px;
            position:relative;
          }
          .macbook__base{
            height:12px;
            margin:0 auto;
            width:104%;
            max-width:none;
            transform:translateX(-2%);
            background:linear-gradient(180deg,#c7c7cc,#9a9aa0);
            border-radius:0 0 12px 12px;
            box-shadow:0 10px 24px -6px rgba(0,0,0,.35);
            position:relative;
          }
          .macbook__base::after{
            content:"";
            position:absolute; top:0; left:50%; transform:translateX(-50%);
            width:90px; height:8px;
            background:#adadb3;
            border-radius:0 0 8px 8px;
          }
          .macbook__shadow{
            height:56px;
            max-width:60%;
            margin:18px auto 0;
            background:radial-gradient(ellipse at center, rgba(255,204,0,.16), rgba(255,204,0,0) 72%);
            filter:blur(2px);
          }
          .product__caption{
            display:flex; align-items:center; justify-content:center; gap:10px;
            margin-top:28px;
            font-size:13.5px; color:#94a3b8;
          }
          .product__caption a{
            font-weight:700; color:#ffffff;
            border-bottom:1px solid #FBBF24;
            transition:color 0.2s ease;
          }
          .product__caption a:hover{ color:#FBBF24; }
          .product__label{
            text-align:center;
            font-size:11px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase;
            color:rgba(255,255,255,0.45);
            margin:0 0 14px;
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
        >
          <div className="product__frame">
            <p className="product__label">The Product</p>
            <div className="macbook">
              <div className="macbook__screen">
                <div className="macbook__cam"></div>
                <div 
                  className="macbook__display group"
                  onClick={togglePlay}
                  title={isPlaying ? 'Click to pause walkthrough' : 'Click to play walkthrough'}
                >
                  <video
                    ref={videoRef}
                    id="productVideo"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    
                  >
                    <source src="/spotlyte-hero-demo copy.mp4" type="video/mp4" />
                    
                  </video>

                  {/* Play/Pause subtle badge on hover */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full text-[11px] text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="material-symbols-outlined text-[13px]">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </div>
                </div>
              </div>
              <div className="macbook__hinge"></div>
              <div className="macbook__base"></div>
              <div className="macbook__shadow"></div>
            </div>
            <p className="product__caption">
              Live product walkthrough &middot;{' '}
              <a href="https://spotlyte.ng/" target="_blank" rel="noopener noreferrer">
                spotlyte.ng ↗
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CASE STUDY: COMPLETE TOC THROUGH STYLE GUIDE (EXACT CODE PROVIDED)      */}
      {/* ========================================================================= */}
      <SpotlyteCaseStudy onBack={onBack} />
    </div>
  );
};
