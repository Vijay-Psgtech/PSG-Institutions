import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, TrendingUp, Sparkles, ExternalLink } from "lucide-react";
import { Achievements } from "../../components/data/AchievementsData";



export default function AchievementsSection() {
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

        {/* Floating Trophy Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Trophy className="absolute top-20 left-10 w-16 h-16 text-yellow-400/20 animate-pulse" />
          <Award className="absolute top-40 right-20 w-20 h-20 text-yellow-400/20 animate-pulse" style={{ animationDelay: '1s' }} />
          <Medal className="absolute bottom-20 left-1/4 w-12 h-12 text-yellow-400/20 animate-pulse" style={{ animationDelay: '2s' }} />
          <Star className="absolute bottom-40 right-1/3 w-14 h-14 text-yellow-400/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Our Pride
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Awards & Achievements
            </h1>

            <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Recognition of excellence from prestigious organizations and institutions across India
            </p>

            {/* Quick Stats */}
            {/* <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">
                  {Achievements.length}+
                </div>
                <div className="text-cyan-100 text-sm md:text-base">Major Achievements</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">
                  #10
                </div>
                <div className="text-cyan-100 text-sm md:text-base">NIRF Ranking</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">
                  A+
                </div>
                <div className="text-cyan-100 text-sm md:text-base">NAAC Grade</div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <Sparkles className="w-4 h-4 text-[#0052ab]" />
            <span className="text-[#003d82] text-sm font-semibold uppercase tracking-wider">
              Excellence Recognized
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            National and international accolades celebrating our commitment to academic excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003d82]/5 to-[#0052ab]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Top Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg">
                  <span className="text-[#003d82] text-xs font-bold">{achievement.year}</span>
                </div>
              </div>

              {/* Header Section */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 border-b border-gray-200">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003d82]/20 to-[#0052ab]/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                    
                    {/* Logo Container */}
                    <div className="relative w-24 h-24 bg-white rounded-2xl p-4 shadow-md group-hover:shadow-xl transition-all border border-gray-200 group-hover:border-[#0052ab]">
                      <img
                        src={achievement.logo}
                        alt={achievement.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Trophy Icon Badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#003d82] to-[#0052ab] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Rank Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md border border-gray-200">
                    <TrendingUp className="w-4 h-4 text-[#0052ab]" />
                    <span className="font-extrabold text-2xl bg-gradient-to-r from-[#003d82] to-[#0052ab] bg-clip-text text-transparent">
                      {achievement.rank}
                    </span>
                    <span className="text-sm text-gray-600 font-semibold">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#0052ab] transition-colors min-h-[3.5rem]">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {achievement.desc}
                </p>

                {/* Bottom Accent */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-gray-500 font-medium">Accredited</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003d82] to-[#0052ab]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}