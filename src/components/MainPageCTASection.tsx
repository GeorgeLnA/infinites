import React from "react";

export const ContactCTASection = () => {
  return (
    <section
      className="w-full h-screen relative overflow-hidden"
      style={{ backgroundColor: '#0a1f4a' }}
      role="region"
      aria-label="Catalogue section"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0" style={{ backgroundColor: '#0a1f4a' }}>
          {/* Removed the blue overlay */}
        </div>

        <div className="relative z-10 px-16 lg:px-24 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <h2 className="text-white text-4xl lg:text-5xl font-thin leading-tight mb-4">
                Free catalogue
              </h2>
              <h3 className="text-white text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                Order today!
              </h3>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-white text-2xl lg:text-3xl font-normal leading-relaxed">
                  All spa designs in one place
                </p>
                <p className="text-white text-xl lg:text-2xl font-light leading-relaxed">
                  Inspiring wellness designs
                </p>
              </div>

              <button
                className="border border-white px-8 py-4 text-white font-medium bg-transparent hover:bg-white hover:text-[#0a1f4a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center gap-3 text-lg "
                aria-label="Order catalogue"
                type="button"
              >
                <span>Order catalogue</span>
                <div className="w-7 h-7 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 -rotate-45 text-white group-hover:text-[#0a1f4a] transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 