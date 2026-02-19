import React from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a]" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #00d9ff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.1
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-[#00d9ff] tracking-wider uppercase border border-[#00d9ff]/30 px-4 py-2 rounded-full">
                Video Editor
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              {data.name}
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              {data.tagline}
            </p>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              {data.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-[#00d9ff] text-black hover:bg-[#00b8d9] transition-all duration-300 text-base px-8 py-6 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {data.ctaText}
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black transition-all duration-300 text-base px-8 py-6"
              >
                {data.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-[#00d9ff]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
