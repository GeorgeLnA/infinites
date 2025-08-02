import React from 'react';

export const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/20250802_0244_Modular Cabin Retreat_remix_01k1m71yfreh2brftpr16z4z1z.png",
      title: "Winter Forest Retreat",
    },
    {
      id: 2,
      image: "/20250802_0244_Modular Cabin Retreat_remix_01k1m71yfsfwnsax6qx1vwv874.png",
      title: "Alpine Sanctuary",
    },
    {
      id: 3,
      image: "/20250802_0255_Modular Home Retreat_remix_01k1m7nyv6f099pvxfjnn723pc.png",
      title: "Waterfall Wellness",
    },
    {
      id: 4,
      image: "/20250802_0259_Modular Oasis Retreat_remix_01k1m7xyvjeq28mttcxg3sp5mf.png",
      title: "Tropical Paradise",
    },
    {
      id: 5,
      image: "/20250802_0259_Modular Oasis Retreat_remix_01k1m7xyvkfd6sytx38gq7ccqf.png",
      title: "Mountain Haven",
    },
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
            Gallery
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Discover our modular spa installations in breathtaking locations around the world
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((item, index) => (
            <article
              key={item.id}
              className={`group cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              } ${index === 1 ? 'lg:row-span-2' : ''}`}
            >
              <div className={`relative w-full overflow-hidden bg-gray-200 ${
                index === 0 ? 'h-64 lg:h-80' : 
                index === 1 ? 'h-64 lg:h-[400px]' : 
                'h-64 lg:h-64'
              }`}>
                <img
                  src={item.image}
                  alt={`${item.title} - Infinite Spa installation`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
                
                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="font-medium text-white text-lg lg:text-xl leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/about-us"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#0b1c26] transition-all duration-300 ease-out border-2 border-[#0b1c26] rounded-none hover:scale-105 active:scale-95 bg-transparent hover:bg-[#0b1c26] hover:text-white"
            aria-label="View Technology"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#0b1c26] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-bold text-lg tracking-wider">View Technology</span>
            <svg className="relative w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};