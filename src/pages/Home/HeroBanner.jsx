import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── Google Fonts injected once ─────────────────────────── */
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ─── Animated counter ───────────────────────────────────── */
const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        start = to;
        clearInterval(timer);
      }
      if (ref.current) ref.current.textContent = start + suffix;
    }, 24);
    return () => clearInterval(timer);
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
};

/* ─── Main component ─────────────────────────────────────── */
const HeroBanner = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const textY = useTransform(scrollY, [0, 400], [0, 60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToSection = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <FontLoader />

      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* ── Parallax background ── */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <div
            className="absolute inset-[-10%] bg-cover bg-center"
            style={{ backgroundImage: `url('/About3.jpg')` }}
          />
        </motion.div>

        {/* ── Layered overlays ── */}
        {/* PSG Blue deep base */}
        <div className="absolute inset-0 z-1 bg-[#0a0e2e]/60" />
        {/* Vignette */}
        <div
          className="absolute inset-0 z-2"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        {/* Bottom fade to white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-3"
          style={{
            background: "linear-gradient(to bottom, transparent, #fff)",
          }}
        />

        {/* ── Subtle animated dot grid (PSG blue) ── */}
        <motion.div
          className="absolute inset-0 z-2 opacity-[0.05] pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle, #4A90E2 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* ── Diagonal light sweep ── */}
        <motion.div
          className="absolute inset-0 z-2 pointer-events-none"
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(74,144,226,0.06) 50%, transparent 60%)",
          }}
        />

        {/* ── Content ── */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center w-full"
          style={{ y: textY, opacity }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-7 md:gap-9"
          >
            {/* Badge — PSG blue accent */}
            <motion.div variants={fadeUp}>
              <div
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#4A90E2]/40 bg-[#3333CC]/10 backdrop-blur-md"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span
                  className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full"
                  style={{ boxShadow: "0 0 6px #4A90E2" }}
                >
                  <motion.span
                    className="block w-1.5 h-1.5 bg-[#4A90E2] rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
                <span className="text-xs font-semibold text-[#7EB3FF] uppercase tracking-[0.2em]">
                  Excellence Since 1926
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="space-y-2">
              <p
                className="text-white/55 text-sm md:text-base uppercase tracking-[0.25em] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                PSG &amp; Sons' Charities
              </p>
              <h1
                className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Transform Your Future
              </h1>
              <div className="flex items-center justify-center gap-4 mt-1">
                <span className="flex-1 max-w-30 h-px bg-linear-to-r from-transparent to-[#4A90E2]/60" />
                <h2
                  className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-semibold leading-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    background:
                      "linear-gradient(135deg, #7EB3FF 0%, #B3D4FF 40%, #ffffff 55%, #B3D4FF 70%, #4A90E2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  with Quality Education
                </h2>
                <span className="flex-1 max-w-30 h-px bg-linear-to-l from-transparent to-[#4A90E2]/60" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/65 max-w-2xl leading-relaxed font-light"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Discover world-class institutions dedicated to excellence,
              innovation, and empowering the next generation of leaders and
              changemakers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 18px 45px rgba(51,51,204,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl font-semibold text-white text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, #2B2FBF 0%, #3F43D9 40%, #5A7FFF 60%, #3F43D9 80%, #2B2FBF 100%)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                {/* Glossy sweep on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                  }}
                />
                <span className="relative">Explore Programs</span>
                <ArrowRight
                  size={17}
                  className="relative group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToSection}
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border border-white/30 text-white/90 font-medium text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Thin divider */}
            <motion.div
              variants={fadeUp}
              className="w-16 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"
            />

            {/* Key numbers inline — PSG blue accent */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-8 md:gap-14"
            >
              {[
                { num: "100+", label: "Years of Excellence" },
                { num: "20+", label: "Institutions" },
                { num: "50K+", label: "Happy Students" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold text-[#7EB3FF]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-white/50 text-xs uppercase tracking-widest mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToSection}
              className="flex flex-col items-center gap-2 group"
              whileHover={{ scale: 1.1 }}
            >
              <span
                className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.25em] group-hover:text-[#7EB3FF] transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/30 group-hover:text-[#7EB3FF] transition-colors duration-300"
              >
                <ChevronDown size={22} strokeWidth={1.5} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroBanner;