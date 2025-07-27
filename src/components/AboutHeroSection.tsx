import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="w-full h-[700px] relative overflow-hidden">
      <div className="w-full h-full bg-[url(/about-01.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">Infinite Wellness</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto">
              Discover our journey in creating transformative spa experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection; 