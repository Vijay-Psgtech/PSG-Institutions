import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { statsData } from "../../components/data/StatsData.js";

/* ── Google Fonts ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("stats-fonts")) return;
    const link = document.createElement("link");
    link.id = "stats-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Poppins:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ── Animated counter hook ── */
function useCounter(value, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * value));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return { count, elementRef };
}

/* ── Single stat card ── */
const StatCard = ({ icon: Icon, label, value, suffix = "", delay, description }) => {
  const { count, elementRef } = useCounter(value);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: delay * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl p-7 flex flex-col gap-5 cursor-default"
      style={{
        background: hovered ? "rgba(74,144,226,0.1)" : "rgba(255,255,255,0.05)",
        border: hovered ? "1px solid rgba(74,144,226,0.45)" : "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(16px)",
        transition: "background 0.35s ease, border 0.35s ease",
      }}
    >
      {/* Top glow line on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        animate={{
          background: hovered
            ? "linear-gradient(90deg, transparent, #4A90E2, transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: hovered ? "rgba(51,51,204,0.2)" : "rgba(74,144,226,0.1)",
          border: "1px solid rgba(74,144,226,0.25)",
          transition: "background 0.35s ease",
        }}
      >
        <Icon size={22} style={{ color: "#7EB3FF" }} strokeWidth={2} />
      </div>

      {/* Number */}
      <div>
        <div
          className="leading-none font-black mb-1.5 text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.6rem, 4.5vw, 3.4rem)",
          }}
        >
          <span>{count.toLocaleString()}</span>
          {suffix && (
            <span className="ml-1 font-bold" style={{ fontSize: "0.55em", color: "#7EB3FF" }}>
              {suffix}
            </span>
          )}
        </div>
        <p
          className="font-semibold text-white/90 uppercase tracking-widest"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {label}
        </p>
      </div>

      {/* Description */}
      {description && (
        <p className="text-white/45 font-light leading-relaxed" style={{ fontSize: "13.5px" }}>
          {description}
        </p>
      )}

      {/* Animated progress line — PSG blue */}
      <div
        className="mt-auto h-px rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #2B2FBF, #4A90E2)" }}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: delay * 0.1 + 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Hover indicator */}
      <motion.div
        className="absolute top-5 right-5"
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.25 }}
      >
        <div
          className="p-1.5 rounded-lg"
          style={{ background: "rgba(74,144,226,0.15)", border: "1px solid rgba(74,144,226,0.3)" }}
        >
          <TrendingUp size={14} style={{ color: "#7EB3FF" }} strokeWidth={2.5} />
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Main section ── */
export default function StatsSection() {
  return (
    <>
      <FontLoader />
      <section
        className="relative w-full overflow-hidden py-20 md:py-28"
        style={{
          background: "linear-gradient(160deg, #07091a 0%, #0d1230 60%, #07091a 100%)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Dot grid — PSG blue */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #4A90E2 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient glows */}
        <div
          className="absolute top-0 right-0 w-150 h-150 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(51,51,204,0.08) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-100 h-100 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(74,144,226,0.06) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

          {/* ── Header ── */}
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="inline-block h-px w-10"
                style={{ background: "#4A90E2" }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.35em]"
                style={{ color: "#7EB3FF" }}
              >
                Our Impact
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="text-white leading-[1.1]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 700,
                }}
              >
                By The{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    background: "linear-gradient(90deg, #4A90E2, #7EB3FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Numbers.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="text-white/45 font-light md:max-w-xs md:text-right"
                style={{ fontSize: "14.5px", lineHeight: "1.7" }}
              >
                Decades of educational excellence,
                <br className="hidden md:block" /> measured in lives changed.
              </motion.p>
            </div>

            {/* Animated divider — PSG blue */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-10 h-px"
              style={{
                background: "linear-gradient(90deg, rgba(74,144,226,0.6), rgba(74,144,226,0.15), transparent)",
                transformOrigin: "left",
              }}
            />
          </div>

          {/* ── Stats Grid ── */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, index) => (
              <StatCard key={stat.id} {...stat} delay={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}