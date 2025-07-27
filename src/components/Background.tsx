import React from "react";
import Hero from "./Hero";
// import { AboutUsSection } from "./AboutUsSection";
import { ProductCategoriesSection } from "./ConsultingSection";
import { ContactSection } from "./ContactSection";
import { InstallAndUse } from "./InstallAndUse";
import { ProjectsSection } from "./ProjectsSection";
import { ContactCTASection } from "./MainPageCTASection";

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
      <InstallAndUse />
      <ProjectsSection />
      <ContactCTASection />
    </div>
  );
}; 