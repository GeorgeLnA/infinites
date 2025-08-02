import React from "react";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/20250802_0244_Modular Cabin Retreat_remix_01k1m71yfreh2brftpr16z4z1z.png",
      alt: "Modular Spa Cabin in Forest Setting",
      title: "Forest Retreat"
    },
    {
      id: 2,
      src: "/20250802_0244_Modular Cabin Retreat_remix_01k1m71yfsfwnsax6qx1vwv874.png",
      alt: "Winter Modular Spa Installation",
      title: "Winter Sanctuary"
    },
    {
      id: 3,
      src: "/20250802_0255_Modular Home Retreat_remix_01k1m7nyv6f099pvxfjnn723pc.png",
      alt: "Modular Home Retreat Design",
      title: "Modern Retreat"
    }
  ];

  return (
    <section
      className="w-full py-16 lg:py-32 bg-white"
      role="region"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 
            id="gallery-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0b1c26] leading-tight mb-6"
          >
            Experience Our Designs
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Discover luxury modular spa systems designed for any environment, from serene forest settings to winter retreats
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {galleryImages.map((image) => (
            <div key={image.id} className="group cursor-pointer">
              <div className="relative w-full h-80 lg:h-96 bg-gray-200 overflow-hidden shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-medium text-lg lg:text-xl">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/about-us"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#0b1c26] transition-all duration-300 ease-out border-2 border-[#0b1c26] rounded-none shadow-lg hover:scale-105 active:scale-95 bg-transparent hover:bg-[#0b1c26] hover:text-white"
            aria-label="View All Projects"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#0b1c26] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-bold text-lg tracking-wider">View All Projects</span>
            <svg className="relative w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 