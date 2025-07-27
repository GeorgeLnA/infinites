import React from 'react';
import { Sparkles, Globe, Users, Award } from 'lucide-react';
import Footer from '../components/Footer';

const OurStory = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    {/* Mission Section - with top padding for fixed header */}
    <section className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-normal text-[#0d0c09] leading-tight mb-8">Our Story</h1>
          <p className="text-xl lg:text-2xl text-[#0d0c09] font-light leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Born from a vision to democratize luxury wellness experiences and make them accessible wherever life may find you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-8">Our Mission</h2>
            <div className="space-y-6">
              <p className="text-[#0d0c09] text-lg font-light leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '1.75rem'}}>
                We believe in providing ubiquitous access to the world's most exceptional wellness amenities, wherever life may find you.
              </p>
              <p className="text-[#0d0c09] text-lg font-light leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Infinite Spa was born from a desire to dissolve the boundaries around luxury wellness, making it available to anyone, anywhere. By opening the door to world-class experiences, we aim to uplift mood, nurture health, and extend the arc of human longevity.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/6_Photo - 3 (2).jpg" 
              alt="Wellness Experience" 
              className="w-full h-96 object-cover "
            />
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">What Drives Us</h2>
          <p className="text-xl text-[#0d0c09] font-light max-w-3xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Our core values shape every decision we make and every spa we create
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white  p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#0a1f4a]  flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-[#0d0c09] mb-4">Global Accessibility</h3>
            <p className="text-[#0d0c09] font-light leading-relaxed">
              Breaking down barriers to luxury wellness by bringing premium spa experiences 
              to any location, anywhere in the world.
            </p>
          </div>

          <div className="bg-white  p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#0a1f4a]  flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-[#0d0c09] mb-4">Community Focus</h3>
            <p className="text-[#0d0c09] font-light leading-relaxed">
              Creating spaces that bring people together, fostering wellness communities 
              and meaningful connections through shared experiences.
            </p>
          </div>

          <div className="bg-white  p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#0a1f4a]  flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-[#0d0c09] mb-4">Excellence</h3>
            <p className="text-[#0d0c09] font-light leading-relaxed">
              Committed to the highest standards in design, installation, and service 
              to deliver exceptional wellness experiences every time.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision Section - matching catalogue section style */}
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className=" overflow-hidden" style={{ background: '#0a1f4a' }}>
          <div className="p-12 lg:p-16 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">The Future of Wellness</h2>
            <p className="text-xl font-light max-w-4xl mx-auto leading-relaxed mb-8" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Infinite Spa is dedicated to making luxury wellness experiences available to everyone, 
              everywhere. We're not just building spas – we're creating a movement that transforms 
              how people experience wellness in their daily lives.
            </p>
            <p className="text-lg font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
              From private residences to luxury hotels, from corporate wellness centers to unique 
              venues, our innovative mobile spa solutions adapt to any space and exceed every expectation. 
              Join us in making wellness truly infinite.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurStory; 