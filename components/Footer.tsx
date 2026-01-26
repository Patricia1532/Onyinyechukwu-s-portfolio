
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            
            <span className="text-lg font-bold text-neutral-text">Patricia Eziashi</span>
          </div>

          <p className="text-sm text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Patricia Eziashi. All rights reserved. Built with ❤️ and React.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-background text-gray-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-background text-gray-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-background text-gray-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">person</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
