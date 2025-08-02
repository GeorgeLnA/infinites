import React, { useState } from 'react';

const Booking = () => {
  const [userType, setUserType] = useState<'investor' | 'customer' | null>(null);

  const handleUserTypeSelect = (type: 'investor' | 'customer') => {
    setUserType(type);
  };

  const handleBackToSelection = () => {
    setUserType(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-6 py-16">
        {!userType ? (
          // User Type Selection
          <div className="text-center">
            <h2 className="text-4xl font-normal text-[#0a1f4a] mb-8 leading-tight">
              How can we help you?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Tell us about yourself so we can provide the most relevant information and assistance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Customer Option */}
              <button
                onClick={() => handleUserTypeSelect('customer')}
                className="group p-8 border-2 border-[#0a1f4a] bg-white hover:bg-[#0a1f4a] transition-all duration-300 rounded-none"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a1f4a] group-hover:bg-white mx-auto mb-4 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-8 h-8 text-white group-hover:text-[#0a1f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-[#0a1f4a] group-hover:text-white mb-2 transition-colors duration-300">
                    Customer
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                    I want to install a spa at my property
                  </p>
                </div>
              </button>

              {/* Investor Option */}
              <button
                onClick={() => handleUserTypeSelect('investor')}
                className="group p-8 border-2 border-[#0a1f4a] bg-white hover:bg-[#0a1f4a] transition-all duration-300 rounded-none"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a1f4a] group-hover:bg-white mx-auto mb-4 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-8 h-8 text-white group-hover:text-[#0a1f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-[#0a1f4a] group-hover:text-white mb-2 transition-colors duration-300">
                    Investor
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                    I want to invest in spa projects
                  </p>
                </div>
              </button>

              {/* Reserve Option */}
              <button
                onClick={() => window.open('https://buy.stripe.com/5kQcN5a6b7FVgWY9PIcwg00', '_blank')}
                className="group p-8 border-2 border-[#0a1f4a] bg-[#0a1f4a] hover:bg-white transition-all duration-300 rounded-none"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white group-hover:bg-[#0a1f4a] mx-auto mb-4 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-8 h-8 text-[#0a1f4a] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white group-hover:text-[#0a1f4a] mb-2 transition-colors duration-300">
                    Reserve Now
                  </h3>
                  <p className="text-gray-200 group-hover:text-gray-600 transition-colors duration-300">
                    Secure your spa reservation immediately
                  </p>
                </div>
              </button>
            </div>

            {/* Schedule a Call Section */}
            <div className="mt-12 max-w-2xl mx-auto">
              <p className="text-gray-600 mb-6 text-center">
                Prefer to speak directly? Book a consultation call with our team.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://calendly.com/your-calendly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0a1f4a] text-white font-medium hover:bg-[#0a1f4a]/90 transition-colors duration-200 rounded-none"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a call
                </a>
              </div>
            </div>
          </div>
        ) : userType === 'customer' ? (
          <CustomerForm onBack={handleBackToSelection} />
        ) : (
          <InvestorForm onBack={handleBackToSelection} />
        )}
        </div>
      </div>
    </div>
  );
};

// Customer Form Component
const CustomerForm = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Customer form submitted:', formData);
    alert('Thank you! We\'ll contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-[#0a1f4a] hover:text-gray-600 transition-colors mb-4 flex items-center"
        >
          ← Back to selection
        </button>
        <h2 className="text-3xl font-normal text-[#0a1f4a] mb-4">
          Customer Inquiry
        </h2>
        <p className="text-gray-600">
          Tell us about your spa installation project
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your project, specific requirements, or any questions you have..."
            className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="submit"
            className="bg-[#0a1f4a] text-white py-4 px-8 font-medium hover:bg-[#0a1f4a]/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a1f4a] focus:ring-offset-2"
          >
            Submit Inquiry
          </button>
          <button
            type="button"
            onClick={() => window.open('https://buy.stripe.com/5kQcN5a6b7FVgWY9PIcwg00', '_blank')}
            className="border-2 border-[#0a1f4a] text-[#0a1f4a] py-4 px-8 font-medium hover:bg-[#0a1f4a] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a1f4a] focus:ring-offset-2"
          >
            Reserve Now
          </button>
        </div>
      </form>
    </div>
  );
};

// Investor Form Component
const InvestorForm = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Investor form submitted:', formData);
    alert('Thank you! We\'ll contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-[#0a1f4a] hover:text-gray-600 transition-colors mb-4 flex items-center"
        >
          ← Back to selection
        </button>
        <h2 className="text-3xl font-normal text-[#0a1f4a] mb-4">
          Investment Inquiry
        </h2>
        <p className="text-gray-600">
          Tell us about your investment interests
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Investment Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your investment strategy, specific interests, or any questions you have..."
            className="w-full px-4 py-3 border border-gray-300 focus:border-[#0a1f4a] focus:ring-1 focus:ring-[#0a1f4a] outline-none transition-colors resize-none"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#0a1f4a] text-white py-4 px-8 font-medium hover:bg-[#0a1f4a]/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a1f4a] focus:ring-offset-2"
          >
            Submit Investment Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking; 