import React, { lazy, Suspense, useEffect, useState } from "react";
import Hero from "./Hero";
// Defer-load all sections after hero for blazing-fast first paint
const ProductCategoriesSection = lazy(() =>
  import("./ConsultingSection").then((m) => ({ default: m.ProductCategoriesSection }))
);
const InstallAndUse = lazy(() =>
  import("./InstallAndUse").then((m) => ({ default: m.InstallAndUse }))
);
const ProjectsSection = lazy(() =>
  import("./ProjectsSection").then((m) => ({ default: m.ProjectsSection }))
);
const WhoIsThisForSection = lazy(() =>
  import("./WhoIsThisForSection").then((m) => ({ default: m.default }))
);
const WhatsIncludedSection = lazy(() =>
  import("./WhatsIncludedSection").then((m) => ({ default: m.default }))
);
const WhyUsSection = lazy(() =>
  import("./WhyUsSection").then((m) => ({ default: m.default }))
);
const WhyNowSection = lazy(() =>
  import("./WhyNowSection").then((m) => ({ default: m.default }))
);
const HowItWorksSection = lazy(() =>
  import("./HowItWorksSection").then((m) => ({ default: m.default }))
);
const ContactCTASection = lazy(() =>
  import("./MainPageCTASection").then((m) => ({ default: m.ContactCTASection }))
);
const Benefits = lazy(() => import("./Benefits").then((m) => ({ default: m.default })));

export const Background = () => {
  const [showRest, setShowRest] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  useEffect(() => {
    // Load everything immediately after hero renders
    const timer = setTimeout(() => setShowRest(true), 0);
    
    // Load videos after everything else is loaded
    const videoTimer = setTimeout(() => setShowVideos(true), 100);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      {showRest && (
        <Suspense fallback={null}>
          <ProductCategoriesSection />
          <WhoIsThisForSection />
          <ProjectsSection />
          <WhatsIncludedSection />
          {showVideos && <InstallAndUse />}
          <WhyUsSection />
          <WhyNowSection />
          <HowItWorksSection />
          <Benefits />
          <ContactCTASection />
        </Suspense>
      )}
    </div>
  );
};