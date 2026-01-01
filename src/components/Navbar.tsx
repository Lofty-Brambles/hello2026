"use client";
import { Home, Info, CalendarDays, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-auto md:w-[90%] lg:w-auto mt-5 z-50">
      <div className="backdrop-blur-md bg-background/10 p-4 rounded-full w-full flex justify-between items-center">

       
        <div className="flex gap-4 md:gap-6 items-center">
          <Link href="/" className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out">
            <Home size={22} />
            <span className="hidden md:inline">Home</span>
          </Link>

          <Link href="/about" className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out">
            <Info size={22} />
            <span className="hidden md:inline">About</span>
          </Link>

          <Link href="/timeline" className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out">
            <CalendarDays size={22} />
            <span className="hidden md:inline">Timeline</span>
          </Link>

          <Link href="/venue" className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out">
            <MapPin size={22} />
            <span className="hidden md:inline">Venue</span>
          </Link>

          <Link href="/speakers" className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out">
            <Users size={22} />
            <span className="hidden md:inline">Speakers</span>
          </Link>
        </div>

        
        <div className="ml-10 hidden md:block">
          <Link
            href="/register"
            className="cursor-pointer 
              border-2 border-white hover:border-blue-500
              justify-items-center rounded-full w-30
              bg-black p-3
              transition-all duration-300 ml-10"
          >
            Register!
          </Link>
        </div>

      </div>
    </div>
  );
}
