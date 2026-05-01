   "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      pathname === path
        ? "bg-green-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  const links = [
    { href: "/", label: "Home", icon: <Home size={16} /> },
    { href: "/timeline", label: "Timeline", icon: <Clock size={16} /> },
    { href: "/stats", label: "Stats", icon: <BarChart size={16} /> },
  ];

  return (
    <nav className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      <img src="/logo.png" alt="KeenKeeper Logo" className="h-8 w-auto" />

      <div className="flex items-center gap-1">
        {links.map(({ href, label, icon }) => (
          <Link key={href} href={href} className={linkClass(href)}>
            {icon}
            {/* Hide label on very small screens, show on sm+ */}
            <span className="hidden sm:inline">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}