"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import useScrollSpy from "../hooks/useScrollSpy";

export default function SidebarLayout({ children }) {
  const [activeSection, setActiveSection] = useState("intro");

  useScrollSpy(setActiveSection);

  return (
    <div className="flex min-h-screen  text-white">
      <Sidebar activeSection={activeSection} />
      <main className="flex-1 lg:ml-[260px] w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
