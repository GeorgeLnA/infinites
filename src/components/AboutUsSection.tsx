import React, { useState, useEffect, useRef } from "react";

export const AboutUsSection = () => {
  const testimonials = [
    {
      leftBgImage: null,
      rightBgImage: '/6_Photo%20-%202%20(2).jpg',
      leftContent: {
        heading: 'Daily Luxury',
        description: '"Infinite Spa has made luxury wellness a daily reality. The convenience and quality are unmatched."',
      },
      rightContent: null,
    },
    {
      leftBgImage: '/6_Photo%20-%203%20(2).jpg',
      rightBgImage: null,
      leftContent: null,
      rightContent: {
        heading: 'Health & Vitality',
        description: '"This spa has become essential for our health routine. The cold plunge and sauna combination is incredible."',
      },
    },
    {
      leftBgImage: null,
      rightBgImage: '/6_Photo%20-%204%20(1).jpg',
      leftContent: {
        heading: 'Accessible Wellness',
        description: '"Finally, premium wellness that\'s accessible. Infinite Spa has transformed how we think about self-care."',
      },
      rightContent: null,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [hasCompletedSlides, setHasCompletedSlides] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const numOfPages = testimonials.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = () => {
    if (currentPage > 1) {
      setCurrentPage(p => p - 1);
      setHasCompletedSlides(false);
    }
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) {
      setCurrentPage(p => p + 1);
    } else if (currentPage === numOfPages) {
      // Mark as completed and unstick
      setHasCompletedSlides(true);
      // Unstick and keep section at top
      setIsSticky(false);
      setTimeout(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const scrollY = window.scrollY + rect.top;
          window.scrollTo({ top: scrollY, behavior: 'instant' });
        }
      }, 0);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (!isSticky || hasCompletedSlides) return;
    if (scrolling.current) return;
    
    scrolling.current = true;
    e.deltaY > 0 ? navigateDown() : navigateUp();
    setTimeout(() => (scrolling.current = false), animTime);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isSticky || hasCompletedSlides) return;
    if (scrolling.current) return;
    
    if (e.key === 'ArrowUp') {
      scrolling.current = true;
      navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    } else if (e.key === 'ArrowDown') {
      scrolling.current = true;
      navigateDown();
      setTimeout(() => (scrolling.current = false), animTime);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Stick when section top reaches the top of viewport
      if (rect.top <= 0 && !hasCompletedSlides) {
        setIsSticky(true);
      } else if (rect.top > 0) {
        // Reset when scrolling back up above the section
        setIsSticky(false);
        setCurrentPage(1);
        setHasCompletedSlides(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, isSticky, numOfPages, hasCompletedSlides]);

  return (
    <section
      ref={sectionRef}
      className={`w-full h-screen bg-gray-100 transition-all duration-500 ${
        isSticky ? 'fixed top-0 left-0 z-40' : 'relative'
      }`}
      role="region"
      aria-labelledby="about-us-heading"
    >
      {/* Animated testimonials */}
      <div className="relative overflow-hidden h-full bg-white">
        {testimonials.map((testimonial, i) => {
          const idx = i + 1;
          const isActiveSlide = currentPage === idx;
          const upOff = 'translateY(-100%)';
          const downOff = 'translateY(100%)';
          const leftTrans = isActiveSlide ? 'translateY(0)' : downOff;
          const rightTrans = isActiveSlide ? 'translateY(0)' : upOff;

          return (
            <div key={idx} className="absolute inset-0">
              {/* Left Half */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms]"
                style={{ transform: leftTrans }}
              >
                {/* Image - takes 100% of the space */}
                <div className="w-full h-full relative">
                  {testimonial.leftBgImage && (
                    <img
                      src={testimonial.leftBgImage}
                      alt="Testimonial"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Overlay text in center - black, original font/size, no bg */}
                  {testimonial.leftContent && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="px-8 py-6 text-center">
                        <h2 className="text-4xl lg:text-5xl font-thin mb-8 text-[#0d0c09] leading-tight">
                          {testimonial.leftContent.heading}
                        </h2>
                        <p className="text-2xl lg:text-3xl font-thin text-[#0d0c09] leading-tight">
                          {testimonial.leftContent.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Half */}
              <div
                className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms]"
                style={{ transform: rightTrans }}
              >
                {/* Image - takes 100% of the space */}
                <div className="w-full h-full relative">
                  {testimonial.rightBgImage && (
                    <img
                      src={testimonial.rightBgImage}
                      alt="Testimonial"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Overlay text in center - black, original font/size, no bg */}
                  {testimonial.rightContent && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="px-8 py-6 text-center">
                        <h2 className="text-4xl lg:text-5xl font-thin mb-8 text-[#0d0c09] leading-tight">
                          {testimonial.rightContent.heading}
                        </h2>
                        <p className="text-2xl lg:text-3xl font-thin text-[#0d0c09] leading-tight">
                          {testimonial.rightContent.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        

      </div>

      {/* Page indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3  transition-colors ${
                currentPage === i + 1 ? 'bg-[#0d0c09]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 