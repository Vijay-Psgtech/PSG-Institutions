import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Header — fixed, sits at z-50.
 * While hero is visible (not scrolled): transparent, text white, offset by TopHeader height (~36px).
 * On scroll: solid white with shadow, snaps to top-0.
 */
const TOPBAR_H = 36; // px — approx height of TopHeader

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > TOPBAR_H + 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => () => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    // { name: "About Us", link: "/about" },
    {
      name: "Institutions",
      subItems: [
        {
          groupName: "Schools",
          items: [
            { name: "PSG Sarvajana High School", slug: "psg-sarvajana-high-school" },
            { name: "PSG Primary School, Vedapatti", slug: "psg-primary-school-vedapatti" },
            { name: "PSG Primary School, Peelamedu", slug: "psg-primary-school-peelamedu" },
            { name: "PSG High School, Vedapatti", slug: "psg-high-school-vedapatti" },
            { name: "PSG Public Schools", slug: "psg-public-schools" },
            { name: "PSG Matriculation School", slug: "psg-matriculation-school" },
            { name: "PSG World School", slug: "psg-world-school" },
          ],
        },
        {
          groupName: "Colleges & Institutes",
          items: [
            { name: "PSG College of Arts & Sciences", slug: "psg-college-of-arts-sciences" },
            { name: "PSG College of Technology", slug: "psg-college-of-technology" },
            { name: "PSG Institute of Management", slug: "psg-institute-of-management" },
            { name: "PSG Institute of Advanced Studies", slug: "psg-institute-of-advanced-studies" },
            { name: "PSG Institute of Technology & Applied Research", slug: "psg-institute-of-technology-applied-research" },
            { name: "PSG Institute of Architecture & Planning", slug: "psg-institute-of-architecture-planning" },
            { name: "PSG Polytechnic College", slug: "psg-polytechnic-college" },
          ],
        },
        {
          groupName: "Medical & Healthcare",
          items: [
            { name: "PSG Institute of Medical Sciences & Research", slug: "psg-institute-of-medical-sciences-research" },
            { name: "PSG College of Nursing", slug: "psg-college-of-nursing" },
            { name: "PSG College of Physiotherapy", slug: "psg-college-of-physiotherapy" },
            { name: "PSG College of Pharmacy", slug: "psg-college-of-pharmacy" },
          ],
        },
      ],
    },
    {
      name: "Alumni",
      subItems: [
        { name: "PSG Arts Alumni Association", link: "http://localhost:5173/" },
        { name: "PSG Tech Alumni Association", link: "*" },
        { name: "PSG IMSR Alumni Association", link: "*" },
        { name: "PSG Sarvajana Alumni Association", link: "*" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  const toggleDropdown = (i) => setActiveDropdown(activeDropdown === i ? null : i);
  const toggleMobileMenu = () => { setIsMobileMenuOpen((v) => !v); setActiveDropdown(null); };

  const isTransparent = !isScrolled && !isMobileMenuOpen;

  const openDropdown = (i) => {
    if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
    setActiveDropdown(i);
  };
  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => { setActiveDropdown(null); closeTimeoutRef.current = null; }, 150);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed left-0 right-0 z-50 transition-all duration-500"
      style={{
        top: isScrolled ? 0 : TOPBAR_H,
        background: isTransparent ? "transparent" : "rgba(255,255,255,0.98)",
        backdropFilter: isTransparent ? "none" : "blur(16px)",
        boxShadow: isTransparent ? "none" : "0 4px 24px rgba(0,0,0,0.10)",
        borderBottom: isTransparent ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-7 md:py-4">

          {/* ── Logo ── */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/logo.png"
              alt="PSG Institutions Logo"
              className="h-18 md:h-13 w-auto object-contain"
              style={{ filter: isTransparent ? "brightness(1) invert(0)" : "none", transition: "filter 0.5s" }}
            />
            <motion.img
              src="/100yearsLogo.png"
              alt="PSG 100 Years"
              className="h-8 md:h-12 w-auto object-contain"
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ filter: isTransparent ? "brightness(1) invert(1)" : "none", transition: "filter 0.5s" }}
            />
            <div className="hidden sm:flex flex-col">
              <span
                className="text-2xl md:text-[1.7rem] font-black leading-none tracking-tight transition-colors duration-500"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: isTransparent ? "#fff" : "#1a3a3a",
                }}
              >
                PSG
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-[2px] mt-0.5 text-[#7FDB00]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Institutions
              </span>
            </div>
          </motion.a>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex gap-0.5">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.subItems && openDropdown(index)}
                  onMouseLeave={() => item.subItems && scheduleClose()}
                >
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.03 }}
                    className="relative flex items-center gap-1 px-3.5 py-2 rounded-lg font-medium text-[14px] transition-all duration-300 group"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: isTransparent ? "rgba(255,255,255,0.88)" : "#374151",
                    }}
                  >
                    {/* hover bg */}
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: isTransparent ? "rgba(255,255,255,0.08)" : "rgba(127,219,0,0.07)" }}
                    />
                    <span className="relative">{item.name}</span>
                    {item.subItems && (
                      <motion.span
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative"
                        style={{ color: isTransparent ? "rgba(255,255,255,0.6)" : "#9ca3af" }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    )}
                    {/* underline accent */}
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-[#7FDB00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </motion.a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.subItems && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        onMouseEnter={() => openDropdown(index)}
                        onMouseLeave={scheduleClose}
                        className={`absolute top-full left-0 mt-2 z-50 bg-white rounded-2xl border border-gray-100 py-3 ${
                          item.name === "Institutions" ? "w-180" : "w-72"
                        }`}
                        style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)" }}
                      >
                        {item.subItems[0]?.items ? (
                          <div className="grid grid-cols-3 gap-2 p-4">
                            {item.subItems.map((group, gi) => (
                              <div key={gi}>
                                <h4
                                  className="px-3 py-1.5 text-[11px] font-bold text-[#7FDB00] uppercase tracking-[0.15em]"
                                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                  {group.groupName}
                                </h4>
                                <ul>
                                  {group.items.map((s, si) => (
                                    <li key={si}>
                                      <Link
                                        to={`/institutions/${s.slug}`}
                                        onClick={() => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); setActiveDropdown(null); }}
                                        className="block px-3 py-2 text-[13.5px] text-gray-600 hover:text-[#7FDB00] hover:bg-[#7FDB00]/8 rounded-lg transition-all duration-150 font-medium"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                      >
                                        {s.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="py-1">
                            {item.subItems.map((sub, si) => (
                              <li key={si}>
                                <a
                                  href={sub.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-5 py-2.5 text-[13.5px] text-gray-600 hover:text-[#7FDB00] hover:bg-[#7FDB00]/8 border-l-2 border-transparent hover:border-[#7FDB00] transition-all duration-200 font-medium"
                                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Apply Now CTA ── */}
          <div className="hidden lg:flex items-center">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 10px 30px rgba(127,219,0,0.3)" }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-2.5 rounded-xl font-semibold text-[13px] uppercase tracking-wider transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.1em",
                ...(isTransparent
                  ? {
                      background: "rgba(127,219,0,0.15)",
                      color: "#fff",
                      border: "1px solid rgba(127,219,0,0.45)",
                    }
                  : {
                      background: "linear-gradient(135deg, #7FDB00, #5FBB46)",
                      color: "#1a3a3a",
                      border: "none",
                    }),
              }}
            >
              Apply Now
            </motion.button>
          </div>

          {/* ── Mobile toggle ── */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg"
            style={{ background: isTransparent ? "rgba(255,255,255,0.08)" : "rgba(127,219,0,0.07)" }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} style={{ color: isTransparent ? "#fff" : "#1a3a3a" }} />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} style={{ color: isTransparent ? "#fff" : "#1a3a3a" }} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ── Mobile nav ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-white/15"
            >
              <ul className="py-3 space-y-0.5">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.link}
                        onClick={() => !item.subItems && toggleMobileMenu()}
                        className="flex-1 py-3 px-1 text-white font-semibold text-[15px] hover:text-[#7FDB00] transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.name}
                      </a>
                      {item.subItems && (
                        <button onClick={() => toggleDropdown(index)} className="p-3 text-white/60 hover:text-[#7FDB00]">
                          <motion.div animate={{ rotate: activeDropdown === index ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.subItems && activeDropdown === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-white/8 backdrop-blur-sm rounded-xl mb-1"
                        >
                          {item.subItems[0]?.items
                            ? item.subItems.map((group, gi) => (
                                <li key={gi} className="py-1">
                                  <div className="px-4 py-1.5 text-[11px] font-bold text-[#7FDB00] uppercase tracking-[0.15em]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    {group.groupName}
                                  </div>
                                  {group.items.map((s, si) => (
                                    <Link key={si} to={`/institutions/${s.slug}`} onClick={toggleMobileMenu}
                                      className="block px-5 py-2.5 text-white/75 text-[13px] hover:text-[#7FDB00] hover:bg-white/8 transition-all font-medium"
                                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                      {s.name}
                                    </Link>
                                  ))}
                                </li>
                              ))
                            : item.subItems.map((sub, si) => (
                                <li key={si}>
                                  <a href={sub.link} target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}
                                    className="block px-5 py-2.5 text-white/75 text-[13px] hover:text-[#7FDB00] border-l-2 border-transparent hover:border-[#7FDB00] transition-all font-medium"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                  >
                                    {sub.name}
                                  </a>
                                </li>
                              ))
                          }
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
                <li className="pt-3 pb-2">
                  <button
                    onClick={toggleMobileMenu}
                    className="w-full py-3.5 rounded-xl font-bold text-[13px] uppercase tracking-wider text-[#1a3a3a]"
                    style={{ background: "linear-gradient(135deg, #7FDB00, #5FBB46)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
                  >
                    Apply Now
                  </button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;