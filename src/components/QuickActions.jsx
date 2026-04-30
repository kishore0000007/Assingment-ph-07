    "use client";

import { PhoneCall, MessageSquare, Video } from "lucide-react";

export default function QuickActions({ friend }) {

  const addToTimeline = (type) => {
    const existing = JSON.parse(localStorage.getItem("timeline")) || [];

    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));

    // trigger update for timeline page
    window.dispatchEvent(new Event("timelineUpdated"));
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E9E9E9] p-5 shadow-sm">
      <h3 className="font-semibold text-[#1a2e29] text-sm mb-4">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-3">

        <button
          onClick={() => addToTimeline("Call")}
          className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E9] hover:border-[#244D3F] hover:bg-[#F0F7F4] transition-all group"
        >
          <PhoneCall className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F]" />
          <span className="text-xs text-[#64748B] group-hover:text-[#244D3F]">Call</span>
        </button>

        <button
          onClick={() => addToTimeline("Text")}
          className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E3] hover:border-[#244D3F] hover:bg-[#F0F7F4] transition-all group"
        >
          <MessageSquare className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F]" />
          <span className="text-xs text-[#64748B] group-hover:text-[#244D3F]">Text</span>
        </button>

        <button
          onClick={() => addToTimeline("Video")}
          className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E9] hover:border-[#244D3F] hover:bg-[#F0F7F4] transition-all group"
        >
          <Video className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F]" />
          <span className="text-xs text-[#64748B] group-hover:text-[#244D3F]">Video</span>
        </button>

      </div>
    </div>
  );
}