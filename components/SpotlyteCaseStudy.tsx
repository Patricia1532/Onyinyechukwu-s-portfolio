
import React, { useState, useEffect, useRef } from 'react';

interface SpotlyteCaseStudyProps {
  onBack: () => void;
}

export const SpotlyteCaseStudy: React.FC<SpotlyteCaseStudyProps> = ({ onBack }) => {
  const [activeToc, setActiveToc] = useState<string>('#context');
  
  // Track wireframe toggle for individual cards (Home, Agency, How It Works, Drivers, About Us)
  const [cardStates, setCardStates] = useState<Record<string, boolean>>({
    Home: false,
    Agency: false,
    'How It Works': false,
    Drivers: false,
    'About Us': false,
  });

  // Track mosaic batch toggle
  const [mosaicStyled, setMosaicStyled] = useState<boolean>(false);
  const [onboardingStates, setOnboardingStates] = useState<Record<string, boolean>>({});

  // Floating cursor coordinates
  const [cursorPos, setCursorPos] = useState<Record<string, { x: number; y: number }>>({});
  const [mosaicCursor, setMosaicCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [onboardingCursorPos, setOnboardingCursorPos] = useState<Record<string, { x: number; y: number }>>({});

  // Lightbox modal state for viewing individual images
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    badge: string;
  } | null>(null);

  // Side-by-side comparison modal state
  const [compareModal, setCompareModal] = useState<{
    title: string;
    wireframeImg: string;
    styledImg: string;
    subtitle: string;
    description: string;
  } | null>(null);

  // Video playback refs & state for Result section screens
  const mainResultVideoRef = useRef<HTMLVideoElement>(null);
  const floatResultVideoRef = useRef<HTMLVideoElement>(null);
  const [isMainResultPlaying, setIsMainResultPlaying] = useState(true);
  const [isFloatResultPlaying, setIsFloatResultPlaying] = useState(true);

  const toggleMainResultPlay = () => {
    if (!mainResultVideoRef.current) return;
    if (mainResultVideoRef.current.paused) {
      mainResultVideoRef.current.play().catch(() => {});
      setIsMainResultPlaying(true);
    } else {
      mainResultVideoRef.current.pause();
      setIsMainResultPlaying(false);
    }
  };

  const toggleFloatResultPlay = () => {
    if (!floatResultVideoRef.current) return;
    if (floatResultVideoRef.current.paused) {
      floatResultVideoRef.current.play().catch(() => {});
      setIsFloatResultPlaying(true);
    } else {
      floatResultVideoRef.current.pause();
      setIsFloatResultPlaying(false);
    }
  };

  useEffect(() => {
    if (mainResultVideoRef.current) {
      mainResultVideoRef.current.play().catch(() => {});
    }
    if (floatResultVideoRef.current) {
      floatResultVideoRef.current.play().catch(() => {});
    }
  }, []);

  const setCardExplicit = (page: string, isStyled: boolean) => {
    setCardStates(prev => ({ ...prev, [page]: isStyled }));
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
        setCompareModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (lightboxImage || compareModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImage, compareModal]);

  // 5 Key Wireframe Screens with authentic PNG wireframes and transformed styled production designs
  const wireframeCards = [
    {
      key: 'Home',
      pageName: 'Home',
      title: 'Home / Core Platform',
      wireframeImg: '/homem.png',
      styledImg: '/homstyl.png',
      isWide: false,
      subtitle: 'Complete Page Wireframe from Header to Footer (Scrollable)',
      description: 'Full-page wireframe blueprint mapping the entire homepage architecture: navigation, hero narrative, media showcase, visibility statement, benefits, features, brand endorsements, and footer.',
    },
    {
      key: 'Agency',
      pageName: 'Agency',
      title: 'Agency OS / Command Center',
      wireframeImg: '/agencym.png',
      styledImg: '/agencysty.png',
      isWide: false,
      subtitle: 'Campaign Budget & Live GPS Telemetry',
      description: 'Wireframe layout mapping campaign budgeting, zone selection, and telemetry vs. the transformed Agency OS Command Center with live Lagos heatmaps.',
    },
    {
      key: 'How It Works',
      pageName: 'How It Works',
      title: 'How It Works / Workflow',
      wireframeImg: '/worksm.png',
      styledImg: '/worksstye.png',
      isWide: false,
      subtitle: '3-Step Media Upload & Ledger Sync',
      description: 'Wireframe process architecture connecting creative upload, telemetry sync, and impression ledgers vs. the illuminated production cards.',
    },
    {
      key: 'Drivers',
      pageName: 'Drivers',
      title: 'Drivers / Fleet Portal',
      wireframeImg: '/driverm.png',
      styledImg: '/drivstl.png',
      isWide: false,
      subtitle: 'Driver Earnings & Rooftop Hardware Status',
      description: 'Driver onboarding and earnings wireframe vs. the transformed mobile-first driver portal showing live earnings and rooftop screen uptime.',
    },
    {
      key: 'About Us',
      pageName: 'About Us',
      title: 'About Us / Brand Narrative',
      wireframeImg: '/aboutm.png',
      styledImg: '/aboutstle.png',
      isWide: true,
      subtitle: 'Street-Level Attention & Verified Reach',
      description: 'Wireframe structural layout for company vision and value pillars vs. the transformed editorial web interface with street-level attention and verified reach.',
    },
  ];

  // 9 Agency Onboarding Journey screens with low-fi wireframe PNGs and transformed styled UI designs
  const onboardingCards = [
    {
      key: 'signup',
      pageName: 'Sign Up',
      stepNum: '01',
      title: '01. Agency Sign Up',
      wireframeImg: '/signupp.png',
      styledImg: '/signsty.png',
      subtitle: 'Google or email auth',
      description: 'Sign up architecture with role attribution, single sign-on options, and terms agreement vs. the transformed glowing glassmorphic auth interface.',
    },
    {
      key: 'login',
      pageName: 'Log In',
      stepNum: '02',
      title: '02. Secure Authentication',
      wireframeImg: '/loginn.png',
      styledImg: '/logstyee.png',
      subtitle: 'Secure authentication',
      description: 'Wireframe login layout with multi-factor recovery and enterprise SSO vs. the transformed dark navy security portal with amber accent lighting.',
    },
    {
      key: 'dashboard',
      pageName: 'Agency Dashboard',
      stepNum: '03',
      title: '03. Agency Command Center',
      wireframeImg: '/addash.png',
      styledImg: '/dashstyl.png',
      subtitle: 'Fleet telemetry & stats',
      description: 'Fleet metrics, dynamic budget spend trackers, and vehicle GPS cluster map blueprint vs. the dark mode real-time command center.',
    },
    {
      key: 'onboarding',
      pageName: 'Onboarding',
      stepNum: '04',
      title: '04. Ecosystem Intent',
      wireframeImg: '/Onboardwi.png',
      styledImg: '/Onboardingst.png',
      subtitle: 'Role & intent selection',
      description: 'Three-way stakeholder persona selection blueprint vs. the transformed card picker with glowing selection borders and custom icons.',
    },
    {
      key: 'profile',
      pageName: 'Agency Profile',
      stepNum: '05',
      title: '05. Agency Information',
      wireframeImg: '/aprofilewi.png',
      styledImg: '/agenpst.png',
      subtitle: 'Company information',
      description: 'Form fields wireframe for agency size, business email, location, and billing address vs. the high-contrast production interface.',
    },
    {
      key: 'identity',
      pageName: 'Business Identity',
      stepNum: '06',
      title: '06. CAC & Business Verification',
      wireframeImg: '/busidwi.png',
      styledImg: '/busidest.png',
      subtitle: 'CAC & identity verification',
      description: 'CAC certificate drag-and-drop zone and Tax ID verification wireframe vs. the fintech-grade compliance submission screen with trust indicators.',
    },
    {
      key: 'preferences',
      pageName: 'Campaign Preferences',
      stepNum: '07',
      title: '07. Geo-Targeting & Budget',
      wireframeImg: '/camprwi.png',
      styledImg: '/campiprst.png',
      subtitle: 'Regions & budget',
      description: 'Zonal targeting selector and daily impression budget slider blueprint vs. the transformed illuminated Lagos zone map interface.',
    },
    {
      key: 'review',
      pageName: 'Review & Submit',
      stepNum: '08',
      title: '08. Review & Final Verification',
      wireframeImg: '/resubwi.png',
      styledImg: '/revsubst.png',
      subtitle: 'Verification check',
      description: 'Summary card matrix wireframe cross-referencing corporate credentials and campaign configurations vs. the final verification overview.',
    },
    {
      key: 'pending',
      pageName: 'Almost Ready',
      stepNum: '09',
      title: '09. Pending Compliance State',
      wireframeImg: '/almstwi.png',
      styledImg: '/almorsty.png',
      subtitle: 'Pending approval state',
      description: 'Verification queue wireframe with SLA timeline and status tracker vs. the transformed pending state with pulsing radar and status badge.',
    },
  ];

  // Handle TOC smooth scroll
  const scrollTo = (id: string) => {
    setActiveToc(id);
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Real-time active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        '#takeaways',
        '#result',
        '#style-guide',
        '#wireframe',
        '#ideation',
        '#user-flow',
        '#process',
        '#problem',
        '#context'
      ];
      
      for (const id of sectionIds) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260) {
            setActiveToc(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCard = (page: string) => {
    setCardStates(prev => ({ ...prev, [page]: !prev[page] }));
  };

  const handleMouseMove = (page: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos(prev => ({
      ...prev,
      [page]: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const handleMosaicMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMosaicCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const toggleOnboardingCard = (key: string) => {
    setOnboardingStates(prev => {
      const current = prev[key] ?? mosaicStyled;
      return { ...prev, [key]: !current };
    });
  };

  const setOnboardingCardExplicit = (key: string, isStyled: boolean) => {
    setOnboardingStates(prev => ({ ...prev, [key]: isStyled }));
  };

  const handleOnboardingMouseMove = (key: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOnboardingCursorPos(prev => ({
      ...prev,
      [key]: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const setAllOnboardingStyled = (isStyled: boolean) => {
    setMosaicStyled(isStyled);
    const updated: Record<string, boolean> = {};
    onboardingCards.forEach(c => {
      updated[c.key] = isStyled;
    });
    setOnboardingStates(updated);
  };

  return (
    <div className="case-scroll" id="caseScroll">
      <style>{`
        :root{
          --navy-1:#0b1640;
          --navy-2:#030416;
          --navy-3:#000103;
          --cream:#f5f4f0;
          --paper:#ffffff;
          --ink:#18120f;
          --ink-soft:#4a423d;
          --line:#e7e2d9;
          --green:#22c55e;
          --gold:#ffcc00;
          --on-dark:#ffffff;
          --on-dark-muted:rgba(255,255,255,.72);
          --on-dark-faint:rgba(255,255,255,.5);

          /* light section (Context -> Takeaways) */
          --ink-navy:#030416;
          --ink-navy-soft:#4a5170;
          --navy-faint:rgba(3,4,22,.45);
          --line-navy:rgba(3,4,22,.1);
          --gold-on-light:#a67c00;
        }

        .case-scroll{
          background:var(--paper);
          position:relative;
          font-family:"Open Sans", system-ui, sans-serif;
          color:var(--ink);
        }
        .case-section{
          display:flex;
          max-width:1320px;
          margin:0 auto;
          padding:110px clamp(20px,5vw,56px);
          border-top:1px solid var(--line-navy);
          scroll-margin-top:40px;
        }
        .case-section:first-child{ border-top:none; padding-top:130px; }
        .case-section__body{ flex:1 1 auto; min-width:0; max-width:700px; }
        .case-section__body--wide{ max-width:1180px; }
        .case-eyebrow{
          display:flex; align-items:baseline; gap:10px;
          font-size:11px; font-weight:700; letter-spacing:1.6px; text-transform:uppercase;
          color:var(--gold-on-light);
          margin-bottom:20px;
        }
        .case-heading{
          font-family:"Lato", sans-serif;
          font-weight:900;
          font-size:clamp(26px, 3.2vw, 38px);
          color:var(--ink-navy);
          line-height:1.22;
          letter-spacing:-.3px;
          margin:0 0 26px;
        }
        .case-body p{
          font-size:17px; line-height:1.75;
          color:var(--ink-navy-soft);
          margin:0 0 20px;
          max-width:640px;
        }
        .case-body p:last-child{ margin-bottom:0; }

        .process-list{
          list-style:none; margin:34px 0 0; padding:0;
        }
        .process-list__row{
          display:flex; align-items:flex-start; gap:24px;
          padding-bottom:28px;
        }
        .process-list__row:last-child{ padding-bottom:0; }
        .process-list__num{
          position:relative; z-index:1; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          width:48px; height:48px; border-radius:50%;
          background:var(--paper);
          border:2px solid rgba(166,124,0,.3);
          font-family:"Lato", sans-serif; font-weight:900;
          color:var(--gold-on-light);
          font-size:14px;
          box-shadow:0 1px 3px rgba(3,4,22,.06);
          transition:border-color .25s ease, box-shadow .25s ease;
        }
        .process-list__row:hover .process-list__num{
          border-color:var(--gold-on-light);
          box-shadow:0 2px 8px rgba(3,4,22,.1);
        }
        .process-list__content{
          flex:1; min-width:0; padding-bottom:20px;
          border-bottom:1px solid var(--line-navy);
        }
        .process-list__row:last-child .process-list__content{
          border-bottom:none; padding-bottom:0;
        }
        .process-list__label{
          font-family:"Lato", sans-serif;
          font-weight:700; color:var(--ink-navy); font-size:17px;
          margin:0;
        }

        /* ---------- USER FLOW DIAGRAMS ---------- */
        .process-list__row--expanded{ align-items:flex-start; }
        .process-list__note{
          font-size:15px; line-height:1.7; color:var(--ink-navy-soft);
          margin:2px 0 32px; max-width:640px;
        }
        .sketch-figure{
          display:flex; justify-content:center;
          margin:0 0 28px;
        }
        .sketch-figure:last-of-type{ margin-bottom:8px; }
        .sketch-figure__img{
          width:100%; max-width:780px; height:auto;
          border-radius:12px;
          border:1px solid var(--line-navy);
          box-shadow:0 4px 14px rgba(3,4,22,.04);
        }
        .flow-block{ margin:0 0 48px; }
        .flow-block:last-child{ margin-bottom:0; }
        .flow-block__title{
          font-family:"Lato", sans-serif; font-weight:800;
          font-size:16px; letter-spacing:.3px;
          color:var(--ink-navy);
          margin:0 0 20px;
        }
        .flow-diagram-wrap{
          overflow-x:auto;
          margin:0 -4px;
          padding:4px;
        }
        .flow-diagram{
          position:relative;
          min-width:1000px;
        }
        .flow-diagram__svg{
          position:absolute; left:0; top:0; width:100%; height:100%;
          color:var(--ink-navy);
          overflow:visible;
        }
        .flow-line{ opacity:.55; }
        .flow-line--solid{ stroke:currentColor; stroke-width:1.6; fill:none; }
        .flow-line--dashed{ stroke:var(--gold-on-light); stroke-width:1.6; stroke-dasharray:4 4; fill:none; opacity:.85; }

        .flow-start{
          position:absolute;
          display:flex; align-items:center; justify-content:center; gap:6px;
          font-size:11px; font-weight:800; letter-spacing:1.4px; text-transform:uppercase;
          color:var(--gold-on-light);
        }
        .flow-start__icon{ font-size:13px; }

        .flow-node{
          position:absolute;
          box-sizing:border-box;
          border:1.5px dashed rgba(3,4,22,.32);
          border-radius:8px;
          background:var(--paper);
          padding:12px 14px;
          overflow:hidden;
        }
        .flow-node--optional{ border-color:rgba(166,124,0,.55); background:rgba(255,204,0,.06); }
        .flow-node__head{
          display:flex; align-items:baseline; flex-wrap:wrap; gap:6px;
          margin-bottom:7px;
        }
        .flow-node__num{
          font-family:"Lato", sans-serif; font-weight:900;
          color:var(--gold-on-light); font-size:11px;
        }
        .flow-node__title{
          font-family:"Lato", sans-serif; font-weight:800;
          color:var(--ink-navy); font-size:12.5px;
          letter-spacing:.2px; text-transform:uppercase;
          line-height:1.3;
        }
        .flow-node__badge{
          font-size:9px; font-weight:800; letter-spacing:.6px; text-transform:uppercase;
          color:var(--gold-on-light);
          border:1px solid rgba(166,124,0,.45);
          border-radius:20px; padding:1px 7px;
          margin-left:auto;
        }
        .flow-node__line{
          margin:0 0 4px; font-size:11.5px; line-height:1.5; color:var(--ink-navy-soft);
        }
        .flow-node__line:last-child{ margin-bottom:0; }

        .flow-faq{
          position:absolute;
          box-sizing:border-box;
          border:1.5px dashed rgba(3,4,22,.2);
          border-radius:8px;
          padding:12px 14px;
          background:rgba(3,4,22,.02);
        }
        .flow-faq__label{
          display:block;
          font-size:9.5px; font-weight:800; letter-spacing:1.2px; text-transform:uppercase;
          color:var(--navy-faint); margin-bottom:7px;
        }
        .flow-faq__line{
          margin:0 0 6px; font-size:11px; font-style:italic; line-height:1.5; color:var(--navy-faint);
        }
        .flow-faq__line:last-child{ margin-bottom:0; }

        .flow-node-end{
          position:absolute;
          box-sizing:border-box;
          background:var(--ink-navy);
          border:1.5px solid var(--ink-navy);
          border-radius:8px;
          text-align:center;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          padding:14px 16px;
        }
        .flow-node-end__label{
          font-size:12px; font-weight:800; letter-spacing:1.2px; text-transform:uppercase;
          color:var(--gold);
        }
        .flow-node-end__desc{
          margin:8px 0 0; font-size:11.5px; line-height:1.55;
          color:rgba(255,255,255,.75); font-weight:400;
        }

        /* ---------- WIREFRAME -> DESIGN SWAP ---------- */
        .wf-grid{
          display:grid; grid-template-columns:repeat(2, 1fr); gap:24px;
          margin:8px 0 8px;
        }
        @media (max-width:720px){
          .wf-grid{ grid-template-columns:1fr; }
        }
        .wf-card{
          margin:0; border:1px solid var(--line-navy); border-radius:14px;
          overflow:hidden; background:var(--paper);
          box-shadow:0 1px 3px rgba(3,4,22,.05);
        }
        .wf-card--wide{ grid-column:1 / -1; }
        .wf-card--wide .wf-card__viewport{ height:620px; }
        .wf-card__bar{
          display:flex; align-items:center; gap:6px;
          height:38px; padding:0 14px;
          background:var(--cream);
          border-bottom:1px solid var(--line-navy);
        }
        .wf-card__dot{
          width:7px; height:7px; border-radius:50%;
          background:rgba(3,4,22,.16);
        }
        .wf-card__page{
          margin-left:8px;
          font-family:"Lato", sans-serif; font-weight:800; font-size:12.5px;
          color:var(--ink-navy);
        }
        .wf-toggle-tabs{
          display:flex; align-items:center; gap:4px;
          margin-left:auto; margin-right:10px;
          background:rgba(3,4,22,.06);
          padding:2px; border-radius:999px;
        }
        .wf-toggle-tab{
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:9.5px; font-weight:700; letter-spacing:.04em; text-transform:uppercase;
          padding:3px 9px; border-radius:999px;
          border:none; background:transparent;
          color:var(--navy-faint); cursor:pointer;
          transition:all .18s ease;
        }
        .wf-toggle-tab:hover{ color:var(--ink-navy); }
        .wf-toggle-tab.is-active{
          background:var(--ink-navy); color:#ffffff;
          box-shadow:0 1px 3px rgba(3,4,22,.2);
        }
        .wf-card__state{
          margin-left:0;
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:10px; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
          color:var(--gold-on-light);
          border:1px solid rgba(166,124,0,.4);
          border-radius:20px; padding:3px 10px;
          transition:color .2s ease, border-color .2s ease, background-color .2s ease;
        }
        .wf-card__state.is-styled{
          color:var(--paper); background:var(--ink-navy); border-color:var(--ink-navy);
        }
        .wf-card__viewport{
          position:relative;
          height:500px; overflow-y:auto; overflow-x:hidden;
          background:var(--paper);
          scroll-behavior:smooth;
        }
        .wf-card__viewport::-webkit-scrollbar{
          width:6px;
        }
        .wf-card__viewport::-webkit-scrollbar-track{
          background:rgba(3,4,22,.04);
        }
        .wf-card__viewport::-webkit-scrollbar-thumb{
          background:rgba(3,4,22,.22);
          border-radius:999px;
        }
        .wf-card__viewport::-webkit-scrollbar-thumb:hover{
          background:rgba(3,4,22,.4);
        }
        .wf-card__cursor{
          position:absolute;
          transform:translate(-50%,-140%);
          background:var(--ink-navy); color:var(--paper);
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
          padding:7px 14px; border-radius:999px;
          white-space:nowrap; pointer-events:none;
          opacity:0; transition:opacity .15s ease;
          z-index:4;
        }
        .wf-card__viewport:hover .wf-card__cursor{ opacity:1; }
        .wf-card__footer{
          display:flex; align-items:center; justify-content:space-between;
          padding:10px 14px 12px;
          border-top:1px solid var(--line-navy);
          background:var(--cream);
          gap:8px; flex-wrap:wrap;
        }
        .wf-card__actions{
          display:flex; align-items:center; gap:6px;
        }
        .wf-action-btn{
          display:inline-flex; align-items:center; gap:4px;
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:10.5px; font-weight:700; letter-spacing:.04em; text-transform:uppercase;
          padding:3px 8px; border-radius:6px;
          border:1px solid var(--line-navy); background:#ffffff;
          color:var(--ink-navy); cursor:pointer;
          transition:all .15s ease;
        }
        .wf-action-btn:hover{
          background:var(--ink-navy); color:#ffffff; border-color:var(--ink-navy);
        }
        .wf-action-btn--compare{
          border-color:rgba(166,124,0,.35);
          color:var(--gold-on-light);
        }
        .wf-action-btn--compare:hover{
          background:var(--gold-on-light); color:#ffffff;
        }
        .wf-action-dot{ color:var(--navy-faint); font-size:12px; }
        .wf-card__hint-text{
          margin:0; font-size:11.5px; font-style:italic; color:var(--navy-faint);
        }
        .wf-card__hint{
          margin:0; padding:10px 14px 14px;
          font-size:11.5px; font-style:italic; color:var(--navy-faint);
          border-top:1px solid var(--line-navy);
        }

        /* ---------- WIREFRAME MOSAIC ---------- */
        .wf-mosaic{
          position:relative;
          margin-top:20px;
          padding:20px;
          border:1.5px dashed var(--line-navy);
          border-radius:16px;
          background:var(--cream);
        }
        .wf-mosaic__header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:12px;
          margin-bottom:18px;
          padding-bottom:14px;
          border-bottom:1px solid var(--line-navy);
        }
        .wf-mosaic__headline{
          display:flex;
          flex-direction:column;
          gap:2px;
        }
        .wf-mosaic__title{
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:11px;
          font-weight:700;
          letter-spacing:.08em;
          text-transform:uppercase;
          color:var(--ink-navy);
        }
        .wf-mosaic__subtitle{
          font-size:12px;
          color:var(--ink-navy-soft);
        }
        .wf-mosaic__controls{
          display:flex;
          align-items:center;
          gap:6px;
          background:var(--paper);
          padding:3px;
          border-radius:8px;
          border:1px solid var(--line-navy);
        }
        .wf-mosaic__ctrl-btn{
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:10.5px;
          font-weight:700;
          letter-spacing:.04em;
          text-transform:uppercase;
          padding:4px 10px;
          border-radius:6px;
          border:none;
          background:transparent;
          color:var(--ink-navy-soft);
          cursor:pointer;
          transition:all .15s ease;
        }
        .wf-mosaic__ctrl-btn.is-active{
          background:var(--ink-navy);
          color:#ffffff;
          box-shadow:0 1px 3px rgba(3,4,22,.15);
        }
        .wf-mosaic__grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
        }
        @media (max-width:860px){
          .wf-mosaic__grid{ grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:520px){
          .wf-mosaic__grid{ grid-template-columns:1fr; }
        }
        .wf-mosaic__tile{
          margin:0;
          background:var(--paper);
          border:1px solid var(--line-navy);
          border-radius:12px;
          overflow:hidden;
          box-shadow:0 1px 4px rgba(3,4,22,.04);
          display:flex;
          flex-direction:column;
          transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .wf-mosaic__tile:hover{
          transform:translateY(-2px);
          box-shadow:0 6px 16px rgba(3,4,22,.08);
          border-color:rgba(3,4,22,.25);
        }
        .wf-mosaic__bar{
          display:flex; align-items:center; justify-content:space-between;
          padding:8px 10px;
          border-bottom:1px solid var(--line-navy);
          background:var(--paper);
          gap:6px;
        }
        .wf-mosaic__bar-left{
          display:flex; align-items:center; gap:5px;
          min-width:0;
        }
        .wf-mosaic__dot{
          width:6px; height:6px; border-radius:50%;
          background:var(--line-navy);
          flex-shrink:0;
        }
        .wf-mosaic__page{
          margin-left:4px;
          font-size:11px; font-weight:700; letter-spacing:.2px;
          color:var(--ink-navy);
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .wf-mosaic__toggle{
          display:flex; align-items:center; gap:2px;
          background:var(--cream);
          padding:2px;
          border-radius:6px;
          border:1px solid var(--line-navy);
        }
        .wf-mosaic__tab{
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:9px; font-weight:700; letter-spacing:.04em; text-transform:uppercase;
          padding:2px 6px; border-radius:4px; border:none; background:transparent;
          color:var(--ink-navy-soft); cursor:pointer; transition:all .15s ease;
        }
        .wf-mosaic__tab.is-active{
          background:var(--ink-navy); color:#ffffff;
        }
        .wf-mosaic__frame{
          position:relative;
          width:100%;
          aspect-ratio:16/9;
          overflow:hidden;
          background:var(--paper);
          cursor:pointer;
        }
        .wf-mosaic__cursor{
          position:absolute; z-index:5;
          transform:translate(-50%,-130%);
          display:flex; align-items:center; justify-content:center;
          padding:6px 12px;
          border-radius:999px;
          background:var(--ink-navy);
          color:var(--cream);
          font-family:ui-monospace,"SF Mono","Courier New",monospace;
          font-size:10px; font-weight:700; letter-spacing:.05em; text-transform:uppercase;
          white-space:nowrap;
          pointer-events:none;
          opacity:0;
          transition:opacity .15s ease;
          box-shadow:0 4px 12px rgba(0,0,0,.25);
        }
        .wf-mosaic__frame:hover .wf-mosaic__cursor{ opacity:1; }
        .wf-mosaic__footer{
          display:flex; align-items:center; justify-content:space-between;
          padding:8px 10px;
          border-top:1px solid var(--line-navy);
          background:var(--cream);
          gap:6px; flex-wrap:wrap;
        }
        .wf-mosaic__subtitle-text{
          font-size:10.5px; color:var(--ink-navy-soft); font-family:"Open Sans", sans-serif;
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:130px;
        }

        @media (max-width:860px){
          .case-section{ flex-direction:column; gap:18px; }
        }

        /* ---------- LEFT-SIDE TABLE OF CONTENTS ---------- */
        .case-scroll__shell{
          display:flex;
          align-items:flex-start;
          position:relative;
        }
        .case-toc{
          display:none;
          flex:0 0 250px;
          width:250px;
          position:sticky;
          top:32px;
          align-self:flex-start;
          padding:40px 20px 64px clamp(20px,4vw,56px);
          z-index:40;
        }
        .case-scroll__sections{ flex:1 1 auto; min-width:0; }
        .case-toc__card{
          background:var(--cream);
          border-radius:14px;
          padding:18px 16px;
          border:1px solid #ECE8DE;
          box-shadow:0 4px 18px rgba(3,4,22,.04);
        }
        .case-toc__heading{
          font-family:ui-monospace, "SF Mono", "Courier New", monospace;
          font-size:11px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase;
          color:var(--ink-navy);
          margin:0 0 12px;
        }
        .case-toc__list, .case-toc__sublist{
          list-style:none; margin:0; padding:0;
          display:flex; flex-direction:column; gap:2px;
        }
        .case-toc__item, .case-toc__subitem{
          display:block;
          width:100%;
          text-align:left;
          background:none;
          border:none;
          cursor:pointer;
          font-family:"Open Sans", sans-serif;
          border-radius:8px;
          padding:7px 10px;
          color:var(--ink-navy-soft);
          transition:all .2s ease;
        }
        .case-toc__item{ font-size:14px; font-weight:600; }
        .case-toc__item:hover{ color:var(--ink-navy); padding-left:14px; }
        .case-toc__item.is-active{
          color:var(--ink-navy);
          background:rgba(255,204,0,.22);
          border:1px solid rgba(166,124,0,.35);
          font-weight:700;
        }
        .case-toc__sublist{ margin:2px 0 4px 14px; gap:0; }
        .case-toc__subitem{ font-size:12.5px; padding:5px 10px; color:var(--navy-faint); }
        .case-toc__subitem:hover{ color:var(--ink-navy); padding-left:14px; }
        .case-toc__subitem.is-active{
          color:var(--ink-navy);
          font-weight:700;
          padding-left:14px;
          background:rgba(255,204,0,.15);
          border-radius:6px;
        }
        .case-toc__top{
          display:flex; align-items:center; gap:7px;
          margin:18px 4px 0;
          font-family:ui-monospace, "SF Mono", "Courier New", monospace;
          font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;
          color:var(--navy-faint);
          text-decoration:none;
          width:fit-content;
          transition:color .24s ease;
          cursor:pointer;
        }
        .case-toc__top:hover{ color:var(--gold-on-light); }
        
        /* Sticky Mobile TOC Bar */
        .case-toc-mobile{
          display:flex;
          align-items:center;
          gap:6px;
          position:sticky;
          top:12px;
          z-index:45;
          margin:0 16px 20px;
          padding:8px 12px;
          background:rgba(245, 244, 240, 0.94);
          backdrop-filter:blur(14px);
          -webkit-backdrop-filter:blur(14px);
          border:1px solid #ECE8DE;
          border-radius:100px;
          box-shadow:0 8px 24px rgba(3,4,22,.08);
          overflow-x:auto;
          white-space:nowrap;
          scrollbar-width:none;
        }
        .case-toc-mobile::-webkit-scrollbar{ display:none; }
        .case-toc-mobile__item{
          font-size:12px;
          font-weight:600;
          color:var(--ink-navy-soft);
          padding:6px 12px;
          border-radius:100px;
          background:none;
          border:none;
          cursor:pointer;
          transition:all .2s ease;
          white-space:nowrap;
        }
        .case-toc-mobile__item.is-active{
          color:var(--ink-navy);
          background:rgba(255,204,0,.25);
          border:1px solid rgba(166,124,0,.35);
          font-weight:700;
        }
        @media (min-width:900px){
          .case-toc-mobile{ display:none; }
          .case-toc{ display:block; }
        }

        /* ---------- OBJECTIVE CARDS (Problem section) ---------- */
        .objectives{
          margin-top:44px;
          display:grid;
          grid-template-columns:repeat(2, 1fr);
          gap:16px;
          width:100%;
          max-width:760px;
        }
        .objective-card{
          background:var(--paper);
          border:1px solid var(--line-navy);
          border-radius:12px;
          padding:22px 22px 20px;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:8px;
        }
        .objective-card__icon{
          width:24px; height:24px;
          color:var(--ink-navy);
          margin-bottom:2px;
        }
        .objective-card__icon svg{
          width:100%; height:100%;
          fill:none;
          stroke:currentColor;
          stroke-width:1.5;
          stroke-linecap:round;
          stroke-linejoin:round;
        }
        .objective-card__title{
          font-size:12px; font-weight:700; letter-spacing:1px;
          text-transform:uppercase;
          color:var(--ink-navy);
          text-align:center;
          margin:0;
        }
        .objective-card__desc{
          font-size:14.5px; line-height:1.6;
          color:var(--ink-navy-soft);
          text-align:left;
          align-self:stretch;
          margin:0;
        }
        @media (max-width:560px){
          .objectives{ grid-template-columns:1fr; }
        }

        /* ---------- STYLE GUIDE ---------- */
        .sg{ margin-top:8px; }
        .sg__row{
          display:grid;
          grid-template-columns:1.1fr 1fr;
          gap:28px;
          align-items:start;
        }
        .sg__eyebrow{
          font-size:11px; font-weight:700; letter-spacing:1.6px;
          text-transform:uppercase; color:var(--gold-on-light);
          margin:0 0 6px;
        }
        .sg__heading{
          font-family:"Lato", sans-serif; font-weight:900;
          color:var(--ink-navy); font-size:19px; margin:0 0 16px;
        }
        .sg__swatches{ display:grid; gap:12px; }
        .sg__swatches--primary{ grid-template-columns:repeat(3, 1fr); }
        .sg__swatches--neutral{ grid-template-columns:repeat(2, 1fr); }
        .sg__swatch{
          position:relative;
          border-radius:12px;
          border:1px solid var(--line-navy);
          min-height:118px;
          display:flex; flex-direction:column; justify-content:flex-end;
          padding:14px;
          color:#fff;
        }
        .sg__swatch--sm{ min-height:84px; }
        .sg__swatch--light{ color:var(--ink-navy); }
        .sg__swatch-name{
          font-family:"Lato", sans-serif; font-weight:700;
          font-size:13px; display:block;
        }
        .sg__swatch-hex{
          font-size:11.5px; opacity:.85; display:block; margin-top:2px;
          font-family:"Open Sans", sans-serif; letter-spacing:.3px;
        }
        .sg__transparency{ margin-top:28px; }
        .sg__chips{ display:flex; flex-wrap:wrap; gap:12px; }
        .sg__chip{
          flex:1 1 140px;
          min-width:130px;
          border-radius:10px;
          border:1px solid var(--line-navy);
          padding:12px 14px;
        }
        .sg__chip-name{
          display:block; font-family:"Lato", sans-serif; font-weight:700;
          font-size:12.5px; color:var(--ink-navy);
        }
        .sg__chip-hex{
          display:block; font-size:11px; color:var(--ink-navy-soft); margin-top:2px;
        }
        .sg__divider{
          height:1px; background:var(--line-navy); margin:36px 0 32px;
        }
        .sg__row--type{ grid-template-columns:1fr 1.2fr; }
        .sg__type-specimen{
          display:flex; align-items:center; gap:16px;
          padding:16px 0;
          border-bottom:1px solid var(--line-navy);
        }
        .sg__type-specimen:last-child{ border-bottom:none; }
        .sg__aa{
          font-size:44px; line-height:1; color:var(--ink-navy);
          width:56px; flex-shrink:0;
        }
        .sg__font-name{
          font-family:"Lato", sans-serif; font-weight:700;
          font-size:15px; color:var(--ink-navy); margin:0 0 2px;
        }
        .sg__font-weights{
          font-size:13px; color:var(--ink-navy-soft); margin:0;
        }
        .sg__table{
          width:100%; border-collapse:collapse;
          background:var(--paper);
          border:1px solid var(--line-navy);
          border-radius:12px;
          overflow:hidden;
        }
        .sg__table th, .sg__table td{
          text-align:left; padding:10px 14px;
          font-size:13.5px;
          border-bottom:1px solid var(--line-navy);
        }
        .sg__table th{
          font-family:"Lato", sans-serif; font-weight:700;
          font-size:11px; letter-spacing:.8px; text-transform:uppercase;
          color:var(--gold-on-light);
          background:rgba(3,4,22,.03);
        }
        .sg__table tr:last-child td{ border-bottom:none; }
        @media (max-width:700px){
          .sg__row, .sg__row--type{ grid-template-columns:1fr; }
        }

        /* ---------- RESULT SCREEN ---------- */
        .result-live-link{
          display:inline-flex; align-items:center; gap:8px;
          margin:4px 0 40px;
          font-family:"Lato", sans-serif; font-weight:800;
          font-size:15px; color:var(--ink-navy);
          border-bottom:2px solid var(--gold);
          padding-bottom:3px;
          transition:color .2s ease;
        }
        .result-live-link:hover{ color:var(--gold-on-light); }
        .result-live-link__arrow{ font-size:15px; display:inline-block; transition:transform .2s ease; }
        .result-live-link:hover .result-live-link__arrow{ transform:translate(2px,-2px); }

        .result-screen{
          position:relative;
          background:linear-gradient(160deg, var(--navy-1) 0%, var(--navy-2) 55%, var(--navy-3) 100%);
          border-radius:24px;
          padding:clamp(28px,5vw,56px) clamp(28px,5vw,56px) clamp(76px,10vw,120px);
        }
        .result-screen__browser{
          background:var(--paper);
          border-radius:14px;
          overflow:hidden;
          box-shadow:0 30px 70px -20px rgba(0,0,0,.55);
        }
        .result-screen__bar{
          display:flex; align-items:center; gap:6px;
          height:38px; padding:0 14px;
          background:var(--cream);
          border-bottom:1px solid var(--line-navy);
        }
        .result-screen__url{
          margin-left:8px;
          font-family:"Lato", sans-serif; font-weight:800; font-size:12px;
          color:var(--ink-navy-soft);
        }
        .result-screen__viewport{
          position:relative; width:100%;
          aspect-ratio:16/9;
          background:#050608;
        }
        .result-screen__video{
          position:absolute; inset:0;
          width:100%; height:100%;
          object-fit:cover; object-position:top center;
          display:block;
        }
        .result-screen__float{
          position:absolute;
          right:clamp(20px,6vw,64px);
          bottom:clamp(-52px,-7vw,-34px);
          width:min(46%, 430px);
          background:var(--paper);
          border-radius:12px;
          overflow:hidden;
          box-shadow:0 24px 50px -16px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06);
        }
        .result-screen__float .result-screen__bar{ height:30px; padding:0 10px; }
        .result-screen__float .result-screen__url{ font-size:10.5px; }
        .result-screen__float .wf-card__dot{ width:5px; height:5px; }
        @media (max-width:760px){
          .result-screen{ padding:22px 22px 22px; border-radius:18px; }
          .result-screen__float{
            position:static;
            width:100%;
            margin-top:16px;
          }
        }

        /* ---------- TAKEAWAYS ---------- */
        .takeaways-list{
          margin-top:36px;
          display:flex;
          flex-direction:column;
        }
        .takeaway-card{
          position:relative;
          background:var(--paper);
          border:1px solid var(--line-navy);
          border-radius:14px;
          padding:26px 30px;
          margin-top:-1px;
        }
        .takeaway-card:first-child{ margin-top:0; }
        .takeaway-card:hover{ z-index:1; border-color:rgba(3,4,22,.18); }
        .takeaway-card__text{
          margin:0;
          font-size:16px;
          line-height:1.75;
          color:var(--ink-navy-soft);
        }
        .takeaway-card__lead{
          font-family:"Open Sans", sans-serif;
          font-weight:700;
          color:var(--ink-navy);
        }
      `}</style>

      {/* Mobile Sticky Table of Contents bar for screens under 900px */}
      <div className="case-toc-mobile" aria-label="Quick jump navigation">
        <button
          className={`case-toc-mobile__item ${activeToc === '#context' ? 'is-active' : ''}`}
          onClick={() => scrollTo('#context')}
        >
          01. Context
        </button>
        <button
          className={`case-toc-mobile__item ${activeToc === '#problem' ? 'is-active' : ''}`}
          onClick={() => scrollTo('#problem')}
        >
          02. Problem
        </button>
        <button
          className={`case-toc-mobile__item ${activeToc.startsWith('#process') || activeToc === '#user-flow' || activeToc === '#ideation' || activeToc === '#wireframe' || activeToc === '#style-guide' ? 'is-active' : ''}`}
          onClick={() => scrollTo('#process')}
        >
          03. Process
        </button>
        <button
          className={`case-toc-mobile__item ${activeToc === '#result' ? 'is-active' : ''}`}
          onClick={() => scrollTo('#result')}
        >
          04. Result
        </button>
        <button
          className={`case-toc-mobile__item ${activeToc === '#takeaways' ? 'is-active' : ''}`}
          onClick={() => scrollTo('#takeaways')}
        >
          05. Takeaways
        </button>
      </div>

      <div className="case-scroll__shell">

        {/* ----------------- ASIDE: TABLE OF CONTENTS ----------------- */}
        <aside className="case-toc" id="caseToc" aria-label="Table of contents">
          <div className="case-toc__card">
            <p className="case-toc__heading">Table of Contents</p>
            <ul className="case-toc__list">
              <li>
                <button
                  className={`case-toc__item ${activeToc === '#context' ? 'is-active' : ''}`}
                  onClick={() => scrollTo('#context')}
                >
                  01. Context
                </button>
              </li>
              <li>
                <button
                  className={`case-toc__item ${activeToc === '#problem' ? 'is-active' : ''}`}
                  onClick={() => scrollTo('#problem')}
                >
                  02. Problem
                </button>
              </li>
              <li>
                <button
                  className={`case-toc__item ${activeToc.startsWith('#process') || activeToc === '#user-flow' || activeToc === '#ideation' || activeToc === '#wireframe' || activeToc === '#style-guide' ? 'is-active' : ''}`}
                  onClick={() => scrollTo('#process')}
                >
                  03. Process
                </button>
                <ul className="case-toc__sublist">
                  <li>
                    <button
                      className={`case-toc__subitem ${activeToc === '#user-flow' ? 'is-active' : ''}`}
                      onClick={() => scrollTo('#user-flow')}
                    >
                      User Flow
                    </button>
                  </li>
                  <li>
                    <button
                      className={`case-toc__subitem ${activeToc === '#ideation' ? 'is-active' : ''}`}
                      onClick={() => scrollTo('#ideation')}
                    >
                      Ideation
                    </button>
                  </li>
                  <li>
                    <button
                      className={`case-toc__subitem ${activeToc === '#wireframe' ? 'is-active' : ''}`}
                      onClick={() => scrollTo('#wireframe')}
                    >
                      Wireframe
                    </button>
                  </li>
                  <li>
                    <button
                      className={`case-toc__subitem ${activeToc === '#style-guide' ? 'is-active' : ''}`}
                      onClick={() => scrollTo('#style-guide')}
                    >
                      Style Guide
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className={`case-toc__item ${activeToc === '#result' ? 'is-active' : ''}`}
                  onClick={() => scrollTo('#result')}
                >
                  04. Result
                </button>
              </li>
              <li>
                <button
                  className={`case-toc__item ${activeToc === '#takeaways' ? 'is-active' : ''}`}
                  onClick={() => scrollTo('#takeaways')}
                >
                  05. Takeaways
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="case-toc__top"
          >
            <span className="case-toc__top-arrow">&uarr;</span> Back to top
          </button>
        </aside>

        {/* ----------------- SECTIONS ----------------- */}
        <div className="case-scroll__sections">

          {/* 1. CONTEXT */}
          <section className="case-section" id="context">
            <div className="case-section__body">
              <div className="case-eyebrow">Context</div>
              <h2 className="case-heading">Making outdoor advertising move</h2>
              <div className="case-body">
                <p>Traditional outdoor advertising in Nigeria can be expensive, complex to coordinate, and restricted to fixed locations. Spotlyte was created to make outdoor advertising more flexible by bringing advertisements to the streets of Lagos through car-top digital displays.</p>
                <p>The platform connects businesses and advertising agencies with drivers, creating a system where brands can run campaigns across different locations while drivers can earn by having advertisements displayed on their vehicles.</p>
                <p>This meant Spotlyte needed more than just a customer-facing website. It required a digital ecosystem that could support different users and their unique needs: from agencies managing campaigns and tracking advertising reach, to drivers managing their vehicles and earnings, and administrators overseeing the entire platform.</p>
              </div>
            </div>
          </section>

          {/* 2. PROBLEM */}
          <section className="case-section" id="problem">
            <div className="case-section__body case-section__body--wide">
              <div className="case-eyebrow">The Problem</div>
              <h2 className="case-heading">Making outdoor advertising more flexible, accessible, and measurable</h2>
              <div className="case-body">
                <p>Traditional outdoor advertising in Nigeria can be expensive, limited to fixed locations, and difficult to manage. Spotlyte aims to make outdoor advertising more flexible by allowing businesses and advertising agencies to place campaigns on digital car-top displays, helping brands reach audiences across different areas of Lagos as vehicles move through the city.</p>
                <p>The UX challenge was to create a seamless digital ecosystem that connects advertisers with drivers while making campaign management, driver participation, and platform administration simple and intuitive.</p>
              </div>

              <div className="objectives">
                <div className="objective-card">
                  <div className="objective-card__icon">
                    <svg viewBox="0 0 24 24"><path d="M2 16.5h20"/><path d="M4.8 16.5 6 11.3a2 2 0 0 1 1.9-1.5h8.2a2 2 0 0 1 1.9 1.5l1.2 5.2"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/></svg>
                  </div>
                  <h3 className="objective-card__title">Mobility</h3>
                  <p className="objective-card__desc">Expand advertising beyond fixed locations by enabling brands to reach audiences across multiple areas of Lagos through moving vehicles.</p>
                </div>

                <div className="objective-card">
                  <div className="objective-card__icon">
                    <svg viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16.5" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M8.8 12.3 10.8 14.3 15.2 9.3"/></svg>
                  </div>
                  <h3 className="objective-card__title">Simplicity</h3>
                  <p className="objective-card__desc">Make campaign creation and management straightforward for businesses and advertising agencies, with clear flows and intuitive interfaces.</p>
                </div>

                <div className="objective-card">
                  <div className="objective-card__icon">
                    <svg viewBox="0 0 24 24"><rect x="3.5" y="6.5" width="17" height="12" rx="2.5"/><path d="M3.5 10.3h17"/><circle cx="16.3" cy="14.2" r="1.2"/></svg>
                  </div>
                  <h3 className="objective-card__title">Empowerment</h3>
                  <p className="objective-card__desc">Give drivers a simple experience for participating in advertising campaigns, accessing relevant information, and understanding their earnings.</p>
                </div>

                <div className="objective-card">
                  <div className="objective-card__icon">
                    <svg viewBox="0 0 24 24"><path d="M4.8 16.2a7.2 7.2 0 0 1 14.4 0"/><path d="M12 16.2 15.4 11"/><circle cx="12" cy="16.2" r="1.1"/></svg>
                  </div>
                  <h3 className="objective-card__title">Control</h3>
                  <p className="objective-card__desc">Equip administrators with the tools to efficiently oversee campaigns, drivers, vehicles, approvals, and other essential platform activities from one centralized dashboard.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. PROCESS */}
          <section className="case-section" id="process">
            <div className="case-section__body case-section__body--wide">
              <div className="case-eyebrow">The Process</div>
              <h2 className="case-heading">From flow to finished UI</h2>
              <div className="case-body">
                <p>From mapping user journeys to shaping intuitive interfaces, each step helped bring the Spotlyte experience to life.</p>
              </div>

              <ul className="process-list">
                
                {/* 01. User Flow */}
                <li className="process-list__row process-list__row--expanded" id="user-flow">
                  <span className="process-list__num">01</span>
                  <div className="process-list__content">
                    <h3 className="process-list__label">User Flow</h3>
                    <p className="process-list__note">Spotlyte serves two very different users, so the onboarding flow branches into two dedicated journeys: one for advertising agencies setting up campaigns, and one for drivers registering their vehicles.</p>

                    {/* Flow 1: Ad Agency Flow */}
                    <div className="flow-block">
                      <h4 className="flow-block__title">Ad Agency Flow</h4>
                      <div className="flow-diagram-wrap">
                        <div className="flow-diagram" style={{ width: '1380px', height: '760px' }}>
                          <svg className="flow-diagram__svg" viewBox="0 0 1380 760" role="img" aria-label="Ad Agency Flow diagram">
                            <defs>
                              <marker id="fa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                                <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
                              </marker>
                            </defs>
                            <line x1="120.0" y1="45" x2="120.0" y2="58" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="224" y1="152" x2="246" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="454" y1="152" x2="476" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="684" y1="152" x2="706" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="914" y1="152" x2="936" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="1040.0" y1="241" x2="1040.0" y2="349" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="936" y1="437" x2="914" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="706" y1="437" x2="684" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="476" y1="437" x2="454" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="246" y1="437" x2="224" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                            <line x1="1144" y1="437" x2="1166" y2="437" className="flow-line flow-line--dashed" markerEnd="url(#fa)"/>
                            <line x1="120.0" y1="526" x2="120.0" y2="634" className="flow-line flow-line--solid" markerEnd="url(#fa)"/>
                          </svg>

                          <div className="flow-start" style={{ left: '60.0px', top: '18px', width: '120px' }}>
                            <span className="flow-start__icon">&#9733;</span> START
                          </div>
                          <div className="flow-node" style={{ left: '20px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">01</span><span className="flow-node__title">Website / Entry</span></div>
                            <p className="flow-node__line">Visits the Spotlyte website.</p>
                            <p className="flow-node__line">Explores About, How It Works, etc.</p>
                            <p className="flow-node__line">Selects Register / Get Started.</p>
                          </div>
                          <div className="flow-node" style={{ left: '250px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">02</span><span className="flow-node__title">Create Account</span></div>
                            <p className="flow-node__line">Signs up with Google or email.</p>
                            <p className="flow-node__line">Email: name, email, password, confirm.</p>
                          </div>
                          <div className="flow-node" style={{ left: '480px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">03</span><span className="flow-node__title">Choose Account Type</span></div>
                            <p className="flow-node__line">Chooses Agency, or Driver.</p>
                            <p className="flow-node__line">Selects Agency.</p>
                          </div>
                          <div className="flow-node" style={{ left: '710px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">04</span><span className="flow-node__title">Create Agency Account</span></div>
                            <p className="flow-node__line">Agency name, business email,</p>
                            <p className="flow-node__line">phone number, password.</p>
                          </div>
                          <div className="flow-node" style={{ left: '940px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">05</span><span className="flow-node__title">Tell Us About Your Agency</span></div>
                            <p className="flow-node__line">Logo, business name, CAC number.</p>
                            <p className="flow-node__line">Website, size, industry, specialization.</p>
                          </div>
                          <div className="flow-node" style={{ left: '940px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">06</span><span className="flow-node__title">Verify Business Identity</span></div>
                            <p className="flow-node__line">CAC certificate, tax ID,</p>
                            <p className="flow-node__line">valid government-issued ID.</p>
                          </div>
                          <div className="flow-node flow-node--optional" style={{ left: '710px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">07</span><span className="flow-node__title">Preference Setup</span><span className="flow-node__badge">Optional</span></div>
                            <p className="flow-node__line">Monthly budget range.</p>
                            <p className="flow-node__line">Preferred regions in Lagos.</p>
                            <p className="flow-node__line">Industry of interest.</p>
                          </div>
                          <div className="flow-node" style={{ left: '480px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">08</span><span className="flow-node__title">Review Submission</span></div>
                            <p className="flow-node__line">Reviews info and documents.</p>
                            <p className="flow-node__line">Can edit, then submits.</p>
                          </div>
                          <div className="flow-node" style={{ left: '250px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">09</span><span className="flow-node__title">Application Submitted</span></div>
                            <p className="flow-node__line">&ldquo;Your Spotlyte is almost ready.&rdquo;</p>
                            <p className="flow-node__line">Pending administrative review.</p>
                          </div>
                          <div className="flow-node" style={{ left: '20px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">10</span><span className="flow-node__title">Pending Review</span></div>
                            <p className="flow-node__line">Dashboard visible, campaign tools</p>
                            <p className="flow-node__line">restricted until approved.</p>
                          </div>
                          <div className="flow-faq" style={{ left: '1170px', top: '367.0px', width: '190px', height: '140px' }}>
                            <span className="flow-faq__label">FAQ</span>
                            <p className="flow-faq__line">Why is this information required?</p>
                            <p className="flow-faq__line">How long does verification take?</p>
                          </div>
                          <div className="flow-node-end" style={{ left: '20px', top: '630px', width: '230px', minHeight: '100px' }}>
                            <span className="flow-node-end__label">Awaiting Approval</span>
                            <p className="flow-node-end__desc">Once approved, the agency unlocks the full dashboard and can create and manage campaigns.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Flow 2: Driver Flow */}
                    <div className="flow-block">
                      <h4 className="flow-block__title">Driver Flow</h4>
                      <div className="flow-diagram-wrap">
                        <div className="flow-diagram" style={{ width: '1380px', height: '760px' }}>
                          <svg className="flow-diagram__svg" viewBox="0 0 1380 760" role="img" aria-label="Driver Flow diagram">
                            <defs>
                              <marker id="fa2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                                <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
                              </marker>
                            </defs>
                            <line x1="120.0" y1="45" x2="120.0" y2="58" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="224" y1="152" x2="246" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="454" y1="152" x2="476" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="684" y1="152" x2="706" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="914" y1="152" x2="936" y2="152" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="1040.0" y1="241" x2="1040.0" y2="349" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="936" y1="437" x2="914" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="706" y1="437" x2="684" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="476" y1="437" x2="454" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="246" y1="437" x2="224" y2="437" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                            <line x1="1144" y1="437" x2="1166" y2="437" className="flow-line flow-line--dashed" markerEnd="url(#fa2)"/>
                            <line x1="120.0" y1="526" x2="120.0" y2="634" className="flow-line flow-line--solid" markerEnd="url(#fa2)"/>
                          </svg>

                          <div className="flow-start" style={{ left: '60.0px', top: '18px', width: '120px' }}>
                            <span className="flow-start__icon">&#9733;</span> START
                          </div>
                          <div className="flow-node" style={{ left: '20px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">01</span><span className="flow-node__title">Spotlyte Website</span></div>
                            <p className="flow-node__line">Visits the Spotlyte website.</p>
                            <p className="flow-node__line">Selects Register / Get Started.</p>
                          </div>
                          <div className="flow-node" style={{ left: '250px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">02</span><span className="flow-node__title">Create Account</span></div>
                            <p className="flow-node__line">Signs up with Google or email.</p>
                            <p className="flow-node__line">Email: name, email, password, confirm.</p>
                          </div>
                          <div className="flow-node" style={{ left: '480px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">03</span><span className="flow-node__title">Choose Account Type</span></div>
                            <p className="flow-node__line">Selects Agency, or Driver.</p>
                            <p className="flow-node__line">Selects Driver.</p>
                          </div>
                          <div className="flow-node" style={{ left: '710px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">04</span><span className="flow-node__title">Create Driver Profile</span></div>
                            <p className="flow-node__line">Full name, email,</p>
                            <p className="flow-node__line">phone number, password.</p>
                          </div>
                          <div className="flow-node" style={{ left: '940px', top: '60px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">05</span><span className="flow-node__title">Vehicle Information</span></div>
                            <p className="flow-node__line">Vehicle make and model.</p>
                            <p className="flow-node__line">Registration number &amp; documentation.</p>
                          </div>
                          <div className="flow-node" style={{ left: '940px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">06</span><span className="flow-node__title">Driver Verification</span></div>
                            <p className="flow-node__line">Submits ID and driving /</p>
                            <p className="flow-node__line">vehicle documentation.</p>
                          </div>
                          <div className="flow-node" style={{ left: '710px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">07</span><span className="flow-node__title">Review &amp; Submit</span></div>
                            <p className="flow-node__line">Reviews personal, vehicle info,</p>
                            <p className="flow-node__line">and documents. Can edit first.</p>
                          </div>
                          <div className="flow-node" style={{ left: '480px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">08</span><span className="flow-node__title">Application Submitted</span></div>
                            <p className="flow-node__line">&ldquo;Your application has been</p>
                            <p className="flow-node__line">submitted.&rdquo; Pending review.</p>
                          </div>
                          <div className="flow-node" style={{ left: '250px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">09</span><span className="flow-node__title">Pending Review</span></div>
                            <p className="flow-node__line">Limited dashboard shows status.</p>
                            <p className="flow-node__line">Earnings stay locked till approval.</p>
                          </div>
                          <div className="flow-node" style={{ left: '20px', top: '345px', width: '200px', height: '185px' }}>
                            <div className="flow-node__head"><span className="flow-node__num">10</span><span className="flow-node__title">Approved</span></div>
                            <p className="flow-node__line">Full dashboard: earnings, hours online,</p>
                            <p className="flow-node__line">campaigns, device &amp; route status.</p>
                          </div>
                          <div className="flow-faq" style={{ left: '1170px', top: '367.0px', width: '190px', height: '140px' }}>
                            <span className="flow-faq__label">FAQ</span>
                            <p className="flow-faq__line">Why is verification required?</p>
                            <p className="flow-faq__line">What happens after submission?</p>
                          </div>
                          <div className="flow-node-end" style={{ left: '20px', top: '630px', width: '230px', minHeight: '100px' }}>
                            <span className="flow-node-end__label">Driver Dashboard</span>
                            <p className="flow-node-end__desc">Unlocks online status, GPS telemetry verification, and verified impression earnings.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 02. Ideation */}
                <li className="process-list__row process-list__row--expanded" id="ideation">
                  <span className="process-list__num">02</span>
                  <div className="process-list__content">
                    <h3 className="process-list__label">Ideation</h3>
                    <p className="process-list__note" style={{ marginBottom: '16px' }}>
                      I started the ideation process with pen and paper, exploring how I wanted the Spotlyte experience to look and flow before moving into digital wireframes. I created two sets of sketches: the first focused on the key sections of the website, including the Home, About, and How It Works pages, while the second explored the full-page structure and how each section would come together as users scrolled through the experience.
                    </p>
                    <p className="process-list__note">
                      This allowed me to quickly explore layouts, content hierarchy, and page structure without getting too focused on visual details too early. Once I had a clearer direction, I used these sketches as a foundation for developing the wireframes.
                    </p>
                    
                    {/* Sketch 1: Concept Wireframe exploration */}
                    <div className="sketch-figure">
                      <div className="w-full max-w-[780px] bg-[#FAF8F5] border border-[#E7E2D9] rounded-2xl p-4 sm:p-6 shadow-xs">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                          <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">SKETCH STUDY 01: CORE ARCHITECTURE</span>
                          <span className="font-mono text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded">HAND-DRAWN IDEATION</span>
                        </div>
                        <img
                          src="/ideaa.png"
                          alt="Hand-drawn sketches exploring Spotlyte's key screens: homepage, about, and how-it-works layouts"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="sketch-figure__img w-full object-cover rounded-xl shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Sketch 2: Multi-Persona Scroll Exploration */}
                    <div className="sketch-figure">
                      <div className="w-full max-w-[780px] bg-[#FAF8F5] border border-[#E7E2D9] rounded-2xl p-4 sm:p-6 shadow-xs">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                          <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">SKETCH STUDY 02: MULTI-STAKEHOLDER ONBOARDING</span>
                          <span className="font-mono text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded">ECOSYSTEM FLOW</span>
                        </div>
                        <img
                          src="/ideaas.png"
                          alt="Hand-drawn sketches expanding the key screens into full-page scroll layouts for advertisers, agencies, and drivers"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="sketch-figure__img w-full object-cover rounded-xl shadow-xs"
                        />
                      </div>
                    </div>
                  </div>
                </li>

                {/* 03. Wireframe */}
                <li className="process-list__row process-list__row--expanded" id="wireframe">
                  <span className="process-list__num">03</span>
                  <div className="process-list__content">
                    <h3 className="process-list__label">Wireframe</h3>
                    <p className="process-list__note">
                      I used wireframes to establish the structure, hierarchy, and flow of the Spotlyte experience before moving into visual design. I mapped out the core website pages and navigation, alongside the agency and driver dashboards, authentication screens, and key system states such as error and connection-loss screens.
                    </p>

                    {/* Core Wireframe & Transformed UI Cards (Scrollable Wireframes & Designs) */}
                    <div className="wf-grid">
                      {wireframeCards.map((card) => {
                        const isStyled = cardStates[card.key] ?? false;
                        return (
                          <figure
                            key={card.key}
                            className={`wf-card ${card.isWide ? 'wf-card--wide' : ''}`}
                            data-page={card.key}
                          >
                            {/* Browser Bar */}
                            <div className="wf-card__bar">
                              <span className="wf-card__dot"></span>
                              <span className="wf-card__dot"></span>
                              <span className="wf-card__dot"></span>
                              <span className="wf-card__page">{card.pageName}</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleCard(card.key);
                                }}
                                className={`ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-colors shadow-2xs cursor-pointer ${
                                  isStyled
                                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                                }`}
                                title="Click to transform"
                              >
                                <span className="material-symbols-outlined text-[12px]">swap_horiz</span>
                                <span>{isStyled ? 'Styled UI' : 'Wireframe'}</span>
                              </button>
                            </div>

                            {/* Viewport: Interactive scrollable wireframe & styled design */}
                            <div
                              className="wf-card__viewport group cursor-pointer"
                              onClick={() => toggleCard(card.key)}
                              onMouseMove={(e) => handleMouseMove(card.key, e)}
                            >
                              {!isStyled ? (
                                <div className="relative w-full min-h-full bg-[#FAF9F5] p-2.5 sm:p-4 select-none flex flex-col justify-start">
                                  {/* Sticky Top Bar Indicators */}
                                  <div className="sticky top-2 z-10 flex items-center justify-between mb-3 pointer-events-none">
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs pointer-events-auto">
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-700">
                                        WIREFRAME BLUEPRINT (PNG)
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[10px] font-mono font-bold text-slate-600 pointer-events-auto">
                                      <span className="material-symbols-outlined text-[13px] animate-bounce">arrow_downward</span>
                                      <span>Scrollable</span>
                                    </div>
                                  </div>

                                  <img
                                    src={card.wireframeImg}
                                    alt={`${card.title} Wireframe Blueprint PNG`}
                                    loading="lazy"
                                    className="w-full h-auto block rounded-lg border border-slate-200/80 shadow-2xs"
                                  />

                                  {/* Bottom reached notice */}
                                  <div className="text-center py-5 text-[10.5px] font-mono text-slate-400 border-t border-slate-200/60 mt-4">
                                    &bull; End of {card.pageName} Wireframe Structure (Footer reached) &bull;
                                  </div>
                                </div>
                              ) : (
                                <div className="relative w-full min-h-full bg-[#050814] p-2.5 sm:p-4 select-none flex flex-col justify-start">
                                  {/* Sticky Top Bar Indicators */}
                                  <div className="sticky top-2 z-10 flex items-center justify-between mb-3 pointer-events-none">
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/30 shadow-2xs pointer-events-auto">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-300">
                                        TRANSFORMED STYLED UI
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/30 shadow-2xs text-[10px] font-mono font-bold text-amber-300 pointer-events-auto">
                                      <span className="material-symbols-outlined text-[13px] animate-bounce">arrow_downward</span>
                                      <span>Scrollable</span>
                                    </div>
                                  </div>

                                  <img
                                    src={card.styledImg}
                                    alt={`${card.title} Transformed Styled UI`}
                                    loading="lazy"
                                    className="w-full h-auto block rounded-lg border border-slate-800 shadow-md"
                                  />

                                  {/* Bottom reached notice */}
                                  <div className="text-center py-5 text-[10.5px] font-mono text-slate-500 border-t border-slate-800/80 mt-4">
                                    &bull; End of {card.pageName} Transformed UI Screen &bull;
                                  </div>
                                </div>
                              )}

                              {/* Custom floating cursor: "Click to transform" */}
                              <span
                                className="wf-card__cursor"
                                style={{
                                  left: `${cursorPos[card.key]?.x || 50}px`,
                                  top: `${cursorPos[card.key]?.y || 50}px`,
                                }}
                              >
                                {isStyled ? 'Click to view wireframe' : 'Click to transform'}
                              </span>
                            </div>

                            {/* Card Footer Bar */}
                            <div className="wf-card__footer">
                              <div className="wf-card__actions">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleCard(card.key);
                                  }}
                                  className="wf-action-btn font-bold text-amber-900 border-amber-300 bg-amber-50 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-colors"
                                  title="Toggle between wireframe and transformed design"
                                >
                                  <span className="material-symbols-outlined text-[13px]">swap_horiz</span> Click to transform
                                </button>
                                <span className="wf-action-dot">&middot;</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxImage({
                                      src: isStyled ? card.styledImg : card.wireframeImg,
                                      title: isStyled ? `${card.title} (Transformed UI)` : `${card.title} (Wireframe)`,
                                      badge: isStyled ? 'Transformed Production UI' : 'Low-Fidelity Wireframe (PNG)',
                                    });
                                  }}
                                  className="wf-action-btn"
                                  title="Enlarge active screen in fullscreen"
                                >
                                  <span className="material-symbols-outlined text-[13px]">zoom_in</span> Enlarge
                                </button>
                              </div>

                              <p className="wf-card__hint-text">
                                {isStyled ? 'Styled UI · Scrollable canvas' : 'Wireframe blueprint · Scrollable canvas'}
                              </p>
                            </div>
                          </figure>
                        );
                      })}
                    </div>

                    <p className="process-list__note" style={{ marginTop: '28px' }}>
                      Beyond the core site, I also wireframed the agency's full onboarding journey: from sign up through business verification and campaign preferences  along with the dashboard and key system states like the pending-review screen.
                    </p>

                    {/* Interactive 9-Screen Wireframe Mosaic & Transformed Styled Journey */}
                    <div className="wf-mosaic">
                      {/* Mosaic Top Control Header */}
                      <div className="wf-mosaic__header">
                        <div className="wf-mosaic__headline">
                          <span className="wf-mosaic__title">
                            AGENCY ONBOARDING JOURNEY &mdash; 9 SCREEN SEQUENCE
                          </span>
                          <span className="wf-mosaic__subtitle">
                            Every box features both the low-fidelity wireframe PNG and the transformed production UI
                          </span>
                        </div>

                        {/* Global Switcher for All 9 Screens */}
                        <div className="wf-mosaic__controls">
                          <button
                            type="button"
                            onClick={() => setAllOnboardingStyled(false)}
                            className={`wf-mosaic__ctrl-btn ${!mosaicStyled ? 'is-active' : ''}`}
                            title="Show wireframe blueprints for all screens"
                          >
                            All Wireframes (PNG)
                          </button>
                          <button
                            type="button"
                            onClick={() => setAllOnboardingStyled(true)}
                            className={`wf-mosaic__ctrl-btn ${mosaicStyled ? 'is-active' : ''}`}
                            title="Show transformed styled UI for all screens"
                          >
                            All Styled UI
                          </button>
                        </div>
                      </div>

                      {/* 9 Interactive Wireframe & Styled Screen Boxes */}
                      <div className="wf-mosaic__grid">
                        {onboardingCards.map((item) => {
                          const isStyled = onboardingStates[item.key] ?? mosaicStyled;
                          return (
                            <figure key={item.key} className="wf-mosaic__tile" data-page={item.pageName}>
                              {/* Window Top Bar with Title & Individual Toggles */}
                              <div className="wf-mosaic__bar">
                                <div className="wf-mosaic__bar-left">
                                  <span className="wf-mosaic__dot"></span>
                                  <span className="wf-mosaic__dot"></span>
                                  <span className="wf-mosaic__dot"></span>
                                  <span className="wf-mosaic__page" title={item.title}>
                                    {item.pageName}
                                  </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  {/* In-tile switcher */}
                                  <div className="wf-mosaic__toggle">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOnboardingCardExplicit(item.key, false);
                                      }}
                                      className={`wf-mosaic__tab ${!isStyled ? 'is-active' : ''}`}
                                      title="Show Wireframe PNG"
                                    >
                                      Wireframe
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOnboardingCardExplicit(item.key, true);
                                      }}
                                      className={`wf-mosaic__tab ${isStyled ? 'is-active' : ''}`}
                                      title="Show Transformed Styled UI"
                                    >
                                      Styled
                                    </button>
                                  </div>

                                  <span
                                    className={`wf-card__state text-[8.5px] px-1.5 py-0.5 ${
                                      isStyled ? 'is-styled' : ''
                                    }`}
                                  >
                                    {isStyled ? 'Styled' : 'WF'}
                                  </span>
                                </div>
                              </div>

                              {/* Interactive Viewport: Flip between Wireframe PNG and Styled UI */}
                              <div
                                className="wf-mosaic__frame group"
                                onClick={() => toggleOnboardingCard(item.key)}
                                onMouseMove={(e) => handleOnboardingMouseMove(item.key, e)}
                              >
                                {!isStyled ? (
                                  <div className="relative w-full h-full bg-[#FAF9F5] flex items-center justify-center p-1.5 overflow-hidden select-none">
                                    <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-2xs">
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                      <span className="text-[8.5px] font-mono font-bold tracking-wider uppercase text-slate-700">
                                        WIREFRAME (PNG)
                                      </span>
                                    </div>
                                    <img
                                      src={item.wireframeImg}
                                      alt={`${item.title} Wireframe Blueprint PNG`}
                                      loading="lazy"
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-cover rounded-md border border-slate-200/70 shadow-2xs transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                  </div>
                                ) : (
                                  <div className="relative w-full h-full bg-[#050814] flex items-center justify-center p-1.5 overflow-hidden select-none">
                                    <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-black/85 backdrop-blur-xs border border-amber-500/30 shadow-2xs">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                                      <span className="text-[8.5px] font-mono font-bold tracking-wider uppercase text-amber-300">
                                        TRANSFORMED UI
                                      </span>
                                    </div>
                                    <img
                                      src={item.styledImg}
                                      alt={`${item.title} Transformed Styled UI`}
                                      loading="lazy"
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-cover rounded-md border border-slate-800 shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                  </div>
                                )}

                                {/* Custom Floating Cursor */}
                                <span
                                  className="wf-mosaic__cursor"
                                  style={{
                                    left: `${onboardingCursorPos[item.key]?.x || 60}px`,
                                    top: `${onboardingCursorPos[item.key]?.y || 40}px`,
                                  }}
                                >
                                  {isStyled ? 'Click for wireframe' : 'Click to transform'}
                                </span>
                              </div>

                              {/* Tile Footer with Subtitle and Enlarge / Side-by-Side buttons */}
                              <div className="wf-mosaic__footer">
                                <span className="wf-mosaic__subtitle-text" title={item.subtitle}>
                                  {item.subtitle}
                                </span>

                                <div className="flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setLightboxImage({
                                        src: isStyled ? item.styledImg : item.wireframeImg,
                                        title: item.title,
                                        badge: isStyled ? 'Transformed Production UI' : 'Low-Fidelity Wireframe (PNG)',
                                      });
                                    }}
                                    className="wf-action-btn text-[9.5px] px-1.5 py-0.5"
                                    title="Enlarge active screen in fullscreen"
                                  >
                                    <span className="material-symbols-outlined text-[12px]">zoom_in</span> Enlarge
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCompareModal({
                                        title: item.title,
                                        wireframeImg: item.wireframeImg,
                                        styledImg: item.styledImg,
                                        subtitle: item.subtitle,
                                        description: item.description,
                                      });
                                    }}
                                    className="wf-action-btn wf-action-btn--compare text-[9.5px] px-1.5 py-0.5"
                                    title="Compare wireframe and styled UI side by side"
                                  >
                                    <span className="material-symbols-outlined text-[12px]">compare</span> Compare
                                  </button>
                                </div>
                              </div>
                            </figure>
                          );
                        })}
                      </div>

                      <p className="wf-card__hint" style={{ marginTop: '14px', borderTop: 'none', padding: '0 4px' }}>
                        Click anywhere on any tile or use the toggles to switch between the low-fidelity wireframe PNG and the transformed styled design.
                      </p>
                    </div>
                  </div>
                </li>

                {/* 04. Style Guide */}
                <li className="process-list__row process-list__row--expanded" id="style-guide">
                  <span className="process-list__num">04</span>
                  <div className="process-list__content">
                    <h3 className="process-list__label">Style Guide</h3>
                    <p className="process-list__note">
                      I developed the visual direction around Spotlyte&rsquo;s existing brand identity, using the colours from the logo as the foundation for the interface. The palette combines deep blues with yellow accents to create a visual system that feels bold, energetic, and connected to the brand. Typography, spacing, buttons, forms, and other UI elements were then defined to maintain consistency across the website and dashboard experiences.
                    </p>

                    <div className="sg">
                      <div className="sg__row">
                        <div className="sg__col">
                          <div className="sg__eyebrow">Color Styles</div>
                          <h4 className="sg__heading">Primary Colors</h4>
                          <div className="sg__swatches sg__swatches--primary">
                            <div className="sg__swatch" style={{ background: '#0b1640' }}>
                              <span className="sg__swatch-name">Navy</span>
                              <span className="sg__swatch-hex">#0B1640</span>
                            </div>
                            <div className="sg__swatch" style={{ background: '#030416' }}>
                              <span className="sg__swatch-name">Deep Navy</span>
                              <span className="sg__swatch-hex">#030416</span>
                            </div>
                            <div className="sg__swatch sg__swatch--light" style={{ background: '#ffcc00' }}>
                              <span className="sg__swatch-name">Gold</span>
                              <span className="sg__swatch-hex">#FFCC00</span>
                            </div>
                          </div>
                        </div>

                        <div className="sg__col">
                          <div className="sg__eyebrow">Neutral Colors</div>
                          <h4 className="sg__heading">Gray Scale</h4>
                          <div className="sg__swatches sg__swatches--neutral">
                            <div className="sg__swatch sg__swatch--sm" style={{ background: '#4a5170' }}>
                              <span className="sg__swatch-name">Ink Navy Soft</span>
                              <span className="sg__swatch-hex">#4A5170</span>
                            </div>
                            <div className="sg__swatch sg__swatch--sm sg__swatch--light" style={{ background: '#a67c00' }}>
                              <span className="sg__swatch-name">Gold on Light</span>
                              <span className="sg__swatch-hex">#A67C00</span>
                            </div>
                            <div className="sg__swatch sg__swatch--sm sg__swatch--light" style={{ background: '#f5f4f0' }}>
                              <span className="sg__swatch-name">Cream</span>
                              <span className="sg__swatch-hex">#F5F4F0</span>
                            </div>
                            <div className="sg__swatch sg__swatch--sm sg__swatch--light" style={{ background: '#ffffff' }}>
                              <span className="sg__swatch-name">Paper</span>
                              <span className="sg__swatch-hex">#FFFFFF</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sg__transparency">
                        <div className="sg__eyebrow">Transparency Colors</div>
                        <div className="sg__chips">
                          <div className="sg__chip" style={{ background: 'rgba(3,4,22,.1)' }}>
                            <span className="sg__chip-name">Line Navy</span>
                            <span className="sg__chip-hex">10%</span>
                          </div>
                          <div className="sg__chip" style={{ background: 'rgba(3,4,22,.45)' }}>
                            <span className="sg__chip-name">Navy Faint</span>
                            <span className="sg__chip-hex">45%</span>
                          </div>
                          <div className="sg__chip" style={{ background: 'rgba(255,204,0,.16)' }}>
                            <span className="sg__chip-name">Gold Glow</span>
                            <span className="sg__chip-hex">16%</span>
                          </div>
                          <div className="sg__chip" style={{ background: 'rgba(255,204,0,.18)' }}>
                            <span className="sg__chip-name">Gold Wash</span>
                            <span className="sg__chip-hex">18%</span>
                          </div>
                        </div>
                      </div>

                      <div className="sg__divider"></div>

                      <div className="sg__row sg__row--type">
                        <div className="sg__col">
                          <div className="sg__eyebrow">Text Styles</div>
                          <h4 className="sg__heading">Primary Typography</h4>
                          <div className="sg__type-specimen">
                            <span className="sg__aa" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900 }}>Aa</span>
                            <div>
                              <p className="sg__font-name">Lato</p>
                              <p className="sg__font-weights">Bold &middot; Black</p>
                            </div>
                          </div>
                          <div className="sg__type-specimen">
                            <span className="sg__aa" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>Aa</span>
                            <div>
                              <p className="sg__font-name">Open Sans</p>
                              <p className="sg__font-weights">Regular &middot; Medium &middot; SemiBold &middot; Bold</p>
                            </div>
                          </div>
                        </div>

                        <div className="sg__col">
                          <table className="sg__table">
                            <thead>
                              <tr><th>Style</th><th>Font</th><th>Size</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Headline</td><td>Lato Black</td><td>34&ndash;60px</td></tr>
                              <tr><td>Section Heading</td><td>Lato Black</td><td>26&ndash;38px</td></tr>
                              <tr><td>Section Label</td><td>Lato Bold</td><td>17px</td></tr>
                              <tr><td>Eyebrow / Label</td><td>Lato Bold</td><td>11px</td></tr>
                              <tr><td>Body</td><td>Open Sans Regular</td><td>17px</td></tr>
                              <tr><td>Note / Caption</td><td>Open Sans Regular</td><td>15px</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </section>

          {/* 4. RESULT */}
          <section className="case-section" id="result">
            <div className="case-section__body case-section__body--wide">
              <div className="case-eyebrow">The Result</div>
              <h2 className="case-heading">What shipped</h2>
              <div className="case-body">
                <p>After moving from user flows and early sketches through wireframes and visual design, the final result is a responsive digital experience designed to make Spotlyte&rsquo;s advertising ecosystem clear, accessible, and easy to navigate. The website brings together the brand, its services, and key user journeys in one cohesive experience.</p>
              </div>
              <a className="result-live-link" href="https://spotlyte.ng/" target="_blank" rel="noopener noreferrer">
                View live website <span className="result-live-link__arrow">&#8599;</span>
              </a>

              <div className="result-screen">
                <div className="result-screen__browser">
                  <div className="result-screen__bar">
                    <span className="wf-card__dot"></span><span className="wf-card__dot"></span><span className="wf-card__dot"></span>
                    <span className="result-screen__url">spotlyte.ng</span>
                    <div className="ml-auto flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-200/80 text-[10px] font-mono font-bold text-slate-700 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>LIVE WALKTHROUGH</span>
                    </div>
                  </div>
                  <div 
                    className="result-screen__viewport group cursor-pointer"
                    onClick={toggleMainResultPlay}
                    title={isMainResultPlaying ? 'Click to pause video' : 'Click to play video'}
                  >
                    <video
                      ref={mainResultVideoRef}
                      className="result-screen__video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                     
                    >
                      
                      <source src="/spotlyte-hero-demo copy.mp4" type="video/mp4" />
                    </video>

                    {/* Play/Pause subtle badge on hover */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/75 backdrop-blur-md rounded-full text-[11px] font-mono text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-10">
                      <span className="material-symbols-outlined text-[14px]">
                        {isMainResultPlaying ? 'pause' : 'play_arrow'}
                      </span>
                      <span>{isMainResultPlaying ? 'Pause walkthrough' : 'Play walkthrough'}</span>
                    </div>
                  </div>
                </div>

                <div className="result-screen__float">
                  <div className="result-screen__bar">
                    <span className="wf-card__dot"></span><span className="wf-card__dot"></span><span className="wf-card__dot"></span>
                    <span className="result-screen__url">Agency Dashboard</span>
                    <div className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-200/80 text-[9px] font-mono font-bold text-slate-700 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>LIVE</span>
                    </div>
                  </div>
                  <div 
                    className="result-screen__viewport group cursor-pointer"
                    onClick={toggleFloatResultPlay}
                    title={isFloatResultPlaying ? 'Click to pause video' : 'Click to play video'}
                  >
                    <video
                      ref={floatResultVideoRef}
                      className="result-screen__video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                     
                    >
                     
                      <source src="/spot-dashboard.mp4" type="video/mp4" />
                    </video>

                    {/* Play/Pause subtle badge on hover */}
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded-full text-[10px] font-mono text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-10">
                      <span className="material-symbols-outlined text-[13px]">
                        {isFloatResultPlaying ? 'pause' : 'play_arrow'}
                      </span>
                      <span>{isFloatResultPlaying ? 'Pause' : 'Play'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. TAKEAWAYS */}
          <section className="case-section" id="takeaways">
            <div className="case-section__body case-section__body--wide">
              <div className="case-eyebrow">Takeaways</div>
              <h2 className="case-heading">What I&rsquo;d carry forward</h2>

              <div className="takeaways-list">
                <div className="takeaway-card">
                  <p className="takeaway-card__text">
                    <strong className="takeaway-card__lead">01 &mdash; Design is an iterative process, not a straight line. </strong>
                    Working on Spotlyte taught me how much collaboration goes into turning an idea into a finished product. From client meetings and feedback sessions to revisiting designs and making changes, I learned that good design often comes from refining an idea multiple times rather than getting it right on the first try. It also taught me how to balance my design decisions with the client&rsquo;s goals and the realities of the product.
                  </p>
                </div>
                <div className="takeaway-card">
                  <p className="takeaway-card__text">
                    <strong className="takeaway-card__lead">02 &mdash; Every design decision should have a reason behind it. </strong>
                    From choosing colours and typography to deciding how a page should be structured, I learned to think beyond what simply looks good. Each design choice needed to support the brand, communicate clearly, and contribute to the overall experience. Working across the website and dashboards helped me become more intentional about the thinking behind the interfaces I create.
                  </p>
                </div>
                <div className="takeaway-card">
                  <p className="takeaway-card__text">
                    <strong className="takeaway-card__lead">03 &mdash; Designing for users means thinking beyond the screen. </strong>
                    Working on Spotlyte made me think more deeply about how different users would actually move through the product. I had to consider what an advertiser needs when managing a campaign, what a driver needs from their dashboard, and how each part of the experience connects. It reinforced the importance of designing around real user journeys rather than designing individual screens in isolation.
                  </p>
                </div>
              </div>

              <div className="pt-16">
                <button
                  onClick={onBack}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">
                    arrow_back
                  </span>
                  <span>Back to All Projects</span>
                </button>
              </div>
            </div>
          </section>

        </div>{/* /.case-scroll__sections */}

      </div>{/* /.case-scroll__shell */}

      {/* Lightbox Modal (Expanded Wireframe / Styled UI View) */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          {/* Main Modal Window */}
          <div
            className="relative max-w-5xl w-full max-h-[94vh] flex flex-col bg-[#0b1020] border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#070b16] border-b border-white/12 z-20 gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 px-3 py-1 rounded-md border border-amber-400/35">
                  {lightboxImage.badge}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {lightboxImage.title}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                    Full-Length Screen Wireframe &bull; Scroll down to inspect all sections to footer
                  </span>
                </div>
              </div>

              {/* Prominent CANCEL BUTTON to go back to the wireframe */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                  title="Cancel & return to case study wireframe"
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  <span>Cancel / Back to Wireframe</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <span className="material-symbols-outlined text-2xl leading-none">close</span>
                </button>
              </div>
            </div>

            {/* Scrollable Viewport: Full Page Wireframe From Top to Footer */}
            <div className="relative flex-grow overflow-y-auto max-h-[78vh] p-4 sm:p-8 bg-[#101426] flex justify-center select-none">
              <div className="w-full max-w-4xl flex flex-col items-center">
                <div className="w-full flex items-center justify-between mb-3 text-[11px] font-mono text-slate-400 px-1">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <span className="material-symbols-outlined text-sm">unfold_more</span>
                    <span>Scrollable Canvas (Top Header &rarr; Footer Section)</span>
                  </span>
                  <span className="hidden sm:inline text-slate-500">
                    Esc key to exit
                  </span>
                </div>

                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-full h-auto block rounded-xl shadow-2xl border border-white/20 bg-white"
                />

                {/* Footer anchor in expanded view */}
                <div className="w-full text-center py-6 mt-6 border-t border-white/10">
                  <p className="text-xs font-mono text-slate-400 mb-3">
                    You have reached the end of the wireframe.
                  </p>
                  <button
                    type="button"
                    onClick={() => setLightboxImage(null)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    <span>Cancel &amp; Return to Wireframe</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Bottom Footer Bar */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3 bg-[#070b16] border-t border-white/12 text-slate-400 text-xs">
              <span className="font-mono text-[11px] text-slate-400">
                Tip: Use mouse wheel, trackpad, or scrollbar to review all sections
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">close</span>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Side-by-Side Comparison Modal */}
      {compareModal && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md cursor-zoom-out overflow-y-auto"
          onClick={() => setCompareModal(null)}
        >
          <div
            className="relative max-w-6xl w-full my-auto bg-[#0a0f1d] border border-white/15 rounded-2xl p-5 sm:p-7 shadow-2xl text-white cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-5 gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                  TRANSFORMATION COMPARISON
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {compareModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {compareModal.description}
                </p>
              </div>

              {/* Cancel Button in Header */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setCompareModal(null)}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  title="Cancel & Back to Wireframe"
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCompareModal(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close Comparison (Esc)"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* Side-by-Side Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Left: Wireframe PNG (Scrollable from header to footer) */}
              <div className="bg-[#FAF9F5] rounded-xl p-3 sm:p-4 border border-slate-300 flex flex-col">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
                      01. WIREFRAME BLUEPRINT (PNG)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">
                    SCROLLABLE
                  </span>
                </div>
                <div className="relative h-[380px] sm:h-[460px] rounded-lg overflow-y-auto bg-slate-100 border border-slate-200 p-2 select-none">
                  <div className="sticky top-1 z-10 flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-semibold bg-white/95 px-2 py-0.5 rounded border border-slate-200 text-slate-600 shadow-2xs">
                      Scroll to review full page &darr;
                    </span>
                  </div>
                  <img
                    src={compareModal.wireframeImg}
                    alt={`${compareModal.title} Wireframe Blueprint`}
                    className="w-full h-auto block rounded"
                  />
                </div>
                <p className="text-[11.5px] text-slate-600 font-sans mt-3 leading-relaxed">
                  Structural layout defining content hierarchy, navigation landmarks, and grid alignment before visual styling.
                </p>
              </div>

              {/* Right: Transformed Styled UI */}
              <div className="bg-[#050814] rounded-xl p-3 sm:p-4 border border-amber-500/30 flex flex-col">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-amber-300">
                      02. TRANSFORMED STYLED UI
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 font-bold">
                    PRODUCTION UI
                  </span>
                </div>
                <div className="relative h-[380px] sm:h-[460px] rounded-lg overflow-y-auto bg-black border border-slate-800 p-2 select-none flex items-center justify-center">
                  <img
                    src={compareModal.styledImg}
                    alt={`${compareModal.title} Transformed UI`}
                    className="w-full h-auto max-h-full object-contain rounded"
                  />
                </div>
                <p className="text-[11.5px] text-slate-300 font-sans mt-3 leading-relaxed">
                  High-fidelity execution with rich Lagos rooftop visuals, brand amber highlights, live telemetry, and finished UI assets.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-mono text-slate-400">
                {compareModal.subtitle}
              </span>
              <button
                type="button"
                onClick={() => setCompareModal(null)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                <span>Cancel &amp; Back to Wireframe</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
