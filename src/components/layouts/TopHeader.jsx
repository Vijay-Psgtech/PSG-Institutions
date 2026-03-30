import React from "react";
import { Mail, Phone, Facebook, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

/**
 * TopHeader — fixed z-[60], transparent gradient info bar that overlays the hero.
 * Header sits at z-50. TopHeader floats above it while hero is in view.
 * It scrolls away with the page naturally (does not re-appear).
 */
const TopHeader = () => {
  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/psgandsonscharities", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/psgandsonscharities/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@PSGandSonsCharities", label: "YouTube" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-60"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.0) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5">

          {/* Contact info */}
          <div className="flex items-center gap-6 text-[13px]">
            <motion.a
              href="mailto:charity@psgtech.edu"
              whileHover={{ x: 2 }}
              className="flex items-center gap-1.5 text-white/65 hover:text-[#7FDB00] transition-colors duration-200"
            >
              <Mail size={13} className="shrink-0" />
              <span className="hidden sm:inline">charity@psgtech.edu</span>
            </motion.a>

            <motion.a
              href="tel:04222572265"
              whileHover={{ x: 2 }}
              className="flex items-center gap-1.5 text-white/65 hover:text-[#7FDB00] transition-colors duration-200"
            >
              <Phone size={13} className="shrink-0" />
              <span>0422 257 2265</span>
            </motion.a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-7 h-7 rounded-full text-white/55 hover:text-[#1a3a3a] hover:bg-[#7FDB00] border border-white/12 transition-all duration-200"
              >
                <Icon size={13} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default TopHeader;