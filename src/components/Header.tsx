import React, { useEffect, useState } from 'react';
import { Home, Menu } from 'lucide-react';

const Header = () => {
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsHero(rect.bottom > 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHero ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <div className="w-full">
        <div className={`px-6 flex items-center justify-between transition-all duration-300 ${isHero ? 'py-0.5' : 'py-1'}`}>
          {/* Logo */}
          <div className="flex items-center space-x-2 pr-8">
            <div className="w-36 h-16 bg-transparent rounded flex items-center justify-center p-0">
              <img 
                src="/logo.png" 
                alt="Infinite Spa Logo" 
                className="w-full h-full object-contain" 
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
          {/* Centered Navigation */}
          <nav className="flex-1 flex justify-center items-center">
            <div className="flex items-center space-x-8 text-blue-dark">
              <a href="/" className="font-medium hover:text-sky-600 transition-colors">Home</a>
              <a href="/our-story" className="font-medium hover:text-sky-600 transition-colors">Our Story</a>
              <a href="/about" className="font-medium hover:text-sky-600 transition-colors">About</a>
              <a href="/contact" className="font-medium hover:text-sky-600 transition-colors">Contact Us</a>
              <a href="/test" className="font-medium hover:text-sky-600 transition-colors">Test</a>
            </div>
          </nav>
          {/* QUOTE Button */}
          <div className="flex items-center">
            <a href="/contact" className={`ml-6 px-6 py-2 rounded-full font-bold transition-colors ${isHero ? 'bg-white/80 text-blue-dark hover:bg-white' : 'bg-gray-100 text-blue-dark hover:bg-gray-200'}`}>QUOTE</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;