import Hero from "./Hero";
// import { AboutUsSection } from "./AboutUsSection";
import { ProductCategoriesSection } from "./ConsultingSection";
import { InstallAndUse } from "./InstallAndUse";
import { ProjectsSection } from "./ProjectsSection";
import { ContactCTASection } from "./MainPageCTASection";
import Benefits from "./Benefits";

export const Background = () => {
  return (
            <div className="relative w-full overflow-x-hidden">
          <Hero />
          <ProductCategoriesSection />
          <ProjectsSection />
          <InstallAndUse />
          <Benefits />
      <ContactCTASection />
    </div>
  );
}; 