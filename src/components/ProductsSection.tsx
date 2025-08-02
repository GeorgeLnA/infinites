import React, { useState } from "react";

export const ServicesSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    { name: "Consulting", fontSize: "text-4xl", width: "w-48" },
    { name: "Planning", fontSize: "text-4xl", width: "w-40" },
    { name: "Room concepts", fontSize: "text-4xl", width: "w-72" },
    { name: "Laying service", fontSize: "text-4xl", width: "w-64" },
    { name: "Interior plaster", fontSize: "text-4xl", width: "w-64" },
    { name: "Screed work", fontSize: "text-4xl", width: "w-56" },
    { name: "Facades", fontSize: "text-4xl", width: "w-40" },
  ];

  const images = [
    "/6_Photo%20-%201%20(2).jpg",
    "/6_Photo%20-%202%20(2).jpg",
    "/6_Photo%20-%203%20(2).jpg",
    "/6_Photo%20-%204%20(1).jpg",
    "/6_Photo%20-%201%20(2).jpg",
    "/6_Photo%20-%202%20(2).jpg",
    "/6_Photo%20-%203%20(2).jpg",
  ];

  const handleServiceHover = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="w-full py-32" aria-labelledby="services-heading">
      <div className="pr-16 lg:pr-24 mb-8 ml-8 lg:ml-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <header className="mb-8 lg:mb-0">
            <h2
              id="services-heading"
              className="text-4xl font-normal text-[#0d0c09] leading-tight text-center"
            >
              Services
            </h2>
          </header>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <p className="text-[#0d0c09] text-lg font-medium leading-relaxed mb-6 lg:mb-0 max-w-xs text-center">
              Our expertise
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-8 lg:ml-16">
          {/* Image Section */}
          <div className="relative w-full h-[550px] lg:h-[750px] bg-gray-200 overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`Service ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

          </div>

          {/* Services List */}
          <div className="border-b border-[#0d0c0924] px-16 lg:px-24">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="w-full h-24 lg:h-28 border-t border-[#0d0c0924] cursor-pointer hover:bg-[#f8f8f8] transition-colors duration-200 flex items-center"
                onMouseEnter={() => handleServiceHover(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${service.name} service details`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleServiceHover(index);
                  }
                }}
              >
                <div className={`${service.width} h-12 ${service.fontSize} font-normal text-[#0d0c09] leading-tight whitespace-nowrap`}>
                  {service.name}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}; 