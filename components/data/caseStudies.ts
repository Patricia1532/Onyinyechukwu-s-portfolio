

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  role: string;
  tools: string[];
  timeline: string;
  deliverables: string[];
  challenge: string;
  howMightWe: string;
  researchItems: { icon: string; title: string; desc: string; color: string }[];
  process: string;
  journeySteps: { title: string; desc: string }[];
  visualIdentity: {
    description: string;
    colors: { hex: string; name: string; desc: string }[];
    typography: { name: string; desc: string };
    image: string;
  };
  showcaseImages: { img: string; label: string }[];
  reflection: string;
  layout?: 'default' | 'editorial' | 'deck';
  editorialData?: {
    projectNote: string;
    sectionTitle: string;
    sectionText: string;
    quote: string;
    quoteAuthor?: string;
    isConfidential?: boolean;
  };
  deckData?: {
    githubLink: string;
    cards: { title: string; text: string; icon: string; color: string }[];
  };
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'gnc-perfume': {
    id: 'gnc-perfume',
    layout: 'deck',
    title: 'Front-End Development for G\u00A0&\u00A0C Perfume Store',
    subtitle: 'A personal e-commerce project focused on building a clean, responsive, and visually engaging shopping experience.',
    overview: 'This project was independently designed and developed as a personal front-end e-commerce concept for G\u00A0&\u00A0C Perfumes. I handled the entire process from initial layout planning to final implementation. The goal was to create a visually appealing and functional online store experience, with a strong focus on clean structure, responsiveness, and smooth user interaction.',
    role: 'Frontend Developer',
    tools: ['React', 'Tailwind', 'Framer Motion'],
    timeline: 'Personal Project',
    deliverables: ['Responsive Web App', 'Component Library', 'Interface Implementation'],
    challenge: 'Balancing visual appeal with a clean and organized layout. Ensuring responsiveness across multiple screen sizes.',
    howMightWe: 'How might we create a high-end perfume shopping experience that feels both luxurious and easy to navigate?',
    researchItems: [],
    process: '',
    journeySteps: [],
    visualIdentity: {
      description: 'Clean, modern, and high-end aesthetic with soft neutral tones.',
      colors: [],
      typography: { name: 'Inter', desc: 'Functional and clean' },
      image: '/perfu.png'
    },
    showcaseImages: [],
    reflection: 'This project highlights my skills in layout structuring, responsiveness, and independent development.',
    deckData: {
      githubLink: 'https://github.com/Patricia1532/GandC.git',
      cards: [
        {
          title: 'Project Execution',
          text: 'This project was built from scratch as a personal front-end development project. I handled everything independently, from structuring the layout to implementing the final interface. The focus was on translating an idea into a functional and visually appealing e-commerce experience.',
          icon: 'account_tree',
          color: 'bg-[#fff5f7]'
        },
        {
          title: 'Design & Structure',
          text: 'The interface was structured with clarity and usability in mind, ensuring that users can easily navigate products and key sections. I focused on maintaining a clean layout, clear visual hierarchy, and balanced spacing to create an intuitive browsing experience.',
          icon: 'brush',
          color: 'bg-[#fde7f0]'
        },
        {
          title: 'Front-End Development',
          text: 'The project was developed using front-end technologies with an emphasis on responsiveness and consistency. Layouts and components were built to adapt across different screen sizes while maintaining a cohesive design and smooth interaction.',
          icon: 'code',
          color: 'bg-[#fce7f3]'
        },
        {
          title: 'Challenges & Solutions',
          text: 'One challenge was balancing visual appeal with a clean and organized layout. This was addressed by refining spacing, improving content hierarchy, and maintaining consistency across components. Another challenge was ensuring responsiveness, which was solved by optimizing layouts for multiple screen sizes.',
          icon: 'extension',
          color: 'bg-[#fbcfe8]'
        },
        {
          title: 'Outcome',
          text: 'The final result is a modern and responsive e-commerce interface that demonstrates my ability to build clean and functional front-end experiences. This project highlights my skills in layout structuring, responsiveness, and independent development.',
          icon: 'check_circle',
          color: 'bg-[#f9d5e5]'
        }
      ]
    }
  },
  reno: {
    id: 'reno',
    layout: 'default',
    title: 'Reno — Home Renovations Simplified',
    subtitle: 'Redefining the Home Renovation Experience',
    overview: 'Reno is a conceptual platform designed to bring design, planning, and vetted contractors under one roof. This project was self-initiated to explore how a digital-first approach could solve the fragmentation and stress of home improvement.',
    role: 'UX/UI Designer (Self-Initiated)',
    tools: ['Figma', 'Adobe Color'],
    timeline: 'Self-paced (Practicing Course Skills)',
    deliverables: ['Product Architecture', 'Interface Design', 'Case Study'],
    challenge: 'Home renovations are notoriously fragmented. Homeowners struggle to find reliable contractors, visualising their space before construction, and managing budgets effectively.',
    howMightWe: 'How might we create a seamless end-to-end journey that empowers homeowners to renovate with confidence, clarity, and ease?',
    researchItems: [
      { icon: 'search', title: 'Lack of Transparency', desc: 'Typical users expressed anxiety over hidden costs and the reliability of contractor reviews.', color: 'text-primary' },
      { icon: 'visibility', title: 'Visual Gap', desc: 'Understanding how materials look together is a high-friction point in the design phase.', color: 'text-indigo-400' },
      { icon: 'speed', title: 'Time Management', desc: 'Standard project timelines are often unclear, leading to frustration during long-term builds.', color: 'text-rose-400' },
      { icon: 'fact_check', title: 'Vetting Fatigue', desc: 'The exhausting process of interviewing multiple contractors across different platforms.', color: 'text-teal-400' }
    ],
    process: 'The approach focused on three core pillars: Plan, Design, and Build. By structuring the product around these stages, the interface guides the user from initial curiosity to final construction.',
    journeySteps: [
      { title: 'Plan', desc: 'Custom proposals based on specific goals and budget constraints.' },
      { title: 'Design', desc: 'Curated design systems and access to professional consultants.' },
      { title: 'Build', desc: 'Connecting with vetted, licensed contractors for execution.' }
    ],
    visualIdentity: {
      description: 'The visual approach combines a high-impact pink accent with clean, minimalist foundations to evoke "energy" and "precision". It targets a modern demographic looking for professional yet approachable service.',
      colors: [
        { hex: '#ef3985', name: 'Reno Pink', desc: 'Primary Action: Energy and Modernity' },
        { hex: '#FFFFFF', name: 'Clean White', desc: 'Foundation: Clarity and Minimalism' }
      ],
      typography: { name: 'Inter & Playfair Display', desc: 'A blend of functional sans-serif for utility and editorial serif for brand authority.' },
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80'
    },
    showcaseImages: [
      { img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', label: 'View 01: Landing' },
      { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', label: 'View 02: Design Philosophy' },
      { img: 'https://images.unsplash.com/photo-1616489953149-8e79262171c7?auto=format&fit=crop&w=1200&q=80', label: 'View 03: Project Planning' },
      { img: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80', label: 'View 04: Mobile Interface' }
    ],
    reflection: 'Reno was a critical step in my journey. It taught me how to bridge complex business structures with a consumer-friendly interface. While it remains a conceptual project, it defines my belief that good design should simplify chaos and make big dreams (like a new home) feel achievable.'
  },
  spotlight: {
    id: 'spotlight',
    layout: 'editorial',
    title: 'Spotlyte',
    subtitle: 'Innovative Advertising for Emerging Markets',
    overview: 'Spotlyte is an innovative advertising platform designed to transform how businesses approach digital advertising in emerging markets like Nigeria. The platform focuses on reducing advertising costs while improving reach and efficiency through a smarter, tax-optimized system.',
    role: 'UX Designer',
    tools: ['Figma', 'User Research'],
    timeline: 'Ongoing Development',
    deliverables: ['End-to-end UX Design', 'User Research', 'Wireframing', 'Interaction Design'],
    challenge: 'Digital advertising in emerging markets is often costly and inefficient. Businesses need a system that is tax-optimized and highly accessible to reach their targets effectively.',
    howMightWe: 'How might we simplify digital advertising for businesses of all sizes in emerging territories?',
    researchItems: [],
    process: 'The design process prioritized simplicity, transparency, and usability. Every interaction was crafted to ensure that businesses of all sizes can easily navigate and leverage the platform without complexity.',
    journeySteps: [],
    visualIdentity: {
      description: 'Elegant, minimal, high-end design with a focus on refined typography and smooth transitions.',
      colors: [{ hex: '#f5f5f0', name: 'Soft Neutral', desc: 'Background: Calm and Professional' }],
      typography: { name: 'Playfair Display & Inter', desc: 'Professional editorial feel' },
      image: 'spotlyte.png'
    },
    showcaseImages: [],
    reflection: '',
    editorialData: {
      projectNote: 'Due to client confidentiality and ongoing development, detailed visuals and design assets cannot be publicly shared at this time. However, the project involved end-to-end UX design, including user research, wireframing, and interaction design focused on accessibility, clarity, and scalability.',
      sectionTitle: 'Human-Centered Approach',
      sectionText: 'The design process prioritized simplicity, transparency, and usability. Every interaction was crafted to ensure that businesses of all sizes can easily navigate and leverage the platform without complexity.',
      quote: 'Good design is not just what it looks like — it’s how it works.',
      isConfidential: true
    }
  },
  'fjko-law': {
    id: 'fjko-law',
    title: 'FJKO Law Firm',
    subtitle: 'Designing a Modern Law Firm Website Experience',
    overview: 'Establishing a digital presence for FJKO that centers on clarity, accessibility, and professional trust to bridge the gap between legal expertise and client needs.',
    role: 'UX/UI Designer',
    tools: ['Figma'],
    timeline: '4 weeks (Oct 2025)',
    deliverables: ['Research', 'UI Design'],
    challenge: 'FJKO is a newly established law firm entering a highly competitive market. They faced the unique challenge of needing to appear as a modern, forward-thinking practice while simultaneously projecting the authority and reliability of a long-standing institution.',
    howMightWe: 'How might we build a digital foundation for FJKO that balances approachable accessibility with the gravitas required of professional legal services?',
    researchItems: [
      { icon: 'smartphone', title: 'Mobile-First Behavior', desc: 'Data showed clients often research legal issues during high-pressure moments, necessitating a robust mobile experience.', color: 'text-pink-500' },
      { icon: 'lightbulb', title: 'Immediate Clarity', desc: "Users drop off if practice areas aren't immediately visible. Navigation must provide answers within three seconds of landing.", color: 'text-rose-400' },
      { icon: 'verified_user', title: 'Trust & Credibility', desc: 'Legal expertise must be validated through clear credential displays, accolades, and transparent service descriptions.', color: 'text-indigo-400' },
      { icon: 'groups', title: 'Human Connection', desc: 'Law is personal. Users prioritize seeing the faces of the attorneys they will be working with to build initial rapport.', color: 'text-red-400' }
    ],
    process: 'The ideation phase was about translating raw empathy maps and user pain points into a cohesive digital structure. We moved from sticky-note brainstorming to a refined information hierarchy.',
    journeySteps: [
      { title: 'PRIORITIZING CASE EVALUATION', desc: '' },
      { title: 'STREAMLINED ATTORNEY DIRECTORY', desc: '' },
      { title: 'CONTEXTUAL RESOURCES', desc: '' }
    ],
    visualIdentity: {
      description: 'The FJKO palette utilizes Navy blue and gold which i believe are traditional markers of prestige and reliability and also reimagined with modern digital accessibility standards in mind.',
      colors: [
        { hex: '#0F172A', name: 'Midnight Navy', desc: 'Primary-Authority, Expertise, Stability' },
        { hex: '#B59410', name: 'Heritage Gold', desc: 'Accent-Precision, Prestige, Action' }
      ],
      typography: { name: 'Merriweather & Public Sans', desc: 'Editorial Serif for impact, Neutral Sans for utility' },
      image: '/firm.png'
    },
    showcaseImages: [
      { img: 'About.png', label: 'View 01: About' },
      { img: 'tise.png', label: 'View 02: Expertise' },
      { img: 'ppl.png', label: 'View 03: People' },
      { img: 'Resources.png', label: 'View 04: Resources' },
      { img: 'Career.png', label: 'View 05: Careers' },
      { img: 'abo.png', label: 'View 06: styling about' },
      { img: 'exp.png', label: 'styling expertise' },
      { img: 'res.png', label: 'View 08: styling resources' }
    ],
    reflection: 'Designing for professional services like FJKO requires a deep understanding of emotional intelligence in UX and visual impact.'
  }
};
