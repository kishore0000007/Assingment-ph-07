 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
      pathname === path
        ? "bg-green-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      <img src="/logo.png" alt="KeenKeeper Logo" />

      <div className="flex items-center gap-3">
        <Link href="/" className={linkClass("/")}>
          <Home size={16} />
          Home
        </Link>

        <Link href="/timeline" className={linkClass("/timeline")}>
          <Clock size={16} />
          Timeline
        </Link>

        <Link href="/stats" className={linkClass("/stats")}>
          <BarChart size={16} />
          Stats
        </Link>
      </div>
    </nav>
  );
}