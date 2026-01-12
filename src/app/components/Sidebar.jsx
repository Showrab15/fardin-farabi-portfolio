"use client";

import Link from "next/link";

const menu = [
  { label: "Intro", id: "intro" },
  { label: "Work", id: "work" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Sidebar({ activeSection }) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] border-r border-white/10 px-6 py-8">
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
  );
}
