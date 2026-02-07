import React, { useState } from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/images/recruiters/1.png";
import img2 from "../../assets/images/recruiters/2.png";
import img3 from "../../assets/images/recruiters/3.png";
import img4 from "../../assets/images/recruiters/4.webp";
import img5 from "../../assets/images/recruiters/5.webp";
import img6 from "../../assets/images/recruiters/6.png";
import img7 from "../../assets/images/recruiters/7.png";
import img8 from "../../assets/images/recruiters/8.png";
import img9 from "../../assets/images/recruiters/9.png";
import img10 from "../../assets/images/recruiters/10.png";
import img11 from "../../assets/images/recruiters/11.png";
import img12 from "../../assets/images/recruiters/12.png";
import img13 from "../../assets/images/recruiters/13.png";
import img14 from "../../assets/images/recruiters/14.png";
import img15 from "../../assets/images/recruiters/15.png";
import img16 from "../../assets/images/recruiters/16.png";
import img17 from "../../assets/images/recruiters/17.png";
import img18 from "../../assets/images/recruiters/18.png";

const recruitesLogo = [
    img1, 
    img2, 
    img3, 
    img4, 
    img5,
    img6, 
    img7, 
    img8, 
    img9, 
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
];

const Recruiters = () => {
    const [isPaused, setIsPaused] = useState(false);
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#003d82] via-[#0052ab] to-[#003d82] tracking-tight leading-tight mb-4">
                Our Recruiters
              </h2>
              <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#0052ab] to-transparent rounded-full"></div>
              <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
                Leading organizations that consistently recruit students from PSG Institutions.
              </p>
            </motion.div>
    
            {/* Infinite Logo Slider with Hover Pause */}
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex gap-10 sm:gap-16 items-center"
                animate={{
                  x: isPaused ? "0%" : ["0%", "-100%"],
                }}
                transition={{
                  ease: "linear",
                  duration: 50,
                  repeat: isPaused ? 0 : Infinity,
                }}
                style={{ width: "max-content" }}
              >
                {/* Main + Duplicate Logos for seamless flow */}
                {recruitesLogo.map((logo, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-24 sm:w-32 md:w-36 lg:w-40"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={logo}
                      alt={`accreditation-logo-${index}`}
                      className="object-contain w-full h-16 sm:h-20 md:h-24 filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
    
              {/* Edge gradient fades */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>
);
};

export default Recruiters;
