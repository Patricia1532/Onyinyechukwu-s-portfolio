
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LifeInterest {
  id: string;
  title: string;
  category?: string;
  image: string;
  description?: string;
  location?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

const INTERESTS: LifeInterest[] = [
  {
    id: 'travel',
    title: 'Book shoping',
    category: '',
    image: 'bookshopp.png',
    description: '',
    location: '',
    aspectRatio: 'portrait',
  },
  {
    id: 'coins',
    title: 'Recent book finds',
    category: '',
    image: 'ref.png',
    description: '',
    location: '',
    aspectRatio: 'square',
  },
  {
    id: 'trekking',
    title: 'watching F1',
    category: '',
    image: 'fomula.png',
    description: '',
    location: '',
    aspectRatio: 'portrait',
  },
  {
    id: 'typefaces',
    title: 'taking sunset picture',
    category: '',
    image: 'sunse.png',
    description: '',
    location: '',
    aspectRatio: 'portrait',
  },
  {
    id: 'matcha',
    title: 'Enjoying good food',
    category: '',
    image: 'goofo.png',
    description: '',
    location: '',
    aspectRatio: 'portrait',
  },
  {
    id: 'ar-tech',
    title: 'tennis',
    category: '',
    image: 'tenni.png',
    description: '.',
    location: '',
    aspectRatio: 'portrait',
  },
  {
    id: 'paddle-boarding',
    title: 'Taking walks',
    category: '',
    image: 'walkse.png',
    description: '',
    location: '',
    aspectRatio: 'portrait',
  },
  {
    id: 'architecture',
    title: 'attending weddings',
    category: '',
    image: 'weddis.png',
    description: '',
    location: '',
    aspectRatio: 'portrait',
  },
];

// Peeking photos for the closed envelope state (inspired by IMG_6764.jpeg)
const PEEKING_PHOTOS = [
  {
    id: 'peek-1',
    src: 'goofo.png',
    alt: 'Mountain trail with prayer flags',
    className: '-top-32 sm:-top-40 -left-6 sm:-left-12 -rotate-[14deg] w-36 sm:w-52 md:w-60 z-10 hover:z-30 hover:-translate-y-3 hover:-rotate-[10deg]',
    shadow: 'shadow-xl',
  },
  {
    id: 'peek-2',
    src: 'sunse.png',
    alt: 'Sunset silhouette on the beach',
    className: '-top-36 sm:-top-48 left-[22%] sm:left-[26%] -rotate-[3deg] w-40 sm:w-56 md:w-64 z-10 hover:z-30 hover:-translate-y-4 hover:rotate-0',
    shadow: 'shadow-2xl',
  },
  {
    id: 'peek-3',
    src: 'walkse.png',
    alt: 'Cozy creative desk with laptop and lamp',
    className: '-top-28 sm:-top-36 -right-6 sm:-right-8 rotate-[16deg] w-36 sm:w-52 md:w-60 z-10 hover:z-30 hover:-translate-y-3 hover:rotate-[12deg]',
    shadow: 'shadow-xl',
  },
  {
    id: 'peek-4',
    src: 'travv.png',
    alt: 'Breakfast bowl and sliced apples',
    className: '-top-10 sm:-top-14 left-[4%] sm:left-[8%] -rotate-[8deg] w-32 sm:w-44 md:w-52 z-20 hover:z-30 hover:-translate-y-2',
    shadow: 'shadow-lg',
  },
  {
    id: 'peek-5',
    src: 'walkse.png',
    alt: 'Posters and creative art wall',
    className: '-top-8 sm:-top-12 right-[18%] sm:right-[22%] rotate-[5deg] w-36 sm:w-48 md:w-56 z-20 hover:z-30 hover:-translate-y-2',
    shadow: 'shadow-lg',
  },
];

const BitsOfMyLife: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<LifeInterest | null>(null);

  return (
    <section id="bits-of-my-life" className="relative w-full pt-16 pb-24 sm:pt-20 sm:pb-32 overflow-hidden">
      
      {/* Decorative background embellishments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* MODE 1: ENVELOPE VIEW (Collapsed - matching IMG_6764.jpeg)               */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center pt-24 sm:pt-36 pb-8"
            >
              
              {/* Main Envelope & Peeking Photos Container */}
              <div 
                onClick={() => setIsOpen(true)}
                className="group relative w-full max-w-2xl sm:max-w-3xl cursor-pointer select-none transition-transform duration-500 hover:scale-[1.015]"
              >
                
                {/* ------------------------------------------------------------- */}
                {/* PEEKING PHOTOS (Casually protruding from the envelope)         */}
                {/* ------------------------------------------------------------- */}
                <div className="absolute inset-x-0 top-0 pointer-events-none">
                  {PEEKING_PHOTOS.map((photo) => (
                    <div
                      key={photo.id}
                      className={`absolute transition-all duration-500 transform ${photo.className}`}
                    >
                      <div className={`relative p-1.5 sm:p-2 bg-white rounded-md sm:rounded-lg ${photo.shadow} border border-black/5 overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-xs sm:rounded-sm bg-neutral-100">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ------------------------------------------------------------- */}
                {/* ENVELOPE CARD BODY (Tilted Paper Card - Ref: IMG_6764.jpeg)    */}
                {/* ------------------------------------------------------------- */}
                <div 
                  className="relative z-20 rounded-2xl sm:rounded-3xl bg-[#FCFAF6] border border-[#E8E2D8] p-8 sm:p-12 md:p-16 shadow-[0_25px_60px_-15px_rgba(101,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] transform -rotate-[1.5deg] sm:-rotate-[2deg] transition-all duration-500 group-hover:-rotate-0 group-hover:shadow-[0_30px_70px_-12px_rgba(101,0,0,0.18)]"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse at top left, #FFFFFF 0%, #FAF6EE 70%, #F5EFE4 100%)
                    `,
                  }}
                >
                  
                  {/* Subtle paper grain & envelope top opening lip line */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-black/5 to-transparent rounded-t-2xl sm:rounded-t-3xl pointer-events-none" />
                  
                  {/* Envelope pocket crease / notch design */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-3 bg-[#FAF6EE] rounded-b-xl border-b border-x border-[#E8E2D8] shadow-xs pointer-events-none" />

                  {/* Top-Right "VIEW ↗" Pill Button (Matching IMG_6764.jpeg) */}
                  <div className="flex justify-end mb-8 sm:mb-12">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(true);
                      }}
                      className="group/btn inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#2B547E]/40 text-[#2B547E] hover:text-[#18395B] hover:border-[#18395B] bg-white/70 hover:bg-white text-xs sm:text-sm font-sans font-medium shadow-xs transition-all duration-300"
                    >
                      <span className="tracking-wider uppercase text-[11px] sm:text-xs">VIEW</span>
                      <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                    </button>
                  </div>

                  {/* Main Envelope Heading & Smiley Doodle Row */}
                  <div className="flex items-end justify-between gap-4 pt-4 sm:pt-8">
                    
                    {/* Heading: "Bits of My Life" (Classic refined blue serif font) */}
                    <div>
                      <h2 
                        className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#1E4366] leading-[1.05] tracking-normal drop-shadow-xs"
                        style={{ fontFamily: "'Instrument Serif', 'Bodoni Moda', serif" }}
                      >
                        Bits of my life
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-[#1E4366]/60 font-sans tracking-wide">
                        Click envelope to unpack memories &amp; hobbies
                      </p>
                    </div>

                    {/* Yellow Hand-Drawn Smiley Face Doodle (Matching IMG_6764.jpeg) */}
                    <div className="flex-shrink-0 transform rotate-[6deg] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                      <svg 
                        className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 text-[#E5A724]" 
                        viewBox="0 0 100 100" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        {/* Hand-drawn imperfect circle */}
                        <path 
                          d="M50 8 C74 7 93 25 92 50 C91 75 73 92 48 92 C23 92 8 74 8 49 C8 24 26 9 50 8 Z" 
                          stroke="#E29F1A" 
                          strokeWidth="5.5" 
                        />
                        {/* Left eye dot */}
                        <ellipse cx="36" cy="40" rx="3.5" ry="5.5" fill="#E29F1A" />
                        {/* Right eye dot */}
                        <ellipse cx="64" cy="40" rx="3.5" ry="5.5" fill="#E29F1A" />
                        {/* Curved happy smile */}
                        <path 
                          d="M32 60 C40 73 60 73 68 60" 
                          stroke="#E29F1A" 
                          strokeWidth="5" 
                        />
                      </svg>
                    </div>

                  </div>

                </div>

                {/* Subtle back envelope flap hint */}
                <div className="absolute -inset-1 rounded-3xl bg-[#E8E0D2]/40 -z-10 transform -rotate-[3deg] pointer-events-none" />

              </div>

              {/* Gentle hint label below envelope */}
              <div className="mt-8 flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-[#650000]/70">
                <span className="inline-block w-2 h-2 rounded-full bg-[#E05A47] animate-ping" />
                <span>Tap or click anywhere on the envelope to peek inside</span>
              </div>

            </motion.div>
          ) : (
            
            /* ========================================================================= */
            /* MODE 2: EXPANDED GALLERY VIEW (Matching IMG_6787.jpeg)                    */
            /* ========================================================================= */
            <motion.div
              key="gallery-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full pt-4"
            >
              
              {/* Gallery Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-[#650000]/15">
                
                {/* Main Heading: "Sneak peek in my other interests!" */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 rounded-full bg-white/70 text-[#650000] text-xs font-sans font-semibold border border-white/80">
                      Bits of My Life
                    </span>
                    <span className="text-xs text-[#650000]/60 font-sans">&bull; 8 memories &amp; hobbies</span>
                  </div>
                  <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl text-[#650000] font-light tracking-tight">
                    Sneak peek in my <span className="font-bold text-[#650000]">other interests!</span>
                  </h2>
                </div>

                {/* Close / Fold Back Button */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 hover:bg-white text-[#650000] border border-[#650000]/20 hover:border-[#650000]/40 shadow-sm text-xs sm:text-sm font-sans font-semibold transition-all duration-300 hover:shadow-md active:scale-98"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                    <span>Put back in envelope</span>
                  </button>
                </div>

              </div>

              {/* Gallery Grid (Exact 4-Column on Desktop, 2-Column on Mobile - Matching IMG_6787.jpeg) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-10">
                {INTERESTS.map((interest, index) => (
                  <motion.div
                    key={interest.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    onClick={() => setActivePhoto(interest)}
                    className="group cursor-pointer flex flex-col space-y-3"
                  >
                    
                    {/* Photo Container with subtle border & hover zoom */}
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden bg-neutral-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]">
                      <img
                        src={interest.image}
                        alt={interest.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                      
                      {/* Subtle hover overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-xs font-sans font-medium flex items-center gap-1">
                          <span>Click to enlarge</span>
                          <span>↗</span>
                        </span>
                      </div>

                      {/* Tag pill in corner */}
                      {interest.category && (
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-white text-[11px] font-sans font-medium">
                          {interest.category}
                        </div>
                      )}
                    </div>

                    {/* Exact Title / Caption below Photo (Matching IMG_6787.jpeg) */}
                    <div className="pt-0.5">
                      <p className="font-serif italic text-sm sm:text-[15px] text-[#650000] font-normal leading-snug group-hover:text-[#8C1227] transition-colors">
                        {interest.title}
                      </p>
                      {interest.location && (
                        <p className="text-xs text-[#650000]/60 font-sans mt-0.5">
                          {interest.location}
                        </p>
                      )}
                    </div>

                  </motion.div>
                ))}
              </div>

              {/* Bottom return bar */}
              <div className="mt-16 sm:mt-20 pt-8 border-t border-[#650000]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#650000]/70 font-sans">
                  Capturing little fragments of inspiration, design, and life beyond the screen.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    const el = document.getElementById('bits-of-my-life');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-[#650000] underline decoration-[#650000]/40 hover:decoration-[#650000] transition-all"
                >
                  <span>Pack away into envelope</span>
                  <span>↑</span>
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL FOR PHOTO DETAILS                              */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
                title="Close"
              >
                ✕
              </button>

              {/* Large Image */}
              <div className="aspect-[4/3] sm:aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption & Story Details */}
              <div className="p-6 sm:p-8 bg-[#FAF6EE]">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="px-3 py-1 rounded-md bg-[#650000]/10 text-[#650000] text-xs font-sans font-semibold">
                    {activePhoto.category}
                  </span>
                  {activePhoto.location && (
                    <span className="text-xs text-[#650000]/60 font-sans">
                      📍 {activePhoto.location}
                    </span>
                  )}
                </div>
                
                <h3 className="font-serif italic text-2xl sm:text-3xl text-[#650000] mb-2">
                  {activePhoto.title}
                </h3>
                
                <p className="text-sm sm:text-base text-[#650000]/80 font-sans leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default BitsOfMyLife;
