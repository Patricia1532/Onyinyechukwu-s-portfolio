
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'What kind of designer is Patricia?',
    answer: 'Curious, thoughtful and always looking for a better way to make things work.',
  },
  {
    id: 2,
    question: 'What does Patricia do outside work?',
    answer: 'Probably watching something, enjoying good food, reading way too many books and of course watching Formula 1.',
  },
  {
    id: 3,
    question: 'What can Patricia never say no to?',
    answer: 'A good meal, a cute outfit, or a website with really good animations.',
  },
  {
    id: 4,
    question: 'What is Patricia currently into?',
    answer: 'Currently? Formula 1, finding my next travel destination, and convincing myself I absolutely need another trip.',
  },
  {
    id: 5,
    question: 'What inspires Patricia?',
    answer: 'People, everyday experiences, the places I visit, and the little details that make each experience memorable.',
  },
  {
    id: 6,
    question: 'What is Patricia probably doing when she’s not designing?',
    answer: 'Reading, grabbing brunch or lunch with friends, hanging out, or watching Formula 1.',
  },
];

const FAQ: React.FC = () => {
  // Start with the first FAQ item open, matching the reference image FAQ.jpeg
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="w-full pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Subtle Section Title (Matching FAQ.jpeg) */}
        <div className="mb-8 sm:mb-12">
          <span className="text-sm sm:text-base font-sans font-medium text-[#650000]/60 tracking-tight">
            FAQs about Patricia
          </span>
        </div>

        {/* FAQ Rows Container */}
        <div className="space-y-4 sm:space-y-6">
          {FAQS_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.id} className="flex flex-col">
                
                {/* Question Row - Clickable anywhere */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="group w-full flex items-center justify-between text-left py-2.5 sm:py-3 transition-colors duration-200 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* Question Text */}
                  <span className="text-base sm:text-lg md:text-[1.15rem] font-sans font-normal text-[#255280] group-hover:text-[#18395B] transition-colors leading-relaxed pr-4">
                    {item.question}
                  </span>

                  {/* Plus / Minus or Hand Cursor Toggle Icon (Matching FAQ.jpeg) */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    {isOpen ? (
                      /* Open state icon: subtle Minus / Pointer icon */
                      <motion.div
                        initial={{ scale: 0.8, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#255280]/40 flex items-center justify-center text-[#255280] bg-[#255280]/5"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </motion.div>
                    ) : (
                      /* Closed state icon: subtle Plus circle icon */
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#255280]/30 flex items-center justify-center text-[#255280]/70 group-hover:text-[#255280] group-hover:border-[#255280] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </button>

                {/* Blue Chat Bubble Answer (Exact iMessage Style from FAQ.jpeg) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`answer-${item.id}`}
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pt-1 pb-3"
                    >
                      <div className="flex justify-end sm:pl-16">
                        <div 
                          className="relative max-w-2xl px-5 py-3.5 sm:px-6 sm:py-4 rounded-[1.35rem] rounded-tr-xs bg-[#007AFF] text-white font-sans text-sm sm:text-[15px] leading-relaxed shadow-md select-text"
                          style={{
                            backgroundColor: '#007AFF',
                            backgroundImage: 'linear-gradient(135deg, #0A84FF 0%, #007AFF 100%)',
                          }}
                        >
                          <p>{item.answer}</p>
                          
                          {/* Chat tail decorative notch */}
                          <div className="absolute -top-1.5 right-0 w-3 h-3 bg-[#0A84FF] transform rotate-45 pointer-events-none" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;