import React from "react";
import Hero from "./Hero";
import { AboutUsSection } from "./AboutUsSection";
import { ProductCategoriesSection } from "./ConsultingSection";
import { ContactSection } from "./ContactSection";
import { ServicesSection } from "./ProductsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactCTASection } from "./ServicesSection";

export const Background = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      {/* Small empty white section */}
      <div className="w-full h-12 bg-white"></div>
      <div className="relative w-full px-16 lg:px-24">
        <ContactSection />
      </div>

      <ProductCategoriesSection />
      <ServicesSection />
      {/* Thin empty white section */}
      <div className="w-full h-24 bg-white"></div>
      <AboutUsSection />
      {/* Thin empty white section */}
      <div className="w-full h-24 bg-white"></div>
      <ProjectsSection />
      <ContactCTASection />
    </div>
  );
}; 