import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { statsData } from "../../components/data/StatsData.js";

// Enhanced counter hook with smooth spring animation
function useCounter(value, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function for smoother animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return { count, elementRef };
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  suffix = "",
  delay,
  description,
}) => {
  const { count, elementRef } = useCounter(value);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/60 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
    >
      {/* Glass Morphism Border Effect */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 group-hover:ring-white/60 transition-all duration-500"></div>

      {/* Shimmer Effect on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 55%, transparent 100%)`,
        }}
        animate={
          isHovered
            ? {
                x: ["-100%", "200%"],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        {/* Icon Container with Enhanced Gradient */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl  shadow-lg mb-6 relative overflow-hidden`}
          style={{ background: "linear-gradient(135deg,#0052ab,#003d82)" }}
          animate={{
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Inner Glow */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
            style={{ background: "linear-gradient(135deg,#0052ab,#003d82)" }}
          ></div>
          <Icon
            className="w-8 h-8 text-white relative z-10"
            strokeWidth={2.5}
          />
        </motion.div>

        {/* Stats Number */}
        <div className="mb-4">
          <h3 className="text-5xl font-extrabold tracking-tight text-[#0052ab] mb-2 leading-none">
            <span className="font-bold">{count.toLocaleString()}</span>
            <span className={`text-3xl font-bold ml-1`}>{suffix}</span>
          </h3>
          <p className="text-base font-extrabold text-gray-700">{label}</p>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Enhanced Progress Bar */}
        <motion.div
          className="relative h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay * 0.1 + 0.5 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>

          {/* Progress Fill */}
          <motion.div
            className={`relative h-full rounded-full shadow-sm`}
            style={{ background: "linear-gradient(135deg,#0052ab,#003d82)" }}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: delay * 0.1 + 0.3,
              ease: "easeOut",
            }}
          >
            {/* Glossy Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Hover Trending Indicator */}
        <motion.div
          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          animate={{ x: isHovered ? 0 : -10 }}
        >
          <div
            className={`p-2 rounded-lg`}
            style={{ background: "linear-gradient(135deg,#0052ab,#003d82)" }}
          >
            <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #062743 0%, #063b73 45%, #0b4f86 100%)",
      }}
    >
      {/* Enhanced Background with Multiple Gradients */}

      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatCard key={stat.id} {...stat} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
