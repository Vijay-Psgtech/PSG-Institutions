import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import bgImg from "../../assets/images/about/building.webp";

const QuoteSection = () => {
  return (
    <section className="relative w-full min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Quote Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Quote className="w-12 h-12 mx-auto text-blue-400 opacity-70 mb-6" />

          <p className="text-xl sm:text-2xl md:text-3xl italic font-bold leading-relaxed text-gray-100">
            “Let there be charity so that others can share my family's prosperity.”
          </p>

          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-blue-400">
              Shri P S Govindaswamy Naidu
            </h3>
            <p className="text-gray-300 text-md mt-1 tracking-wide">
              Founder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
