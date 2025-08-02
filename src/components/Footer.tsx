import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="border-t border-[#0A2239]" style={{ backgroundColor: '#0b1c26' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
                                    <div className="relative mb-4">
                          <div className="w-48 h-16">
                            <img 
                              src="/logo.png"
                              alt="Infinite Spa Logo" 
                              className="w-full h-full object-contain" 
                              style={{ filter: 'brightness(0) invert(1)' }}
                            />
                          </div>
                        </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              We believe in providing ubiquitous access to the world's most exceptional wellness amenities, wherever life may find you.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                                       <MapPin className="w-4 h-4 text-white/60" />
                       <span className="text-sm text-white/70">United Kingdom & Miami, FL</span>
              </div>
              <div className="flex items-center space-x-3">
                                       <Phone className="w-4 h-4 text-white/60" />
                       <span className="text-sm text-white/70">+44 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                                       <Mail className="w-4 h-4 text-white/60" />
                       <span className="text-sm text-white/70">info@infinitespa.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
                               <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left"
                >
                  About Infinite Spa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('turnkey-finish')}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left"
                >
                  Turnkey Finish
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Products</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('spa-designs')}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left"
                >
                  All Spa Ranges
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('install-use')}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left"
                >
                  Installation Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('catalogue')}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left"
                >
                  Free Catalogue
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {/* Social Media */}
              <div className="flex space-x-3">
                <button className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Facebook className="w-4 h-4" style={{ color: '#0a1f4a' }} />
                </button>
                <button className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Instagram className="w-4 h-4" style={{ color: '#0a1f4a' }} />
                </button>
                <button className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Youtube className="w-4 h-4" style={{ color: '#0a1f4a' }} />
                </button>
              </div>
              
              {/* Legal Links */}
              <div className="flex items-center space-x-4 text-sm text-white/50">
                <span className="hover:text-white/70 transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white/70 transition-colors cursor-pointer">Terms of Service</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-white/50">
              <span>🇬🇧 United Kingdom (UK)</span>
              <span>© 2024 Infinite Spa Designs</span>
            </div>
          </div>
        </div>
        
        {/* Backed by Noemis Ventures */}
        <div className="pt-8 mt-8">
          <div className="text-center">
            <p className="text-white/70 text-base mb-3">
              backed by
            </p>
            <a 
              href="https://www.noemisventures.com/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-white text-2xl font-medium hover:text-gray-200 transition-colors duration-200 underline decoration-white/30 hover:decoration-white/60"
            >
              Noemis Ventures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;