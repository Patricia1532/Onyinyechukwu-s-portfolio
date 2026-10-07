
import React from 'react';
import { TECH_STACK } from '../constants';

export const TechBrandIcon: React.FC<{ type: string; className?: string }> = ({ type }) => {
  switch (type) {
    case 'figma':
      return (
        <div className="w-11 h-11 rounded-2xl bg-neutral-50/80 border border-neutral-200/60 flex items-center justify-center shadow-xs select-none">
          <svg className="w-5 h-7" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        </div>
      );
    case 'illustrator':
      return (
        <div className="w-11 h-11 rounded-2xl bg-[#261300] border border-[#FF9A00]/50 flex items-center justify-center shadow-xs select-none">
          <span className="font-sans font-black text-[#FF9A00] text-[18px] tracking-tight leading-none">
            Ai
          </span>
        </div>
      );
    case 'indesign':
      return (
        <div className="w-11 h-11 rounded-2xl bg-[#2A0B1A] border border-[#FF3366]/50 flex items-center justify-center shadow-xs select-none">
          <span className="font-sans font-black text-[#FF3366] text-[18px] tracking-tight leading-none">
            Id
          </span>
        </div>
      );
    case 'claude':
      return (
        <div className="w-11 h-11 rounded-2xl bg-[#CC785C] flex items-center justify-center shadow-xs select-none">
          <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="-3"
                  x2="0"
                  y2="-13"
                  stroke="white"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  transform={`rotate(${deg})`}
                />
              ))}
              <circle r="3.6" fill="white"/>
            </g>
          </svg>
        </div>
      );
    case 'vscode':
      return (
        <div className="w-11 h-11 rounded-2xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center shadow-xs select-none">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 2.5L12.5 7L7 2.5C6.5 2.1 5.8 2.2 5.5 2.7L0.8 10.7C0.5 11.1 0.5 11.6 0.8 12L5.5 20C5.8 20.5 6.5 20.6 7 20.2L12.5 15.7L17.5 20.2C18.1 20.7 19 20.5 19.3 19.8L23 12L19.3 2.9C19 2.2 18.1 2 17.5 2.5Z" fill="#007ACC" fillOpacity="0.2"/>
            <path d="M19.2 3L12.8 9.1L7.3 4.8L1.6 10.5C1.1 11 1.1 11.8 1.6 12.3L7.3 18L12.8 13.7L19.2 19.8C19.8 20.4 20.8 20.1 21 19.3L23 12.4C23.1 12 23 11.6 22.8 11.3L19.2 3Z" fill="#007ACC"/>
            <path d="M17.2 11.4L7.3 4.8L1.6 10.5C1.1 11 1.1 11.8 1.6 12.3L7.3 18L17.2 11.4Z" fill="#1F8AD2"/>
            <path d="M17.2 11.4L22.8 11.3C23 11.6 23.1 12 23 12.4L21 19.3C20.8 20.1 19.8 20.4 19.2 19.8L12.8 13.7L17.2 11.4Z" fill="#0066B8"/>
            <path d="M12.8 9.1L19.2 3C19.8 2.4 20.8 2.7 21 3.5L22.8 11.3L17.2 11.4L12.8 9.1Z" fill="#0E639C"/>
          </svg>
        </div>
      );
    case 'lovable':
      return (
        <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-200/90 flex items-center justify-center shadow-xs select-none">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lovableIconGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF5722"/>
                <stop offset="50%" stopColor="#FF1744"/>
                <stop offset="100%" stopColor="#7C4DFF"/>
              </linearGradient>
            </defs>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="url(#lovableIconGrad)"
            />
          </svg>
        </div>
      );
    case 'vercel':
      return (
        <div className="w-11 h-11 rounded-2xl bg-black flex items-center justify-center shadow-xs select-none">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L23 21H1L12 3Z"/>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

const TechStackGrid: React.FC = () => {
  // Row 1: 4 tools (Figma, Adobe Illustrator, Adobe InDesign, Claude)
  const row1 = TECH_STACK.slice(0, 4);
  // Row 2: 3 tools (VS Code, Lovable, Vercel)
  const row2 = TECH_STACK.slice(4, 7);

  return (
    <div className="w-full bg-white rounded-3xl sm:rounded-[2rem] border border-neutral-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Row 1: 4 Columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {row1.map((tool, idx) => {
          let borders = 'border-neutral-200/80 ';
          // Mobile: all items in row 1 have bottom border
          borders += 'border-b ';
          // Tablet: even items (0, 2) have right border
          borders += idx % 2 === 0 ? 'sm:border-r ' : 'sm:border-r-0 ';
          // Tablet: first 2 items have bottom border, items 2 & 3 do not
          borders += idx < 2 ? 'sm:border-b ' : 'sm:border-b-0 ';
          // Desktop: items 0, 1, 2 have right border, item 3 does not
          borders += idx < 3 ? 'lg:border-r ' : 'lg:border-r-0 ';
          // Desktop: no bottom border (the divider below takes care of it)
          borders += 'lg:border-b-0';

          return (
            <div
              key={tool.name}
              className={`p-7 sm:p-8 flex flex-col justify-start items-start group hover:bg-neutral-50/70 transition-colors ${borders}`}
            >
              {/* App Icon */}
              <div className="mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-105">
                <TechBrandIcon type={tool.iconType || ''} />
              </div>

              {/* Tool Name in bold uppercase */}
              <h4 className="font-sans font-bold text-xs sm:text-[13px] md:text-sm tracking-wider uppercase text-neutral-900 mb-1.5 sm:mb-2">
                {tool.name}
              </h4>

              {/* Caption / Capability tags */}
              <p className="font-sans text-[11px] sm:text-xs text-neutral-500 font-normal leading-relaxed">
                {tool.tags}
              </p>
            </div>
          );
        })}
      </div>

      {/* Full-width Divider Line between Row 1 and Row 2 */}
      <div className="hidden lg:block border-t border-neutral-200/80" />

      {/* Row 2: 3 Columns on desktop and tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
        {row2.map((tool, idx) => {
          let borders = 'border-neutral-200/80 ';
          // Mobile: items 0 & 1 have bottom border, last item does not
          borders += idx < 2 ? 'border-b ' : 'border-b-0 ';
          // Tablet & Desktop: items 0 & 1 have right border, item 2 does not
          borders += idx < 2 ? 'sm:border-r ' : 'sm:border-r-0 ';
          borders += 'sm:border-b-0 lg:border-b-0';

          return (
            <div
              key={tool.name}
              className={`p-7 sm:p-8 flex flex-col justify-start items-start group hover:bg-neutral-50/70 transition-colors ${borders}`}
            >
              {/* App Icon */}
              <div className="mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-105">
                <TechBrandIcon type={tool.iconType || ''} />
              </div>

              {/* Tool Name in bold uppercase */}
              <h4 className="font-sans font-bold text-xs sm:text-[13px] md:text-sm tracking-wider uppercase text-neutral-900 mb-1.5 sm:mb-2">
                {tool.name}
              </h4>

              {/* Caption / Capability tags */}
              <p className="font-sans text-[11px] sm:text-xs text-neutral-500 font-normal leading-relaxed">
                {tool.tags}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackGrid;
