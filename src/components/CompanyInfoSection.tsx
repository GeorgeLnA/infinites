import React from "react";

const CompanyInfoSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto lg:ml-auto lg:mr-16">
        <h2 
          className="text-xl font-medium text-[#11388a] mb-6"
          style={{ fontFamily: 'Inter' }}
        >
          Infinite Spa - Execution of our wellness services.
        </h2>

        <p 
          className="text-lg font-normal text-[#11388a]/60 leading-relaxed"
          style={{ fontFamily: 'Inter' }}
        >
          Comprehensive wellness services including therapeutic massage, spa treatments, and
          holistic wellness solutions, design and construction of luxury spa facilities,
          swimming pools and relaxation areas.
          Thanks to our expertise and our years of experience in the wellness industry, we are able to
          turn the customer's wellness vision perfectly into reality. We attach great
          importance to the overall wellness experience and important details that make a 
          significant difference to the final relaxation result.
        </p>
      </div>
    </section>
  );
};

export default CompanyInfoSection; 