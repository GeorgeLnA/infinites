import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

export const PriorityAccessSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleReserve = async () => {
    setIsLoading(true);
    
    try {
      // Initialize Stripe
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_test_key_here');
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_priority_access', // You'll need to create this in your Stripe dashboard
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/cancel`,
        }),
      });

      const session = await response.json();

      if (session.error) {
        throw new Error(session.error);
      }

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black mb-6 lg:mb-8 leading-tight">
          Priority Access
        </h2>
        
        <p className="text-base sm:text-lg font-medium text-black leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto">
          Exceptional experiences take time to build. Our modular spa complexes are made to order, with a strictly limited number of builds each season. We're opening a small window for early reservations — for those ready to move first.
        </p>
        
        <button 
          onClick={handleReserve}
          disabled={isLoading}
                        className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-[#0b1c26] transition-all duration-300 ease-out border-2 border-[#0b1c26] rounded-none shadow-lg sm:shadow-2xl hover:scale-105 hover:shadow-[#0b1c26] hover:shadow-lg sm:hover:shadow-2xl active:scale-95 bg-transparent hover:bg-[#0b1c26] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#0b1c26] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative font-bold text-base sm:text-lg tracking-wider">
            {isLoading ? 'Processing...' : 'Reserve'}
          </span>
          {!isLoading && (
            <svg className="relative w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}; 