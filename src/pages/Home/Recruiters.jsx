import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { recruitesLogo } from "../../components/data/RecruitersData";

const Recruiters = () => {
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
            Leading organizations that consistently recruit students from PSG
            Institutions.
          </p>
        </motion.div>

        {/* Infinite Logo Slider with Hover Pause */}
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
              delay: 0, // continuous motion
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // stop while hover
            }}
            freeMode={true}
            grabCursor={true} // allows mouse drag
            allowTouchMove={true} // enables touch swipe on mobile
            className="!overflow-hidden"
          >
            {recruitesLogo.concat(recruitesLogo).map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`accreditation-logo-${index}`}
                    className="object-contain w-24 sm:w-28 md:w-32 lg:w-36 h-16 sm:h-20 md:h-24 filter drop-shadow-md hover:drop-shadow-xl transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Edge gradient fades */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
