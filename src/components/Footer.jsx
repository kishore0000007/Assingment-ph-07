  "use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white mt-10">
      
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        
        
        <h2 className="text-7xl font-bold mb-5">KeenKeeper</h2>

         
        <p className="text-sm text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

         
        <p className="text-sm mb-3 text-gray-300">Social Links</p>

        <div className="flex justify-center gap-4 mb-8">
          
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={40}
            height={40}
            className="bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition"
          />

          <Image
            src="/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
            className="bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition"
          />

          <Image
            src="/twitter.png"
            alt="Twitter"
            width={40}
            height={40}
            className="bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition"
          />

        </div>

        
        <div className="border-t border-gray-500 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-3">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
}