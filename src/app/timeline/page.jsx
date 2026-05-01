       "use client";

import { useEffect, useState } from "react";
import { PhoneCall, MessageSquare, Video } from "lucide-react";

const iconMap = {
  Call: <PhoneCall className="w-4 h-4 text-[#244D3F]" />,
  Text: <MessageSquare className="w-4 h-4 text-[#244D3F]" />,
  Video: <Video className="w-4 h-4 text-[#244D3F]" />,
};

export default function Timeline() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  const loadEvents = () => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    // ✅ sort by timestamp descending (newest first), no mutation
    const sorted = [...data].sort((a, b) => b.timestamp - a.timestamp);
    setEvents(sorted);
  };

  useEffect(() => {
    loadEvents();

    // ✅ re-fetch when user navigates back to this tab
    window.addEventListener("focus", loadEvents);
    return () => window.removeEventListener("focus", loadEvents);
  }, []);

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((e) => e.type === filter);   // ✅ exact match now safe

  return (
    <div className="min-h-screen bg-[#F8FAFA] flex justify-center py-12">
      <div className="w-full max-w-xl">

        <h1 className="text-xl font-semibold text-[#1a2e29] mb-6 text-center">
          Timeline
        </h1>

        {/* Filter */}
        <div className="flex gap-3 mb-8 justify-center">
          {["All", "Call", "Text", "Video"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-lg text-sm border transition ${
                filter === type
                  ? "bg-[#244D3F] text-white border-[#244D3F]"
                  : "bg-white text-[#64748B] border-[#E9E9E9] hover:bg-[#F0F7F4]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Timeline Card Container */}
        <div className="bg-white border border-[#E9E9E9] rounded-xl p-4 space-y-3 shadow-sm">
          {filteredEvents.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-6">
              No activity found
            </p>
          ) : (
            filteredEvents.map((e) => (
              <div
                key={e.id}
                className="flex items-start gap-3 border border-[#E9E9E9] rounded-lg px-4 py-3 hover:bg-[#F8FAFC] transition"
              >
                <div className="mt-1">{iconMap[e.type]}</div>

                <div className="flex-1">
                  <p className="text-sm text-[#1a2e29]">
                    <span className="font-medium">{e.type}</span> with{" "}
                    <span className="font-medium">{e.friendName}</span>
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1">{e.date}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}