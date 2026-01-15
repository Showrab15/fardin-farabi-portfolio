import React from 'react';
import { Figma, PenTool, Layers, Monitor, Grid, Smartphone } from 'lucide-react';

export default function ToolsIUse() {
  const tools = [
    {
      icon: <Figma size={22} strokeWidth={1.5} />,
      title: "Figma",
      description: "Primary design tool for UI design, prototyping, collaboration, and design systems."
    },
    {
      icon: <PenTool size={22} strokeWidth={1.5} />,
      title: "Adobe XD",
      description: "Used for wireframing, UI layouts, and interactive prototypes for web and mobile apps."
    },
    {
      icon: <Layers size={22} strokeWidth={1.5} />,
      title: "Adobe Illustrator",
      description: "Creating icons, vector assets, illustrations, and scalable UI elements."
    },
    {
      icon: <Monitor size={22} strokeWidth={1.5} />,
      title: "Webflow",
      description: "Translating designs into responsive, production-ready websites without code."
    },
    {
      icon: <Grid size={22} strokeWidth={1.5} />,
      title: "Notion",
      description: "Organizing UX research, design documentation, and project workflows."
    },
    {
      icon: <Smartphone size={22} strokeWidth={1.5} />,
      title: "Framer",
      description: "Building high-fidelity prototypes with smooth animations and real interactions."
    },
  ];

  return (
    <div className=" text-white mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-left text-4xl sm:text-5xl font-medium text-white">
          The tools I use
        </h1>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4 lg:gap-10">
          {tools.map((tool, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start gap-6 sm:gap-4">

                {/* Icon Circle */}
                <div className="relative flex-shrink-0 w-10 h-10 sm:w-18 sm:h-18 rounded-full">
                  <div
                    className="absolute inset-0 rounded-full animate-spin"
                    style={{
                      animationDuration: '3s',
                      background:
                        'conic-gradient(from 120deg, #DDFF00 60deg, #DDFF00 90deg, transparent 180deg, transparent 360deg)',
                    }}
                  ></div>

                  <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                    <div className="text-white">
                      {tool.icon}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-1">
                    {tool.title}
                  </h3>
                  <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
