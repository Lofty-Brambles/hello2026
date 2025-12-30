"use client";
import { Home, Info, CalendarDays, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If we're on the home page, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to home with hash
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-auto md:w-[90%] lg:w-auto mt-5 z-50">
      <div className="backdrop-blur-md bg-background/10 p-4 rounded-full w-full flex justify-between items-center">
        <div className="flex gap-4 md:gap-6 items-center">
          <a 
            className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" 
            href="/#home"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <Home size={22} />
            <span className="hidden md:inline">Home</span>
          </a>
          <a 
            className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" 
            href="/#about"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            <Info size={22} />
            <span className="hidden md:inline">About</span>
          </a>
          <a 
            className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" 
            href="/#timeline"
            onClick={(e) => handleNavClick(e, 'timeline')}
          >
            <CalendarDays size={22} />
            <span className="hidden md:inline">Timeline</span>
          </a>
          <a 
            className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" 
            href="/#speakers"
            onClick={(e) => handleNavClick(e, 'speakers')}
          >
            <Users size={22} />
            <span className="hidden md:inline">Speakers</span>
          </a>
          <a 
            className="flex flex-col md:flex-row items-center gap-1 cursor-pointer hover:text-indigo-400 transition-all duration-300 ease-in-out" 
            href="/#venue"
            onClick={(e) => handleNavClick(e, 'venue')}
          >
            <MapPin size={22} />
            <span className="hidden md:inline">Venue</span>
          </a>
        </div>
        {/* Right Side Content */}
        <div className="ml-10 hidden md:block">
          <a
            className="cursor-pointer 
                       border-2 border-white hover:border-blue-500
                       justify-items-center rounded-full w-30
                       bg-black p-3
                       transition-all duration-300 ml-10"
            href="/register"
          >
            Register!
          </a>
        </div>
      </div>
    </div>
  );
}