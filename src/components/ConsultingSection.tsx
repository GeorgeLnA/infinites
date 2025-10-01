import React from "react";

export const ProductCategoriesSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Use the actual item's offset rather than assuming equal widths
    const items = container.querySelectorAll<HTMLElement>('[data-gallery-item="true"]');
    const target = items[index];
    if (target) {
      container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    const nextIndex = Math.min(currentIndex + 1, productCategories.length - 1);
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const productCategories = [
    {
      id: 0,
      title: "INFINITESPA Experience",
      video: "/hero.mp4",
      titleParts: ["INFINITESPA", "Experience"],
    },
    {
      id: 1,
      title: "SLEEPBOX",
      image: "/airender1.png",
      titleParts: ["SLEEPBOX"],
    },
    {
      id: 7,
      title: "Mountain Haven",
      image: "/6_Photo - 1 (2).jpg",
      titleParts: ["Mountain", "Haven"],
    },
    {
      id: 6,
      title: "Tropical Paradise",
      image: "/airender4.png",
      titleParts: ["Tropical", "Paradise"],
    },
    {
      id: 3,
      title: "Alpine Sanctuary",
      image: "/airender2.png",
      titleParts: ["Alpine", "Sanctuary"],
    },
    {
      id: 5,
      title: "Waterfall Wellness",
      image: "/airender3.png",
      titleParts: ["Waterfall", "Wellness"],
    },
    {
      id: 4,
      title: "Modern Spa Retreat",
      image: "/airender6.png",
      titleParts: ["Modern", "Spa", "Retreat"],
    },
    {
      id: 8,
      title: "Luxury Wellness Oasis",
      image: "/6_Photo - 4 (1).jpg",
      titleParts: ["Luxury", "Wellness", "Oasis"],
    },
  ];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: '#0b1c26' }}
      role="region"
      aria-labelledby="product-categories-heading"
    >
      <div className="ml-4 sm:ml-6 lg:ml-16 pr-4 sm:pr-6 lg:pr-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-12">
          <header className="text-left max-w-3xl">
            <h2
              id="product-categories-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight"
            >
              Infinite Spa — Luxury Wellness Ready
              Tomorrow, Not Next Year.
            </h2>
            <p className="mt-3 text-white/80 text-base sm:text-lg">
              Join Real Estate and Hospitality's #1 Trend With Infinite Spa. Modular and Mobile Wellness,
              Suitable For Any Environment.
            </p>
          </header>

          <nav
            className="flex gap-4 justify-start lg:justify-end"
            aria-label="Product navigation"
          >
            <button
              className={`w-8 h-8 lg:w-12 lg:h-12 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-opacity ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-90'
              }`}
              aria-label="Previous products"
              type="button"
              onClick={scrollPrev}
              disabled={currentIndex === 0}
            >
              <div className="h-8 lg:h-12 flex items-center justify-center">
                <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </button>

            <button
              className={`w-8 h-8 lg:w-12 lg:h-12 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-opacity ${
                currentIndex === productCategories.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-90'
              }`}
              aria-label="Next products"
              type="button"
              onClick={scrollNext}
              disabled={currentIndex === productCategories.length - 1}
            >
              <div className="h-8 lg:h-12 flex items-center justify-center">
                <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </button>
          </nav>
        </div>
      </div>

            <div 
              className="overflow-x-auto overflow-y-hidden scrollbar-hide" 
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
        <div
          className="flex gap-1 lg:gap-2 ml-4 sm:ml-6 lg:ml-16 pb-4"
          role="list"
          aria-label="Product categories"
          style={{ minWidth: 'max-content' }}
        >
          {productCategories.map((category, index) => (
            <article
              key={category.id}
              data-gallery-item="true"
              className={`${index === 0 ? 'lg:w-[760px]' : 'lg:w-[400px]'} w-[260px] sm:w-[300px] flex-shrink-0`}
              role="listitem"
            >
              <div className="relative w-full h-[330px] sm:h-[380px] lg:h-[600px] bg-gray-200 overflow-hidden group cursor-pointer">
                {category.video ? (
                  <video
                    src={category.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={category.image}
                    alt={category.title}
                    className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />

              </div>


            </article>
          ))}
        </div>
      </div>

      {/* CTA below the gallery */}
      <div className="ml-4 sm:ml-6 lg:ml-16 pr-4 sm:pr-6 lg:pr-16 mt-8 lg:mt-10">
        <div className="flex justify-center sm:justify-start">
          <a
            href="https://buy.stripe.com/5kQcN5a6b7FVgWY9PIcwg00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-[#0b1c26] text-base sm:text-lg font-medium transition-colors duration-200 rounded-none"
          >
            Reserve My Infinite Spa
          </a>
        </div>
        <p className="text-xs text-white/80 text-center sm:text-left mt-3">*First Infinite Spas Shipping Fall of 2025.</p>
      </div>
    </section>
  );
}; 