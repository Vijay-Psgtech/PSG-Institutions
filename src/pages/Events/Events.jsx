import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, MapPin, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { eventsData } from "../../components/data/EventsData";
import EventCard from "../../components/EventCard";

const ITEMS_PER_PAGE = 9;

export default function Events() {
  const [search, setSearch] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming"); // "upcoming" | "past" | "all"

  const today = new Date();

  // Flatten all events with institution info
  const allEvents = useMemo(() => {
    return eventsData.flatMap((inst) =>
      inst.events.map((event) => ({
        ...event,
        institution: inst.institution,
        slug: inst.slug,
        logo: inst.logo,
      })),
    );
  }, []);

  // Filter + Search + Sort
  const filteredEvents = useMemo(() => {
    return allEvents
      .filter((event) => {
        const matchesSearch =
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.description.toLowerCase().includes(search.toLowerCase()) ||
          event.institution.toLowerCase().includes(search.toLowerCase());

        const matchesInstitution =
          selectedInstitution === "all" || event.slug === selectedInstitution;

        const eventDate = new Date(event.date);
        const matchesTab =
          activeTab === "all" ||
          (activeTab === "upcoming" && eventDate >= today) ||
          (activeTab === "past" && eventDate < today);

        return matchesSearch && matchesInstitution && matchesTab;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [search, selectedInstitution, allEvents, activeTab]);

  // Count events for tabs
  const upcomingCount = allEvents.filter((e) => new Date(e.date) >= today).length;
  const pastCount = allEvents.filter((e) => new Date(e.date) < today).length;

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedInstitution, activeTab]);

  // Unique institutions for dropdown
  const institutions = [
    { label: "All Institutions", value: "all", count: allEvents.length },
    ...eventsData.map((inst) => ({
      label: inst.institution,
      value: inst.slug,
      count: inst.events.length,
    })),
  ];

  const clearFilters = () => {
    setSearch("");
    setSelectedInstitution("all");
    setActiveTab("all");
  };

  const hasActiveFilters = search !== "" || selectedInstitution !== "all" || activeTab !== "all";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#003d82] to-[#0052ab]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Events & Workshops
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Discover Upcoming Events
            </h1>
            
            <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto">
              Stay updated with latest events, workshops, and seminars across PSG Institutions
            </p>

            <div className="mt-6 flex justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{upcomingCount} Upcoming</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>{pastCount} Past Events</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full mb-4 flex items-center justify-between px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-[#0052ab] transition-colors"
          >
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <Filter size={20} />
              Filters {hasActiveFilters && `(${search ? 1 : 0 + (selectedInstitution !== "all" ? 1 : 0)})`}
            </span>
            <motion.div animate={{ rotate: showFilters ? 180 : 0 }}>
              <ChevronLeft size={20} className="transform rotate-90" />
            </motion.div>
          </button>

          {/* Filters Content */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events, institutions, or topics..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052ab] focus:border-transparent transition-all"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                {/* Institution Filter */}
                <div className="lg:w-80 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052ab] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                    value={selectedInstitution}
                    onChange={(e) => setSelectedInstitution(e.target.value)}
                  >
                    {institutions.map((inst) => (
                      <option key={inst.value} value={inst.value}>
                        {inst.label} ({inst.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={clearFilters}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    <X size={18} />
                    <span className="hidden sm:inline">Clear</span>
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {[
            { id: "all", label: "All Events", count: allEvents.length },
            { id: "upcoming", label: "Upcoming", count: upcomingCount },
            { id: "past", label: "Past Events", count: pastCount },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? "bg-white/20" : "bg-gray-100"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{paginatedEvents.length}</span> of{" "}
            <span className="font-semibold text-gray-900">{filteredEvents.length}</span> events
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          {filteredEvents.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-20"
            >
              <Calendar size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters or search terms</p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {paginatedEvents.map((event, index) => (
                <EventCard
                  key={`${event.slug}-${event.id}`}
                  event={event}
                  index={index}
                  isPast={new Date(event.date) < today}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && filteredEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center items-center gap-2"
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`p-3 rounded-xl border transition-all ${
                currentPage === 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first, last, current, and adjacent pages
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl font-semibold transition-all ${
                        currentPage === page
                          ? "bg-gradient-to-r from-[#003d82] to-[#0052ab] text-white shadow-lg"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="w-10 h-10 flex items-center justify-center text-gray-400">
                      •••
                    </span>
                  );
                }
                return null;
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-xl border transition-all ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}