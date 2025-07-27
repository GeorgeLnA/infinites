import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    availableSpace: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Contact Content - with top padding for fixed header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-normal text-[#0d0c09] leading-tight mb-8">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-[#0d0c09] font-light leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Ready to bring luxury wellness to your property? Let's discuss your project and create a custom spa solution that fits your vision and space.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-12">
                                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-[#0a1f4a]  flex items-center justify-center">
                           <Mail className="w-6 h-6 text-white" />
                         </div>
                  <div>
                    <h3 className="font-medium text-[#0d0c09] text-lg">Email</h3>
                    <p className="text-[#0d0c09] font-light">info@infinitespa.com</p>
                  </div>
                </div>

                                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-[#0a1f4a]  flex items-center justify-center">
                           <Phone className="w-6 h-6 text-white" />
                         </div>
                  <div>
                    <h3 className="font-medium text-[#0d0c09] text-lg">Phone</h3>
                    <p className="text-[#0d0c09] font-light">+44 (0) 123 456 7890</p>
                  </div>
                </div>

                                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-[#0a1f4a]  flex items-center justify-center">
                           <MapPin className="w-6 h-6 text-white" />
                         </div>
                  <div>
                    <h3 className="font-medium text-[#0d0c09] text-lg">Location</h3>
                    <p className="text-[#0d0c09] font-light">United Kingdom & Miami, FL</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50  p-8">
                <h3 className="text-2xl font-normal text-[#0d0c09] mb-6">Why Choose Infinite Spa?</h3>
                <ul className="space-y-3 text-[#0d0c09] font-light">
                  <li>• Turnkey mobile spa solutions</li>
                  <li>• Premium wellness amenities</li>
                  <li>• Custom design consultation</li>
                  <li>• Professional installation</li>
                  <li>• Ongoing support & maintenance</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-normal text-[#0d0c09] mb-8">Start Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0d0c09] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0a1f4a] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0d0c09] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0a1f4a] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0a1f4a] focus:border-transparent"
                    placeholder="+44 (0) 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0a1f4a] focus:border-transparent"
                    placeholder="Tell us about your spa project, property type, and vision..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-[#0d0c09] mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0a1f4a] focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 months)</option>
                      <option value="short">Short term (3-6 months)</option>
                      <option value="medium">Medium term (6-12 months)</option>
                      <option value="long">Long term (12+ months)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#0d0c09] mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0a1f4a] focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k-250k">$100k - $250k</option>
                      <option value="250k-500k">$250k - $500k</option>
                      <option value="500k+">$500k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="availableSpace" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Available Space Details
                  </label>
                  <textarea
                    id="availableSpace"
                    name="availableSpace"
                    rows={3}
                    value={formData.availableSpace}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0a1f4a] focus:border-transparent"
                    placeholder="Describe your available space dimensions, location, access, utilities..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a1f4a] text-white py-4 px-8  hover:bg-[#0A2239] transition-colors flex items-center justify-center space-x-2 font-medium text-lg"
                >
                  <span>Send Inquiry</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matching catalogue section style */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className=" overflow-hidden" style={{ background: '#0a1f4a' }}>
            <div className="p-12 lg:p-16 text-center text-white">
              <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">Ready to Transform Your Space?</h2>
              <p className="text-xl font-light max-w-4xl mx-auto leading-relaxed mb-8" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Let's create something extraordinary together. Our team is ready to bring your wellness vision to life with our innovative spa solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#0a1f4a]  hover:bg-gray-50 transition-colors font-medium text-lg">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border border-white text-white  hover:bg-white hover:text-[#0a1f4a] transition-colors font-medium text-lg">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 