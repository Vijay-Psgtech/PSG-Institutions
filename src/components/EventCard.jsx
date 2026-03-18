import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, ExternalLink, Clock } from "lucide-react";

export default function EventCard({ event, index = 0, isPast = false }) {
  const [isHovered, setIsHovered] = useState(false);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Check if event is happening soon (within 7 days)
  const isHappeningSoon = () => {
    const eventDate = new Date(event.date);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 7;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
        isPast ? "opacity-70" : ""
      }`}
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003d82]/5 to-[#0052ab]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {!isPast && isHappeningSoon() && (
            <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1 animate-pulse">
              <Clock size={12} />
              Soon
            </span>
          )}
          {isPast && (
            <span className="px-3 py-1 bg-gray-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-md">
              Past Event
            </span>
          )}
        </div>

        {/* Institution Logo */}
        {event.logo && (
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-lg">
            <img
              src={event.logo}
              alt={event.institution}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Date & Location */}
        <div className="flex flex-wrap gap-3 text-sm">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Calendar size={16} className="text-[#0052ab]" />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <MapPin size={16} className="text-[#0052ab]" />
            <span className="line-clamp-1">{event.location || event.institution}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#0052ab] transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4rem]">
          {event.description}
        </p>

        {/* Institution Tag */}
        <div className="pt-3 border-t border-gray-100">
          <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-[#003d82] text-xs font-semibold rounded-lg border border-blue-100">
            {event.institution}
          </span>
        </div>

        {/* Action Button */}
        <motion.a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 mt-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{isPast ? "View Details" : "Learn More"}</span>
          <ArrowRight 
            size={16} 
            className="group-hover/btn:translate-x-1 transition-transform duration-300" 
          />
        </motion.a>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003d82] to-[#0052ab]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0052ab]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}