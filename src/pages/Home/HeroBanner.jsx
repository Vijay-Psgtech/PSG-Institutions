import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-[#003d82] to-[#0052ab] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight drop-shadow-lg">
          Welcome to PSG Institutions
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-95 font-light tracking-wide">
          Excellence in Education Since 1926
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-[#003d82] font-bold py-4 px-10 rounded-full text-base uppercase tracking-wider shadow-[0_6px_20px_rgba(255,235,59,0.3)] hover:shadow-[0_10px_30px_rgba(255,235,59,0.4)] transform hover:-translate-y-1 transition-all duration-300">
          Explore Our Programs
        </button>
      </div>
    </section>
  );
}
