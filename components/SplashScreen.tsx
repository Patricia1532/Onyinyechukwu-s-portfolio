
import React, { useState, useEffect, useRef, useMemo } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const MESSAGES = [
  { threshold: 0, text: 'warming things up' },
  { threshold: 25, text: 'fluffing the pillows' },
  { threshold: 50, text: 'putting the kettle on' },
  { threshold: 75, text: 'adding a little sparkle' },
  { threshold: 96, text: 'okay, ready when you are' },
];

const DURATION = 6500; // ms until 100%

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState('warming things up');
  const [msgOpacity, setMsgOpacity] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const leavingRef = useRef(false);
  const lastMsgRef = useRef('warming things up');
  const startTimeRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Generate wobbly 8-scalloped daisy path exactly as in local HTML
  const daisyPathD = useMemo(() => {
    let d = '';
    for (let i = 0; i <= 360; i += 2) {
      const t = (i * Math.PI) / 180;
      const r = 20 + 26 * Math.abs(Math.cos(4 * t)) + Math.sin(i * 0.7) * 0.8;
      const x = 50 + r * Math.cos(t);
      const y = 50 + r * Math.sin(t);
      d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    return d + 'Z';
  }, []);

  // Generate 5-petal flower path exactly as in local HTML
  const petal5PathD = useMemo(() => {
    let p = '';
    for (let i = 0; i <= 360; i += 3) {
      const t = (i * Math.PI) / 180;
      const r = 10 + 12 * Math.pow(Math.abs(Math.cos(2.5 * t)), 0.7);
      p += (i ? 'L' : 'M') + (r * Math.cos(t)).toFixed(1) + ' ' + (r * Math.sin(t)).toFixed(1);
    }
    return p + 'Z';
  }, []);

  const triggerLeave = () => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    setIsLeaving(true);

    // At 650ms, curtain reaches top covering the screen
    // At 1400ms, curtain animation completes off the top
    setTimeout(() => {
      onFinish();
    }, 1350);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerLeave();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const ease = (t: number) => 1 - Math.pow(1 - t, 2.2);

    const tick = (ts: number) => {
      if (leavingRef.current) return;
      if (!startTimeRef.current) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      const t = Math.min(elapsed / DURATION, 1);
      const v = Math.round(ease(t) * 100);

      setProgress(v);

      // Determine current message
      const currentMsg = [...MESSAGES].filter((m) => v >= m.threshold).pop()?.text || 'warming things up';
      if (currentMsg !== lastMsgRef.current) {
        lastMsgRef.current = currentMsg;
        setMsgOpacity(0);
        setTimeout(() => {
          setStatusMsg(currentMsg);
          setMsgOpacity(1);
        }, 250);
      }

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        setIsDone(true);
        setTimeout(() => {
          triggerLeave();
        }, 1400);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --baby-blue: #a7c7e7;
          --blue-soft: #d9e8f6;
          --blue-deep: #5f8fc2;
          --cherry: #7a1422;
          --cherry-dark: #5a0e18;
          --cream: #EAF5FB;
          --ink: #2a2a33;
        }

        /* drifting baby-blue light */
        .splash-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.55;
          animation: splashDrift 14s ease-in-out infinite alternate;
        }
        .splash-blob.b1 {
          width: 55vmax;
          height: 55vmax;
          background: #a7c7e7;
          top: -22vmax;
          left: -18vmax;
        }
        .splash-blob.b2 {
          width: 45vmax;
          height: 45vmax;
          background: #d9e8f6;
          bottom: -20vmax;
          right: -12vmax;
          animation-delay: -5s;
        }
        .splash-blob.b3 {
          width: 22vmax;
          height: 22vmax;
          background: #e6c3c8;
          bottom: 8vh;
          left: 12vw;
          opacity: 0.35;
          animation-delay: -9s;
        }
        @keyframes splashDrift {
          to { transform: translate(6vw, 4vh) scale(1.08); }
        }

        /* paper grain */
        .splash-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.09;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }

        /* intro typography */
        .splash-intro {
          position: relative;
          text-align: center;
          padding: 0 16px;
          margin-top: -6vh;
        }
        .splash-eyebrow {
          font-size: 12px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #5f8fc2;
          font-weight: 500;
          font-family: "DM Sans", system-ui, sans-serif;
          opacity: 0;
          animation: splashRise 0.9s 0.3s ease forwards;
        }
        .splash-eyebrow::before, .splash-eyebrow::after {
          content: "";
          display: inline-block;
          width: 28px;
          height: 1px;
          background: currentColor;
          vertical-align: middle;
          margin: 0 12px;
          opacity: 0.6;
        }

        .splash-welcome, .splash-name {
          display: block;
          font-family: "Sacramento", cursive;
          line-height: 0.95;
          clip-path: inset(0 100% 0 0);
          animation: splashWrite 1.6s cubic-bezier(0.6, 0.05, 0.3, 1) forwards;
        }
        .splash-welcome {
          font-size: clamp(54px, 9vw, 120px);
          color: #5f8fc2;
          margin-top: 10px;
          animation-delay: 0.6s;
        }
        .splash-name {
          font-size: clamp(84px, 15vw, 210px);
          color: #7a1422;
          margin-top: -0.12em;
          padding: 0 0.15em;
          animation-delay: 1.6s;
          animation-duration: 1.9s;
          text-shadow: 0 6px 30px rgba(122, 20, 34, 0.12);
        }
        .splash-port {
          display: block;
          margin-top: 4px;
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-size: clamp(15px, 2vw, 22px);
          letter-spacing: 0.9em;
          text-transform: uppercase;
          padding-left: 0.9em;
          color: #2a2a33;
          opacity: 0;
          animation: splashSpread 1.4s 3.1s ease forwards;
        }

        @keyframes splashWrite { to { clip-path: inset(0 0 0 0); } }
        @keyframes splashRise  { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes splashSpread {
          from { opacity: 0; letter-spacing: 0.2em; filter: blur(4px); }
          to   { opacity: 1; letter-spacing: 0.9em; filter: blur(0); }
        }

        /* doodles */
        .splash-doodle { position: absolute; pointer-events: none; }
        .splash-doodle svg { width: 100%; height: 100%; overflow: visible; }
        .splash-pop {
          opacity: 0;
          transform: scale(0.3) rotate(-30deg);
          animation: splashPop 0.8s cubic-bezier(0.3, 1.6, 0.5, 1) forwards;
        }
        @keyframes splashPop { to { opacity: 1; transform: scale(1) rotate(0); } }
        .splash-float { animation: splashFloat 5s ease-in-out infinite; }
        .splash-spin  { animation: splashSpin 22s linear infinite; }
        @keyframes splashFloat { 50% { transform: translateY(-10px) rotate(4deg); } }
        @keyframes splashSpin  { to { transform: rotate(360deg); } }
        .splash-draw {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: splashDrawline 2.4s 0.5s ease forwards;
        }
        @keyframes splashDrawline { to { stroke-dashoffset: 0; } }

        .splash-d-daisy   { width: clamp(70px, 9vw, 130px); height: clamp(70px, 9vw, 130px); left: 9vw; top: 26vh; }
        .splash-d-cluster { width: clamp(90px, 11vw, 160px); height: clamp(90px, 11vw, 160px); right: 8vw; top: 24vh; }
        .splash-d-heart   { width: clamp(52px, 6vw, 84px); height: clamp(52px, 6vw, 84px); left: 22vw; bottom: 28vh; }
        .splash-d-spark1  { width: 26px; height: 26px; right: 22vw; bottom: 32vh; }
        .splash-d-spark2  { width: 18px; height: 18px; left: 34vw; top: 17vh; }
        .splash-d-spark3  { width: 22px; height: 22px; right: 30vw; top: 14vh; }
        .splash-twinkle { animation: splashTwinkle 2.6s ease-in-out infinite; }
        @keyframes splashTwinkle { 50% { transform: scale(0.55) rotate(45deg); opacity: 0.5; } }

        /* loader & skip pill */
        .splash-loader {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 7vh;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          width: min(360px, calc(100% - 32px));
          opacity: 0;
          animation: splashRise 0.8s 0.9s ease forwards;
        }
        .splash-skip {
          position: relative;
          overflow: hidden;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 22px;
          border-radius: 999px;
          border: 1.5px solid #7a1422;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(6px);
          color: #7a1422;
          font: 600 13px/1 "DM Sans", system-ui, sans-serif;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .splash-skip:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -10px rgba(122, 20, 34, 0.5);
        }
        .splash-skip:focus-visible {
          outline: 2px solid #5f8fc2;
          outline-offset: 3px;
        }
        .splash-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #5a0e18, #7a1422);
          transition: width 0.15s linear;
        }
        .splash-label, .splash-pct {
          position: relative;
          z-index: 1;
          transition: color 0.15s ease;
        }
        .splash-label::after {
          content: " \\2192";
          display: inline-block;
          transition: transform 0.25s;
        }
        .splash-skip:hover .splash-label::after {
          transform: translateX(4px);
        }
        .splash-pct {
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.08em;
        }
        .splash-skip.on-fill .splash-label {
          color: #ffffff;
        }
        .splash-skip.on-fill-all .splash-pct {
          color: #ffffff;
        }
        .splash-skip.done {
          background: #7a1422;
          color: #ffffff;
          animation: splashPulse 1.1s ease infinite;
        }
        @keyframes splashPulse {
          50% { box-shadow: 0 0 0 10px rgba(122, 20, 34, 0); }
          0% { box-shadow: 0 0 0 0 rgba(122, 20, 34, 0.45); }
        }

        .splash-quip {
          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-size: 19px;
          color: #2a2a33;
          text-align: center;
        }
        .splash-quip svg {
          width: 16px;
          height: 16px;
          vertical-align: -2px;
          margin-left: 4px;
          animation: splashBeat 1.3s ease-in-out infinite;
        }
        @keyframes splashBeat {
          15%, 45% { transform: scale(1.25); }
          30% { transform: scale(1); }
        }
        .splash-status {
          font-family: "DM Sans", system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #5f8fc2;
          min-height: 1em;
          transition: opacity 0.3s ease;
        }

        /* exit curtains */
        .splash-curtain {
          position: fixed;
          inset: 0;
          z-index: 200;
          transform: translateY(100%);
          pointer-events: none;
        }
        .splash-curtain.red {
          background: #7a1422;
        }
        .splash-curtain.blue {
          background: #a7c7e7;
          z-index: 201;
        }
        .splash-leaving .splash-curtain.red {
          animation: splashCurtain 1.3s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }
        .splash-leaving .splash-curtain.blue {
          animation: splashCurtain 1.3s 0.12s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }
        @keyframes splashCurtain {
          0% { transform: translateY(100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .splash-leaving #splash-container {
          animation: splashVanish 0s 0.65s forwards;
        }
        @keyframes splashVanish {
          to { visibility: hidden; opacity: 0; }
        }

        @media (max-width: 640px) {
          .splash-d-daisy { left: 4vw; top: 14vh; }
          .splash-d-cluster { right: 3vw; top: 12vh; }
          .splash-d-heart { left: 10vw; bottom: 30vh; }
          .splash-eyebrow::before, .splash-eyebrow::after { width: 14px; margin: 0 8px; }
          .splash-port { letter-spacing: 0.55em; }
          .splash-eyebrow { font-size: 10px; letter-spacing: 0.28em; }
        }
      `}</style>

      <div className={isLeaving ? 'splash-leaving' : ''}>
        {/* Splash Main Screen */}
        <div
          id="splash-container"
          role="dialog"
          aria-label="Welcome"
          className="fixed inset-0 z-[100] grid place-items-center bg-[#EAF5FB] overflow-hidden select-none"
          style={{
            backgroundColor: '#EAF5FB',
            backgroundImage: 'radial-gradient(ellipse at 50% 35%, #F4FAFD 0%, #E3F2FB 50%, #CDE9F8 100%)',
          }}
        >
          {/* Drifting baby-blue and soft pink background blobs */}
          <div className="splash-blob b1" />
          <div className="splash-blob b2" />
          <div className="splash-blob b3" />

          {/* Paper grain overlay */}
          <div className="splash-grain" />

          {/* Top-Left Daisy Doodle */}
          <div className="splash-doodle splash-d-daisy" aria-hidden="true">
            <div className="splash-pop" style={{ animationDelay: '0.4s', width: '100%', height: '100%' }}>
              <div className="splash-spin" style={{ width: '100%', height: '100%' }}>
                <svg viewBox="0 0 100 100">
                  <path
                    d={daisyPathD}
                    className="splash-draw"
                    fill="none"
                    stroke="#a7c7e7"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Top-Right Flower Cluster Doodle */}
          <div className="splash-doodle splash-d-cluster" aria-hidden="true">
            <div className="splash-pop" style={{ animationDelay: '2.2s', width: '100%', height: '100%' }}>
              <div className="splash-float" style={{ width: '100%', height: '100%' }}>
                <svg viewBox="0 0 120 120">
                  <g transform="translate(78 32) rotate(12)">
                    <path d={petal5PathD} fill="#7a1422" />
                    <circle r="4" fill="#f7d774" />
                  </g>
                  <g transform="translate(34 58) rotate(-18) scale(0.8)">
                    <path d={petal5PathD} fill="#a7c7e7" />
                    <circle r="4" fill="#7a1422" />
                  </g>
                  <g transform="translate(84 88) rotate(30) scale(0.85)">
                    <path d={petal5PathD} fill="#5f8fc2" />
                    <circle r="4" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom-Left Smiling Heart Doodle with Blushing Cheeks */}
          <div className="splash-doodle splash-d-heart" aria-hidden="true">
            <div className="splash-pop" style={{ animationDelay: '3.4s', width: '100%', height: '100%' }}>
              <div className="splash-float" style={{ width: '100%', height: '100%', animationDelay: '-2s' }}>
                <svg viewBox="0 0 100 100">
                  <path
                    d="M50 86 C22 64 8 46 18 28 C28 12 46 16 50 32 C54 16 72 12 82 28 C92 46 78 64 50 86Z"
                    fill="#f3dde0"
                    stroke="#7a1422"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                  <circle cx="39" cy="44" r="3.4" fill="#7a1422" />
                  <circle cx="61" cy="44" r="3.4" fill="#7a1422" />
                  <path
                    d="M41 56 Q50 65 59 56"
                    fill="none"
                    stroke="#7a1422"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <ellipse cx="32" cy="53" rx="4" ry="2.4" fill="#a7c7e7" opacity="0.8" />
                  <ellipse cx="68" cy="53" rx="4" ry="2.4" fill="#a7c7e7" opacity="0.8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Twinkling Sparkles (4-Point Stars) */}
          <div className="splash-doodle splash-d-spark1" aria-hidden="true">
            <svg className="splash-twinkle" viewBox="0 0 20 20">
              <path d="M10 0 Q11 9 20 10 Q11 11 10 20 Q9 11 0 10 Q9 9 10 0Z" fill="#7a1422" />
            </svg>
          </div>
          <div className="splash-doodle splash-d-spark2" aria-hidden="true">
            <svg className="splash-twinkle" style={{ animationDelay: '-1s' }} viewBox="0 0 20 20">
              <path d="M10 0 Q11 9 20 10 Q11 11 10 20 Q9 11 0 10 Q9 9 10 0Z" fill="#5f8fc2" />
            </svg>
          </div>
          <div className="splash-doodle splash-d-spark3" aria-hidden="true">
            <svg className="splash-twinkle" style={{ animationDelay: '-1.8s' }} viewBox="0 0 20 20">
              <path d="M10 0 Q11 9 20 10 Q11 11 10 20 Q9 11 0 10 Q9 9 10 0Z" fill="#a7c7e7" />
            </svg>
          </div>

          {/* Main Intro Text */}
          <main className="splash-intro">
            <p className="splash-eyebrow">a little corner of the internet</p>
            <h1 aria-label="Welcome to Patricia's portfolio">
              <span className="splash-welcome">welcome to</span>
              <span className="splash-name">Patricia's</span>
              <span className="splash-port">portfolio</span>
            </h1>
          </main>

          {/* Skip + Progress Loader */}
          <div className="splash-loader">
            <button
              type="button"
              className={`splash-skip ${progress > 45 ? 'on-fill' : ''} ${progress > 88 ? 'on-fill-all' : ''} ${isDone ? 'done' : ''}`}
              onClick={triggerLeave}
              aria-label={isDone ? 'Enter portfolio' : 'Skip intro'}
            >
              <span className="splash-fill" style={{ width: `${progress}%` }} />
              <span className="splash-label">
                {isDone ? 'come on in' : 'skip intro'}
              </span>
              <span className="splash-pct">{progress}%</span>
            </button>

            <p className="splash-quip">
              take a look around, I don't bite
              <svg viewBox="0 0 100 100" aria-hidden="true" className="inline-block">
                <path
                  d="M50 86 C22 64 8 46 18 28 C28 12 46 16 50 32 C54 16 72 12 82 28 C92 46 78 64 50 86Z"
                  fill="#7a1422"
                />
              </svg>
            </p>

            <p className="splash-status" style={{ opacity: msgOpacity }}>
              {statusMsg}
            </p>
          </div>
        </div>

        {/* Exit Curtains (Red and Baby Blue) */}
        <div className="splash-curtain red" />
        <div className="splash-curtain blue" />
      </div>
    </>
  );
};

export default SplashScreen;
