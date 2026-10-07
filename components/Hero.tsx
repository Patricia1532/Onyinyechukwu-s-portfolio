 

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateAbout?: () => void;
}

export default function Hero({ onNavigateAbout }: HeroProps = {}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section 
      id="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#EAF5FB] pt-20 sm:pt-24 pb-8 px-4 sm:px-8 lg:px-12 select-none"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 35%, #F4FAFD 0%, #E3F2FB 50%, #CDE9F8 100%)
        `,
      }}
    >
      {/* Subtle organic vintage paper grain texture */}
      <div className="absolute inset-0 bg-vintage-grain opacity-10 pointer-events-none" />

      {/* Main Content Area: Staged to match IMG_6734.jpg composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-grow pt-4 sm:pt-8 md:pt-10">
        
        {/* ========================================================================= */}
        {/* GIANT EDITORIAL HEADLINE: "HI, I'm PATRICIA" (or SARAH)                   */}
        {/* High contrast Roman serif capitals paired with slanted script italic     */}
        {/* ========================================================================= */}
        <div className="w-full text-center relative z-0 mb-[-30px] sm:mb-[-50px] md:mb-[-70px] lg:mb-[-90px] xl:mb-[-110px]">
          <motion.h1 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline justify-center tracking-tight text-[#650000] leading-none"
            style={{
              textShadow: '0 2px 20px rgba(101, 0, 0, 0.04)'
            }}
          >
            {/* "HI," in high-contrast Roman serif caps */}
            <span className="font-bodoni font-normal text-5xl sm:text-7xl md:text-8xl lg:text-[10.5rem] xl:text-[12.5rem] tracking-tight mr-2 sm:mr-4 md:mr-6 lg:mr-8">
              HI,
            </span>

            {/* "I'm" in elegant slanted italic serif with graceful curves */}
            <span className="font-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[9.5rem] xl:text-[11.5rem] tracking-normal mr-2 sm:mr-4 md:mr-6 lg:mr-8">
              I'm
            </span>

            {/* "PATRICIA" in tall, grand serif all-caps */}
            <span className="font-bodoni font-normal text-5xl sm:text-7xl md:text-8xl lg:text-[10.5rem] xl:text-[12.5rem] tracking-tight">
              PATRICIA
            </span>
          </motion.h1>
        </div>

        {/* ========================================================================= */}
        {/* CENTER STAGE: Portrait Model + Doodle Handwritten Annotations & Arrows    */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px]">
          
          {/* ======================================================================= */}
          {/* DOODLE ANNOTATION 1 (Left Top): PRODUCT DESIGNER                        */}
          {/* ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="absolute top-16 sm:top-24 md:top-28 left-4 sm:left-10 md:left-16 lg:left-24 z-30 flex items-center gap-2 sm:gap-3"
          >
            <div className="flex flex-col text-right">
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-[#650000] uppercase leading-snug">
                PRODUCT
              </span>
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-[#650000] uppercase leading-snug">
                DESIGNER
              </span>
            </div>

            {/* Hand-drawn curved doodle arrow pointing down-right toward shoulder/head */}
            <svg 
              className="w-10 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 text-[#650000] transform translate-y-2" 
              viewBox="0 0 60 40" 
              fill="none"
            >
              <path
                d="M 5 8 C 20 8 42 12 48 30"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M 38 25 L 48 30 L 49 19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* ======================================================================= */}
          {/* DOODLE ANNOTATION 2 (Left Bottom): ASKING "WHAT IF" A LOT                */}
          {/* ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-2 sm:left-8 md:left-12 lg:left-20 z-30 flex items-center gap-2 sm:gap-3"
          >
            <div className="flex flex-col text-left sm:text-right">
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-sm tracking-[0.16em] text-[#650000] uppercase leading-snug">
                ASKING "WHAT IF"
              </span>
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-sm tracking-[0.16em] text-[#650000] uppercase leading-snug">
                A LOT
              </span>
            </div>

            {/* Hand-drawn curved doodle arrow pointing right towards iced coffee/drink */}
            <svg 
              className="w-10 h-6 sm:w-14 sm:h-8 md:w-16 md:h-8 text-[#650000] transform -translate-y-1" 
              viewBox="0 0 60 30" 
              fill="none"
            >
              <path
                d="M 5 22 C 22 24 38 18 48 10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M 38 7 L 48 10 L 42 19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* ======================================================================= */}
          {/* CENTERPIECE PORTRAIT (Matching the glasses, striped cardigan, drink)   */}
          {/* ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex flex-col items-center justify-end"
          >
            <div className="relative w-64 sm:w-80 md:w-[380px] lg:w-[440px] aspect-[3/4] max-h-[580px] overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] group shadow-xl shadow-[#650000]/10 border-2 border-white/80">
              {/* High-res model image with glasses, stylish cardigan, iced latte and warm lighting */}
              <img
                src="hts.png"
                alt="Patricia Eziashi / Creator"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </motion.div>

          {/* ======================================================================= */}
          {/* DOODLE ANNOTATION 3 (Right Middle): FRONT-END DEVELOPER                 */}
          {/* ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="absolute top-1/2 -translate-y-6 sm:-translate-y-4 right-2 sm:right-8 md:right-12 lg:right-20 z-30 flex items-center gap-2 sm:gap-3"
          >
            {/* Hand-drawn curved doodle arrow pointing down-left towards creator */}
            <svg 
              className="w-10 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 text-[#650000] transform -translate-y-1" 
              viewBox="0 0 60 40" 
              fill="none"
            >
              <path
                d="M 52 28 C 40 12 25 10 10 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M 12 8 L 10 18 L 22 21"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col text-left">
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-[#650000] uppercase leading-snug">
                FRONT-END
              </span>
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-sm tracking-[0.18em] text-[#650000] uppercase leading-snug">
                DEVELOPER
              </span>
            </div>
          </motion.div>

        </div>

        {/* Interactive Quick Navigation controls */}
        <div className="relative z-30 flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-6">
          <button
            onClick={() => scrollToSection('process')}
            className="px-6 py-2.5 rounded-full bg-[#650000] hover:bg-[#8C1227] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
          >
            <span>My Process & Work</span>
            <span className="text-sm">↓</span>
          </button>
          
          <button
            onClick={() => onNavigateAbout ? onNavigateAbout() : scrollToSection('about')}
            className="px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#650000] text-xs font-semibold tracking-wider uppercase shadow-sm border border-[#89CFF0]/40 transition-all hover:shadow"
          >
            About Patricia
          </button>
        </div>

      </div>
    </section>
  );
}
