import React, { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

const Benefits = () => {
  // Calculator state
  const [calculatorType, setCalculatorType] = useState('hotel'); // 'hotel' or 'developer'
  
  // Hotel inputs
  const [hotelRooms, setHotelRooms] = useState(200);
  const [currentADR, setCurrentADR] = useState(200);
  const [occupancyRate, setOccupancyRate] = useState(70);
  
  // Developer inputs
  const [units, setUnits] = useState(200);
  const [averageRent, setAverageRent] = useState(3500);
  const [unitsToRent, setUnitsToRent] = useState(20);
  
  // Calculate Hotel ROI
  const calculateHotelROI = () => {
    // Revenue calculations based on Excel model
    const adrIncrease = currentADR * 0.05; // 5% increase
    const occupancyIncrease = 0.03; // 3% lift
    const daysPerYear = 365;
    
    // Higher ADR benefit
    const higherADRRevenue = hotelRooms * (occupancyRate / 100) * adrIncrease * daysPerYear;
    
    // Higher occupancy benefit  
    const higherOccupancyRevenue = hotelRooms * occupancyIncrease * currentADR * daysPerYear;
    
    const totalAnnualRevenue = higherADRRevenue + higherOccupancyRevenue;
    
    // Annual costs
    const leaseCost = 3600 * 12; // $3,600/month
    const electricity = 1000;
    const maintenance = 6000; // $500/month
    const repairs = 500;
    const setupFee = 5000; // First year only
    
    const annualCosts = leaseCost + electricity + maintenance + repairs;
    const firstYearCosts = annualCosts + setupFee;
    
    return {
      totalAnnualRevenue: Math.round(totalAnnualRevenue),
      higherADRRevenue: Math.round(higherADRRevenue),
      higherOccupancyRevenue: Math.round(higherOccupancyRevenue),
      annualCosts,
      firstYearCosts,
      netReturn: Math.round(totalAnnualRevenue - annualCosts),
      firstYearNet: Math.round(totalAnnualRevenue - firstYearCosts),
      revparIncrease: Math.round((higherADRRevenue + higherOccupancyRevenue) / (hotelRooms * daysPerYear))
    };
  };
  
  // Calculate Developer ROI
  const calculateDeveloperROI = () => {
    // Revenue calculations based on Excel model
    const rentPremium = averageRent * 0.025; // 2.5% of average rent
    const grossRentIncrease = units * rentPremium * 12;
    const operatingExpenseRatio = 0.171; // Derived from Excel data
    const noiUplift = grossRentIncrease * (1 - operatingExpenseRatio);
    const capRate = 0.05; // 5% cap rate
    const propertyValueUplift = noiUplift / capRate;
    
    // Faster leasing benefit (7% increase in speed)
    const fasterLeasingRevenue = unitsToRent * (averageRent * 0.07);
    
    // Annual costs
    const leaseCost = 3000 * 12; // $3,000/month
    const electricity = 1000;
    const maintenance = 6000; // $500/month
    const repairs = 500;
    
    const annualCosts = leaseCost + electricity + maintenance + repairs;
    
    return {
      grossRentIncrease: Math.round(grossRentIncrease),
      noiUplift: Math.round(noiUplift),
      propertyValueUplift: Math.round(propertyValueUplift),
      fasterLeasingRevenue: Math.round(fasterLeasingRevenue),
      rentPremium: Math.round(rentPremium),
      annualCosts,
      netReturn: Math.round(noiUplift + fasterLeasingRevenue - annualCosts),
      totalBenefit: Math.round(propertyValueUplift + noiUplift + fasterLeasingRevenue)
    };
  };
  
  const hotelResults = calculateHotelROI();
  const developerResults = calculateDeveloperROI();

  const benefits = [
    {
      title: "Revenue Generation",
      description: "High-margin wellness services that deliver measurable ROI and pay for themselves quickly"
    },
    {
      title: "Rapid Installation",
      description: "Pre-assembled units installed in under 1 day with minimal disruption to your property"
    },
    {
      title: "Premium Wellness Experience",
      description: "Luxury spa amenities that elevate guest satisfaction and command premium rates"
    },
    {
      title: "Smart Technology Integration", 
      description: "IoT-enabled automation for seamless operation and superior guest convenience"
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
              {/* First item - Customer Satisfaction */}
              <div className="group border-l-2 border-[#0b1c26] pl-4 lg:pl-6">
                <div>
                  <h3 className="text-lg lg:text-xl font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                    Customer Satisfaction
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Proven commercial success with 40% revenue increase and 95% guest satisfaction rating in first year of operation
                  </p>
                </div>
              </div>
              
              {/* Rest of the benefits */}
              {benefits.slice(1).map((benefit, index) => (
                <div key={index + 1} className="group border-l-2 border-[#0b1c26] pl-4 lg:pl-6">
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

          {/* Right Side - Advanced ROI Calculator */}
          <div className="bg-[#0b1c26] p-6 lg:p-8 rounded-none order-1 lg:order-2">
            <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
              <Calculator className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Infinite Spa ROI Calculator</h3>
            </div>
            
            {/* Calculator Type Selector */}
            <div className="mb-6">
              <div className="flex gap-2">
                <button
                  onClick={() => setCalculatorType('hotel')}
                  className={`flex-1 py-2 px-3 text-sm font-medium transition-colors ${
                    calculatorType === 'hotel' 
                      ? 'bg-white text-[#0b1c26]' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Hotel
                </button>
                <button
                  onClick={() => setCalculatorType('developer')}
                  className={`flex-1 py-2 px-3 text-sm font-medium transition-colors ${
                    calculatorType === 'developer' 
                      ? 'bg-white text-[#0b1c26]' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Developer
                </button>
              </div>
            </div>
            
            {calculatorType === 'hotel' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    value={hotelRooms}
                    onChange={(e) => setHotelRooms(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                    Current ADR ($)
                  </label>
                  <input
                    type="number"
                    value={currentADR}
                    onChange={(e) => setCurrentADR(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                    Occupancy Rate (%)
                  </label>
                  <input
                    type="number"
                    value={occupancyRate}
                    onChange={(e) => setOccupancyRate(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Revenue Uplift:</span>
                    <span className="text-white font-medium">${hotelResults.totalAnnualRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Annual Costs:</span>
                    <span className="text-white font-medium">${hotelResults.annualCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">RevPAR Increase:</span>
                    <span className="text-white font-medium">${hotelResults.revparIncrease}</span>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-white/80 text-xs mb-1">Annual Net Return</p>
                    <p className="text-2xl font-bold text-white">${hotelResults.netReturn.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                    Number of Units
                  </label>
                  <input
                    type="number"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                    Average Rent ($)
                  </label>
                  <input
                    type="number"
                    value={averageRent}
                    onChange={(e) => setAverageRent(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                    Units to Rent
                  </label>
                  <input
                    type="number"
                    value={unitsToRent}
                    onChange={(e) => setUnitsToRent(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border-0 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Property Value Uplift:</span>
                    <span className="text-white font-medium">${developerResults.propertyValueUplift.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">NOI Uplift:</span>
                    <span className="text-white font-medium">${developerResults.noiUplift.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Rent Premium:</span>
                    <span className="text-white font-medium">${developerResults.rentPremium}</span>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-white/80 text-xs mb-1">Total Annual Benefit</p>
                    <p className="text-2xl font-bold text-white">${developerResults.totalBenefit.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;