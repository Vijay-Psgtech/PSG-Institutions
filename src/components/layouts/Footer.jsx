import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About Us', link: '#about' },
    { name: 'Institutions', link: '#institutions' },
    { name: 'Events', link: '#events' },
    { name: 'Achievements', link: '#achievements' },
    { name: 'Placements', link: '#placements' },
    { name: 'Contact', link: '#contact' },
    { name: 'Admissions', link: '#admissions' }
  ];

  const programs = [
    { name: 'Engineering', link: '#engineering' },
    { name: 'Technology', link: '#technology' },
    { name: 'Arts & Science', link: '#arts-science' },
    { name: 'Management', link: '#management' },
    { name: 'Polytechnic', link: '#polytechnic' },
    { name: 'Research Programs', link: '#research' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#001a3d] to-[#003d82] text-white">
      {/* Main Footer */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* About Section */}
            <div className="space-y-6">
              <a href="#home" className="flex items-center gap-3 group">
                {/* Logo Image */}
                <img 
                  src="/logo.png" 
                  alt="PSG Institutions Logo" 
                  className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading='lazy'
                />
                {/* Logo Text */}
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-extrabold text-white leading-none tracking-tight">
                    PSG
                  </span>
                  <span className="text-[10px] md:text-[11px] text-white/70 uppercase tracking-[2px] mt-1">
                    Institutions
                  </span>
                </div>
              </a>
              <p className="text-white/80 text-sm leading-relaxed">
                A premier educational institution committed to excellence in education, 
                research, and innovation since 1926. Shaping future leaders and professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-white/80 text-sm">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/80 text-sm">
                  <Phone size={18} className="flex-shrink-0 text-yellow-400" />
                  <a href="tel:+919876543210" className="hover:text-yellow-300 transition-colors duration-300">
                    98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-white/80 text-sm">
                  <Mail size={18} className="flex-shrink-0 text-yellow-400" />
                  <a href="mailto:info@psginstitutions.in" className="hover:text-yellow-300 transition-colors duration-300">
                    info@psginstitutions.in
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white relative pb-3">
                Quick Links
                <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="flex items-center gap-2 text-white/80 text-sm hover:text-yellow-300 hover:pl-2 transition-all duration-300 group"
                    >
                      <ArrowRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white relative pb-3">
                Our Programs
                <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href={program.link}
                      className="flex items-center gap-2 text-white/80 text-sm hover:text-yellow-300 hover:pl-2 transition-all duration-300 group"
                    >
                      <ArrowRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300" />
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white relative pb-3">
                Connect With Us
                <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></span>
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Stay updated with our latest news, events, and announcements.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/psgandsonscharities"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(255,235,59,0.3)]"
                >
                  <Facebook size={20} />
                </a>
                {/* <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(255,235,59,0.3)]"
                >
                  <Instagram size={20} />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/psgandsonscharities/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(255,235,59,0.3)]"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@PSGandSonsCharities"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#003d82] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(255,235,59,0.3)]"
                >
                  <Youtube size={20} />
                </a>
              </div>

              {/* Newsletter */}
              {/* <div className="space-y-4">
                <h4 className="text-base font-semibold text-white">Newsletter</h4>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white text-sm placeholder:text-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-400 text-[#003d82] rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/70 text-center md:text-left">
              &copy; {currentYear} PSG Institutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/70">
              <a href="#privacy" className="hover:text-yellow-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="#terms" className="hover:text-yellow-300 transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-white/30">|</span>
              <a href="#sitemap" className="hover:text-yellow-300 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;