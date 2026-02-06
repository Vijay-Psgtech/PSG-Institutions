import React from "react";
import trusteeImg from "../../assets/images/trustee/truste.jpg";
import { motion } from "framer-motion";

const TrusteeSection = () => {
  return (
    <section
      aria-labelledby="trustee-title"
      className="relative w-full py-12 sm:py-16 lg:py-24 bg-slate-100"
    >
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #062743 2px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs md:text-sm font-semibold tracking-wider text-[#0052ab] bg-blue-50 rounded-full uppercase">
            Our Trustee
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#003d82] via-[#0052ab] to-[#003d82] tracking-tight leading-tight mb-4">
            Mananging Trustee
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Visionary leading the way
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#0052ab] to-transparent rounded-full"></div>
        </motion.div>

        <div className="bg-gradient-to-r from-white to-sky-50 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="lg:order-1">
              <img
                src={trusteeImg}
                alt="L. Gopalakrishnan portrait"
                className="w-full h-80 sm:h-96 lg:h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-4xl font-bold text-[#0052ab]">
                L. Gopalakrishnan
              </h3>
              <p className="mt-1 text-sm text-slate-700 font-semibold">
                Managing Trustee, PSG Institutions
              </p>

              <div className="mt-6 text-slate-700 leading-relaxed text-sm sm:text-lg">
                <p>
                  Shri L. Gopalakrishnan assumed the role of Managing Trustee in
                  May 2011, emphasizing quality education and the significance
                  of research. He promoted faculty research through initiatives
                  like scholarships for research scholars and the creation of
                  PSG Distinguished Professor Fellowship.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#about"
                  className="inline-block bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrusteeSection;
