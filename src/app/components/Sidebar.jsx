// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const menu = [
//   { label: "Intro", id: "intro" },
//   { label: "Work", id: "work" },
//   { label: "Experience", id: "experience" },
//   { label: "Skills", id: "skills" },
//   { label: "References", id: "references" },
// ];

// export default function Sidebar({ activeSection }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile menu button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="hidden fixed top-5 left-5 z-50 rounded-md border border-white/10 bg-black p-2 text-white lg:hidden"
//       >
//         <Menu size={20} />
//       </button>

//       {/* Overlay (mobile only) */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed left-0 top-0 z-50 h-screen w-[260px]
//           border-r border-white/10 bg-black px-6 py-8
//           transform transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0
//         `}
//       >
//         {/* Mobile close button */}
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute right-4 top-4 text-white/70 hover:text-white lg:hidden"
//         >
//           <X size={20} />
//         </button>

//         <div className="mb-10 text-lg font-semibold">
//           FARDIN FARABI
//         </div>

//         <nav className="flex flex-col gap-4">
//           {menu.map((item) => {
//             const isActive = activeSection === item.id;

//             return (
//               <Link
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={() => setOpen(false)}
//                 className={`
//                   text-sm transition
//                   ${isActive
//                     ? "text-lime-400 font-medium"
//                     : "text-white/60 hover:text-white"}
//                 `}
//               >
//                 {isActive && <span className="mr-2">—</span>}
//                 {item.label}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, Award, Lightbulb, MessageSquare, Settings, Twitter, Linkedin, Github, Dribbble, Instagram, Mail } from "lucide-react";

const menu = [
  { label: "Intro", id: "intro", icon: Home },
  { label: "Work", id: "work", icon: Briefcase },
  { label: "Experience", id: "experience", icon: Award },
  { label: "Skills", id: "skills", icon: Lightbulb },
  { label: "References", id: "references", icon: MessageSquare },
  { label: "Services", id: "services", icon: Settings },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourhandle", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-600" },
  { name: "GitHub", icon: Github, href: "https://github.com/yourusername", color: "hover:text-gray-300" },
  { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com/yourprofile", color: "hover:text-pink-400" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/yourhandle", color: "hover:text-purple-400" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menu.map(item => document.getElementById(item.id)).filter(Boolean);

      // Find which section is currently in view
      let currentSection = "intro";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Check if section is in viewport (with some offset for better UX)
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for better positioning
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm p-3 text-white hover:border-[#DDFF00]/50 transition-all duration-300 lg:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[280px]
          border-r border-white/10 bg-black
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="relative px-6 py-8 border-b border-white/10">
          {/* Mobile close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-6 text-white/70 hover:text-[#DDFF00] transition-colors duration-300 lg:hidden"
          >
            <X size={20} />
          </button>

          {/* Logo/Brand */}
          <div className="mb-2">
            <h1 className="text-xl font-bold">
              <span className="text-white">Fardin </span>
              <span className="text-[#DDFF00]">Farabi</span>
            </h1>
            <p className="text-xs text-gray-500 mt-1">UI/UX Designer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-8 overflow-y-auto scrollbar-custom">
          <div className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-300
                    ${isActive
                      ? "bg-[#DDFF00]/10 text-[#DDFF00] border border-[#DDFF00]/30"
                      : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"}
                  `}
                >
                  {/* Active indicator line */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#DDFF00] rounded-r-full" />
                  )}

                  {/* Icon */}
                  <Icon
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                  />

                  {/* Label */}
                  <span className={`text-sm font-medium ${isActive ? "font-semibold" : ""}`}>
                    {item.label}
                  </span>

                  {/* Arrow indicator on hover */}
                  <span className={`ml-auto text-xs transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer - Social Links & Email */}
        <div className="px-6 py-6 border-t border-white/10">
          {/* Social Media */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Connect</p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 ${social.color} hover:border-current transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Email Contact */}
          <a
            href="mailto:hello@showrabpaul.com"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#DDFF00]/10 border border-[#DDFF00]/30 text-[#DDFF00] hover:bg-[#DDFF00]/20 transition-all duration-300 group"
          >
            <Mail size={16} className="shrink-0" />
            <span className="text-xs font-medium truncate">Get in Touch</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-gray-600 mt-4 text-center">
            © 2025 Fardin Farabi
          </p>
        </div>
      </aside>


    </>
  );
}
