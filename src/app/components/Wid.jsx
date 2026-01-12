import React from 'react';
import { Pencil, Wrench, Search } from 'lucide-react';

export default function Wid() {
  const skills = [
    {
      icon: <Pencil size={22} strokeWidth={1.5} />,
      title: "Website Design",
      description: "Crafting responsive, modern, and visually appealing websites that reflect your brand identity."
    },
    {
      icon: <Wrench size={22} strokeWidth={1.5} />,
      title: "Apps Design",
      description: "Designing intuitive and engaging mobile applications for Android and iOS with smooth UX/UI."
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>,
      title: "Dashboard Design",
      description: "Creating interactive and user-friendly dashboards for analytics and reporting purposes."
    },
    {
      icon: <Search size={22} strokeWidth={1.5} />,
      title: "Landing Page Design",
      description: "Building high-converting landing pages optimized for user engagement and lead generation."
    },
    {
      icon: <Search size={22} strokeWidth={1.5} />,
      title: "Landing Page Design",
      description: "Building high-converting landing pages optimized for user engagement and lead generation."
    },
    {
      icon: <Search size={22} strokeWidth={1.5} />,
      title: "E-commerce Design",
      description: "Designing online stores with seamless shopping experiences to boost sales and retention."
    },
    {
      icon: <Search size={22} strokeWidth={1.5} />,
      title: "E-commerce Design",
      description: "Designing online stores with seamless shopping experiences to boost sales and retention."
    },
    {
      icon: <Search size={22} strokeWidth={1.5} />,
      title: "Wireframe & Prototype",
      description: "Developing wireframes and interactive prototypes to visualize and test your product ideas."
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with border */}
          <h1 className="text-center text-4xl sm:text-5xl  font-medium text-white">
            What I do
          </h1>

        {/* Skills Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4 lg:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Content */}
              <div className="flex items-start gap-6 sm:gap-4">
                {/* Icon Circle */}
              <div className="relative flex-shrink-0 w-10 h-10 sm:w-18 sm:h-18 rounded-full">
  {/* Rotating gradient background */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DDFF00] via-[#DDFF00]/40 to-[#DDFF00]/60 animate-spin" style={{ animationDuration: '3s' }}></div>
  
  {/* Inner content with slight padding to show border */}
  <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
    <div className="text-white transition-colors duration-300">
      {skill.icon}
    </div>
  </div>
</div>

                {/* Text Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed">
                    {skill.description}
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