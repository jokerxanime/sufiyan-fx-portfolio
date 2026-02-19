import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedReel from '../components/FeaturedReel';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { portfolioContent } from '../portfolio-content';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero data={{ ...portfolioContent.hero, ...portfolioContent.personal }} />
        <FeaturedReel data={portfolioContent.featuredReel} />
        <Projects projects={portfolioContent.projects} categories={portfolioContent.categories} />
        <Services services={portfolioContent.services} />
        <Testimonials testimonials={portfolioContent.testimonials} />
        <About data={portfolioContent.about} />
        <Contact data={{ ...portfolioContent.contact, email: portfolioContent.personal.email, social: portfolioContent.social }} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
