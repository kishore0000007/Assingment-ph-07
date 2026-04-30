 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const getClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
      pathname === path
        ? "bg-green-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      
      <img src="/logo.png" alt="KeenKeeper Logo" />

      <div className="flex items-center gap-3">

        <Link href="/">
          <button className={getClass("/")}>
            <Home size={16} />
            Home
          </button>
        </Link>

        <Link href="/timeline">
          <button className={getClass("/timeline")}>
            <Clock size={16} />
            Timeline
          </button>
        </Link>

        <Link href="/stats">
          <button className={getClass("/stats")}>
            <BarChart size={16} />
            Stats
          </button>
        </Link>

      </div>
    </nav>
  );
}