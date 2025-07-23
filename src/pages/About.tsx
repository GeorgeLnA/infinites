import React from 'react';
import { Heart, Target, Users } from 'lucide-react';

const About = () => (
  <section className="py-24 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-dark mb-8 uppercase tracking-wide">About Us</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We're passionate about bringing luxury wellness experiences to everyone, everywhere. 
          Our mission is to make premium spa amenities accessible through innovative mobile solutions.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="text-center p-8 bg-gray-50 rounded-2xl">
          <div className="w-16 h-16 bg-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-blue-dark mb-4">Wellness First</h3>
          <p className="text-gray-600">
            We believe wellness should be accessible to everyone. Our spa solutions prioritize 
            health, relaxation, and rejuvenation in every design.
          </p>
        </div>

        <div className="text-center p-8 bg-gray-50 rounded-2xl">
          <div className="w-16 h-16 bg-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-blue-dark mb-4">Innovation</h3>
          <p className="text-gray-600">
            We combine cutting-edge technology with timeless spa traditions to create 
            unique, turnkey wellness solutions for modern properties.
          </p>
        </div>

        <div className="text-center p-8 bg-gray-50 rounded-2xl">
          <div className="w-16 h-16 bg-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-blue-dark mb-4">Community</h3>
          <p className="text-gray-600">
            We build lasting relationships with our clients, creating spaces that bring 
            people together and foster wellness communities.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-blue-dark rounded-3xl p-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          To transform how people experience wellness by making luxury spa amenities 
          universally accessible. We envision a world where premium wellness experiences 
          are not limited by location or circumstance, but available wherever people 
          live, work, and gather.
        </p>
      </div>
    </div>
  </section>
);

export default About; 