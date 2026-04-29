 "use client";

import Image from "next/image";

export default function Card({ friend }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-md transition">
      
       
      <div className="flex justify-center mb-3">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={60}
          height={60}
          className="rounded-full"
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

      
      <span
        className={`text-xs px-3 py-1 rounded-full font-medium ${
          friend.status === "Overdue"
            ? "bg-red-500 text-white"
            : friend.status === "Almost-Due"
            ? "bg-yellow-500 text-white"
            : "bg-green-700 text-white"
        }`}
      >
        {friend.status}
      </span>
    </div>
  );
}