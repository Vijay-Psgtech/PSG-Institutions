import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, GraduationCap } from "lucide-react";
import { institutions } from "../../components/data/InstitutionsData.js";

const InstitutionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Categorize institutions
  const categories = {
    all: { name: "All Institutions", icon: "🏛️" },
    schools: { name: "Schools", icon: "🎓" },
    colleges: { name: "Colleges & Institutes", icon: "🏫" },
    medical: { name: "Medical & Healthcare", icon: "⚕️" },
  };

  const categorizeInstitutions = () => {
    const categorized = {
      all: institutions,
      schools: institutions.filter(
        (inst) =>
          inst.label.toLowerCase().includes("school") ||
          inst.label.toLowerCase().includes("primary"),
      ),
      colleges: institutions.filter(
        (inst) =>
          inst.label.toLowerCase().includes("college") ||
          (inst.label.toLowerCase().includes("institute") &&
            !inst.label.toLowerCase().includes("medical") &&
            !inst.label.toLowerCase().includes("nursing") &&
            !inst.label.toLowerCase().includes("physio") &&
            !inst.label.toLowerCase().includes("pharmacy")) ||
          inst.label.toLowerCase().includes("polytechnic"),
      ),
      medical: institutions.filter(
        (inst) =>
          inst.label.toLowerCase().includes("medical") ||
          inst.label.toLowerCase().includes("nursing") ||
          inst.label.toLowerCase().includes("physio") ||
          inst.label.toLowerCase().includes("pharmacy"),
      ),
    };
    return categorized;
  };

  const categorizedInstitutions = categorizeInstitutions();
  const displayedInstitutions = categorizedInstitutions[selectedCategory];

  return (
    <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs md:text-sm font-semibold tracking-wider text-[#0052ab] bg-blue-50 rounded-full uppercase">
            <GraduationCap size={16} />
            Our Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#003d82] via-[#0052ab] to-[#003d82] tracking-tight leading-tight mb-4">
            PSG Institutions
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            A comprehensive network of{" "}
            <span className="font-semibold text-[#003d82]">
              premier institutions
            </span>{" "}
            dedicated to excellence in education and healthcare
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#0052ab] to-transparent rounded-full"></div>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white shadow-lg shadow-blue-900/30"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-[#0052ab]/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{categories[category].icon}</span>
                <span>{categories[category].name}</span>
              </span>
              {selectedCategory === category && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0052ab] to-[#003d82] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="activeCategory"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Institutions Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedInstitutions.map((institution, index) => (
              <InstitutionCard
                key={institution.label}
                institution={institution}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
      </div>
    </section>
  );
};

// Institution Card Component
const InstitutionCard = ({ institution, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0052ab]/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={institution.image}
          alt={institution.label}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#003d82]/80 via-[#003d82]/40 to-transparent"
          animate={{
            opacity: isHovered ? 0.7 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Establishment Year Badge */}
        <motion.div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 + 0.2 }}
        >
          <Calendar size={14} className="text-[#0052ab]" />
          <span className="text-xs font-bold text-gray-800">
            Est. {institution.establishment}
          </span>
        </motion.div>

        {/* Hover Link Icon */}
        <motion.div
          className="absolute top-4 left-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <ExternalLink size={18} className="text-[#003d82]" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-[#0052ab] transition-colors duration-300">
          {institution.label}
        </h3>

        {/* Visit Button */}
        <a
          href={institution.webLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0052ab] hover:text-[#003d82] transition-colors duration-300 group/link"
        >
          <span>Visit Website</span>
          <ExternalLink
            size={16}
            className="group-hover/link:translate-x-1 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003d82] via-[#0052ab] to-[#003d82]"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

// Stats Card Component
const StatCard = ({ number, label, color }) => {
  return (
    <motion.div
      className="relative group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
      whileHover={{ y: -4 }}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.p
          className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-br ${color} bg-clip-text text-transparent mb-2`}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {number}
        </motion.p>
        <p className="text-xs md:text-sm font-medium text-gray-600">{label}</p>
      </div>

      {/* Decorative Circle */}
      <div
        className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      ></div>
    </motion.div>
  );
};

export default InstitutionsSection;
