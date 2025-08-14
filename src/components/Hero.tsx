import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePhone = (value: string) => /[0-9()\-+\s]{7,}/.test(value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }
    if (!location) {
      setErrorMessage('Please select your location.');
      return;
    }

    setIsSubmitting(true);
    try {
      // No backend connected yet. This simply simulates a successful submit.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSuccessMessage('Thanks! We will reach out shortly.');
      setName('');
      setEmail('');
      setPhone('');
      setLocation('');
      navigate('/confirmation');
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormCard = () => (
    <div className="w-full backdrop-blur-sm bg-black/50 border border-white/15 shadow-2xl p-5 sm:p-6 md:p-7 lg:p-8 max-w-md lg:max-w-md xl:max-w-lg">
      <h2
        className="text-white text-xl sm:text-2xl font-medium tracking-wide mb-4"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Welcome! We're Here to Help With Your Modular Spa Needs.
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hero-name" className="block text-white/80 text-sm mb-1">Name</label>
          <input
            id="hero-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-white focus:ring-offset-0"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-email" className="block text-white/80 text-sm mb-1">Email</label>
          <input
            id="hero-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-white focus:ring-offset-0"
            placeholder="jane@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-phone" className="block text-white/80 text-sm mb-1">Phone</label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-white focus:ring-offset-0"
            placeholder="+1 555 555 5555"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-location" className="block text-white/80 text-sm mb-1">Location</label>
          <select
            id="hero-location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black outline-none focus:ring-2 focus:ring-white focus:ring-offset-0"
            required
          >
            <option value="">Select your location</option>
            <option value="US">US</option>
            <option value="Canada">Canada</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {errorMessage && (
          <p className="text-red-300 text-sm" role="alert">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-300 text-sm" role="status">{successMessage}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none shadow-xl hover:scale-[1.02] hover:shadow-white hover:shadow-2xl active:scale-95 disabled:opacity-70"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative font-semibold text-sm sm:text-base tracking-wider">
            {isSubmitting ? 'Sending…' : 'Learn more'}
          </span>
        </button>

        <p className="text-xs text-white/70 text-center">We respect your privacy. No spam.</p>
      </form>
    </div>
  );

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-transparent pt-16 lg:pt-24"
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/6_Photo - 1 (2).jpg"
        alt="Infinite Spa luxury wellness experience"
      />

      {/* Mobile Content Overlay (separate layout) */}
      <div className="relative z-10 h-screen flex items-start pt-20 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full">
            <div className="mb-6 text-center backdrop-blur-sm bg-black/50 border border-white/15 shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h1
                className="text-white leading-tight text-lg sm:text-xl lg:text-2xl font-light"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                INFINITESPA can turn any property into a paradise.
              </h1>
            </div>
            <div className="max-w-md mx-auto">
              {renderFormCard()}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Content Overlay (unchanged) */
      }
      <div className="relative z-10 h-screen hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Branding and CTA */}
            <div className="text-left">
              <div className="backdrop-blur-sm bg-black/50 border border-white/15 shadow-2xl p-6 sm:p-8 max-w-4xl">
                <h1
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white transition-transform duration-300 ease-out leading-tight font-light"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  INFINITESPA can turn any property into a paradise.
                </h1>
              </div>
            </div>

            {/* Right: Quick Form */}
            <div className="w-full flex justify-end">
              {renderFormCard()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;