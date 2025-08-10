import React from 'react';
import { MapPin, Building, Users, Award } from 'lucide-react';
import Footer from '../components/Footer';

const OurStory = () => {
  const developers = [
    {
      name: "Misha Krymov",
      role: "Product",
      image: "/1516866626270.jpg",
      experience: "3x Founder, Award-winning architect, founder of a micro-hotel brand",
      bestBuilds: [
        "Sleepbox micro-hotel installations",
        "Award-winning architectural projects", 
        "Innovative modular hospitality solutions"
      ],
      bestCompanies: [
        "MIT",
        "Sleepbox",
        "Various hospitality brands"
      ]
    },
    {
      name: "Matt Boney",
      role: "CEO", 
      image: "/1736995044237.jpg",
      experience: "2X Founder, $3.5M in Daypass Sales, 12 years in hospitality",
      bestBuilds: [
        "Daypass platform success",
        "Hospitality technology solutions",
        "Revenue generation systems"
      ],
      bestCompanies: [
        "Brown University",
        "Daycation",
        "Hospitality tech ventures"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="pt-16">


        {/* How It All Happened Section */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-[#0b1c26] mb-6">The Vision</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  It started with a simple observation: luxury wellness experiences were confined to fixed locations, 
                  limiting access and flexibility. In 2020, two engineers with backgrounds in hospitality technology 
                  and smart automation saw an opportunity to revolutionize the industry.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  The idea was ambitious yet simple - create modular, transportable spa solutions that could deliver 
                  5-star wellness experiences anywhere, without compromising on luxury or functionality.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/6_Photo - 3 (2).jpg" 
                  alt="Infinite Spa Vision" 
                  className="w-full h-96 object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative lg:order-1">
                <img 
                  src="/6_Photo - 2 (2).jpg" 
                  alt="Development Process" 
                  className="w-full h-96 object-cover shadow-lg"
                />
              </div>
              <div className="lg:order-2">
                <h3 className="text-xl lg:text-2xl font-medium text-[#0b1c26] mb-6">The Development</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Three years of intensive research and development followed. Working with luxury hotels, 
                  private clients, and wellness experts, we refined every detail - from advanced water 
                  purification systems to AI-powered climate control.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Our breakthrough came with the development of neural water control technology and 
                  predictive maintenance systems, allowing us to deliver unprecedented reliability 
                  and user experience in a mobile format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Team Section */}
        <section 
          className="w-full py-16 lg:py-32"
          style={{ backgroundColor: '#0b1c26' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight mb-6">
                The Team
              </h2>
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Meet the visionaries behind Infinite Spa
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {developers.map((developer, index) => (
                <div key={index} className="bg-white p-8 shadow-lg">
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-32 h-32 bg-gray-200 overflow-hidden mb-6">
                      <img
                        src={developer.image}
                        alt={developer.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center top' }}
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-[#0b1c26] mb-2">{developer.name}</h3>
                    <p className="text-gray-600 text-lg mb-4">{developer.role}</p>
                    <p className="text-[#0b1c26] font-medium">{developer.experience}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-[#0b1c26] mb-3 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Best Builds
                      </h4>
                      <ul className="space-y-2">
                        {developer.bestBuilds.map((build, idx) => (
                          <li key={idx} className="text-gray-600 pl-4 border-l-2 border-[#0b1c26]">
                            {build}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-[#0b1c26] mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Best Experience
                      </h4>
                      <ul className="space-y-2">
                        {developer.bestCompanies.map((company, idx) => (
                          <li key={idx} className="text-gray-600 pl-4 border-l-2 border-[#0b1c26]">
                            {company}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;