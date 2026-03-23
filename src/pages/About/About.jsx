import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users, Calendar, TrendingUp, Sparkles, Building2 } from "lucide-react";
import { ABOUT_IMG, ABOUT_CONTENT, Stats, milestones } from "../../components/data/AboutPageData";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003d82] to-[#0052ab]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
              <Heart className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Our Legacy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              About PSG Institutions
            </h1>

            <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
              A century of excellence in education, healthcare, and industrial development
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="-mt-12 mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#003d82] to-[#0052ab] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Content Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ABOUT_IMG}
                  alt="PSG Institutions"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#003d82] to-[#0052ab] rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900">1926</p>
                      <p className="text-sm text-gray-600 font-medium">Established</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0052ab]/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#003d82]/20 to-transparent rounded-full blur-2xl"></div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <Sparkles className="w-4 h-4 text-[#0052ab]" />
                <span className="text-[#003d82] text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                A Legacy of{" "}
                <span className="bg-gradient-to-r from-[#003d82] to-[#0052ab] bg-clip-text text-transparent">
                  Excellence & Service
                </span>
              </h2>

              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: ABOUT_CONTENT[0] }}
              />

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100">
                  <Users className="w-8 h-8 text-[#0052ab] mb-2" />
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-sm text-gray-600 font-medium">Visionary Founders</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <Calendar className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">₹2.01L</p>
                  <p className="text-sm text-gray-600 font-medium">Initial Endowment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
              <Building2 className="w-4 h-4 text-[#0052ab]" />
              <span className="text-[#003d82] text-sm font-semibold uppercase tracking-wider">
                Our Growth
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Milestones & Institutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a single school to a network of {milestones.length} institutions spanning education, 
              healthcare, and technology
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative">
            {/* Vertical Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#003d82] via-[#0052ab] to-[#003d82]"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? "lg:text-right" : "lg:text-left lg:col-start-2"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                    >
                      {/* Institution Logo */}
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200 group-hover:border-[#0052ab] transition-colors">
                          <img
                            src={milestone.logo}
                            alt={milestone.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "lg:flex-row-reverse lg:justify-end" : ""}`}>
                            <span className="px-3 py-1 bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white text-xs font-bold rounded-full">
                              {milestone.est}
                            </span>
                            <TrendingUp className="w-4 h-4 text-[#0052ab]" />
                          </div>
                          <h3 className={`text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#0052ab] transition-colors ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                            {milestone.label}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, type: "spring" }}
                      className="w-6 h-6 bg-white border-4 border-[#0052ab] rounded-full shadow-lg"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full h-full bg-[#0052ab] rounded-full"
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Empty column for alternating layout */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? "" : "lg:col-start-1"}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Vision Statement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#003d82] to-[#0052ab] rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative text-center max-w-4xl mx-auto">
              <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Commitment to Excellence
              </h2>
              <p className="text-lg md:text-xl text-cyan-100 leading-relaxed mb-8">
                From our humble beginnings with a ₹2.01 lakh endowment in 1926, PSG Institutions 
                has grown into a beacon of educational excellence. Our founders' vision of creating 
                accessible, quality education for all continues to guide us as we touch countless 
                lives across generations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-sm text-cyan-200">Students Impacted</p>
                  <p className="text-2xl font-bold">100,000+</p>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-sm text-cyan-200">Faculty Members</p>
                  <p className="text-2xl font-bold">1,500+</p>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-sm text-cyan-200">Global Alumni</p>
                  <p className="text-2xl font-bold">50,000+</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}