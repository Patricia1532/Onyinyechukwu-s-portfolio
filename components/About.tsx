
import React, { useState, useEffect } from 'react';
import BitsOfMyLife from './BitsOfMyLife';
import FAQ from './FAQ';

interface AboutProps {
  onNavigateHome?: () => void;
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
}

const About: React.FC<AboutProps> = ({
  onNavigateHome,
  onNavigateProjects,
  onNavigateContact,
}) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Patricia!";

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTypedText(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(interval);
        }
      }, 70);
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="about-root min-h-screen w-full relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-28 px-5 sm:px-8 lg:px-12 select-none">
      <style>{`
        .about-root {
          --baby-blue: #89CFF0;
          --blue-soft: #d9e8f6;
          --blue-deep: #5f8fc2;
          --cherry: #7a1422;
          --cherry-dark: #5a0e18;
          --cream: #EAF5FB;
          --ink: #2a2a33;
          --muted: #55555f;
          font-family: "Outfit", system-ui, sans-serif;
          color: var(--ink);
          background-color: #EAF5FB;
          background-image: radial-gradient(ellipse at 50% 35%, #F4FAFD 0%, #E3F2FB 50%, #CDE9F8 100%);
        }

        .about-layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.85fr) 1.15fr;
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
          padding: 16px 0 60px;
        }

        /* ---------- photo ---------- */
        .photo-wrap {
          position: relative;
          justify-self: center;
          width: min(100%, 440px);
        }
        .polaroid {
          position: relative;
          background: #fff;
          padding: 16px 16px 64px;
          border-radius: 6px;
          box-shadow: 0 30px 60px -30px rgba(42,42,51,.45), 0 2px 6px rgba(42,42,51,.06);
          transform: rotate(-2.5deg);
          transition: transform .6s cubic-bezier(.2,.8,.2,1);
        }
        .polaroid:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .polaroid img {
          display: block;
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 3px;
          background: var(--blue-soft);
        }
        .polaroid figcaption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 20px;
          text-align: center;
          font-family: "Playfair Display", serif;
          font-style: italic;
          font-size: 16px;
          color: var(--muted);
        }
        .tape {
          position: absolute;
          top: -14px;
          left: 50%;
          width: 120px;
          height: 30px;
          transform: translateX(-50%) rotate(3deg);
          background: rgba(167,199,231,.7);
          box-shadow: 0 2px 4px rgba(0,0,0,.05);
        }
        .doodle {
          position: absolute;
          pointer-events: none;
          z-index: 2;
        }
        .star   { width: 64px; left: -26px; top: -22px; animation: about-bob 5s ease-in-out infinite; }
        .flower { width: 46px; left: -34px; top: 56px; animation: about-spin 18s linear infinite; }
        .spark  { width: 26px; right: -14px; bottom: 30px; animation: about-twinkle 2.4s ease-in-out infinite; }
        .heart  { width: 40px; right: -18px; top: 38%; animation: about-bob 4s ease-in-out infinite -1.5s; }
        
        @keyframes about-bob { 50% { transform: translateY(-8px) rotate(6deg); } }
        @keyframes about-spin { to { transform: rotate(360deg); } }
        @keyframes about-twinkle { 50% { transform: scale(.55) rotate(45deg); opacity: .5; } }

        /* ---------- text ---------- */
        .bubble {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: "Playfair Display", serif;
          font-size: 20px;
          font-weight: 500;
          background: #fff;
          padding: 10px 18px;
          border-radius: 14px 14px 14px 4px;
          box-shadow: 0 8px 20px -14px rgba(42,42,51,.4);
        }
        .caret {
          width: 3px;
          height: 1.05em;
          background: var(--cherry);
          border-radius: 2px;
          animation: about-blink 1s steps(1) infinite;
        }
        @keyframes about-blink { 50% { opacity: 0; } }

        .about-hero-h1 {
          margin-top: 24px;
          font-family: "Playfair Display", serif;
          font-weight: 900;
          font-size: clamp(38px, 5.2vw, 76px);
          line-height: 1.05;
          letter-spacing: -.015em;
          color: var(--ink);
        }
        .about-hero-h1 .red {
          color: var(--cherry);
          position: relative;
          white-space: nowrap;
        }
        .about-hero-h1 .squiggle {
          position: absolute;
          left: 0;
          bottom: -.08em;
          width: 100%;
          height: .22em;
          overflow: visible;
        }
        .about-hero-h1 .squiggle path {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: about-draw 1.2s 0.8s ease forwards;
        }
        @keyframes about-draw { to { stroke-dashoffset: 0; } }
        .about-hero-h1 em {
          font-weight: 500;
          font-style: italic;
          color: var(--blue-deep);
        }

        .about-lead-p {
          margin-top: 24px;
          max-width: 580px;
          font-size: clamp(17px, 1.35vw, 19px);
          line-height: 1.65;
          color: var(--muted);
        }
        .about-lead-p + .about-lead-p { margin-top: 14px; }
        .about-lead-p strong {
          color: var(--ink);
          font-weight: 500;
        }

        /* ---------- song ---------- */
        .song {
          margin-top: 36px;
          max-width: 560px;
        }
        .song-head {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .script {
          font-family: "Mrs Saint Delafield", cursive;
          font-size: 46px;
          line-height: 1;
          color: var(--ink);
        }
        .eq {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 18px;
        }
        .eq i {
          width: 4px;
          background: var(--cherry);
          border-radius: 2px;
          animation: about-eq 1s ease-in-out infinite;
        }
        .eq i:nth-child(2) { animation-delay: -.3s; }
        .eq i:nth-child(3) { animation-delay: -.6s; }
        .eq i:nth-child(4) { animation-delay: -.15s; }
        @keyframes about-eq { 0%,100% { height: 30%; } 50% { height: 100%; } }

        .player {
          margin-top: 12px;
          padding: 8px;
          border-radius: 22px;
          background: linear-gradient(135deg, var(--baby-blue), var(--blue-deep));
          box-shadow: 0 24px 40px -24px rgba(95,143,194,.9);
          transition: transform .4s cubic-bezier(.2,.8,.2,1);
        }
        .player:hover { transform: translateY(-3px); }
        .player iframe {
          display: block;
          width: 100%;
          height: 152px;
          border: 0;
          border-radius: 14px;
        }

        /* ---------- entrance animation ---------- */
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          animation: about-up .9s cubic-bezier(.2,.8,.2,1) forwards;
        }
        @keyframes about-up { to { opacity: 1; transform: none; } }

        @media (max-width: 880px) {
          .about-layout { grid-template-columns: 1fr; padding-top: 8px; }
          .photo-wrap { width: min(100%, 340px); margin-top: 16px; margin-bottom: 24px; }
        }
        @media (max-width: 560px) {
          .about-hero-h1 .red { white-space: normal; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; animation: none !important; }
          .about-hero-h1 .squiggle path { stroke-dashoffset: 0 !important; animation: none !important; }
          .star, .flower, .spark, .heart, .caret, .eq i { animation: none !important; }
        }
      `}</style>

      {/* Subtle paper grain overlay for cohesive vintage print aesthetic */}
      <div className="absolute inset-0 bg-vintage-grain opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top breadcrumb & back button */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <button
            onClick={onNavigateHome || onNavigateProjects}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/75 hover:bg-white text-[#7a1422] border border-white/80 shadow-sm text-xs font-sans font-semibold uppercase tracking-wider transition-all"
          >
            <span className="text-sm transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* ABOUT HOMESCREEN / HERO (Based on provided design)                        */}
        {/* ========================================================================= */}
        <main className="about-layout">
          
          {/* PHOTO COLUMN */}
          <div className="photo-wrap reveal" style={{ animationDelay: '.05s' }}>
            {/* Star doodle */}
            <svg className="doodle star" viewBox="0 0 100 100" aria-hidden="true">
              <path
                d="M50 6 L62 38 L96 40 L69 61 L79 94 L50 75 L21 94 L31 61 L4 40 L38 38Z"
                fill="var(--blue-deep)"
                stroke="var(--blue-deep)"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>

            {/* Flower doodle */}
            <svg className="doodle flower" viewBox="-30 -30 60 60" aria-hidden="true">
              <g fill="var(--baby-blue)">
                <circle cx="0" cy="-14" r="11"/>
                <circle cx="13" cy="-4" r="11"/>
                <circle cx="8" cy="12" r="11"/>
                <circle cx="-8" cy="12" r="11"/>
                <circle cx="-13" cy="-4" r="11"/>
              </g>
              <circle r="6" fill="#fff"/>
              <circle r="3" fill="#f2c94c"/>
            </svg>

            {/* Heart doodle with cute face */}
            <svg className="doodle heart" viewBox="0 0 100 100" aria-hidden="true">
              <path
                d="M50 86 C22 64 8 46 18 28 C28 12 46 16 50 32 C54 16 72 12 82 28 C92 46 78 64 50 86Z"
                fill="#f3dde0"
                stroke="var(--cherry)"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <circle cx="39" cy="44" r="3.4" fill="var(--cherry)"/>
              <circle cx="61" cy="44" r="3.4" fill="var(--cherry)"/>
              <path d="M41 56 Q50 65 59 56" fill="none" stroke="var(--cherry)" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>

            {/* Spark doodle */}
            <svg className="doodle spark" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 0 Q11 9 20 10 Q11 11 10 20 Q9 11 0 10 Q9 9 10 0Z" fill="var(--cherry)"/>
            </svg>

            {/* Polaroid card */}
            <figure className="polaroid">
              <span className="tape" aria-hidden="true"></span>
              <img
                src="/pat.png"
                alt="Patricia Eziashi smiling, holding a bouquet of flowers"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/about_portrait.jpg";
                }}
              />
              
            </figure>
          </div>

          {/* TEXT & DETAILS COLUMN */}
          <section>
            {/* Friendly Chat Bubble with typing animation */}
            <div className="reveal" style={{ animationDelay: '.15s' }}>
              <span className="bubble">
                <span id="typed">{typedText || "\u00A0"}</span>
                <span className="caret"></span>
              </span>
            </div>

            {/* Large editorial title */}
            <h1 className="about-hero-h1 reveal" style={{ animationDelay: '.3s' }}>
              I make things{' '}
              <span className="red">
                look good
                <svg className="squiggle" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M2 8 Q12 2 22 8 T42 8 T62 8 T82 8 T102 8 T122 8 T142 8 T162 8 T182 8 T198 8"
                    fill="none"
                    stroke="var(--baby-blue)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              and <span className="red">work properly</span>. <em>Mostly.</em>
            </h1>

            {/* Lead paragraphs */}
            <p className="about-lead-p reveal" style={{ animationDelay: '.45s' }}>
              A <strong>product designer</strong> with a Mass Communication degree and a soft spot for digital products. I turn “what if?” into things people actually enjoy using.
            </p>

            <p className="about-lead-p reveal" style={{ animationDelay: '.55s' }}>
              I work where <strong>UX/UI, storytelling and front-end code</strong> meet, so I can design it, explain it and build it. I ask a lot of questions, mostly to users and occasionally to my code.
            </p>

            {/* Spotify Song section with animated EQ & Maggie Rogers embed */}
            <div className="song reveal" style={{ animationDelay: '.8s' }}>
              <div className="song-head">
                <span className="script">favorite song rn</span>
                <span className="eq" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="player">
                {/* "Light On" by Maggie Rogers – Spotify embed */}
                <iframe
                  src="https://open.spotify.com/embed/track/6UnCGAEmrbGIOSmGRZQ1M2?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Light On by Maggie Rogers on Spotify"
                />
              </div>
            </div>
          </section>

        </main>
        
        {/* ========================================================================= */}
        {/* BITS OF MY LIFE SECTION (Interactive Envelope & Life Interests)           */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#7a1422]/10">
          <BitsOfMyLife />
        </div>

        {/* ========================================================================= */}
        {/* PLAYFUL PERSONAL FAQS SECTION                                             */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-[#7a1422]/10">
          <FAQ />
        </div>

      </div>
    </div>
  );
};

export default About;
