
import React, { useEffect, useRef, useState, useMemo } from 'react';

interface FooterProps {
  onResumeClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onResumeClick }) => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Generate daisy doodle path as in provided code
  const daisyPath = useMemo(() => {
    let d = '';
    for (let i = 0; i <= 360; i += 2) {
      const t = (i * Math.PI) / 180;
      const r = 20 + 26 * Math.abs(Math.cos(4 * t));
      d += (i ? 'L' : 'M') + (50 + r * Math.cos(t)).toFixed(1) + ' ' + (50 + r * Math.sin(t)).toFixed(1);
    }
    return d + 'Z';
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, o) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              o.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (onResumeClick) {
      e.preventDefault();
      onResumeClick();
    }
  };

  return (
    <>
      <style>{`
        :root {
          --baby-blue: #a7c7e7;
          --blue-soft: #d9e8f6;
          --blue-deep: #5f8fc2;
          --cherry: #7a1422;
          --cherry-dark: #5a0e18;
          --cream: #fbf8f4;
          --ink: #2a2a33;
        }

        /* ================= FOOTER ================= */
        .footer-portfolio {
          position: relative;
          overflow: hidden;
          padding: 110px 6vw 34px;
          background-color: #EAF5FB !important;
          background-image: radial-gradient(ellipse at 50% 35%, #F4FAFD 0%, #E3F2FB 50%, #CDE9F8 100%) !important;
          border-top: 1px solid rgba(101, 0, 0, 0.1);
          font-family: "Outfit", system-ui, sans-serif;
          color: #2a2a33;
        }

        /* headline */
        .footer-portfolio .headline {
          font-family: "Bodoni Moda", serif;
          font-weight: 400;
          font-size: clamp(48px, 9vw, 150px);
          line-height: 0.95;
          letter-spacing: -0.01em;
          color: #7a1422;
        }
        .footer-portfolio .headline em {
          font-style: italic;
          font-weight: 400;
        }
        .footer-portfolio .headline .line {
          display: block;
          overflow: hidden;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
        }
        .footer-portfolio .headline .line span {
          display: inline-block;
          transform: translateY(105%);
          transition: transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .footer-portfolio.in .headline .line span {
          transform: none;
        }
        .footer-portfolio.in .headline .line:nth-child(2) span {
          transition-delay: 0.12s;
        }

        .footer-portfolio .sub {
          margin-top: 26px;
          max-width: 460px;
          font-family: "Bodoni Moda", serif;
          font-style: italic;
          font-size: clamp(18px, 1.8vw, 22px);
          line-height: 1.4;
          color: #2a2a33;
        }

        /* CTA + note */
        .footer-portfolio .cta-row {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px 34px;
        }
        .footer-portfolio .cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 30px;
          border-radius: 999px;
          text-decoration: none;
          background: #7a1422;
          color: #ffffff;
          font-size: 15px;
          letter-spacing: 0.06em;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        .footer-portfolio .cta:hover {
          transform: translateY(-3px) rotate(-1.5deg);
          background: #5a0e18;
          box-shadow: 0 16px 30px -14px rgba(122,20,34,0.7);
        }
        .footer-portfolio .cta .arr {
          transition: transform 0.3s ease;
        }
        .footer-portfolio .cta:hover .arr {
          transform: translate(3px, -3px);
        }

        .footer-portfolio .note {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          line-height: 1.6;
          color: #2a2a33;
        }
        .footer-portfolio .note svg {
          width: 54px;
          height: 30px;
          flex: none;
        }

        /* socials */
        .footer-portfolio .grid-socials {
          margin-top: 80px;
          padding-top: 28px;
          border-top: 1px solid rgba(42,42,51,0.25);
          display: flex;
          flex-wrap: wrap;
          gap: 20px 64px;
        }
        .footer-portfolio .grid-socials a {
          color: #2a2a33;
          text-decoration: none;
          display: block;
        }
        .footer-portfolio .grid-socials .platform {
          font-family: "Bodoni Moda", serif;
          font-size: 26px;
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }
        .footer-portfolio .grid-socials .platform::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 1px;
          width: 100%;
          background: #7a1422;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.45s ease;
        }
        .footer-portfolio .grid-socials a:hover .platform {
          color: #7a1422;
        }
        .footer-portfolio .grid-socials a:hover .platform::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .footer-portfolio .grid-socials .arr {
          display: inline-block;
          margin-left: 4px;
          transition: transform 0.3s ease;
        }
        .footer-portfolio .grid-socials a:hover .arr {
          transform: translate(2px, -2px);
        }

        /* bottom bar */
        .footer-portfolio .bottom {
          margin-top: 70px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(42,42,51,0.85);
        }
        .footer-portfolio .top-btn {
          background: none;
          border: 1px solid #7a1422;
          color: #7a1422;
          cursor: pointer;
          padding: 10px 18px;
          border-radius: 999px;
          font: inherit;
          letter-spacing: inherit;
          transition: background 0.3s ease, color 0.3s ease, transform 0.25s ease;
        }
        .footer-portfolio .top-btn:hover {
          background: #7a1422;
          color: #ffffff;
        }
        .footer-portfolio .top-btn span {
          display: inline-block;
          transition: transform 0.3s ease;
          margin-left: 2px;
        }
        .footer-portfolio .top-btn:hover span {
          transform: translateY(-3px);
        }

        /* doodles */
        .footer-portfolio .doodle {
          position: absolute;
          pointer-events: none;
        }
        .footer-portfolio .flower {
          width: 90px;
          height: 90px;
          right: 8vw;
          top: 70px;
          animation: footerSpin 24s linear infinite;
        }
        .footer-portfolio .heart {
          width: 46px;
          height: 46px;
          right: 16vw;
          top: 190px;
          animation: footerBob 4s ease-in-out infinite;
        }
        .footer-portfolio .spark {
          width: 20px;
          height: 20px;
          right: 24vw;
          top: 90px;
          animation: footerTwinkle 2.4s ease-in-out infinite;
        }
        @keyframes footerSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes footerBob {
          50% { transform: translateY(-8px) rotate(-6deg); }
        }
        @keyframes footerTwinkle {
          50% { transform: scale(0.5) rotate(45deg); opacity: 0.5; }
        }

        @media (max-width: 640px) {
          .footer-portfolio { padding: 80px 16px 28px; }
          .footer-portfolio .flower { width: 56px; height: 56px; top: 18px; right: 16px; }
          .footer-portfolio .heart { width: 38px; height: 38px; top: 110px; right: 30px; }
          .footer-portfolio .spark { display: none; }
          .footer-portfolio .bottom { flex-direction: column; align-items: flex-start; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
          .footer-portfolio .headline .line span { transform: none !important; }
        }
      `}</style>

      <footer
        ref={footerRef}
        id="contact"
        className={`footer-portfolio ${isInView ? 'in' : ''}`}
      >
        {/* Subtle organic vintage paper grain texture matching homescreen */}
        <div className="absolute inset-0 bg-vintage-grain opacity-10 pointer-events-none" />

        {/* Doodles */}
        <svg className="doodle flower" viewBox="0 0 100 100" aria-hidden="true">
          <path
            d={daisyPath}
            fill="none"
            stroke="#5f8fc2"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </svg>

        <svg className="doodle heart" viewBox="0 0 100 100" aria-hidden="true">
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
        </svg>

        <svg className="doodle spark" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M10 0 Q11 9 20 10 Q11 11 10 20 Q9 11 0 10 Q9 9 10 0Z"
            fill="#7a1422"
          />
        </svg>

        {/* Headline */}
        <h2 className="headline">
          <span className="line">
            <span>You scrolled</span>
          </span>
          <span className="line">
            <span>
              <em>all the way</em> down.
            </span>
          </span>
        </h2>

        <p className="sub">
          That's basically a first date. Let's make something lovely together.
        </p>

        {/* CTA + Note */}
        <div className="cta-row">
          <a className="cta" href="mailto:patriciaeziashi1@gmail.com">
            Say hi <span className="arr">↗</span>
          </a>

          <div className="note">
            <svg viewBox="0 0 60 30" aria-hidden="true">
              <path
                d="M58 6 C40 0 20 6 8 22 M8 22 L6 12 M8 22 L18 20"
                fill="none"
                stroke="#2a2a33"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span>
              I reply faster than<br />my group chat
            </span>
          </div>
        </div>

        {/* Socials / Links (Matching the updated code & image) */}
        <nav className="grid-socials" aria-label="Social links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="platform">
              LinkedIn <span className="arr">↗</span>
            </span>
          </a>

          <a
            href="/CVVS.pdf"
            onClick={handleResumeClick}
          >
            <span className="platform">
              Résumé <span className="arr">↗</span>
            </span>
          </a>
        </nav>

        {/* Bottom Bar */}
        <div className="bottom">
          <span>
            &copy; {new Date().getFullYear()} Patricia. All rights reserved
          </span>
          <button
            type="button"
            className="top-btn"
            onClick={scrollToTop}
          >
            take the elevator <span>↑</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
