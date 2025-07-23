import React from 'react';
import { Sparkles, Globe, Users, Award } from 'lucide-react';

const OurStory = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="py-24 bg-gradient-to-br from-blue-dark to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-8 uppercase tracking-wide">Our Story</h1>
        <p className="text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
          Born from a vision to democratize luxury wellness experiences
        </p>
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-dark mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We believe in providing ubiquitous access to the world's best wellness amenities. 
              Infinite Spa was born out of a desire to let anyone access premium wellness experiences 
              to boost mood, health, and longevity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our turnkey mobile spas are designed for modern properties, combining innovation, 
              comfort, and style. Whether for homes, hotels, or unique venues, we help you create 
              unforgettable wellness moments that transform spaces and lives.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl p-12 text-center">
              <Sparkles className="w-16 h-16 text-blue-dark mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-blue-dark mb-4">Wellness for Everyone</h3>
              <p className="text-gray-600">
                Making luxury spa experiences accessible wherever you are
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values Grid */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-dark mb-6">What Drives Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our core values shape every decision we make and every spa we create
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-dark mb-4">Global Accessibility</h3>
            <p className="text-gray-600 leading-relaxed">
              Breaking down barriers to luxury wellness by bringing premium spa experiences 
              to any location, anywhere in the world.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-dark mb-4">Community Focus</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating spaces that bring people together, fostering wellness communities 
              and meaningful connections through shared experiences.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-dark mb-4">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Committed to the highest standards in design, installation, and service 
              to deliver exceptional wellness experiences every time.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Company Background */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-blue-dark rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-8">The Future of Wellness</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Infinite Spa is dedicated to making luxury wellness experiences available to everyone, 
            everywhere. We're not just building spas – we're creating a movement that transforms 
            how people experience wellness in their daily lives.
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            From private residences to luxury hotels, from corporate wellness centers to unique 
            venues, our innovative mobile spa solutions adapt to any space and exceed every expectation. 
            Join us in making wellness truly infinite.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default OurStory; 