import React from 'react';
import { Heart, Star, Award } from 'lucide-react';
import Footer from '../components/Footer';
import { AboutContactSection } from '../components/AboutContactSection';
import { AboutProjectsSection } from '../components/AboutProjectsSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16">
        {/* Hero Section - adapted from main page design */}
        <section className="w-full h-[200px] flex items-center bg-[#0a1f4a] px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white uppercase tracking-widest text-center lg:text-left">Technology</h1>
          </div>
        </section>

        {/* Technology Intro Section - adapted from ContactSection design */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Layout - Stacked */}
            <div className="lg:hidden">
              {/* Mobile Image */}
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-gray-200 overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-[url(/6_Photo%20-%202%20(2).jpg)] bg-cover bg-center transform transition-transform duration-700 hover:scale-105" />
                </div>
              </div>

              {/* Mobile Text */}
              <div className="space-y-6 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0a1f4a] leading-tight">
                  Advanced Spa Technology
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our cutting-edge spa systems integrate the latest in wellness technology, providing unparalleled relaxation experiences through intelligent automation and precision engineering.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From IoT-enabled temperature control to advanced hydrotherapy systems, our technology ensures every spa session delivers optimal therapeutic benefits while maintaining the highest standards of luxury and comfort.
                </p>
              </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-4xl font-light text-[#0a1f4a] leading-tight">
                  Advanced Spa Technology
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our cutting-edge spa systems integrate the latest in wellness technology, providing unparalleled relaxation experiences through intelligent automation and precision engineering.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From IoT-enabled temperature control to advanced hydrotherapy systems, our technology ensures every spa session delivers optimal therapeutic benefits while maintaining the highest standards of luxury and comfort.
                </p>
              </div>
              
              {/* Right Column - Image */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative w-80 h-80 bg-gray-200 overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-[url(/6_Photo%20-%202%20(2).jpg)] bg-cover bg-center transform transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Features Section - adapted from main page spacing */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0a1f4a] leading-tight mb-6">
                Technology Features
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive service completely fulfills your needs and wishes from planning to execution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                  Since our foundation, we have specialized in offering our customers first-class products and services that are both aesthetically pleasing and functional.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our cutting-edge technology integrates seamlessly with luxury design, creating spa experiences that exceed expectations.
                </p>
              </div>
              <div className="h-[400px] bg-[url(/6_Photo%20-%202%20(2).jpg)] bg-cover bg-center shadow-lg" />
            </div>
          </div>
        </section>

        {/* Technology Gallery Section - adapted from main page design */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-[300px] lg:h-[400px] bg-[url(/6_Photo%20-%203%20(2).jpg)] bg-cover bg-center shadow-lg" />
              <div className="h-[300px] lg:h-[400px] bg-[url(/6_Photo%20-%204%20(1).jpg)] bg-cover bg-center shadow-lg" />
            </div>
          </div>
        </section>

        {/* Technology Services Section - adapted from main page design */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-medium text-gray-900">
                  Infinite Spa - our wellness center in Miami.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Visit our exclusive wellness center in Miami, which serves as a source of inspiration and a point of contact for anyone seeking transformative relaxation. In a luxurious setting, we present a wide selection of spa treatments that offer the perfect choice for every wellness concept and therapeutic design.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our spa offers a large selection of treatments and wellness inspirations. We advise our customers with pleasure and passion in order to find the perfect wellness solutions for each individual in a personalized manner.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our aim is to offer a comprehensive service for every budget that completely fulfills your needs and wishes from planning to execution.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With our versatile approaches, which we are inspired by every year at various wellness retreats and spa visits, we give every treatment a personal touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Location Section - adapted from main page design */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-[300px] lg:h-[400px] bg-[url(/1736995044237.jpg)] bg-cover bg-center shadow-lg" />
              <div className="h-[300px] lg:h-[400px] bg-[url(/1516866626270.jpg)] bg-cover bg-center shadow-lg" />
            </div>
          </div>
        </section>

        {/* Technology Execution Section - adapted from main page design */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6 text-center lg:text-left">
              Infinite Spa - Execution of our wellness services.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              Comprehensive wellness services including therapeutic massage, spa treatments, and holistic wellness solutions, design and construction of luxury spa facilities, swimming pools and relaxation areas. Thanks to our expertise and our years of experience in the wellness industry, we are able to turn the customer's wellness vision perfectly into reality. We attach great importance to the overall wellness experience and important details that make a significant difference to the final relaxation result.
            </p>
          </div>
        </section>

        {/* Why Infinite Spa Section - adapted from main page design */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-light text-gray-900">Why Infinite Spa?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our experienced spa team consists of highly qualified wellness professionals who are characterized by their passion for perfection and their attention to therapeutic detail.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Quality */}
                <div className="border-l-2 border-[#0a1f4a] pl-6">
                  <div className="flex items-start space-x-4">
                    <Star className="w-6 h-6 text-[#0a1f4a] mt-1" />
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">Quality</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We use only the finest wellness products and state-of-the-art spa techniques to provide you with long-lasting and aesthetically pleasing relaxation results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reliability */}
                <div className="border-l-2 border-[#0a1f4a] pl-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-6 h-6 text-[#0a1f4a] mt-1" />
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">Reliability</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        You can rely on us. We keep our wellness promises and deliver our spa services on time and to the highest quality standards.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="border-l-2 border-[#0a1f4a] pl-6">
                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-[#0a1f4a] mt-1" />
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">Experience</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        With years of experience and a deep understanding of the wellness industry, we are ideally equipped to successfully implement your spa projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - adapted from main page design */}
        <section className="w-full py-20 bg-[#0a1f4a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Ready to transform your wellness experience?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your spa project and discover how we can bring your wellness vision to life.
            </p>
            <a href="/booking" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none shadow-2xl hover:scale-105 hover:shadow-white hover:shadow-2xl active:scale-95">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-bold text-lg tracking-wider">Get Started</span>
              <svg className="relative w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs; 