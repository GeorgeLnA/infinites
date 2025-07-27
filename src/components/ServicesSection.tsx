import React from "react";

const ServicesSection = () => {
  const serviceContent = {
    mainDescription: {
      lines: [
        "Our aim is to offer a comprehensive spa service for",
        "every budget that completely fulfills your wellness needs and",
        "desires from planning to ultimate relaxation",
      ],
    },
    showroom: {
      title: "Infinite Spa - our wellness center in Miami.",
      description: [
        "Visit our exclusive wellness center in Miami, which serves as a source of inspiration and a point of contact for",
        "anyone seeking transformative relaxation. In a luxurious setting, we present a wide selection of spa treatments that offer the",
        "perfect choice for every wellness concept and therapeutic design."
      ],
      additionalInfo: [
        "Our spa offers a large selection of treatments and wellness inspirations. We advise our customers with pleasure and",
        "passion in order to find the perfect wellness solutions for each individual in a personalized manner. With our versatile",
        "approaches, which we are inspired by every year at various wellness retreats and spa visits, we give every treatment a personal",
        "touch."
      ]
    },
  };

  return (
    <section
      className="w-full py-16 px-6 lg:px-16"
      role="region"
      aria-labelledby="services-heading"
    >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p 
                className="text-lg font-medium text-[#11388a] leading-relaxed"
                style={{ fontFamily: 'Inter' }}
              >
                {serviceContent.mainDescription.lines[0]} {serviceContent.mainDescription.lines[1]} {serviceContent.mainDescription.lines[2]}
              </p>
            </div>

            <div className="space-y-6">
              <h2
                id="services-heading"
                className="text-xl font-medium text-[#11388a]"
                style={{ fontFamily: 'Inter' }}
              >
                {serviceContent.showroom.title}
              </h2>

              <p 
                className="font-normal text-[#11388a]/60 text-lg leading-relaxed"
                style={{ fontFamily: 'Inter' }}
              >
                {serviceContent.showroom.description[0]} {serviceContent.showroom.description[1]} {serviceContent.showroom.description[2]}
              </p>

              <p 
                className="font-normal text-[#11388a]/60 text-lg leading-relaxed"
                style={{ fontFamily: 'Inter' }}
              >
                {serviceContent.showroom.additionalInfo[0]} {serviceContent.showroom.additionalInfo[1]} {serviceContent.showroom.additionalInfo[2]} {serviceContent.showroom.additionalInfo[3]}
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ServicesSection; 