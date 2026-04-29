    "use client";

import Link from "next/link";

export default function Card({ friend }) {
  const status = friend.status.trim().toLowerCase();

  const statusClass =
    status === "overdue"
      ? "bg-red-500 text-white"
      : status === "almost-due"
      ? "bg-yellow-500 text-white"
      : "bg-green-600 text-white";

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-md transition cursor-pointer">
        
        <div className="flex justify-center mb-3">
          <img
            src={friend.picture}
            alt={friend.name}
            className="rounded-full w-16 h-16 object-cover"
          />
        </div>

        <h3 className="text-md font-semibold text-gray-800">
          {friend.name}
        </h3>

        <p className="text-sm text-gray-400 mb-2">
          {friend.days_since_contact} days ago
        </p>

        <div className="flex flex-wrap justify-center gap-1 mb-3">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusClass}`}>
          {friend.status}
        </span>
      </div>
    </Link>
  );
}