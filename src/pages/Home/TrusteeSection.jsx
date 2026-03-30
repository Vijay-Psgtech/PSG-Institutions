import React, { useState, useEffect } from "react";
import trusteeImg from "/images/trustee/truste.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

/* ── Google Fonts ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("trustee-fonts")) return;
    const link = document.createElement("link");
    link.id = "trustee-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Poppins:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

const trustees = [
  {
    name: "L. Gopalakrishnan",
    title: "Managing Trustee",
    quote:
      "PSG Institutions have always stood for excellence in education and innovation. Our commitment is to nurture talent, foster research, and build a future where knowledge empowers every individual. Through continuous growth and dedication, we aim to shape leaders who contribute meaningfully to society.",
    image: trusteeImg,
  },
  {
    name: "Dr. R. Soundararajan",
    title: "Chairman, PSG Group",
    quote:
      "Our legacy is built on the belief that education is the greatest equaliser. For nearly a century, PSG has remained steadfast in its mission — to open doors of opportunity for every deserving student, irrespective of background, and to produce graduates who are not just skilled, but truly humane.",
    image: trusteeImg,
  },
];

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.35, ease: "easeIn" } }),
};

const TrusteeSection = () => {
  const [[index, dir], setSlide] = useState([0, 0]);
  const current = trustees[index];

  const paginate = (newDir) => {
    setSlide(([i]) => {
      const next = (i + newDir + trustees.length) % trustees.length;
      return [next, newDir];
    });
  };

  return (
    <>
      <FontLoader />
      <section
        className="relative w-full overflow-hidden py-20 md:py-32"
        style={{
          /* PSG dark blue gradient background */
          background: "linear-gradient(135deg, #07091a 0%, #0d1230 50%, #090c20 100%)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Subtle dot grid — PSG blue */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #4A90E2 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* PSG blue glow top-left */}
        <div
          className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(51,51,204,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

          {/* ── Section label ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-block h-px w-10" style={{ background: "#4A90E2" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: "#7EB3FF" }}>
              Leadership
            </span>
          </motion.div>

          {/* ── Heading ── */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-white mb-14 leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 700,
            }}
          >
            What Our{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(90deg, #4A90E2, #7EB3FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trustees
            </span>{" "}
            Say.
          </motion.h2>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT — Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative frame — PSG blue */}
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(51,51,204,0.2) 0%, transparent 60%)",
                  border: "1px solid rgba(74,144,226,0.2)",
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-xl"
                  style={{ height: "clamp(320px, 48vw, 520px)" }}
                >
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(7,9,26,0.75) 0%, transparent 55%)",
                    }}
                  />
                  {/* Name badge */}
                  <div className="absolute bottom-6 left-6">
                    <p
                      className="text-white font-semibold text-base leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {current.name}
                    </p>
                    <p className="text-white/55 text-xs mt-0.5 tracking-wide">
                      {current.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide counter — PSG blue */}
              <div
                className="absolute -bottom-5 right-0 flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(74,144,226,0.1)",
                  border: "1px solid rgba(74,144,226,0.25)",
                }}
              >
                <span className="text-[#7EB3FF] font-bold text-sm tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-white/25 text-xs">/</span>
                <span className="text-white/40 text-xs tabular-nums">
                  {String(trustees.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            {/* RIGHT — Quote */}
            <div className="space-y-8 lg:pl-4">
              {/* Big quote mark — PSG blue */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Quote size={52} style={{ color: "rgba(74,144,226,0.3)" }} strokeWidth={1.5} />
              </motion.div>

              {/* Animated quote text */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.p
                  key={index}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-white/80 leading-[1.85] font-light"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
                >
                  {current.quote}
                </motion.p>
              </AnimatePresence>

              {/* Divider — PSG blue */}
              <div
                className="h-px w-full"
                style={{ background: "linear-gradient(90deg, rgba(74,144,226,0.5), transparent)" }}
              />

              {/* Animated name */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={`name-${index}`}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h3
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {current.name}
                  </h3>
                  <p className="text-sm mt-1 tracking-wide" style={{ color: "#7EB3FF" }}>
                    {current.title}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => paginate(-1)}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(74,144,226,0.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} className="text-white/70 group-hover:text-white transition-colors" />
                </button>

                {/* Dot indicators — PSG blue */}
                <div className="flex items-center gap-2">
                  {trustees.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide([i, i > index ? 1 : -1])}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === index ? "24px" : "8px",
                        height: "8px",
                        background: i === index ? "#3333CC" : "rgba(255,255,255,0.2)",
                      }}
                      aria-label={`Go to trustee ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => paginate(1)}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(74,144,226,0.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                  aria-label="Next"
                >
                  <ChevronRight size={18} className="text-white/70 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrusteeSection;