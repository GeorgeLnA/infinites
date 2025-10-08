import React from 'react';
import { ChevronRight } from 'lucide-react';

const HouseRanges = () => {
  const tabs = [
    'Delivered pre-assembled, set on-site in under 1 day',
    'Anchored via built-in trailer mounts + screw-in ground anchors',
    'ADA-compliant pathway not required due to trailer-based classification',
    'Default access control: weather-rated keypad lock',
    'Supports smart locks, NFC, PIN, or cloud access upgrades'
  ];
  const [activeTab, setActiveTab] = React.useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="turnkey-finish" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-medium text-gray-800 mb-12">Install and Use</h2>
        <div className="relative  overflow-hidden min-h-[600px]">
          {/* Fullscreen Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/The_ground_is_202507161756.mp4"
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
            preload="metadata"
            poster="/6_Photo - 4 (1).jpg"
          />
          {/* Tabs at the top */}
          <div className="absolute top-6 left-6 flex gap-2 z-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2  text-base font-bold transition-colors uppercase tracking-wide shadow-md ${
                  activeTab === index
                    ? 'bg-white text-blue-dark'
                    : 'bg-black/40 text-white hover:bg-black/60'
                }`}
              >
                {`Step ${index + 1}`}
              </button>
            ))}
          </div>
          {/* Pop-out Description Card */}
          <div className="absolute bottom-6 left-6 bg-blue-dark/95  p-8 max-w-md z-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">{`Step ${activeTab + 1}`}</h3>
            <p className="text-white text-base leading-relaxed">{tabs[activeTab]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseRanges;