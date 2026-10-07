
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ProcessStage {
  num: string;
  pill: string;
  title: string;
  headline: string;
  desc: string;
  subtext?: string;
  align: 'right' | 'left';
}

const STAGES: ProcessStage[] = [
  {
    num: '01',
    pill: '/ 001',
    title: '01 — DISCOVER',
    headline: 'Understanding people, context & unmet needs',
    desc: 'I start by understanding the people, the problem, and the context behind it.',
    subtext: 'Through qualitative user interviews, contextual inquiries, and competitive mapping, I uncover the underlying friction points before defining solutions.',
    align: 'left'
  },
  {
    num: '02',
    pill: '/ 002',
    title: '02 — DEFINE',
    headline: 'Framing opportunities & architectural clarity',
    desc: 'I turn research and observations into a clear problem worth solving.',
    subtext: 'Synthesizing qualitative findings into structured frameworks, journey maps, and prioritized product scopes aligned with user and business goals.',
    align: 'right'
  },
  {
    num: '03',
    pill: '/ 003',
    title: '03 — DESIGN',
    headline: 'Crafting thoughtful digital interfaces & systems',
    desc: 'I explore ideas, build wireframes, and turn concepts into thoughtful digital experiences.',
    subtext: 'Iterating from low-fidelity wireframes to interactive prototypes and scalable design systems with obsessive typographic hierarchy and tactile interactions.',
    align: 'left'
  },
  {
    num: '04',
    pill: '/ 004',
    title: '04 — TEST & REFINE',
    headline: 'Validating, measuring & polishing every detail',
    desc: 'I test, learn, iterate, and keep refining until the experience feels right.',
    subtext: 'Conducting usability testing sessions, verifying accessibility compliance, and polishing micro-interactions until the product feels completely seamless.',
    align: 'right'
  }
];

export default function DesignProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stagesWrapperRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Store dynamically calculated SVG path string & dimensions
  const [svgPath, setSvgPath] = useState<string>('');
  const [targetCoords, setTargetCoords] = useState<{ x: number; y: number } | null>(null);
  const [svgDimensions, setSvgDimensions] = useState<{ width: number; height: number }>({
    width: 1000,
    height: 1400
  });

  // Calculate the smooth flowing tube bezier path based on exact layout metrics
  const updateTubePath = useCallback(() => {
    if (!stagesWrapperRef.current) return;

    const wrapperRect = stagesWrapperRef.current.getBoundingClientRect();
    const width = wrapperRect.width;
    const height = wrapperRect.height;

    if (width <= 0 || height <= 0) return;

    setSvgDimensions({ width, height });

    // Responsive horizontal padding based on viewport width
    const padX = width > 1024 ? 36 : width > 640 ? 24 : 12;
    const leftX = padX;
    const rightX = width - padX;

    // Collect accurate vertical boundary lines for all 4 stages
    const bounds: number[] = [];

    stageRefs.current.forEach((el, i) => {
      if (el) {
        bounds.push(el.offsetTop);
        if (i === STAGES.length - 1) {
          bounds.push(el.offsetTop + el.offsetHeight);
        }
      }
    });

    // Fallback if elements are not yet measured
    if (bounds.length < 5) {
      bounds.length = 0;
      const step = (height * 0.78) / 4;
      for (let i = 0; i <= 4; i++) {
        bounds.push(i * step);
      }
    }

    const y0 = bounds[0];
    const y1 = bounds[1];
    const y2 = bounds[2];
    const y3 = bounds[3];
    const y4 = bounds[4];

    // Radius / control offset for smooth rounded hairpin turns
    const r0 = Math.min((y1 - y0) * 0.48, width * 0.14, 110);
    const r1 = Math.min((y2 - y1) * 0.48, width * 0.14, 110);
    const r2 = Math.min((y3 - y2) * 0.48, width * 0.14, 110);
    const r3 = Math.min((y4 - y3) * 0.48, width * 0.14, 110);

    // Target position: right edge of the "Explore Featured Projects" button
    let targetX = width / 2 + 130;
    let targetY = height - 42;

    if (buttonRef.current && stagesWrapperRef.current) {
      const btnRect = buttonRef.current.getBoundingClientRect();
      const wrapRect = stagesWrapperRef.current.getBoundingClientRect();
      targetX = btnRect.right - wrapRect.left + 14;
      targetY = btnRect.top - wrapRect.top + btnRect.height / 2;
    }

    setTargetCoords({ x: targetX, y: targetY });

    const dy = Math.max(40, targetY - y4);
    const dx = Math.max(30, rightX - targetX);

    // Build the continuous flowing tube bezier path:
    // Stage 01 (Discover, Left): enters from top-left, curves down left margin
    // Turn 1: curves under Stage 01, sweeps horizontally across y1 to Stage 02
    // Stage 02 (Define, Right): loops 180° around right margin between y1 and y2
    // Turn 2: sweeps horizontally across y2 to Stage 03
    // Stage 03 (Design, Left): loops 180° around left margin between y2 and y3
    // Turn 3: sweeps horizontally across y3 to Stage 04
    // Stage 04 (Test & Refine, Right): curves into vertical track along right edge of Stage 04 down to y4
    // End Swoop: graceful organic swoop down and sweep across to the left (matching uploaded image), pointing directly at "Explore Featured Projects"
    const path = `
      M 0 ${Math.max(0, y0 - 30)}
      C ${leftX * 0.4} ${Math.max(0, y0 - 30)}, ${leftX} ${y0 - 15}, ${leftX} ${y0 + 20}
      L ${leftX} ${y1 - r1}
      C ${leftX} ${y1 - r1 * 0.35}, ${leftX + r1 * 0.35} ${y1}, ${leftX + r1} ${y1}
      L ${rightX - r1} ${y1}
      C ${rightX + r1 * 0.65} ${y1}, ${rightX + r1 * 0.65} ${y2}, ${rightX - r1} ${y2}
      L ${leftX + r2} ${y2}
      C ${leftX - r2 * 0.65} ${y2}, ${leftX - r2 * 0.65} ${y3}, ${leftX + r2} ${y3}
      L ${rightX - r3} ${y3}
      C ${rightX - r3 * 0.35} ${y3}, ${rightX} ${y3 + r3 * 0.35}, ${rightX} ${y3 + r3}
      L ${rightX} ${y4}
      C ${rightX} ${y4 + dy * 0.65}, ${targetX + dx * 0.35} ${targetY}, ${targetX} ${targetY}
    `;

    setSvgPath(path);
  }, []);

  // Update path on mount, resize, layout shifts, and font load
  useEffect(() => {
    updateTubePath();

    const resizeObserver = new ResizeObserver(() => {
      updateTubePath();
    });

    if (stagesWrapperRef.current) {
      resizeObserver.observe(stagesWrapperRef.current);
    }

    if (buttonRef.current) {
      resizeObserver.observe(buttonRef.current);
    }

    stageRefs.current.forEach((el) => {
      if (el) resizeObserver.observe(el);
    });

    window.addEventListener('resize', updateTubePath);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateTubePath);
    }

    const t1 = setTimeout(updateTubePath, 150);
    const t2 = setTimeout(updateTubePath, 500);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateTubePath);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [updateTubePath]);

  // Scroll tracking for animated fluid draw effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 16,
    restDelta: 0.001
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);
  const arrowOpacity = useTransform(smoothProgress, [0.85, 0.98], [0, 1]);

  return (
    <section 
      ref={containerRef}
      id="process" 
      className="relative w-full py-24 sm:py-36 overflow-hidden bg-[#89CFF0]/20 text-[#650000]"
      style={{
        background: 'linear-gradient(180deg, #E6F4FB 0%, #D8EEF8 30%, #E2F2FA 70%, #EBF6FC 100%)'
      }}
    >
      {/* Soft Ambient Background Aura & Subtle Grain */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#650000 1.2px, transparent 1.2px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full bg-[#89CFF0]/30 blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[550px] h-[550px] rounded-full bg-[#E5BACB]/20 blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#89CFF0]/25 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 1. EDITORIAL HEADER                                                       */}
        {/* ========================================================================= */}
        <div className="mb-20 sm:mb-28 max-w-4xl px-2 sm:px-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#650000]/15 text-[#650000] text-xs font-mono tracking-wider mb-6 shadow-2xs"
          >
            <span>/ MY PROCESS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#650000] leading-[1.18] tracking-tight"
          >
            How I transform strategy, insights and expertise into{' '}
            <span className="font-editorial italic font-normal text-[#8C1227]">
              meaningful digital experiences
            </span>
          </motion.h2>
        </div>


        {/* ========================================================================= */}
        {/* 2. THE CONTINUOUS FLOWING TUBE SPIRAL TRACK & CONTENT WRAPPER             */}
        {/* ========================================================================= */}
        <div ref={stagesWrapperRef} className="relative w-full">
          
          {/* ======================================================================= */}
          {/* DYNAMIC FLOWING TUBE SVG (Renders continuous organic tubular spline)   */}
          {/* ======================================================================= */}
          {svgPath && (
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg
                className="w-full h-full"
                width={svgDimensions.width}
                height={svgDimensions.height}
                viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
                fill="none"
              >
                <defs>
                  {/* Linear Gradient for Cherry Red Flow */}
                  <linearGradient id="tubeCherryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#650000" stopOpacity="0.4" />
                    <stop offset="30%" stopColor="#8C1227" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#650000" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#8C1227" stopOpacity="0.6" />
                  </linearGradient>

                  {/* Soft Tubular Glow Filter */}
                  <filter id="tubeGlowFilter" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Layer 1: Ambient Tube Outer Glow */}
                <path
                  d={svgPath}
                  stroke="#8C1227"
                  strokeOpacity="0.12"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#tubeGlowFilter)"
                />

                {/* Layer 2: Main Base Static Track (Semi-transparent cherry red) */}
                <path
                  d={svgPath}
                  stroke="#650000"
                  strokeOpacity="0.22"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Layer 3: Dynamic Animated Cherry Red Fluid Stroke (Scroll-driven) */}
                <motion.path
                  d={svgPath}
                  stroke="url(#tubeCherryGrad)"
                  strokeWidth="3.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    pathLength: pathLength
                  }}
                />

                {/* Layer 4: Elegant directional arrow pointer at tube terminus pointing directly at "Explore Featured Projects" */}
                {targetCoords && (
                  <g>
                    {/* Outer ambient glow around arrow tip */}
                    <path
                      d={`M ${targetCoords.x + 9} ${targetCoords.y - 6} L ${targetCoords.x} ${targetCoords.y} L ${targetCoords.x + 9} ${targetCoords.y + 6}`}
                      stroke="#8C1227"
                      strokeOpacity="0.25"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#tubeGlowFilter)"
                    />
                    {/* Base static arrowhead */}
                    <path
                      d={`M ${targetCoords.x + 9} ${targetCoords.y - 6} L ${targetCoords.x} ${targetCoords.y} L ${targetCoords.x + 9} ${targetCoords.y + 6}`}
                      stroke="#650000"
                      strokeOpacity="0.3"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Dynamic animated fluid arrowhead */}
                    <motion.path
                      d={`M ${targetCoords.x + 9} ${targetCoords.y - 6} L ${targetCoords.x} ${targetCoords.y} L ${targetCoords.x + 9} ${targetCoords.y + 6}`}
                      stroke="url(#tubeCherryGrad)"
                      strokeWidth="3.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        opacity: arrowOpacity
                      }}
                    />
                  </g>
                )}
              </svg>
            </div>
          )}

          {/* ======================================================================= */}
          {/* THE 4 STAGES: EQUALLY SIZED & PERFECTLY VERTICALLY CENTERED IN SPIRAL   */}
          {/* ======================================================================= */}
          <div className="relative z-10 flex flex-col">
            {STAGES.map((stage, idx) => {
              const isRight = stage.align === 'right';

              return (
                <div
                  key={stage.num}
                  id={`process-stage-${idx}`}
                  ref={(el) => (stageRefs.current[idx] = el)}
                  className={`relative flex flex-col justify-center w-full min-h-[260px] sm:min-h-[290px] md:min-h-[320px] lg:min-h-[350px] py-10 sm:py-12 md:py-14 ${
                    isRight ? 'items-end' : 'items-start'
                  }`}
                >
                  {/* 
                    Stage Container:
                    Safely constrained with max-w-xl / max-w-2xl and symmetric inner padding
                    so it is positioned completely inside the sweeping curve without overflowing
                  */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full max-w-xl lg:max-w-2xl ${
                      isRight 
                        ? 'pl-6 sm:pl-10 md:pl-14 pr-8 sm:pr-16 md:pr-24 lg:pr-32 text-left' 
                        : 'pr-6 sm:pr-10 md:pr-14 pl-8 sm:pl-16 md:pl-24 lg:pl-32 text-left'
                    }`}
                  >
                    {/* Stage Pill Tag (/ 001, / 002, etc.) */}
                    <div className="mb-3 sm:mb-4">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#650000]/15 text-[#650000] text-xs font-mono font-semibold tracking-wider shadow-2xs">
                        {stage.pill}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#650000] leading-snug mb-1.5 sm:mb-2 tracking-tight">
                      {stage.title}
                    </h3>

                    {/* Stage Italic Headline */}
                    <div className="text-xs sm:text-sm font-editorial italic text-[#8C1227] font-semibold mb-2.5 sm:mb-3">
                      {stage.headline}
                    </div>

                    {/* Primary Requested Copy */}
                    <p className="text-base sm:text-lg lg:text-xl font-sans text-[#650000] leading-relaxed font-normal mb-2 sm:mb-3">
                      {stage.desc}
                    </p>

                    {/* Contextual Detail */}
                    {stage.subtext && (
                      <p className="text-xs sm:text-sm font-sans text-[#650000]/75 leading-relaxed font-normal">
                        {stage.subtext}
                      </p>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* 3. SECTION TRANSITION LINK                                                */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 sm:mt-28 text-center flex flex-col items-center relative z-10"
          >
            <a
              ref={buttonRef}
              id="explore-featured-projects-btn"
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/90 hover:bg-white text-[#650000] text-xs font-sans font-bold uppercase tracking-wider border border-[#89CFF0]/40 shadow-sm hover:shadow-md transition-all group"
            >
              <span>Explore Featured Projects</span>
              <span className="text-sm group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}