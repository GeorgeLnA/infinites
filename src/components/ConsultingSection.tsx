import React from "react";

export const ProductCategoriesSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / productCategories.length;
      const scrollPosition = itemWidth * index;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
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
      id: 1,
      title: "Floor tiles",
      image: "/6_Photo%20-%202%20(2).jpg",
      titleParts: ["Floor", "tiles"],
    },
    {
      id: 2,
      title: "XXL tiles",
      image: "/6_Photo%20-%201%20(2).jpg",
      titleParts: ["XXL", "tiles"],
    },
    {
      id: 3,
      title: "Bathroom tiles",
      image: "/6_Photo%20-%203%20(2).jpg",
      titleParts: ["Bathroom", "tiles"],
    },
    {
      id: 4,
      title: "Kitchen tiles",
      image: "/6_Photo%20-%204%20(1).jpg",
      titleParts: ["Kitchen", "tiles"],
    },
    {
      id: 5,
      title: "Outdoor tiles",
      image: "/6_Photo%20-%201%20(2).jpg",
      titleParts: ["Outdoor", "tiles"],
    },
    {
      id: 6,
      title: "Clinker brick slips",
      image: "/6_Photo%20-%203%20(2).jpg",
      titleParts: ["Clinker", "brick", "slips"],
    },
  ];

  return (
    <section
      className="w-full py-32"
      role="region"
      aria-labelledby="product-categories-heading"
    >
      <div className="pr-16 lg:pr-24 mb-8 ml-8 lg:ml-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <header className="mb-8 lg:mb-0">
            <h2
              id="product-categories-heading"
              className="text-4xl font-normal text-[#0d0c09] leading-tight text-center"
            >
              Product Categories
            </h2>
          </header>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <p className="text-[#0d0c09] text-lg font-medium leading-relaxed mb-6 lg:mb-0 max-w-xs text-center">
              Discover our range
            </p>

            <nav
              className="flex gap-4"
              aria-label="Product navigation"
            >
              <button
                className={`w-8 h-8 focus:outline-none focus:ring-2 focus:ring-[#0d0c09] focus:ring-offset-2 transition-opacity ${
                  currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-90'
                }`}
                aria-label="Previous products"
                type="button"
                onClick={scrollPrev}
                disabled={currentIndex === 0}
              >
                <div className="h-8 flex items-center justify-center">
                  <svg className="w-4 h-4 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </button>

              <button
                className={`w-8 h-8 focus:outline-none focus:ring-2 focus:ring-[#0d0c09] focus:ring-offset-2 transition-opacity ${
                  currentIndex === productCategories.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-90'
                }`}
                aria-label="Next products"
                type="button"
                onClick={scrollNext}
                disabled={currentIndex === productCategories.length - 1}
              >
                <div className="h-8 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </button>
            </nav>
          </div>
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
          className="flex gap-1 lg:gap-2 ml-8 lg:ml-16 pb-4"
          role="list"
          aria-label="Product categories"
          style={{ minWidth: 'max-content' }}
        >
          {productCategories.map((category, index) => (
            <article
              key={category.id}
              className="w-full lg:w-[400px] flex-shrink-0"
              role="listitem"
            >
              <div className="relative w-full h-[450px] lg:h-[650px] bg-gray-200 overflow-hidden group cursor-pointer">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {category.title}
                </div>
              </div>


            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 