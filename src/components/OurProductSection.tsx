import React from "react";

export const OurProductSection = () => {
  const product = {
    id: 1,
    image: "/20250802_0244_Modular Cabin Retreat_remix_01k1m71yfreh2brftpr16z4z1z.png",
    title: "Infinite Spa System",
    description: "Our flagship modular spa solution combines luxury wellness with innovative design. Engineered for easy installation and maintenance, this premium system adapts to any space while delivering an uncompromising spa experience."
  };

  return (
    <section
      className="w-full py-16 lg:py-32"
      style={{ backgroundColor: '#0b1c26' }}
      role="region"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2
            id="products-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight mb-6"
          >
            Our Product Spa
          </h2>
          <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Introducing our flagship spa solution designed to bring luxury wellness to any space
          </p>
        </header>

        {/* Single Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="group cursor-pointer order-2 lg:order-1">
            <div className="relative w-full h-80 lg:h-96 bg-gray-200 overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h3 className="text-2xl lg:text-3xl font-medium text-white mb-6 leading-tight">
              {product.title}
            </h3>
            <p className="text-white/80 leading-relaxed text-lg lg:text-xl mb-8" style={{fontFamily: 'Montserrat, sans-serif'}}>
              {product.description}
            </p>
            
            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start text-white/70">
                <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Easy Installation & Setup</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-white/70">
                <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium Materials & Design</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-white/70">
                <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Modular & Adaptable</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/about-us"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none shadow-lg hover:scale-105 active:scale-95 bg-transparent hover:bg-white hover:text-[#0b1c26]"
            aria-label="Learn more about our technology"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-medium text-base sm:text-lg tracking-wider">Explore Technology</span>
            <svg className="relative w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};