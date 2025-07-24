import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-blue-dark pt-24 text-white">
      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-white mb-4">INFINITE SPA DESIGNS</h3>
            <ul className="space-y-2 text-white">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-sky-300 transition-colors text-left"
                >
                  About Infinite Spa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('turnkey-finish')}
                  className="hover:text-sky-300 transition-colors text-left"
                >
                  Turnkey finish
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">CONTACT</h3>
            <ul className="space-y-2 text-white">
              <li>
                <button 
                  onClick={() => scrollToSection('spa-designs')}
                  className="hover:text-sky-300 transition-colors text-left"
                >
                  All spa ranges
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="hover:text-sky-300 transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">FIND INFINITE SPA AGENT</h3>
            <p className="text-white text-sm mb-4">Use the support of a specialist in your region!</p>
            
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter postal code"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <button className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-400 transition-colors">
                Search
              </button>
            </div>
            <p className="text-xs text-white/70 mt-2">Eg. AA1 1AA</p>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">POSTAL CODE :</h3>
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-8 bg-sky-500 rounded flex items-center justify-center text-white text-xs font-bold hover:bg-sky-400 transition-colors cursor-pointer">
                BOPAS
              </div>
              <div className="w-12 h-8 bg-sky-500 rounded flex items-center justify-center text-white text-xs font-bold hover:bg-sky-400 transition-colors cursor-pointer">
                ISO
              </div>
              <div className="w-12 h-8 bg-sky-500 rounded flex items-center justify-center text-white text-xs font-bold hover:bg-sky-400 transition-colors cursor-pointer">
                GDF
              </div>
              <div className="w-12 h-8 bg-sky-500 rounded flex items-center justify-center text-white text-xs font-bold hover:bg-sky-400 transition-colors cursor-pointer">
                RAL
              </div>
              <div className="w-12 h-8 bg-sky-500 rounded flex items-center justify-center text-white text-xs font-bold hover:bg-sky-400 transition-colors cursor-pointer">
                STA
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span>Privacy policy</span>
            <span>🇬🇧 United Kingdom (UK)</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors">
              <span className="text-white text-sm">f</span>
            </button>
            <button className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors">
              <span className="text-white text-sm">ig</span>
            </button>
            <button className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors">
              <span className="text-white text-sm">yt</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;