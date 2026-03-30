import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroBanner from "../pages/Home/HeroBanner";
import AboutSection from "../pages/Home/AboutSection";
import InstitutionSection from "../pages/Home/InstitutionSection";
import StatsSection from "../pages/Home/Stats";
import EventsSection from "../pages/Home/EventsSection";
import TrusteeSection from "../pages/Home/TrusteeSection";
import Accrediations from "../pages/Home/Accrediations";
import AlumniTestimonials from "../pages/Home/AlumniTestimonials";
import QuoteSection from "../pages/Home/QuoteSection";
import Recruiters from "../pages/Home/Recruiters";

// Animation Variants
const fadeInVariant = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
};

const slideInFromLeftVariant = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const slideInFromRightVariant = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const slideInFromTopVariant = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const slideInFromBottomVariant = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const zoomInVariant = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const bounceInVariant = {
  initial: { opacity: 0, scale: 0.3 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "backOut" },
};

const rotateInVariant = {
  initial: { opacity: 0, rotate: -20, scale: 0.8 },
  whileInView: { opacity: 1, rotate: 0, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainerVariant = {
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true, amount: 0.1 },
  transition: {
    staggerChildren: 0.2,
  },
};

const staggerItemVariant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const floatVariant = {
  initial: { y: 0 },
  animate: { 
    y: [-20, 20, -20],
    transition: { 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut" 
    } 
  },
};

// Smooth scroll behavior for the entire page
const HomePage = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Main Content Sections */}
      <div className="w-full">
        {/* Hero Section - Full Height */}
        <section className="relative w-full">
          <motion.div {...fadeInVariant} viewport={{ once: true }}>
            <HeroBanner />
          </motion.div>
        </section>

        {/* Institutions Section */}
        <motion.section
          className="relative w-full bg-gray-50"
          {...slideInFromBottomVariant}
          viewport={{ once: true }}
        >
          <InstitutionSection />
        </motion.section>

        {/* About Section */}
        <motion.section
          className="relative w-full bg-linear-to-b from-white to-gray-50"
          {...slideInFromLeftVariant}
          viewport={{ once: true }}
        >
          <AboutSection />
        </motion.section>

        {/* Stats Section - Dark Background */}
        <motion.section
          className="relative w-full"
          {...zoomInVariant}
          viewport={{ once: true }}
        >
          <StatsSection />
        </motion.section>

        {/* Trustee Section */}
        <motion.section
          className="relative w-full bg-slate-100"
          {...slideInFromRightVariant}
          viewport={{ once: true }}
        >
          <TrusteeSection />
        </motion.section>

        {/* Events Section */}
        {/* <motion.section
          className="relative w-full bg-gradient-to-b from-gray-50 to-white"
          {...rotateInVariant}
          viewport={{ once: true }}
        >
          <EventsSection />
        </motion.section> */}

        {/* Accreditations Section */}
        <motion.section
          className="relative w-full bg-linear-to-b from-white to-blue-50"
          {...bounceInVariant}
          viewport={{ once: true }}
        >
          <Accrediations />
        </motion.section>

        {/* Alumni Testimonials */}
        <motion.section
          className="relative w-full bg-linear-to-b from-blue-50 to-white"
          {...slideInFromLeftVariant}
          viewport={{ once: true }}
        >
          <AlumniTestimonials />
        </motion.section>

        {/* Quote Section */}
        <motion.section
          className="relative w-full"
          {...fadeInVariant}
          viewport={{ once: true }}
        >
          <QuoteSection />
        </motion.section>

        {/* Recruiters Section */}
        <motion.section
          className="relative w-full bg-linear-to-b from-white to-slate-50"
          {...floatVariant}
          viewport={{ once: true }}
        >
          <Recruiters />
        </motion.section>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </motion.div>
  );
};

// Scroll Progress Indicator Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-linear-to-r from-yellow-400 via-[#0052ab] to-[#003d82] origin-left z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
    />
  );
};

export default HomePage;