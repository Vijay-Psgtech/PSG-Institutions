import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { institutionsData } from "../../components/data/InstitutionsData.js"; // your data file
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const InstitutionDetails = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);

  const institution = institutionsData.find((inst) => inst.label === decodedId);

  if (!institution)
    return (
      <div className="text-center py-24 text-gray-600 text-lg">
        Institution not found.
      </div>
    );

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] overflow-hidden">
        <img
          src={institution.image}
          alt={institution.label}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          {institution.logo && (
            <motion.img
              src={institution.logo}
              alt="Institution Logo"
              className="w-20 sm:w-24 md:w-28 mb-4 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          )}

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {institution.label}
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {institution.tagline ||
              "Empowering education through innovation and excellence."}
          </motion.p>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <Link
          to="/"
          className="inline-flex items-center text-[#003d82] hover:text-[#0052ab] font-semibold text-sm transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Institutions
        </Link>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={institution.aboutImage || institution.image}
              alt={`${institution.name} campus`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003d82] mb-6">
              About {institution.shortName || "the Institution"}
            </h2>
            <div
              className="prose max-w-none text-gray-700 leading-relaxed prose-headings:text-[#003d82] prose-p:my-4 prose-ul:list-disc prose-ul:ml-6 prose-li:my-1 prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: institution.description }}
            ></div>
            <div className="pt-4">
              <a
                href={`${institution.webLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white rounded-xl font-semibold text-sm md:text-base shadow-lg shadow-blue-900/30 overflow-hidden hover:cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0052ab] to-[#003d82] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                  <span className="relative">Explore</span>

                  <svg
                    className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <motion.div
        className="bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-100 leading-relaxed text-base sm:text-lg whitespace-pre-line">
              {institution.mission}
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            <div
              className="prose max-w-none text-gray-100 leading-relaxed prose-headings:text-[#003d82] prose-p:my-4 prose-ul:list-disc prose-ul:ml-6 prose-li:my-1 prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: institution.vision }}
            ></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InstitutionDetails;
