import React from "react";

export const NoemisBanner = () => {
  return (
    <section
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: '#0a1f4a' }}
      role="region"
      aria-label="Noemis Ventures backing"
    >
      <div className="relative z-10 px-16 lg:px-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg lg:text-xl font-light leading-relaxed mb-2">
            backed by
          </p>
          <a 
            href="https://www.noemisventures.com/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-white text-2xl lg:text-3xl font-medium hover:text-gray-200 transition-colors duration-200 underline decoration-white/30 hover:decoration-white/60"
          >
            Noemis Ventures
          </a>
        </div>
      </div>
    </section>
  );
}; 