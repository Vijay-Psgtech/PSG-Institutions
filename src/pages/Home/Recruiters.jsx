import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
import img19 from "../../assets/images/recruiters/19.png";
import img20 from "../../assets/images/recruiters/20.webp";
import img21 from "../../assets/images/recruiters/21.png";
import img22 from "../../assets/images/recruiters/22.png";
import img23 from "../../assets/images/recruiters/23.png";
import img24 from "../../assets/images/recruiters/24.png";
import img25 from "../../assets/images/recruiters/25.jpg";
import img26 from "../../assets/images/recruiters/26.jpg";
import img27 from "../../assets/images/recruiters/27.webp";
import img28 from "../../assets/images/recruiters/28.png";
import img29 from "../../assets/images/recruiters/29.gif";
import img30 from "../../assets/images/recruiters/30.jpg";
import img31 from "../../assets/images/recruiters/31.jpg";
import img32 from "../../assets/images/recruiters/32.jpg";
import img33 from "../../assets/images/recruiters/33.jpg";
import img34 from "../../assets/images/recruiters/34.jpg";
import img35 from "../../assets/images/recruiters/35.jpg";
import img36 from "../../assets/images/recruiters/36.jpg";
import img37 from "../../assets/images/recruiters/37.jpg";

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
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
];

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
