
import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (options: IntersectionObserverOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  
  // Use a ref to store options to avoid re-triggering the effect on every render
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (optionsRef.current.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else {
        // Only reset if not triggering once
        if (!optionsRef.current.triggerOnce) {
          setIsIntersecting(false);
        }
      }
    }, optionsRef.current);

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // Empty dependency array as we use refs for dynamic values

  return [elementRef, isIntersecting] as const;
};
