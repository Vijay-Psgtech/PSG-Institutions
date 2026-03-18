import React from "react";
import { eventsData } from "../../components/data/EventsData";
import EventCard from "../../components/EventCard";

export default function Events() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8 text-slate-800">Upcoming Events</h1>
            {eventsData.map((institution) => (
                <div key={institution.slug} className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <img 
                            src={institution.logo}
                            alt={institution.institution}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <h2 className="text-2xl font-semibold text-slate-700">{institution.institution}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {institution.events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}