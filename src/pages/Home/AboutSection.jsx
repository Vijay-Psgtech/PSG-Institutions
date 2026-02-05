import React from "react";
import aboutImg from "../../assets/images/about/about1.webp";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs md:text-sm font-semibold tracking-wider text-[#0052ab] bg-blue-50 rounded-full uppercase">
            Our Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#003d82] via-[#0052ab] to-[#003d82] tracking-tight leading-tight">
            About PSG Institutions
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#0052ab] to-transparent rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#003d82] via-[#0052ab] to-blue-600 rounded-3xl opacity-10 blur-xl"></div>
            
            {/* Main Image Container */}
            <motion.div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,61,130,0.3)] ring-1 ring-gray-900/5"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.img
                src={aboutImg}
                alt="PSG Institutions - Excellence in Education Since 1926"
                className="w-full h-auto object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003d82]/20 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Floating Stats Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl ring-1 ring-gray-900/5 hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-center">
                <p className="text-3xl font-extrabold text-[#003d82]">100</p>
                <p className="text-xs font-medium text-gray-600 mt-1">Years of Legacy</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            className="order-1 lg:order-2 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Establishment Info */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                A Legacy of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003d82] to-[#0052ab]">
                  Excellence & Service
                </span>
              </h3>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                Established in <span className="font-semibold text-[#003d82]">1926</span> as 
                <span className="font-semibold"> PSG & Sons' Charities</span> by the four visionary sons of 
                P.S. Govindasamy Naidu.
              </p>
            </div>

            {/* Main Description */}
            <div className="space-y-5">
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                The founders — <span className="font-medium text-gray-800">Venkataswamy Naidu, Rangaswamy Naidu, Ganga Naidu,</span> and{" "}
                <span className="font-medium text-gray-800">Narayanaswamy Naidu</span> — established this trust with a noble purpose: 
                creating a <span className="italic">sarvajana school</span> accessible to all, after facing denial from British-run institutions.
              </p>

              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                In an extraordinary act of philanthropy, the four brothers voluntarily divided their ancestral properties into five parts, 
                reserving one-fifth (amounting to <span className="font-semibold text-[#003d82]">₹2.01 lakhs</span>) to create this charitable trust.
              </p>

              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                From these humble yet determined beginnings, the trust has grown to establish a diverse array of{" "}
                <span className="font-semibold text-gray-800">educational institutions, healthcare facilities,</span> and{" "}
                <span className="font-semibold text-gray-800">industrial institutes</span>, touching countless lives across generations.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <motion.div
                className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50"
                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,61,130,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-[#003d82]">4</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Visionary Founders</p>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50"
                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,61,130,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-[#003d82]">1926</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Year Established</p>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50"
                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,61,130,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-[#003d82]">₹2.01L</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Initial Endowment</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <motion.button
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white rounded-xl font-semibold text-sm md:text-base shadow-lg shadow-blue-900/30 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0052ab] to-[#003d82] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Explore Our History</span>
                <svg 
                  className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;