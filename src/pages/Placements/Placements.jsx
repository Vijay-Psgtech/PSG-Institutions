import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Building2,
  Target,
  DollarSign,
  Globe,
  ChevronRight,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { recruitesLogo } from "../../components/data/RecruitersData";

export default function Placements() {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  // Placement Statistics
  const placementStats = [
    {
      icon: Users,
      value: "95%",
      label: "Placement Rate",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      value: "850+",
      label: "Companies",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      value: "₹45 LPA",
      label: "Highest Package",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      value: "₹8.5 LPA",
      label: "Average Package",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Key Highlights
  const highlights = [
    {
      icon: Target,
      title: "Industry Partnerships",
      description:
        "Strong ties with 850+ leading companies across diverse sectors",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description:
        "International placements with top MNCs and Fortune 500 companies",
    },
    {
      icon: Award,
      title: "Top Recruiters",
      description:
        "Consistent hiring by tech giants, consulting firms, and industry leaders",
    },
    {
      icon: Sparkles,
      title: "Training & Support",
      description:
        "Comprehensive pre-placement training and career guidance programs",
    },
  ];

  // Top Sectors
  const sectors = [
    { name: "Information Technology", percentage: 45 },
    { name: "Core Engineering", percentage: 25 },
    { name: "Management & Consulting", percentage: 15 },
    { name: "Research & Analytics", percentage: 10 },
    { name: "Others", percentage: 5 },
  ];

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
              <Briefcase className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Career Success
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Placements & Recruiters
            </h1>

            <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Empowering students to achieve their career dreams with
              industry-leading placement support
            </p>

            {/* Quick Stats in Hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              {placementStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center"
                  >
                    <Icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="text-cyan-200 text-xs md:text-sm font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
              <Star className="w-4 h-4 text-[#0052ab]" />
              <span className="text-[#003d82] text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Placement Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures every student achieves their
              career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#003d82] to-[#0052ab] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052ab] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Sectors Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[#003d82] to-[#0052ab] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Top Hiring Sectors
              </h2>
              <p className="text-cyan-100 text-lg">
                Distribution of placements across various industries
              </p>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{sector.name}</span>
                    <span className="text-yellow-400 font-bold">{sector.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sector.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section> */}

        {/* Recruiters Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
              <Building2 className="w-4 h-4 text-[#0052ab]" />
              <span className="text-[#003d82] text-sm font-semibold uppercase tracking-wider">
                Our Partners
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by {recruitesLogo.length}+ leading companies worldwide for
              hiring top talent
            </p>
          </div>

          {/* Recruiter Logos Grid */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
              {recruitesLogo.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  onHoverStart={() => setHoveredLogo(index)}
                  onHoverEnd={() => setHoveredLogo(null)}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 flex items-center justify-center border border-gray-200 hover:border-[#0052ab] hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Recruiter ${index + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredLogo === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#003d82]/5 to-[#0052ab]/5 rounded-xl pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
              <CheckCircle className="w-4 h-4 text-[#0052ab]" />
              <span className="text-[#003d82] text-sm font-semibold uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Placement Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure every student gets the best
              opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Skill Development",
                description: "Technical & soft skills training programs",
              },
              {
                step: "02",
                title: "Resume Building",
                description: "Professional resume and portfolio guidance",
              },
              {
                step: "03",
                title: "Mock Interviews",
                description: "Practice sessions with industry experts",
              },
              {
                step: "04",
                title: "Campus Drives",
                description: "Direct recruitment by top companies",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#003d82] to-[#0052ab] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {process.step}
                  </span>
                </div>

                {/* Arrow (Not on last item for desktop) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052ab] transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#003d82] to-[#0052ab] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
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

            <div className="relative">
              <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to Launch Your Career?
              </h2>
              <p className="text-lg md:text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Join PSG Institutions and get placed in your dream company with
                our proven track record
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-yellow-400 text-[#003d82] rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-yellow-300 transition-all duration-300 flex items-center gap-2">
                  <span>Explore Programs</span>
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                  Contact Placement Cell
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
