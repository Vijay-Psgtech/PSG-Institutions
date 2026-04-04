import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap, Quote, Star, Filter } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { alumniData } from "../../components/data/AluminiData";

/* PSG Blue color constants */
const PSG_BLUE = "#3333CC";
const PSG_BLUE_LIGHT = "#4A90E2";
const PSG_BLUE_PALE = "#EEF2FF";
const PSG_BLUE_TEXT = "#2B2FBF";
const PSG_BLUE_DARK = "#1a1a7a";

const StarRating = ({ rating, size = 16 }) => (
  <div className="flex justify-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={size}
        className={i < rating ? "" : "text-gray-300"}
        style={i < rating ? { fill: PSG_BLUE, color: PSG_BLUE } : {}}
      />
    ))}
  </div>
);

const AlumniTestimonialsAdvanced = () => {

  return (
    <section id="testimonials" className="py-20 bg-linear-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .serif-heading { font-family: 'Playfair Display', serif; font-weight: 700; letter-spacing: -0.5px; }
        .sans-serif-text { font-family: 'Poppins', sans-serif; }
        
        .psg-accent-bar {
          background: linear-gradient(to right, #2B2FBF, #4A90E2, #2B2FBF);
        }

        .category-btn-alumni {
          transition: all 0.3s ease;
          border: 1px solid #d1d5db;
        }
        .category-btn-alumni.active {
          background-color: ${PSG_BLUE};
          color: white;
          border-color: ${PSG_BLUE};
          box-shadow: 0 4px 14px rgba(51,51,204,0.3);
        }
        .category-btn-alumni:not(.active):hover {
          background-color: ${PSG_BLUE_PALE};
          border-color: ${PSG_BLUE_LIGHT};
          color: ${PSG_BLUE_TEXT};
        }

        .alumni-card-border {
          border-top: 4px solid ${PSG_BLUE};
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs md:text-sm font-semibold tracking-widest uppercase sans-serif-text rounded-full"
            style={{ color: PSG_BLUE_TEXT, background: PSG_BLUE_PALE }}
          >
            <GraduationCap size={16} />
            Our Alumni
          </span>

          <h2 className="serif-heading text-4xl sm:text-5xl lg:text-6xl mb-4"
            style={{ color: PSG_BLUE_DARK }}>
            Alumni Testimonials
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto sans-serif-text leading-relaxed">
            Insights and experiences shared by our distinguished alumni across various fields.
          </p>

          {/* PSG Blue accent bar */}
          <div className="mt-8 mx-auto w-32 h-1.5 psg-accent-bar rounded-full"></div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          className="text-center text-gray-600 text-sm mb-8 sans-serif-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Showing {alumniData.length} testimonial{alumniData.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Swiper */}
        <div className="relative">
          <button
            className="swiper-button-prev-custom absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg border border-gray-200 bg-white hover:shadow-xl"
            style={{ color: PSG_BLUE }}
            onMouseEnter={(e) => { e.currentTarget.style.background = PSG_BLUE; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = PSG_BLUE; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = PSG_BLUE; e.currentTarget.style.borderColor = "#e5e7eb"; }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="swiper-button-next-custom absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg border border-gray-200 bg-white hover:shadow-xl"
            style={{ color: PSG_BLUE }}
            onMouseEnter={(e) => { e.currentTarget.style.background = PSG_BLUE; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = PSG_BLUE; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = PSG_BLUE; e.currentTarget.style.borderColor = "#e5e7eb"; }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {alumniData.length > 0 ? (
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              loop={alumniData.length > 1}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16 px-4"
            >
              {alumniData.map((alum) => (
                <SwiperSlide key={alum.id}>
                  <motion.div
                    className="alumni-card-border relative bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 h-full flex flex-col justify-between text-center transition-all duration-500 hover:-translate-y-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Quote Icon — PSG blue */}
                    <div className="absolute top-6 right-6" style={{ color: `${PSG_BLUE}18` }}>
                      <Quote size={48} strokeWidth={1.5} />
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <StarRating rating={alum.rating} size={18} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center mb-6">
                      <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed sans-serif-text">
                        "{alum.quote}"
                      </p>
                    </div>

                    {/* Divider — PSG blue */}
                    <div className="w-12 h-1 psg-accent-bar rounded-full mx-auto mb-6"></div>

                    {/* Name & Title */}
                    <div>
                      <h3 className="serif-heading text-lg sm:text-xl mb-1" style={{ color: PSG_BLUE_DARK }}>
                        {alum.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase sans-serif-text" style={{ color: PSG_BLUE }}>
                        {alum.inst}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 sans-serif-text">No testimonials found for the selected category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimonialsAdvanced;