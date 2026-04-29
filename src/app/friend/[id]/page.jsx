import data from "@/data/data.json";
import Image from "next/image";
import { PhoneCall, MessageSquare, Video, Clock, Archive, Trash2, Pencil } from "lucide-react";

export default async function FriendDetails({ params }) {
  const { id: rawId } = await params;

  if (!rawId) {
    return <p className="p-10">Invalid route</p>;
  }

  const id = parseInt(rawId, 10);
  const friend = data.find((f) => f.id === id);

  if (!friend) {
    return <p className="p-10">Friend not found</p>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFA] flex flex-col">

       
      <div className="px-8 pt-8 pb-2 max-w-5xl mx-auto w-full">
        <p className="text-xs text-[#64748B] uppercase tracking-widest font-medium">Friend Details</p>
      </div>

       
      <main className="flex-1 px-8 py-4 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-5 items-start">

          <div className="bg-white rounded-2xl border border-[#E9E9E9] p-6 flex flex-col shadow-sm">

             
            <div className="flex flex-col items-center gap-2">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={80}
                height={80}
                className="rounded-full object-cover ring-2 ring-[#E9E9E9]"
              />

              <h2 className="font-semibold text-[#1a2e29] text-lg mt-1">{friend.name}</h2>

              <div className="flex flex-col items-center gap-1.5">
                <span className={`text-xs px-3 py-0.5 rounded-full font-medium ${
                  friend.status === "Overdue"
                    ? " text-red bg-red-100"
                    : friend.status === "Almost-Due"
                    ? " text-yellow bg-red-100"
                    : friend.status === "On-Track"
                    ? "bg-green-100 text-green-700"
                    : ""
                }`}>
                  {friend.status}
                </span>

                {friend.group && (
                  <span className="text-xs px-3 py-0.5 rounded-full bg-[#244D3F] text-white font-medium">
                    {friend.group}
                  </span>
                )}
              </div>

              {friend.bio && (
                <p className="text-[#64748B] text-sm text-center italic mt-1">"{friend.bio}"</p>
              )}

              {friend.preferred_contact && (
                <p className="text-[#94A3B8] text-xs">Preferred: {friend.preferred_contact}</p>
              )}
            </div>

             
            <div className="w-full border-t border-[#F0F0F0] my-4" />

            
            <div className="flex flex-col gap-1">
              <button className="w-full flex items-center justify-center gap-2 text-sm text-[#64748B] hover:text-[#244D3F] hover:bg-[#F0F7F4] rounded-lg py-2 transition-colors">
                <Clock className="w-4 h-4" />
                Snooze 2 Weeks
              </button>

              <button className="w-full flex items-center justify-center gap-2 text-sm text-[#64748B] hover:text-[#244D3F] hover:bg-[#F0F7F4] rounded-lg py-2 transition-colors">
                <Archive className="w-4 h-4" />
                Archive
              </button>

              <button className="w-full flex items-center justify-center gap-2 text-sm text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg py-2 transition-colors">
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>

           
          <div className="md:col-span-2 flex flex-col gap-4">

             
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-[#E9E9E9] p-5 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#1a2e29]">{friend.days_since_contact}</p>
                <p className="text-xs text-[#94A3B8] mt-1">Days Since Contact</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E9E9E9] p-5 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#1a2e29]">{friend.goal}</p>
                <p className="text-xs text-[#94A3B8] mt-1">Goal (Days)</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E9E9E9] p-5 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#1a2e29]">{friend.next_due_date}</p>
                <p className="text-xs text-[#94A3B8] mt-1">Next Due</p>
              </div>
            </div>

             
            <div className="bg-white rounded-2xl border border-[#E9E9E9] p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[#1a2e29] text-sm">Relationship Goal</h3>
                <button className="flex items-center gap-1 text-xs text-[#64748B] border border-[#E9E9E9] rounded-lg px-3 py-1 hover:border-[#244D3F] hover:text-[#244D3F] transition-colors">
                  <Pencil className="w-3 h-3" />
                  Edit
                </button>
              </div>
              <p className="text-sm text-[#64748B]">
                Connect every{" "}
                <span className="font-semibold text-[#1a2e29]">{friend.goal} days</span>
              </p>
            </div>

             
            <div className="bg-white rounded-2xl border border-[#E9E9E9] p-5 shadow-sm">
              <h3 className="font-semibold text-[#1a2e29] text-sm mb-4">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E9] hover:border-[#244D3F] hover:bg-[#F0F7F4] transition-all group">
                  <PhoneCall className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F] transition-colors" />
                  <span className="text-xs text-[#64748B] group-hover:text-[#244D3F] transition-colors">Call</span>
                </button>

                <button className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E3] hover:border-[#244D3F] hover:bg-[#F0F7F4] transition-all group">
                  <MessageSquare className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F] transition-colors" />
                  <span className="text-xs text-[#64748B] group-hover:text-[#244D3F] transition-colors">Text</span>
                </button>

                <button className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[#E9E9E9] hover:border-[#244D3F] hover:bg-[#F0F7F4] transition-all group">
                  <Video className="w-5 h-5 text-[#64748B] group-hover:text-[#244D3F] transition-colors" />
                  <span className="text-xs text-[#64748B] group-hover:text-[#244D3F] transition-colors">Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
