import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

    setIsSubmitting(true);
    try {
      // No backend connected yet. This simply simulates a successful submit.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSuccessMessage('Thanks! We will reach out shortly.');
      setName('');
      setEmail('');
      setPhone('');
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
        Request Info
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
        loading="eager"
        fetchPriority="high"
        decoding="sync"
      />

      {/* Mobile Content Overlay (separate layout) */}
      <div className="relative z-10 h-screen flex items-center lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full">
            <h1
              className="mb-6 text-center text-white tracking-[0.12em] sm:tracking-[0.14em] leading-tight text-5xl sm:text-6xl"
              style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 100 }}
            >
              INFINITESPA
            </h1>
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
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-white tracking-[0.08em] sm:tracking-[0.12em] lg:tracking-[0.18em] transition-transform duration-300 ease-out mb-3 sm:mb-5 lg:mb-6 leading-tight"
                style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 100 }}
              >
                INFINITESPA
              </h1>

              {/* Stylish Sharp CTA Button (desktop only) */}
              <div className="mt-2 sm:mt-4 lg:mt-6 flex justify-start">
                <button
                  onClick={() => {
                    const secondSection = document.querySelector('section:nth-of-type(2)');
                    if (secondSection) {
                      secondSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none shadow-2xl hover:scale-105 hover:shadow-white hover:shadow-2xl active:scale-95"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-bold text-sm sm:text-base lg:text-lg tracking-wider">EXPLORE NOW</span>
                  <svg
                    className="relative w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
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