     "use client";

import { PhoneCall, MessageSquare, Video } from "lucide-react";
import { toast } from "react-toastify";

export default function QuickActions({ friend }) {

  const addToTimeline = (type) => {
    const existing = JSON.parse(localStorage.getItem("timeline")) || [];

    const newEntry = {
      id: crypto.randomUUID(),           // ✅ unique, no collision
      friendId: friend.id,
      friendName: friend.name,
      type,                              // "Call" | "Text" | "Video"
      date: new Date().toLocaleDateString("en-US", {
        month: "short", day: "numeric", year: "numeric",
      }),
      timestamp: Date.now(),             // ✅ for reliable sorting
    };

    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));
    toast.success(`${type} logged with ${friend.name}`);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E9E9E9] p-5 shadow-sm">
      <h3 className="font-semibold text-[#1a2e29] text-sm mb-4">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => addToTimeline("Call")}
          className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E9] hover:border-[#244D3F] hover:bg-[#F0F7F4] group"
        >
          <PhoneCall className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F]" />
          <span className="text-xs text-[#64748B] group-hover:text-[#244D3F]">Call</span>
        </button>

        <button
          onClick={() => addToTimeline("Text")}
          className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E9] hover:border-[#244D3F] hover:bg-[#F0F7F4] group"
        >
          <MessageSquare className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F]" />
          <span className="text-xs text-[#64748B] group-hover:text-[#244D3F]">Text</span>
        </button>

        <button
          onClick={() => addToTimeline("Video")}
          className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E9] hover:border-[#244D3F] hover:bg-[#F0F7F4] group"
        >
          <Video className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F]" />
          <span className="text-xs text-[#64748B] group-hover:text-[#244D3F]">Video</span>
        </button>
      </div>
    </div>
  );
}