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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setEvents(data);
  }, []);

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((e) => e.type === filter);

  return (
    <div className="w-full flex flex-col items-center py-10 ">

      <div className="w-full max-w-md">

        <h1 className="text-xl font-semibold text-[#1a2e29] mb-6 text-center">
          Timeline
        </h1>

        <div className="flex gap-3 mb-6 justify-center">
          {["All", "Call", "Text", "Video"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-lg text-sm border ${
                filter === type
                  ? "bg-[#244D3F] text-white border-[#244D3F]"
                  : "bg-white text-[#64748B] border-[#E9E9E9]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {filteredEvents.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            No activity found
          </p>
        ) : (
          <div className="space-y-2 ">
            {filteredEvents.map((e) => (
              <div
                key={e.id}
                className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg px-4 py-3"
              >
                <div className="mt-1">
                  {iconMap[e.type]}
                </div>

                <div>
                  <p className="text-sm text-[#1a2e29]">
                    <span className="font-medium">{e.type}</span> with{" "}
                    <span className="font-medium">{e.friendName}</span>
                  </p>

                  <p className="text-xs text-[#94A3B8] mt-1">
                    {e.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}