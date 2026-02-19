import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tight">
              SF<span className="text-[#00d9ff]">.</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Video Editor & Content Creator
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              © {currentYear} Sufiyan FX. Crafted with
              <Heart className="h-4 w-4 text-[#00d9ff] fill-[#00d9ff]" />
              and creativity
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-500 hover:text-[#00d9ff] transition-colors duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
