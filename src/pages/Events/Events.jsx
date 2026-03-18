import React, { useState, useMemo } from "react";
import { eventsData } from "../../components/data/EventsData";
import EventCard from "../../components/EventCard";

export default function Events() {
  const [search, setSearch] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("all");

  const today = new Date();

  // 🔹 Flatten all events with institution info
  const allEvents = useMemo(() => {
    return eventsData.flatMap((inst) =>
      inst.events.map((event) => ({
        ...event,
        institution: inst.institution,
        slug: inst.slug,
        logo: inst.logo,
      }))
    );
  }, []);

  // 🔹 Filter + Search + Sort
  const filteredEvents = useMemo(() => {
    return allEvents
      .filter((event) => {
        const matchesSearch =
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.description.toLowerCase().includes(search.toLowerCase());

        const matchesInstitution =
          selectedInstitution === "all" ||
          event.slug === selectedInstitution;

        return matchesSearch && matchesInstitution;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // latest first
  }, [search, selectedInstitution, allEvents]);

  // 🔹 Split Upcoming & Past
  const upcomingEvents = filteredEvents.filter(
    (event) => new Date(event.date) >= today
  );

  const pastEvents = filteredEvents.filter(
    (event) => new Date(event.date) < today
  );

  // 🔹 Unique institutions for dropdown
  const institutions = [
    { label: "All Institutions", value: "all" },
    ...eventsData.map((inst) => ({
      label: inst.institution,
      value: inst.slug,
    })),
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Events</h1>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search events..."
          className="border rounded-xl px-4 py-2 w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-xl px-4 py-2 w-full md:w-1/3"
          value={selectedInstitution}
          onChange={(e) => setSelectedInstitution(e.target.value)}
        >
          {institutions.map((inst) => (
            <option key={inst.value} value={inst.value}>
              {inst.label}
            </option>
          ))}
        </select>
      </div>

      {/* 🚀 Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-600">
          Upcoming Events
        </h2>

        {upcomingEvents.length === 0 ? (
          <p className="text-gray-500">No upcoming events found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={`${event.slug}-${event.id}`} event={event} />
            ))}
          </div>
        )}
      </section>

      {/* 📦 Past Events */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-500">
          Past Events
        </h2>

        {pastEvents.length === 0 ? (
          <p className="text-gray-500">No past events available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
            {pastEvents.map((event) => (
              <EventCard key={`${event.slug}-${event.id}`} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}