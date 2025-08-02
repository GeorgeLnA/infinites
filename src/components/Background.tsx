import React from "react";
import Hero from "./Hero";
// import { AboutUsSection } from "./AboutUsSection";
import { ProductCategoriesSection } from "./ConsultingSection";
import { ContactSection } from "./ContactSection";
import { InstallAndUse } from "./InstallAndUse";
import { ProjectsSection } from "./ProjectsSection";
import { ContactCTASection } from "./MainPageCTASection";
import Benefits from "./Benefits";
import { PriorityAccessSection } from "./PriorityAccessSection";

export const Background = () => {
  return (
            <div className="relative w-full overflow-x-hidden">
          <Hero />
          {/* Spacer for less space after hero */}
          <div className="w-full h-0 lg:h-8 bg-white"></div>
          <ContactSection />
                  {/* Spacer under second section */}
                  <div className="w-full h-4 bg-white"></div>
                        <InstallAndUse />
                  {/* Spacer under third section */}
                  <div className="w-full h-4 bg-white"></div>
                  <ProductCategoriesSection />
                        <Benefits />
                  <PriorityAccessSection />
                  {/* Spacer under Priority Access */}
                  <div className="w-full h-16 bg-white"></div>
                  <ProjectsSection />
      <ContactCTASection />
    </div>
  );
}; 