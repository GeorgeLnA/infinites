import React from 'react';

export const InstallAndUse = () => {
  const steps = [
    'Delivered pre-assembled, set on-site in under 1 day',
    'Anchored via built-in trailer mounts + screw-in ground anchors',
    'ADA-compliant pathway not required due to trailer-based classification',
    'Default access control: weather-rated keypad lock',
    'Supports smart locks, NFC, PIN, or cloud access upgrades'
  ];
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);

  return (
    <section className="w-full py-32" aria-labelledby="install-use-heading">
      <div className="pr-4 lg:pr-8 mb-8 ml-4 lg:ml-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <header className="mb-8 lg:mb-0">
            <h2
              id="install-use-heading"
              className="text-4xl font-normal text-[#0d0c09] leading-tight text-center"
            >
              Install and Use
            </h2>
          </header>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <p className="text-[#0d0c09] text-lg font-medium leading-relaxed mb-6 lg:mb-0 max-w-xs text-center">
              Simple setup process
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-4 lg:ml-8">
        {/* Video Section */}
        <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/The_ground_is_202507161756.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/6_Photo - 4 (1).jpg"
          />
        </div>

        {/* Steps List - matches video height */}
        <div className="px-4 lg:px-8 aspect-square flex flex-col">
          {steps.map((step, index) => {
            // Calculate dynamic height based on hover state
            const isHovered = hoveredStep === index;
            
            let heightClass;
            if (hoveredStep === null) {
              // All equal size when no hover - use fixed percentage instead of flex-1
              heightClass = 'h-[20%]';
            } else if (isHovered) {
              // Expanded section takes 28% of space
              heightClass = 'h-[28%]';
            } else {
              // Other sections share remaining 72% (18% each for 4 sections)
              heightClass = 'h-[18%]';
            }

            return (
              <div
                key={index}
                className={`group w-full border-t border-[#0d0c0924] cursor-pointer flex items-center overflow-hidden ${
                  index === steps.length - 1 ? 'border-b border-[#0d0c0924]' : ''
                } ${
                  isHovered 
                    ? 'bg-[#f8f8f8]' 
                    : 'bg-white'
                } ${heightClass}`}
                style={{
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={() => {
                  setHoveredStep(index);
                  setActiveStep(index);
                }}
                onMouseLeave={() => {
                  setHoveredStep(null);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Step ${index + 1}: ${step}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveStep(index);
                    setHoveredStep(index);
                  }
                }}
              >
                <div className="flex items-center gap-6 w-full py-4 pl-2">
                  {/* Clean numbered circle */}
                  <div className={`flex-shrink-0 w-12 h-12  border-2 flex items-center justify-center text-lg font-medium transition-all duration-600 ease-out ${
                    isHovered 
                      ? 'bg-[#0d0c09] text-white border-[#0d0c09] scale-105' 
                      : 'bg-white text-[#0d0c09] border-[#0d0c09]'
                  }`}>
                    {index + 1}
                  </div>
                  
                  {/* Step text */}
                  <div className={`text-lg font-normal text-[#0d0c09] leading-tight flex-1 transition-all duration-600 ease-out ${
                    isHovered 
                      ? 'text-xl font-medium' 
                      : ''
                  }`}>
                    {step}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 