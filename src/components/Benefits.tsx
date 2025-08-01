import React, { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

const Benefits = () => {
  const [investment, setInvestment] = useState(50000);
  const [roi, setRoi] = useState(25);
  const [timeframe, setTimeframe] = useState(12);

  const calculateROI = () => {
    return (investment * (roi / 100) * (timeframe / 12)).toFixed(0);
  };

  const benefits = [
    {
      title: "Premium Wellness Experience",
      description: "Luxury spa amenities that elevate guest satisfaction and property value"
    },
    {
      title: "Smart Technology Integration", 
      description: "IoT-enabled systems for seamless operation and guest convenience"
    },
    {
      title: "Rapid Installation",
      description: "Pre-assembled units installed in under 1 day with minimal disruption"
    },
    {
      title: "Revenue Generation",
      description: "High-margin wellness services that pay for themselves quickly"
    }
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Benefits */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black mb-6 lg:mb-8 leading-tight text-center lg:text-left">
              Benefits
            </h2>
            
            <div className="space-y-6 lg:space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group border-l-2 border-[#0a1f4a] pl-4 lg:pl-6">
                  <div>
                    <h3 className="text-lg lg:text-xl font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - ROI Calculator */}
          <div className="bg-[#0a1f4a] p-6 lg:p-8 rounded-none order-1 lg:order-2">
            <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
              <Calculator className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">ROI Calculator</h3>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                  Investment Amount ($)
                </label>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-white text-[#0a1f4a] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm lg:text-base"
                />
              </div>
              
              <div>
                <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                  Expected ROI (%)
                </label>
                <input
                  type="number"
                  value={roi}
                  onChange={(e) => setRoi(Number(e.target.value))}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-white text-[#0a1f4a] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm lg:text-base"
                />
              </div>
              
              <div>
                <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                  Timeframe (months)
                </label>
                <input
                  type="number"
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-white text-[#0a1f4a] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm lg:text-base"
                />
              </div>
              
              <div className="pt-3 lg:pt-4 border-t border-white/20">
                <div className="text-center">
                  <p className="text-white/80 text-xs lg:text-sm mb-1">Estimated Return</p>
                  <p className="text-2xl lg:text-3xl font-bold text-white">${calculateROI()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;