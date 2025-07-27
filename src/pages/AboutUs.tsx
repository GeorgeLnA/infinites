import React from 'react';
import { Heart, Star, Award } from 'lucide-react';
import Footer from '../components/Footer';
import { AboutContactSection } from '../components/AboutContactSection';
import { AboutProjectsSection } from '../components/AboutProjectsSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        {/* Hero Section with solid background color */}
        <section className="w-full h-[400px] flex items-center bg-[#0a1f4a] px-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-7xl lg:text-8xl font-thin text-white uppercase tracking-widest text-left">About us</h1>
          </div>
        </section>

        {/* Animated Mission/Vision Section for About Us */}
        <AboutContactSection />

        {/* Projects Section for About Us */}
        <AboutProjectsSection />

        {/* Hero Text Section */}
        <section className="py-16 px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer a comprehensive service that completely fulfills your needs and wishes from planning to execution.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-light text-gray-900 leading-tight mb-8">
                Since our foundation, we have specialized in offering our customers first-class products and services that are both aesthetically pleasing and functional.
              </h2>
            </div>
          </div>
        </section>

        {/* Large Gallery Image */}
        <section className="px-16">
          <div className="max-w-7xl mx-auto">
            <div className="w-full h-[600px] bg-[url(/6_Photo%20-%202%20(2).jpg)] bg-cover bg-center" />
          </div>
        </section>

        {/* Showroom Section */}
        <section className="py-16 px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[400px] bg-[url(/6_Photo%20-%203%20(2).jpg)] bg-cover bg-center" />
            <div className="h-[400px] bg-[url(/6_Photo%20-%204%20(1).jpg)] bg-cover bg-center" />
          </div>
        </section>

        {/* Services Text Section */}
        <section className="py-16 px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our aim is to offer a comprehensive service for every budget that completely fulfills your needs and wishes from planning to execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Infinite Spa - our wellness center in Miami.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Visit our exclusive wellness center in Miami, which serves as a source of inspiration and a point of contact for anyone seeking transformative relaxation. In a luxurious setting, we present a wide selection of spa treatments that offer the perfect choice for every wellness concept and therapeutic design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our spa offers a large selection of treatments and wellness inspirations. We advise our customers with pleasure and passion in order to find the perfect wellness solutions for each individual in a personalized manner. With our versatile approaches, which we are inspired by every year at various wellness retreats and spa visits, we give every treatment a personal touch.
              </p>
            </div>
          </div>
        </section>

        {/* Location Images */}
        <section className="py-16 px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[400px] bg-[url(/1736995044237.jpg)] bg-cover bg-center" />
            <div className="h-[400px] bg-[url(/1516866626270.jpg)] bg-cover bg-center" />
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 px-16 bg-white">
          <div className="max-w-4xl mx-auto lg:ml-auto">
            <h3 className="text-xl font-medium text-gray-900 mb-6">
              Infinite Spa - Execution of our wellness services.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive wellness services including therapeutic massage, spa treatments, and holistic wellness solutions, design and construction of luxury spa facilities, swimming pools and relaxation areas. Thanks to our expertise and our years of experience in the wellness industry, we are able to turn the customer's wellness vision perfectly into reality. We attach great importance to the overall wellness experience and important details that make a significant difference to the final relaxation result.
            </p>
          </div>
        </section>

        {/* Why Infinite Spa Section */}
        <section className="py-16 px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-8">Why Infinite Spa?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our experienced spa team consists of highly qualified wellness professionals who are characterized by their passion for perfection and their attention to therapeutic detail.
                </p>
              </div>
              
              <div className="space-y-12">
                {/* Quality */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-start space-x-6">
                    <Star className="w-6 h-6 text-gray-400 mt-2" />
                    <div>
                      <h3 className="text-3xl font-light text-gray-900 mb-4">Quality</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We use only the finest wellness products and state-of-the-art spa techniques to provide you with long-lasting and aesthetically pleasing relaxation results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reliability */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-start space-x-6">
                    <Heart className="w-6 h-6 text-gray-400 mt-2" />
                    <div>
                      <h3 className="text-3xl font-light text-gray-900 mb-4">Reliability</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        You can rely on us. We keep our wellness promises and deliver our spa services on time and to the highest quality standards.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-start space-x-6">
                    <Award className="w-6 h-6 text-gray-400 mt-2" />
                    <div>
                      <h3 className="text-3xl font-light text-gray-900 mb-4">Experience</h3>
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

        {/* Final CTA Section with dark background */}
        <section className="w-full py-32 bg-gray-900">
          <div className="max-w-7xl mx-auto px-16 text-center">
            <h2 className="text-4xl font-light text-white mb-8">
              Ready to transform your wellness experience?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contact us today to discuss your spa project and discover how we can bring your wellness vision to life.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs; 