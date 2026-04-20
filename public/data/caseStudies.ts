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
  'G&C-perfume': {
    id: 'G&C-perfume',
    layout: 'deck',
    title: 'Front-End Development for G&C Perfume Store',
    subtitle: 'A personal e-commerce project focused on building a clean, responsive, and visually engaging shopping experience.',
    overview: 'This project was independently designed and developed as a personal front-end e-commerce concept for GNC Perfumes. I handled the entire process from initial layout planning to final implementation. The goal was to create a visually appealing and functional online store experience, with a strong focus on clean structure, responsiveness, and smooth user interaction.',
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
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80'
    },
    showcaseImages: [],
    reflection: 'This project highlights my skills in layout structuring, responsiveness, and independent development.',
    deckData: {
      githubLink: 'https://github.com',
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
  
};
