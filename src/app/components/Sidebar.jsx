
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Home, Briefcase, Award, Lightbulb, MessageSquare, Settings, Twitter, Linkedin, Github, Dribbble, Instagram, Mail } from "lucide-react";
import { FaBehanceSquare } from "react-icons/fa";

const menu = [
  { label: "Intro", id: "intro", icon: Home },
  { label: "Work", id: "work", icon: Briefcase },
  { label: "Experience", id: "experience", icon: Award },
  { label: "Skills", id: "skills", icon: Lightbulb },
  { label: "References", id: "references", icon: MessageSquare },
  { label: "Services", id: "services", icon: Settings }
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/fardin-farabi-84b1462a5?", color: "hover:text-blue-600" },

  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ui.fardin?igsh=azJwenRwMDdneGc0&utm_source=ig_contact_invite", color: "hover:text-purple-400" },
  { name: 'Behance', icon: FaBehanceSquare, href: 'https://www.behance.net/fardinfarabi1', color: 'hover:text-[#1769FF]' }

];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
const itemRefs = useRef({});

  useEffect(() => {
  const handleScroll = () => {
    const sections = menu
      .map(item => document.getElementById(item.id))
      .filter(Boolean);

    let current = activeSection;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section.id;
        break;
      }
    }

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, [activeSection]);


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
useEffect(() => {
  const el = itemRefs.current[activeSection];

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
}, [activeSection]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-3 z-50 rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm  text-[#DDFF00] hover:border-[#DDFF00]/50 transition-all duration-300 lg:hidden"
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
        <div className="relative px-6 py-4 border-b border-white/10">
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
            <p className="text-xs text-gray-500 mt-1">UI/UX & Product Designer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-6 overflow-y-auto scrollbar-custom">
          <div className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                    ref={(el) => (itemRefs.current[item.id] = el)}

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
            href="mailto:fardinfarabi1998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"

            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#DDFF00]/10 border border-[#DDFF00]/30 text-[#DDFF00] hover:bg-[#DDFF00]/20 transition-all duration-300 group"
          >
            <Mail size={16} className="shrink-0" />
            <span className="text-xs font-medium truncate">Get in Touch</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-gray-600 mt-4 text-center">
            © 2026 Fardin Farabi
          </p>
        </div>
      </aside>


    </>
  );
}
