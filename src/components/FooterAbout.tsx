import React from "react";
import { Facebook, Instagram } from "lucide-react";

const FooterAbout = () => {
  return (
    <footer className="w-full bg-[#f7f1e8] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Description & Social */}
          <div className="lg:col-span-1">
            <p 
              className="font-normal text-[#11388a] text-2xl lg:text-3xl leading-tight mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              Spa experiences that elevate your wellness journey
            </p>
            
            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#11388a] flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-[#11388a]" style={{ fontFamily: 'Inter' }}>Facebook</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#11388a] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-[#11388a]" style={{ fontFamily: 'Inter' }}>Instagram</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-medium text-[#11388a] text-lg mb-6" style={{ fontFamily: 'Inter' }}>
              Opening Hours
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>Mo - Fr</span>
                <span className="font-normal text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>Sa</span>
                <span className="font-normal text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>by appointment</span>
              </div>
            </div>
            <div className="mt-6 bg-[#fffefc] p-4">
              <p className="font-medium text-[#11388a] text-sm" style={{ fontFamily: 'Inter' }}>
                Annual vacation: 25.07.-17.08.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-[#11388a] text-lg mb-6" style={{ fontFamily: 'Inter' }}>
              Navigation
            </h3>
            <div className="space-y-3">
              {['Home', 'About us', 'Services', 'Treatments', 'Gallery', 'Contact us'].map((link) => (
                <div key={link}>
                  <a 
                    href="#" 
                    className="font-normal text-[#11388a] hover:text-[#0d2d73] transition-colors text-lg"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-[#11388a] text-lg mb-6" style={{ fontFamily: 'Inter' }}>
              Contact us
            </h3>
            <address className="font-normal text-[#11388a]/60 not-italic mb-4" style={{ fontFamily: 'Inter' }}>
              1234 Ocean Drive<br />
              Miami, FL 33139<br />
              United States
            </address>
            <div className="space-y-2">
              <a
                href="tel:+1305123456"
                className="block font-normal text-[#11388a]/60 hover:text-[#11388a] transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                +1 305 123 456
              </a>
              <a
                href="mailto:info@infinitespa.com"
                className="block font-normal text-[#11388a]/60 hover:text-[#11388a] transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                info@infinitespa.com
              </a>
            </div>
          </div>

        </div>

        {/* Logo Bar */}
        <div className="mt-12 pt-8 border-t border-[#11388a]/20">
          <div className="flex justify-center">
            <img
              src="/newlogo.png"
              alt="Infinite Spa Logo"
              className="h-12 object-contain"
            />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-6 border-t border-[#11388a]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm">
            <a
              href="#"
              className="font-medium text-[#11388a] hover:underline"
              style={{ fontFamily: 'Inter' }}
            >
              Privacy
            </a>
            <span className="text-[#11388a]/60">|</span>
            <a
              href="#"
              className="font-medium text-[#11388a] hover:underline"
              style={{ fontFamily: 'Inter' }}
            >
              Legal Infos
            </a>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-[#11388a]/60">
            <span style={{ fontFamily: 'Inter' }}>© 2025 Infinite Spa</span>
            <span>|</span>
            <span style={{ fontFamily: 'Inter' }}>Website by <span className="text-[#11388a] font-medium">Infinite</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAbout; 