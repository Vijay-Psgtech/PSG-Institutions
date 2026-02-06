import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap, Quote } from "lucide-react";
import { alumniData } from "../../components/data/AluminiData.js";

const AlumniTestimonials = () => {
  return (
   <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs md:text-sm font-semibold tracking-wider text-[#0052ab] bg-blue-50 rounded-full uppercase">
                <GraduationCap size={16} />
                Our Alumini's
            </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#003d82] via-[#0052ab] to-[#003d82] mb-3">
            Alumni Testimonials
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Insights and experiences shared by our distinguished alumni.
          </p>
          <div className="mt-5 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#0052ab] to-transparent rounded-full"></div>
        </motion.div>

        {/* Swiper with Custom Navigation */}
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-[#003d82] hover:bg-[#003d82] hover:text-white transition duration-300 cursor-pointer">
            <ChevronLeft size={22} />
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-[#003d82] hover:bg-[#003d82] hover:text-white transition duration-300 cursor-pointer">
            <ChevronRight size={22} />
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {alumniData.map((alum) => (
              <SwiperSlide key={alum.id}>
                <motion.div
                  className="relative bg-white rounded-3xl shadow-lg hover:shadow-xl p-8 h-full flex flex-col justify-between text-center transition-all duration-500 hover:-translate-y-2 border-t-4 border-[#003d82]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-[#0052ab]/15">
                    <Quote size={40} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                      “{alum.quote}”
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#003d82] mb-1">
                      {alum.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {alum.inst}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimonials;
