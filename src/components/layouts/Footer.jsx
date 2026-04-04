import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Institutions", link: "#institutions" },
    { name: "Testimonials", link: "#testimonials" },
  ];

  const alumniPortals = [
    { name: "PSG Arts Alumni Association", link: "https://alumnitest.psgcas.psginstitutions.in/" },
    { name: "PSG Tech Alumni Association", link: "*" },
    { name: "PSG IMSR Alumni Association", link: "*" },
    { name: "PSG Sarvajana Alumni Association", link: "*" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/psgandsonscharities",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/company/psgandsonscharities/",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@PSGandSonsCharities",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-linear-to-br from-[#001a3d] to-[#003d82] text-white">
      {/* Main Footer Content */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* About Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <motion.a 
                href="#home" 
                className="flex items-center gap-3 w-fit"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src="/logo.png"
                  alt="PSG Institutions Logo"
                  className="h-12 md:h-14 w-auto object-contain"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-extrabold text-white leading-none tracking-tight">
                    PSG
                  </span>
                  <span className="text-[10px] md:text-[11px] text-white/70 uppercase tracking-[2px] mt-1">
                    Institutions
                  </span>
                </div>
              </motion.a>

              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed">
                A premier educational institution committed to excellence in
                education, research, and innovation since 1926. Shaping future
                leaders and professionals.
              </p>

              {/* Contact Items */}
              <div className="space-y-3">
                <motion.div 
                  className="flex items-start gap-2.5 text-white/80 text-sm hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <MapPin size={18} className="shrink-0 mt-0.5 text-yellow-400" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-2.5 text-white/80 text-sm hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone size={18} className="shrink-0 text-yellow-400" />
                  <a href="tel:+919876543210">98765 43210</a>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-2.5 text-white/80 text-sm hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail size={18} className="shrink-0 text-yellow-400" />
                  <a href="mailto:info@psginstitutions.in">info@psginstitutions.in</a>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-bold text-white relative pb-3">
                  Quick Links
                </h3>
                <div className="w-12 h-0.5 bg-linear-to-r from-yellow-400 to-transparent"></div>
              </div>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.link}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = link.link.slice(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="flex items-center gap-2 text-white/80 text-sm hover:text-yellow-300 transition-colors duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <motion.div whileHover={{ rotate: 90 }}>
                        <ArrowRight size={16} className="text-yellow-400 shrink-0" />
                      </motion.div>
                      <span>{link.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Alumni Portal Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-bold text-white relative pb-3">
                  Alumni Portal Links
                </h3>
                <div className="w-12 h-0.5 bg-linear-to-r from-yellow-400 to-transparent"></div>
              </div>

              <ul className="space-y-3">
                {alumniPortals.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 text-sm hover:text-yellow-300 transition-colors duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <motion.div whileHover={{ rotate: 90 }}>
                        <ArrowRight size={16} className="text-yellow-400 shrink-0" />
                      </motion.div>
                      <span>{link.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect With Us */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-bold text-white relative pb-3">
                  Connect With Us
                </h3>
                <div className="w-12 h-0.5 bg-linear-to-r from-yellow-400 to-transparent"></div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed">
                Stay updated with our latest news, events, and announcements.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#003d82] transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.15, y: -8 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 text-center md:text-left">
              &copy; {currentYear} PSG Institutions. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-white/70">
              <motion.a
                href="#privacy"
                className="hover:text-yellow-300 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                Privacy Policy
              </motion.a>
              <span className="text-white/30">|</span>
              <motion.a
                href="#terms"
                className="hover:text-yellow-300 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                Terms of Service
              </motion.a>
              <span className="text-white/30">|</span>
              <motion.a
                href="#sitemap"
                className="hover:text-yellow-300 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                Sitemap
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
