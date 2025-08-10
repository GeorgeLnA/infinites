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
const ContactCTASection = lazy(() =>
  import("./MainPageCTASection").then((m) => ({ default: m.ContactCTASection }))
);
const Benefits = lazy(() => import("./Benefits").then((m) => ({ default: m.default })));

export const Background = () => {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const schedule = (cb: () => void) => {
      const ric: any = (window as any).requestIdleCallback;
      if (typeof ric === "function") {
        ric(cb, { timeout: 800 });
      } else {
        setTimeout(cb, 0);
      }
    };
    // Let the hero render first, then queue loading of the rest
    schedule(() => setShowRest(true));
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      {showRest && (
        <Suspense fallback={null}>
          <ProductCategoriesSection />
          <ProjectsSection />
          <InstallAndUse />
          <Benefits />
          <ContactCTASection />
        </Suspense>
      )}
    </div>
  );
};