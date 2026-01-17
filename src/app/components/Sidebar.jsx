"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menu = [
  { label: "Intro", id: "intro" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "References", id: "references" },
];

export default function Sidebar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden fixed top-5 left-5 z-50 rounded-md border border-white/10 bg-black p-2 text-white lg:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[260px]
          border-r border-white/10 bg-black px-6 py-8
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-white/70 hover:text-white lg:hidden"
        >
          <X size={20} />
        </button>

        <div className="mb-10 text-lg font-semibold">
          FARDIN FARABI
        </div>

        <nav className="flex flex-col gap-4">
          {menu.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`
                  text-sm transition
                  ${isActive
                    ? "text-lime-400 font-medium"
                    : "text-white/60 hover:text-white"}
                `}
              >
                {isActive && <span className="mr-2">—</span>}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
