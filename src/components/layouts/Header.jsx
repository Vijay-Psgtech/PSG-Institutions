import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const menuItems = [
    { name: "Home", link: "#home" },
    {
      name: "About",
      link: "#about",
      subItems: [
        { name: "Our History", link: "#history" },
        { name: "Vision & Mission", link: "#vision" },
      ],
    },
    {
      name: "Institutions",
      link: "#institutions",
      subItems: [
        {
          groupName: "Schools",
          items: [
            { name: "PSG Sarvajana High School", link: "*" },
            { name: "PSG Primary School, Vedapatti", link: "*" },
            { name: "PSG Primary School, Peelamedu", link: "*" },
            { name: "PSG High School, Vedapatti", link: "*" },
            { name: "PSG Public Schools", link: "*" },
          ],
        },
        {
          groupName: "Colleges & Institutes",
          items: [
            { name: "PSG College of Arts & Sciences", link: "*" },
            { name: "PSG College of Technology", link: "*" },
            { name: "PSG Institute of Management", link: "*" },
            { name: "PSG Institute of Advanced Studies", link: "*" },
            {
              name: "PSG Institute of Technology & Applied Research",
              link: "*",
            },
            { name: "PSG Institute of Architecture & Planning", link: "*" },
            { name: "PSG Polytechnic College", link: "*" },
          ],
        },
        {
          groupName: "Medical & Healthcare",
          items: [
            { name: "PSG Institute of Medical Sciences & Research", link: "*" },
            { name: "PSG College of Nursing", link: "*" },
            { name: "PSG College of Physiotherapy", link: "*" },
            { name: "PSG College of Pharmacy", link: "*" },
          ],
        },
      ],
    },
    { name: "Events", link: "#events" },
    { name: "Achievements", link: "#achievements" },
    { name: "Placements", link: "#placements" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled
          ? "shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
          : "shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:py-5 relative">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            {/* Logo Image */}
            <img
              src="/logo.png"
              alt="PSG Institutions Logo"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#003d82] to-[#0052ab] bg-clip-text text-transparent leading-none tracking-tight">
                PSG
              </span>
              <span className="text-[9px] md:text-[10px] lg:text-[15px] text-gray-600 uppercase tracking-[2px] mt-0.5">
                Institutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex gap-1">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.subItems) {
                      if (closeTimeoutRef.current) {
                        clearTimeout(closeTimeoutRef.current);
                        closeTimeoutRef.current = null;
                      }
                      setActiveDropdown(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.subItems) {
                      closeTimeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                        closeTimeoutRef.current = null;
                      }, 150);
                    }
                  }}
                >
                  <a
                    href={item.link}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-gray-700 font-medium text-[15px] rounded-lg hover:text-[#0052ab] hover:bg-[#0052ab]/5 transition-all duration-300 relative group"
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-500 ${activeDropdown === index ? "rotate-180" : ""}`}
                      />
                    )}
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-[#0052ab] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>

                  {item.subItems && (
                    <div
                      onMouseEnter={() => {
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = null;
                        }
                        setActiveDropdown(index);
                      }}
                      onMouseLeave={() => {
                        closeTimeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null);
                          closeTimeoutRef.current = null;
                        }, 150);
                      }}
                      className={`absolute top-full left-0 mt-1 z-50 bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-100 py-2 ${item.name === "Institutions" ? "w-180" : "w-50"} transition-all duration-300 ${
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {Array.isArray(item.subItems) &&
                      item.subItems[0] &&
                      item.subItems[0].items ? (
                        <div className="grid grid-cols-3 gap-4 p-4">
                          {item.subItems.map((group, gi) => (
                            <div key={gi} className="min-w-[160px]">
                              <h4 className="px-2 py-1 text-sm font-semibold text-gray-800">
                                {group.groupName}
                              </h4>
                              <ul>
                                {group.items.map((s, si) => (
                                  <li key={si}>
                                    <a
                                      href={s.link}
                                      className="block px-2 py-2 text-gray-700 text-sm hover:bg-[#0052ab]/5 hover:text-[#0052ab] rounded transition"
                                    >
                                      {s.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul>
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem.link}
                                className="block px-5 py-3 text-gray-700 text-sm border-l-3 border-transparent hover:bg-[#0052ab]/5 hover:text-[#0052ab] hover:border-[#0052ab] hover:pl-6 transition-all duration-300"
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <button className="bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wider shadow-[0_4px_12px_rgba(0,82,171,0.3)] hover:shadow-[0_6px_20px_rgba(0,82,171,0.4)] transform hover:-translate-y-0.5 transition-all duration-300">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-[#003d82]" />
            ) : (
              <Menu size={24} className="text-[#003d82]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-4 space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <a
                    href={item.link}
                    onClick={() => !item.subItems && toggleMobileMenu()}
                    className="flex-1 py-3.5 text-gray-700 font-medium text-base hover:text-[#0052ab] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                  {item.subItems && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="p-3.5 text-gray-600 hover:text-[#0052ab] transition-colors duration-300"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.subItems && (
                  <ul
                    className={`overflow-hidden transition-all duration-300 bg-[#0052ab]/3 rounded-lg my-1 ${
                      activeDropdown === index ? "max-h-72" : "max-h-0"
                    }`}
                  >
                    {Array.isArray(item.subItems) &&
                    item.subItems[0] &&
                    item.subItems[0].items
                      ? item.subItems.map((group, gi) => (
                          <li key={gi} className="py-1">
                            <div className="px-5 py-2 text-sm font-semibold text-gray-800">
                              {group.groupName}
                            </div>
                            <ul>
                              {group.items.map((s, si) => (
                                <li key={si}>
                                  <a
                                    href={s.link}
                                    onClick={toggleMobileMenu}
                                    className="block py-3 px-5 text-gray-600 text-sm border-l-3 border-transparent hover:text-[#0052ab] hover:bg-[#0052ab]/5 hover:border-[#0052ab] hover:pl-6 transition-all duration-300"
                                  >
                                    {s.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))
                      : item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              onClick={toggleMobileMenu}
                              className="block py-3 px-5 text-gray-600 text-sm border-l-3 border-transparent hover:text-[#0052ab] hover:bg-[#0052ab]/5 hover:border-[#0052ab] hover:pl-6 transition-all duration-300"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Mobile CTA */}
            <li className="pt-4">
              <button
                onClick={toggleMobileMenu}
                className="w-full bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg"
              >
                Apply Now
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
