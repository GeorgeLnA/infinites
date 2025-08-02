import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen overflow-hidden bg-transparent pt-16 lg:pt-24"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-white tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] transition-transform duration-300 ease-out mb-4 sm:mb-6 lg:mb-8 leading-tight" 
              style={{fontFamily: 'Orbitron, sans-serif', fontWeight: 100}}
            >
              INFINITESPA
            </h1>
            
            {/* Stylish Sharp CTA Button */}
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <button 
                onClick={() => {
                  const secondSection = document.querySelector('section:nth-of-type(2)');
                  if (secondSection) {
                    secondSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none shadow-2xl hover:scale-105 hover:shadow-white hover:shadow-2xl active:scale-95"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative font-bold text-sm sm:text-base lg:text-lg tracking-wider">EXPLORE NOW</span>
                <svg className="relative w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;