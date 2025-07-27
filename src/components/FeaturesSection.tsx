import React from "react";

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <p 
            className="text-lg font-medium text-[#11388a] leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            We offer a comprehensive wellness service that completely
            fulfills your relaxation needs and wellness wishes from
            consultation to implementation.
          </p>

          <p 
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#11388a] leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            Since our foundation, we have specialized in offering
            our customers first-class spa products and services that
            are both aesthetically pleasing and functionally superior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 