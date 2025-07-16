import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrowseCategories from './components/BrowseCategories';
import HouseRanges from './components/HouseRanges';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import MeetUs from './components/MeetUs';
import { ArrowRight, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-infinite-blue relative">
      <Header />
      <main>
        <Hero />
        <BrowseCategories />
        <HouseRanges />
        {/* Catalogue CTA Section */}
        <section id="catalogue" className="bg-blue-dark rounded-3xl mx-auto mb-24 overflow-hidden max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
            <div className="flex-1 w-full">
              <h2 className="text-3xl lg:text-4xl font-medium text-white mb-2">
                Free catalogue
              </h2>
              <p className="text-2xl text-white mb-6">Order today!</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">All spa designs in one place</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Inspiring wellness designs</span>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-dark rounded-lg hover:bg-gray-50 transition-colors font-medium hover:shadow-md">
                <span>Order catalogue</span>
                <ArrowRight className="w-4 h-4 text-blue-dark" />
              </button>
            </div>
            <div className="hidden lg:block flex-1 w-full">
              <img 
                src="/6_Photo - 2 (2).jpg" 
                alt="Catalogue brochures"
                className="w-full max-w-md ml-auto"
              />
            </div>
          </div>
        </section>
        <Benefits />
        <MeetUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;