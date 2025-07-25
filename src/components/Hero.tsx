import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const textElement = textRef.current;
      
      if (textElement) {
        // Calculate the translation based on scroll position
        // Move text to the left as user scrolls down
        const translateX = Math.min(scrollY * 1.5, 1200); // Max 1200px to the left, increased speed
        textElement.style.transform = `translateX(-${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen overflow-hidden bg-transparent pt-24"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/0723.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-screen flex items-end justify-center pb-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center">
            <h1 
              ref={textRef}
              className="text-9xl lg:text-[12rem] text-white tracking-[0.5em] transition-transform duration-300 ease-out" 
              style={{fontFamily: 'Orbitron, sans-serif', fontWeight: 100}}
            >
              INFINITESPA
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;