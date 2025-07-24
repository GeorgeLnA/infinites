import React, { useEffect, useRef } from "react";

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sectionElement = sectionRef.current;
          const leftColumnElement = leftColumnRef.current;
          
          if (sectionElement && leftColumnElement) {
            const rect = sectionElement.getBoundingClientRect();
            const sectionTop = rect.top;
            
            // Only start moving when section hits the top of the screen (header)
            if (sectionTop <= 0) {
              // Calculate how much the section has scrolled past the top
              const scrolledPastTop = Math.abs(sectionTop);
              const maxDistance = 555; // Adjusted stop point for larger image
              const translateY = Math.min(scrolledPastTop * 1.0, maxDistance); // Cap at maxDistance
              leftColumnElement.style.transform = `translateY(${translateY}px)`;
            } else {
              // Reset position when section hasn't reached the top yet
              leftColumnElement.style.transform = 'translateY(0px)';
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentData = [
    {
      id: 1,
      text: "We believe in providing ubiquitous access to the world's most exceptional wellness amenities, wherever life may find you.",
      className: "text-[#0d0c09] text-5xl lg:text-6xl font-thin leading-tight",
    },
    {
      id: 2,
      text: "Infinite Spa was born from a desire to dissolve the boundaries around luxury wellness, making it available to anyone, anywhere.",
      className: "text-[#0d0c09] text-5xl lg:text-6xl font-thin leading-tight",
    },
    {
      id: 3,
      text: "By opening the door to world-class experiences, we aim to uplift mood, nurture health, and extend the arc of human longevity.",
      className: "text-[#0d0c09] text-5xl lg:text-6xl font-thin leading-tight",
    },
  ];

  const formatTextWithBreaks = (text: string, id: number) => {
    return text;
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
        {/* Left Column - Image only (moves down when section hits header) */}
        <div ref={leftColumnRef} className="lg:col-span-2 space-y-4 flex flex-col items-center will-change-transform">
          {/* Image section */}
          <div className="relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-gray-200 overflow-hidden">
            <img
              src="/6_Photo%20-%201%20(2).jpg"
              alt="Tilesuite showroom and services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Static text */}
        <div className="lg:col-span-3 space-y-8 flex flex-col items-center">
          {contentData.map((content) => (
            <p key={content.id} className={content.className}>
              {formatTextWithBreaks(content.text, content.id)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}; 