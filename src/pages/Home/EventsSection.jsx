import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { events } from "../../components/data/EventsData.js";

const EventsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Format date
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decorative Elements - PSG Brand Colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#003d82]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#0052ab]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052ab]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs md:text-sm font-semibold tracking-wider text-[#0052ab] bg-blue-50 rounded-full uppercase">
            <Calendar size={16} />
            Upcoming Events
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#003d82] via-[#0052ab] to-[#003d82] tracking-tight leading-tight mb-4">
            Events & Workshops
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Join us for exciting learning opportunities, networking events, and
            skill-building workshops
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#0052ab] to-transparent rounded-full"></div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              isHovered={hoveredCard === event.id}
              onHover={() => setHoveredCard(event.id)}
              onLeave={() => setHoveredCard(null)}
              formatDate={formatDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Event Card Component
const EventCard = ({
  event,
  index,
  isHovered,
  onHover,
  onLeave,
  formatDate,
}) => {
  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0052ab]/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ y: -8 }}
    >
      {/* Gradient Background Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      {/* Spotlight Effect */}
      <motion.div
        className={`absolute -inset-40 ${event.spotlightColor} blur-3xl`}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Top Accent Bar */}
      <div className={`h-1.5 bg-gradient-to-r ${event.color}`}></div>

      <div className="relative p-6 md:p-8">
        {/* Header - Logo Only */}
        <div className="flex items-start justify-between mb-6">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-md border border-gray-100 p-2 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={event.logo}
              alt={event.institute}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Event Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#0052ab] transition-colors duration-300 line-clamp-2">
          {event.title}
        </h3>

        {/* Date and Location */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2.5 text-sm md:text-base text-gray-600">
            <Calendar
              size={18}
              className={`flex-shrink-0 bg-gradient-to-r ${event.color} bg-clip-text `}
            />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm md:text-base text-gray-600">
            <MapPin
              size={18}
              className={`flex-shrink-0 bg-gradient-to-r ${event.color} bg-clip-text`}
            />
            <span className="line-clamp-1">{event.institute}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>

      {/* Bottom Shine Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default EventsSection;
