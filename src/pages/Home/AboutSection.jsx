import React, { useEffect, useRef, useState } from "react";
import aboutImg from "/images/about/about1.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Target, Sparkles, TrendingUp, Zap } from "lucide-react";

/* PSG Blue constants */
const PSG_BLUE = "#3333CC";
const PSG_BLUE_LIGHT = "#4A90E2";
const PSG_BLUE_PALE = "#EEF2FF";
const PSG_BLUE_DARK = "#1a1a7a";
const PSG_DARK_BG = "#07091a";

/* ── Google Fonts ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("about-fonts")) return;
    const link = document.createElement("link");
    link.id = "about-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,700&family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ── Animated Floating Particles — PSG Blue ── */
const MAX_PARTICLES = 20;
const PARTICLE_DATA = Array.from({ length: MAX_PARTICLES }).map(() => ({
  width: Math.random() * 6 + 2,
  height: Math.random() * 6 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  opacity: Math.random() * 0.35 + 0.1,
  moveX: Math.random() * 100 - 50,
  moveY: Math.random() * 100 - 50,
  duration: Math.random() * 8 + 8,
}));

const FloatingParticles = ({ count = 6 }) => {
  const particles = PARTICLE_DATA.slice(0, count);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            background: PSG_BLUE_LIGHT,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
          }}
          animate={{ x: [0, p.moveX], y: [0, p.moveY], opacity: [p.opacity, p.opacity + 0.2, p.opacity] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

/* ── Animated Counter ── */
const CountUp = ({ to, suffix = "", prefix = "", duration = 1.4 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        const startTime = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startTime) / (duration * 1000), 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setVal(Math.round(ease * to));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
};

/* ── Animated progress bar — PSG Blue ── */
const AnimatedStatBar = ({ value = 85, delay = 0 }) => {
  const barRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setBarWidth(value), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={barRef} className="h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${PSG_BLUE}, ${PSG_BLUE_LIGHT})` }}
        animate={{ width: `${barWidth}%` }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

/* ── Gradient Divider — PSG Blue ── */
const GradientDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="h-px w-full"
    style={{ background: `linear-gradient(90deg, transparent, ${PSG_BLUE}, ${PSG_BLUE_LIGHT}, transparent)` }}
  />
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* ── Magnetic Button ── */
const MagneticButton = ({ children, href, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.a>
  );
};

const EnhancedAboutSection = () => {
  const brothersRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: brothersRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <>
      <FontLoader />

      <section id="about" className="relative overflow-hidden bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>

        {/* ════════ PANEL 1 — Hero Editorial ════════ */}
        <div className="relative overflow-hidden" style={{ minHeight: "clamp(620px, 90vh, 820px)" }}>
          <div className="absolute inset-0" style={{ backgroundImage: "url('/bridge.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%" }} />
          {/* PSG dark blue overlay */}
          <div className="absolute inset-0" style={{ background: `${PSG_DARK_BG}cc` }} />

          <FloatingParticles count={8} />

          {/* Subtle blue radial glow */}
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 100% 60% at 50% 0%, rgba(51,51,204,0.1) 0%, transparent 60%)` }} />
          <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(135deg, rgba(74,144,226,0.05) 0%, transparent 40%, rgba(7,9,26,0.4) 100%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center h-full py-24 md:py-32">
            {/* LEFT */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
              {/* Badge — PSG blue */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur"
                style={{ background: "rgba(74,144,226,0.12)", border: `1px solid rgba(74,144,226,0.3)` }}>
                <Sparkles size={14} style={{ color: PSG_BLUE_LIGHT }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: PSG_BLUE_LIGHT }}>Our Legacy</span>
              </motion.div>

              {/* Heading — PSG blue accent */}
              <motion.div variants={fadeUp}>
                <h2 className="text-white leading-[1.08] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 6.5vw, 5.2rem)", fontWeight: 800 }}>
                  Excellence in{" "}
                  <motion.span
                    initial={{ backgroundPosition: "0% center" }}
                    whileInView={{ backgroundPosition: "100% center" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{
                      background: `linear-gradient(90deg, ${PSG_BLUE_LIGHT} 0%, #7EB3FF 50%, ${PSG_BLUE_LIGHT} 100%)`,
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontStyle: "italic",
                    }}
                  >
                    Education
                  </motion.span>
                  <br />
                  Made Accessible
                </h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-white/50 leading-relaxed font-light max-w-lg" style={{ fontSize: "15.5px" }}>
                Since <span className="text-white font-semibold">1926</span>, PSG & Sons' Charities has been
                a beacon of educational excellence. Founded by the visionary sons of P.S. Govindasamy Naidu,
                we've transformed over <span className="font-semibold" style={{ color: PSG_BLUE_LIGHT }}>50,000 lives</span>.
              </motion.p>

              {/* CTA — PSG blue button */}
              <motion.div variants={fadeUp}>
                <MagneticButton
                  href="https://www.psgsonscharities.org/"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
                  style={{
                    background: `linear-gradient(135deg, ${PSG_BLUE} 0%, ${PSG_BLUE_LIGHT} 100%)`,
                    color: "white",
                    fontSize: "12.5px",
                    letterSpacing: "0.15em",
                    boxShadow: `0 8px 24px rgba(51,51,204,0.35)`,
                  }}
                >
                  <span>DISCOVER MORE</span>
                  <motion.svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* RIGHT — Image + floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <motion.div className="relative rounded-2xl overflow-hidden group" style={{ height: "420px" }}>
                <img src={aboutImg} alt="PSG Institutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(51,51,204,0.2) 0%, rgba(0,0,0,0.4) 100%)` }} />
                <motion.div
                  className="absolute inset-0 border-2"
                  style={{ borderColor: "rgba(74,144,226,0.3)" }}
                  animate={{ borderColor: ["rgba(74,144,226,0.2)", "rgba(74,144,226,0.5)", "rgba(74,144,226,0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating card — PSG blue */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -bottom-12 left-6 right-6 rounded-2xl p-7 backdrop-blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${PSG_BLUE} 0%, ${PSG_BLUE_LIGHT} 100%)`,
                  boxShadow: `0 20px 60px rgba(51,51,204,0.4)`,
                }}
              >
                <motion.div className="mb-4" animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                  <Zap size={28} style={{ color: "white" }} />
                </motion.div>
                <p className="text-white leading-snug font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem" }}>
                  ₹2.01 Lakhs
                  <br />
                  <span style={{ fontSize: "0.7em", fontWeight: 600, opacity: 0.85 }}>In Ancestral Property Dedicated</span>
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  An extraordinary act of philanthropy by four brothers to establish educational excellence.
                </p>
                <MagneticButton
                  href="https://www.psgsonscharities.org/"
                  className="inline-flex items-center gap-2 text-white font-bold uppercase text-[11px] transition-all group/btn"
                  style={{ letterSpacing: "0.15em" }}
                >
                  <span>Learn History</span>
                  <motion.svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ════════ PANEL 2 — Cinematic Founders ════════ */}
        <div ref={brothersRef} className="relative overflow-hidden" style={{ minHeight: "clamp(560px, 75vh, 800px)" }}>
          <motion.div className="absolute inset-[-15%]" style={{ y: imgY }}>
            <img src="/brothers.jpg" alt="Founders" className="w-full h-full object-cover object-top" />
          </motion.div>

          <div className="absolute inset-0" style={{ background: `${PSG_DARK_BG}b8` }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 85% 95% at 50% 50%, transparent 35%, rgba(0,0,0,0.6) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #ffffff 0%, transparent 8%, transparent 92%, #ffffff 100%)" }} />

          {/* PSG blue animated accent line */}
          <motion.div
            className="absolute left-0 right-0 h-px top-1/3"
            style={{ background: `linear-gradient(90deg, transparent, rgba(74,144,226,0.4), transparent)` }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col justify-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT — Tribute */}
              <div className="space-y-8">
                <motion.div variants={fadeUp} className="flex items-center gap-4">
                  <motion.div animate={{ width: [40, 60, 40] }} transition={{ duration: 3, repeat: Infinity }} className="h-px" style={{ background: PSG_BLUE_LIGHT }} />
                  <span className="uppercase tracking-[0.28em] font-bold" style={{ fontSize: "10px", color: PSG_BLUE_LIGHT }}>The Visionaries · 1926</span>
                </motion.div>

                <motion.blockquote
                  variants={fadeUp}
                  className="text-white leading-[1.15] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.3rem, 4.8vw, 4rem)", fontStyle: "italic", fontWeight: 700 }}
                >
                  "Four Brothers.
                  <br />
                  <motion.span
                    style={{
                      background: `linear-gradient(135deg, ${PSG_BLUE_LIGHT}, #7EB3FF)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    One Vision.
                  </motion.span>
                  <br />
                  A Legacy Forever."
                </motion.blockquote>

                <motion.p variants={fadeUp} className="text-white/55 font-light leading-relaxed max-w-sm" style={{ fontSize: "15.5px" }}>
                  The sons of P.S. Govindasamy Naidu — whose selfless vision laid the
                  foundation for an institution that has shaped over{" "}
                  <span className="text-white/90 font-semibold">50,000 lives</span>{" "}
                  across a century of unwavering service.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <motion.div
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur"
                    style={{ background: "rgba(255,255,255,0.08)", border: `1px solid rgba(74,144,226,0.3)` }}
                    whileHover={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: PSG_BLUE_LIGHT }} />
                    <span className="text-white/80 text-[11px] uppercase tracking-[0.2em] font-semibold">PSG &amp; Sons' Charities</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT — Stat cards — PSG blue */}
              <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
                {[
                  { icon: Users, num: 4, label: "Founders", sub: "Visionary brothers" },
                  { icon: Target, num: 1926, label: "Established", sub: "98 years strong" },
                  { icon: Award, num: 100, suffix: "+", label: "Years of Impact", sub: "Unbroken service" },
                  { icon: TrendingUp, num: 50, suffix: "K+", label: "Lives Changed", sub: "Across generations" },
                ].map(({ icon: Icon, num, suffix = "", label, sub }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInScale}
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="rounded-2xl p-6 group"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(74,144,226,0.1)`,
                    }}
                  >
                    {/* Accent bar — PSG blue */}
                    <motion.div
                      className="h-1 w-8 rounded-full mb-4"
                      style={{ background: `linear-gradient(90deg, ${PSG_BLUE}, rgba(74,144,226,0.2))` }}
                      animate={{ width: [32, 48, 32] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    {Icon && (
                      <motion.div className="mb-3" animate={{ rotate: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}>
                        <Icon size={24} style={{ color: PSG_BLUE_LIGHT }} />
                      </motion.div>
                    )}
                    <p className="leading-none mb-2 font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: PSG_BLUE_LIGHT }}>
                      <CountUp to={num} suffix={suffix} duration={1.6} />
                    </p>
                    <p className="text-white font-semibold mb-1" style={{ fontSize: "12.5px" }}>{label}</p>
                    <p className="text-white/40" style={{ fontSize: "11px", lineHeight: "1.4" }}>{sub}</p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <AnimatedStatBar value={75 + i * 5} delay={i * 100} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ════════ PANEL 3 — Statistics & Impact ════════ */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} className="relative z-20 bg-white overflow-hidden">
          {/* Top accent — PSG blue */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, transparent, ${PSG_BLUE}, transparent)` }} />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { value: "4", label: "Visionary Founders", icon: Users },
                { value: "1926", label: "Year Established", icon: Target },
                { value: "100+", label: "Years of Excellence", icon: Award },
              ].map(({ value, label, icon: StatIcon }, i) => (
                <motion.div key={i} variants={fadeUp} className="group relative" whileHover={{ scale: 1.02 }}>
                  <div className="relative text-center space-y-3">
                    <motion.div className="flex justify-center" animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}>
                      <div className="p-3 rounded-xl" style={{ background: PSG_BLUE_PALE }}>
                        <StatIcon size={24} style={{ color: PSG_BLUE }} />
                      </div>
                    </motion.div>
                    <p className="leading-none" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)", fontWeight: 800, color: PSG_BLUE_DARK }}>
                      {value}
                    </p>
                    <p className="text-gray-500 font-semibold uppercase" style={{ fontSize: "11px", letterSpacing: "0.15em" }}>{label}</p>
                    <div className="pt-2">
                      <AnimatedStatBar value={80 + i * 5} delay={300 + i * 100} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <GradientDivider />

            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-12 pt-16">
              <motion.div variants={fadeUp} className="space-y-4">
                <h3 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: PSG_BLUE_DARK }}>
                  Growing Impact
                </h3>
                <p className="text-gray-500 leading-relaxed font-light" style={{ fontSize: "15.5px" }}>
                  From humble beginnings, we've grown to establish{" "}
                  <span className="font-semibold" style={{ color: PSG_BLUE_DARK }}>diverse educational institutions, healthcare facilities, and research centers</span>,
                  touching countless lives across multiple generations with unwavering commitment.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-4">
                <h3 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: PSG_BLUE_DARK }}>
                  Our Mission
                </h3>
                <p className="text-gray-500 leading-relaxed font-light" style={{ fontSize: "15.5px" }}>
                  Founded by the visionary sons of P.S. Govindasamy Naidu, our trust stands as a beacon of{" "}
                  <span className="font-semibold" style={{ color: PSG_BLUE_DARK }}>accessible education for all communities</span>,
                  preserving a legacy of excellence and compassion.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default EnhancedAboutSection;