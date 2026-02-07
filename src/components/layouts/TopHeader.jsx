import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4 py-2.5 md:py-3">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a 
              href="mailto:charity@psgtech.edu" 
              className="flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 hover:translate-x-0.5"
            >
              <Mail size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline">charity@psgtech.edu</span>
            </a>
            <a 
              href="tel:+0422 257 2265" 
              className="flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 hover:translate-x-0.5"
            >
              <Phone size={16} className="flex-shrink-0" />
              <span>0422 257 2265 / 434 4000</span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3 md:gap-4">
            <a 
              href="https://www.facebook.com/psgandsonscharities" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Facebook size={18} />
            </a>
            {/* <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Instagram size={18} />
            </a> */}
            <a 
              href="https://www.linkedin.com/company/psgandsonscharities/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.youtube.com/@PSGandSonsCharities" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;