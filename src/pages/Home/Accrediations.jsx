import React, { useState } from "react";
import { motion } from "framer-motion";

import nirf from "../../assets/images/accerdiations/nirf.png";
import naac from "../../assets/images/accerdiations/naac.png";
import nba from "../../assets/images/accerdiations/nba.png";
import naac1 from "../../assets/images/accerdiations/naac-A.png";
import aicte from "../../assets/images/accerdiations/aicte.webp";
import acbsp from "../../assets/images/accerdiations/acbsp.png";
import aacsb from "../../assets/images/accerdiations/aacsb.png";
import rgt from "../../assets/images/accerdiations/rgt.png";
import ahpi from "../../assets/images/accerdiations/ahpi.png";
import nabh from "../../assets/images/accerdiations/nabh.png";
import nabh1 from "../../assets/images/accerdiations/nabh-it.png";
import nabh2 from "../../assets/images/accerdiations/nabh-nursing.jpg";
import nabl from "../../assets/images/accerdiations/nabl-logo.png";

const acceridationsLogo = [
  nirf,
  naac,
  nba,
  naac1,
  aicte,
  acbsp,
  aacsb,
  rgt,
  ahpi,
  nabh,
  nabh1,
  nabh2,
  nabl,
];

const Accrediations = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative">
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
            Accreditations
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#0052ab] to-transparent rounded-full"></div>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Recognized by premier national and international accreditation bodies.
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
            {[...acceridationsLogo, ...acceridationsLogo, ...acceridationsLogo].map((logo, index) => (
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

export default Accrediations;
