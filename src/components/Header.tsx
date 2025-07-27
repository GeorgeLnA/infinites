import React, { useEffect, useState } from 'react';
import { Home, Menu } from 'lucide-react';

const Header = () => {
  const [isHero, setIsHero] = useState(true);
  const [isMainPage, setIsMainPage] = useState(false);

  useEffect(() => {
    // Check if we're on the main page
    setIsMainPage(window.location.pathname === '/');
    
    const handleScroll = () => {
      if (window.location.pathname === '/') {
        // Main page logic - check hero section
        const hero = document.getElementById('hero');
        if (hero) {
          const rect = hero.getBoundingClientRect();
          setIsHero(rect.bottom > 80);
        }
      } else {
        // Other pages - always show navigation
        setIsHero(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for route changes
  useEffect(() => {
    const handleLocationChange = () => {
      const isMain = window.location.pathname === '/';
      setIsMainPage(isMain);
      if (!isMain) {
        setIsHero(false);
      }
    };
    
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHero && isMainPage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <div className="w-full">
        <div className={`px-6 flex items-center justify-between transition-all duration-300 ${isHero && isMainPage ? 'py-0.5' : 'py-1'}`}>
          {/* Logo */}
          <div className="flex items-center space-x-2 pr-8">
            <div className="w-36 h-16 bg-transparent rounded flex items-center justify-center p-0">
              <img 
                src={isHero && isMainPage ? "/logo.png" : "/logo2.png"}
                alt="Infinite Spa Logo" 
                className="w-full h-full object-contain" 
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
          {/* Centered Navigation */}
          <nav className="flex-1 flex justify-center items-center">
                               <div className={`flex items-center space-x-8 transition-opacity duration-500 ${isHero && isMainPage ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'}`}>
                     <a href="/" className="font-medium text-[#11388a] hover:text-[#0A2239] transition-colors">Home</a>
                     <a href="/our-story" className="font-medium text-[#11388a] hover:text-[#0A2239] transition-colors">Our Story</a>
                     <a href="/about" className="font-medium text-[#11388a] hover:text-[#0A2239] transition-colors">About</a>
                     <a href="/about-us" className="font-medium text-[#11388a] hover:text-[#0A2239] transition-colors">About Us</a>
                     <a href="/contact" className="font-medium text-[#11388a] hover:text-[#0A2239] transition-colors">Contact Us</a>
                   </div>
          </nav>
          {/* QUOTE Button */}
          <div className={`flex items-center transition-opacity duration-500 ${isHero && isMainPage ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'}`}>
            <a href="/contact" className={`ml-6 px-6 py-2  font-bold transition-colors ${isHero && isMainPage ? 'bg-white/80 text-blue-dark hover:bg-white' : 'bg-transparent text-[#11388a] hover:text-[#0A2239] border border-[#11388a] hover:bg-[#11388a] hover:text-white'}`}>QUOTE</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;