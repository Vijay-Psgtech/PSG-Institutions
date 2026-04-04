import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { institutionsData } from "../../components/data/InstitutionsData";
import { Link } from "react-router-dom";

/* PSG Blue constants */
const PSG_BLUE = "#3333CC";
const PSG_BLUE_LIGHT = "#4A90E2";
const PSG_BLUE_PALE = "#EEF2FF";
const PSG_BLUE_DARK = "#1a1a7a";

/* ── Font Loader ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("institutions-fonts")) return;
    const link = document.createElement("link");
    link.id = "institutions-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,700&family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ── Global Styles ── */
const GlobalStyles = () => (
  <style id="institutions-global-style">{`
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes floatingSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes shimmerShine {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }

    /* PSG blue animated gradient overlay */
    .animated-gradient-overlay {
      background: linear-gradient(
        135deg,
        rgba(255,255,255,0.92) 0%,
        rgba(238,242,255,0.85) 25%,
        rgba(255,255,255,0.88) 50%,
        rgba(224,231,255,0.83) 75%,
        rgba(255,255,255,0.92) 100%
      );
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
    }

    .floating-element { animation: floatingSlow 6s ease-in-out infinite; }

    .shimmer-effect {
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
      background-size: 1000px 100%;
      animation: shimmerShine 3s infinite;
    }

    .glassmorphic {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    /* PSG blue active category button */
    .category-btn-active {
      background: linear-gradient(135deg, ${PSG_BLUE_DARK} 0%, ${PSG_BLUE} 100%);
      box-shadow: 0 8px 32px rgba(51, 51, 204, 0.3);
    }

    .gradient-text {
      background: linear-gradient(135deg, ${PSG_BLUE_DARK} 0%, ${PSG_BLUE} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .badge-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(51, 51, 204, 0.08);
      font-size: 16px;
      margin-right: 8px;
    }
  `}</style>
);

/* ── Icons ── */
const InstituionIcons = {
  School: () => <span className="text-xl">🎓</span>,
  College: () => <span className="text-xl">📚</span>,
  Medical: () => <span className="text-xl">⚕️</span>,
};

/* ── Decorative Background ── */
const DecorativeElements = () => (
  <>
    <motion.div
      className="absolute -top-20 -left-20 w-60 h-60 floating-element"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.04, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{ background: `radial-gradient(circle, ${PSG_BLUE} 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }}
    />
    <motion.div
      className="absolute -bottom-32 -right-32 w-96 h-96 floating-element"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.03, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.9 }}
      style={{ background: `radial-gradient(circle, ${PSG_BLUE} 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }}
    />
  </>
);

/* ── Category Badge ── */
const CategoryBadge = ({ label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className={`px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 relative overflow-hidden group ${
      isActive ? "category-btn-active text-white shadow-lg" : "glassmorphic text-gray-700"
    }`}
    style={!isActive ? {
      "--hover-color": PSG_BLUE,
    } : {}}
    onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = PSG_BLUE; } }}
    onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = ""; } }}
  >
    {!isActive && (
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    )}
    <span className="relative z-10">{label}</span>
  </motion.button>
);

/* ── Main Section ── */
const InstitutionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = {
    all: "All Institutions",
    schools: "Schools",
    colleges: "Colleges",
    medical: "Medical",
  };

  const filtered = {
    all: institutionsData,
    schools: institutionsData.filter((i) => i.category === "School"),
    colleges: institutionsData.filter((i) => i.category === "College"),
    medical: institutionsData.filter((i) => i.category === "Medical"),
  };

  return (
    <section id="institutions" className="relative overflow-hidden">
      <FontLoader />
      <GlobalStyles />

      <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50 to-white" />
      <div className="animated-gradient-overlay absolute inset-0" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DecorativeElements />
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(51,51,204,.05) 25%, rgba(51,51,204,.05) 26%, transparent 27%, transparent 74%, rgba(51,51,204,.05) 75%, rgba(51,51,204,.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(51,51,204,.05) 25%, rgba(51,51,204,.05) 26%, transparent 27%, transparent 74%, rgba(51,51,204,.05) 75%, rgba(51,51,204,.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 py-32 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="px-4 py-2 rounded-full glassmorphic">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: PSG_BLUE }}>
                ✨ Our Educational Ecosystem
              </span>
            </div>
          </motion.div>

          {/* PSG Blue title */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold"
            style={{
              fontFamily: "Playfair Display",
              background: `linear-gradient(135deg, ${PSG_BLUE_DARK} 0%, ${PSG_BLUE} 50%, ${PSG_BLUE_DARK} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PSG Institutions
          </h2>

          <p className="mt-8 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Explore our renowned network of world-class institutions dedicated
            to shaping the future through excellence in education, research, and
            healthcare innovation.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex justify-center gap-3 mb-20 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.keys(categories).map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
            >
              <CategoryBadge
                label={categories[key]}
                isActive={selectedCategory === key}
                onClick={() => setSelectedCategory(key)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Institutions Grid */}
        <motion.div className="grid md:grid-cols-3 gap-10 lg:gap-14" layout>
          {filtered[selectedCategory].map((inst, index) => (
            <InstitutionCard key={inst.slug} inst={inst} index={index} />
          ))}
        </motion.div>

        {filtered[selectedCategory].length === 0 && (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-gray-500 text-lg">No institutions found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

/* ── Institution Card ── */
const InstitutionCard = ({ inst, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/institutions/${inst.slug}`} className="group">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-105 rounded-3xl overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 rounded-3xl border border-white/30 shadow-2xl" />

        <div className="relative w-full h-full overflow-hidden bg-gray-900">
          <img
            src={inst.image}
            alt={inst.label}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{ transform: isHovered ? "scale(1.12) rotate(1deg)" : "scale(1) rotate(0deg)" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/30" />

          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              style={{ background: "radial-gradient(circle at 30% 30%, rgba(74,144,226,0.25) 0%, transparent 50%)" }}
            />
          )}
        </div>

        <div className="absolute inset-0 p-10 flex flex-col justify-between">
          {/* Category badge — PSG blue */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 w-fit">
              <span className="text-white/90 text-sm font-semibold tracking-wider">{inst.category}</span>
            </div>
          </motion.div>

          {/* Title & CTA */}
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <motion.div
              className="mb-6 relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
            >
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-3" style={{ fontFamily: "Playfair Display" }}>
                {inst.label}
              </h3>
              {/* PSG blue accent line */}
              <div className="w-16 h-1 rounded-full" style={{ background: "linear-gradient(to right, #4A90E2, #7EB3FF)" }} />
            </motion.div>

            <p className="text-gray-200 text-sm leading-relaxed mb-6 font-light max-w-xs">
              {inst.tagline || "Delivering excellence in education, innovation and community service."}
            </p>

            {/* CTA — PSG blue */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.6, x: -10 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            >
              <span style={{ color: "#7EB3FF" }} className="group-hover:opacity-90 transition-opacity">
                Explore Details
              </span>
              <motion.span
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: "#7EB3FF" }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default InstitutionsSection;
