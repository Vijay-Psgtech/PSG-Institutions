import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { recruitesLogo } from "../../components/data/RecruitersData";

const Recruiters = () => {
  return (
    <section id="placements" className="py-16 md:py-20 lg:py-28 bg-linear-to-b from-white to-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* PSG Blue title */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold"
            style={{
              fontFamily: "Playfair Display, serif",
              background: "linear-gradient(135deg, #1a1a7a 0%, #3333CC 50%, #1a1a7a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Recruiters
          </h2>

          {/* PSG blue divider */}
          <div
            className="mt-4 mx-auto w-24 h-1 rounded-full"
            style={{ background: "linear-gradient(to right, transparent, #3333CC, transparent)" }}
          />

          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Leading organizations that consistently recruit students from PSG Institutions.
          </p>
        </motion.div>

        {/* Infinite Logo Slider */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 40 },
              768: { slidesPerView: 4, spaceBetween: 60 },
              1024: { slidesPerView: 5, spaceBetween: 70 },
              1280: { slidesPerView: 6, spaceBetween: 80 },
            }}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            grabCursor={true}
            allowTouchMove={true}
            className="overflow-hidden!"
          >
            {recruitesLogo.concat(recruitesLogo).map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`recruiter-logo-${index}`}
                    className="object-contain w-24 sm:w-28 md:w-32 lg:w-36 h-16 sm:h-20 md:h-24 filter drop-shadow-md hover:drop-shadow-xl transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Edge gradient fades */}
          <div className="absolute top-0 left-0 w-32 h-full pointer-events-none"
            style={{ background: "linear-gradient(to right, white, rgba(255,255,255,0.8), transparent)" }}
          />
          <div className="absolute top-0 right-0 w-32 h-full pointer-events-none"
            style={{ background: "linear-gradient(to left, white, rgba(255,255,255,0.8), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Recruiters;