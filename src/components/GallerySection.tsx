import React from "react";

const GallerySection = () => {
  const aboutUsText = [
    { text: "About", fontSize: "43.8px" },
    { text: "us", fontSize: "44px" },
  ];

  const descriptionText = [
    { text: "Infinite", fontSize: "41.8px" },
    { text: "Spa", fontSize: "44px" },
    { text: "offers", fontSize: "44px" },
    { text: "premium", fontSize: "43.1px" },
    { text: "wellness", fontSize: "44px" },
    { text: "solutions", fontSize: "41.6px" },
    { text: "for", fontSize: "42.1px" },
    { text: "your", fontSize: "44px" },
    { text: "ultimate", fontSize: "44px" },
  ];

  const secondLineText = [
    { text: "relaxation", fontSize: "41.6px" },
    { text: "and", fontSize: "44px" },
    { text: "rejuvenation", fontSize: "44px" },
    { text: "experience.", fontSize: "41.1px" },
  ];

  return (
    <section
      className="w-full py-16 px-6 lg:px-16"
      role="banner"
    >
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#11388a] leading-tight">
          About us
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#11388a] leading-relaxed mb-6" style={{ fontFamily: 'Inter' }}>
            Infinite Spa offers premium wellness solutions for your ultimate relaxation and rejuvenation experience.
          </p>
        </div>
        
        <div className="h-[400px] lg:h-[600px]">
          <div
            className="w-full h-full bg-[url(/image.png)] bg-cover bg-center"
            role="img"
            aria-label="Spa gallery showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 