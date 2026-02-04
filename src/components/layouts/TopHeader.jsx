import React from "react";
import { Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3 space-y-2 md:space-y-0">
        
        {/* Left Section - Contact */}
        <div className="flex items-center space-x-2 text-sm md:text-base font-medium">
          <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
          <span className="tracking-wide">+91 98765 43210</span>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transform hover:scale-110 transition duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transform hover:scale-110 transition duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transform hover:scale-110 transition duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;