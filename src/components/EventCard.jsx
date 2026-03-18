import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
      <img
        src={event.image}
        alt={event.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800">{event.title}</h3>
        <p className="text-sm text-slate-600">
          {event.date} • {event.location}
        </p>
        <p className="text-slate-700 mt-2 text-sm">{event.description}</p>
        <a
          href={event.link}
          target="_blank"
          className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
