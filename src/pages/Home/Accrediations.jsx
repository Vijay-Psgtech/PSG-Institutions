import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { acceridationsLogo } from "../../components/data/AccrediationsData";

/* PSG Blue constants */
const PSG_BLUE = "#3333CC";
const PSG_BLUE_LIGHT = "#4A90E2";
const PSG_BLUE_PALE = "#EEF2FF";
const PSG_BLUE_DARK = "#1a1a7a";

const Accreditations = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 600);
    }
  };

  return (
    <section className="bg-linear-to-b from-white via-blue-50/30 to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20 pb-12 md:pb-16 border-b border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Stat 1 */}
          <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg" style={{ background: PSG_BLUE_PALE }}>
                <svg className="w-8 h-8" style={{ color: PSG_BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 10H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </div>
            </div>
            <motion.h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2" animate={{ opacity: [0, 1] }} transition={{ delay: 0.2, duration: 0.8 }}>
              15+
            </motion.h3>
            <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-wider mb-4 uppercase">Global Accreditations</p>
            <motion.div
              className="h-1 rounded-full"
              style={{ background: `linear-gradient(to right, ${PSG_BLUE}, ${PSG_BLUE_LIGHT})` }}
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ margin: "0 auto", height: "4px", borderRadius: "9999px", background: `linear-gradient(to right, ${PSG_BLUE}, ${PSG_BLUE_LIGHT})` }}
            />
          </motion.div>

          {/* Stat 2 */}
          <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg" style={{ background: PSG_BLUE_PALE }}>
                <svg className="w-8 h-8" style={{ color: PSG_BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <motion.h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2" animate={{ opacity: [0, 1] }} transition={{ delay: 0.3, duration: 0.8 }}>
              120+
            </motion.h3>
            <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-wider mb-4 uppercase">Countries Recognized</p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ margin: "0 auto", height: "4px", borderRadius: "9999px", background: `linear-gradient(to right, ${PSG_BLUE}, ${PSG_BLUE_LIGHT})` }}
            />
          </motion.div>

          {/* Stat 3 */}
          <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg" style={{ background: PSG_BLUE_PALE }}>
                <svg className="w-8 h-8" style={{ color: PSG_BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <motion.h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2" animate={{ opacity: [0, 1] }} transition={{ delay: 0.4, duration: 0.8 }}>
              99.9%
            </motion.h3>
            <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-wider mb-4 uppercase">Compliance Rate</p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ margin: "0 auto", height: "4px", borderRadius: "9999px", background: `linear-gradient(to right, ${PSG_BLUE}, ${PSG_BLUE_LIGHT})` }}
            />
          </motion.div>
        </motion.div>

        {/* Accreditations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: PSG_BLUE_DARK }}>
              Trusted Certifications
            </h2>
            <p className="text-gray-600">Industry-recognized accreditations from leading organizations</p>
          </div>

          {/* Carousel */}
          <div className="relative group">
            <motion.div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4 sm:px-6 lg:px-8 scrollbar-hide"
            >
              {acceridationsLogo.map((logo, index) => (
                <motion.div
                  key={index}
                  className="shrink-0 w-64 md:w-72"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <motion.div
                    className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 h-48 md:h-56 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group/card"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 20px 25px -5px rgba(51,51,204,0.1)",
                      borderColor: PSG_BLUE_LIGHT,
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Accreditation ${index + 1}`}
                      className="max-w-20 md:max-w-24 max-h-20 md:max-h-24 object-contain mb-4 group-hover/card:scale-110 transition-transform duration-300"
                    />
                    <div className="text-center">
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: PSG_BLUE }}>Certified</div>
                      <div className="text-sm text-gray-600 mt-1">Active &amp; Verified</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Buttons — PSG blue hover */}
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-30 p-2 md:p-3 rounded-full bg-white border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => { if (!e.currentTarget.disabled) { e.currentTarget.style.background = PSG_BLUE_PALE; e.currentTarget.style.borderColor = PSG_BLUE; } }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-30 p-2 md:p-3 rounded-full bg-white border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => { if (!e.currentTarget.disabled) { e.currentTarget.style.background = PSG_BLUE_PALE; e.currentTarget.style.borderColor = PSG_BLUE; } }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: PSG_BLUE_DARK }}>Quality Assurance</h3>
            <p className="text-gray-600 leading-relaxed">
              From humble beginnings, we've grown to establish{" "}
              <span className="font-semibold text-slate-900">comprehensive quality standards and accreditations</span>, touching
              countless organizations across multiple sectors with unwavering commitment to excellence.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: PSG_BLUE_DARK }}>Our Commitment</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded on principles of integrity and excellence, our trust stands as a beacon of{" "}
              <span className="font-semibold text-slate-900">verified quality for all communities</span>, preserving a legacy of
              standards and continuous improvement across every operation.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Accreditations;