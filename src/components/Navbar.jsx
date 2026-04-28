 import { Home, Clock, BarChart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
       <img src="/logo.png" alt="KeenKeeper Logo" />

      {/* Navigation */}
      <div className="flex items-center gap-3">
        
        {/* Home */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white">
          <Home size={16} />
          Home
        </button>

        {/* Timeline */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
          <Clock size={16} />
          Timeline
        </button>

        {/* Stats */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
          <BarChart size={16} />
          Stats
        </button>

      </div>
    </nav>
  );
}
 

 