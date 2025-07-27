import React from 'react';
import { ArrowRight } from 'lucide-react';

const Benefits = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-medium text-gray-800 mb-12">
          Discover the benefits of an Infinite Spa
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card - Climate Friendly */}
          <div 
            onClick={() => scrollToSection('turnkey-finish')}
            className="relative  overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
          >
            <img 
              src="/6_Photo - 1 (2).jpg" 
              alt="Spa unit exterior"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-medium mb-2">
                With Infinite Spa units it's easy:
              </h3>
              <p className="text-white/90 mb-4">
                build wellness experiences for our guests' wellbeing.
              </p>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Right Card - Smart Living */}
          <div 
            onClick={() => scrollToSection('contact')}
            className="relative  overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
          >
            <img 
              src="/6_Photo - 2 (2).jpg" 
              alt="Smart spa interior"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-medium mb-2">
                Smart wellness - with intelligent technology from Infinite Spa
              </h3>
              <p className="text-white/90 mb-4">
                Make your Infinite Spa unit a smart wellness center
              </p>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;