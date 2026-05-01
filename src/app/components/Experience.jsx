
"use client"
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "BitByte Innovations",
      logo: "/bitbyte-logo.jpg",
      role: "UI/UX & Product Designer",
      date: "Oct 2025 – Dec 2025",
      duration: "3 months",
      location: "East Nasirabad, Chittagong, Bangladesh",
      type: "Full-time",
      color: "from-cyan-500 to-blue-500",
      points: [
        "Designed and maintained responsive websites focusing on usability, visual consistency, and modern UI standards.",
        "Worked on digital product design including user interfaces, layouts, and scalable design systems aligned with business goals.",
        "Collaborated closely with developers to translate designs into functional and user-friendly interfaces."
      ],
    },
    {
      id: 2,
      company: "Madina Furniture",
      logo: "/madina-logo.jpg",
      role: "Accounts & Operations Executive",
      date: "Feb 2025 – Sep 2025",
      duration: "8 months",
      location: "West Side of Ashkar Dighi, Chattogram, Bangladesh",
      type: "Full-time",
      color: "from-purple-500 to-pink-500",
      points: [
        "Handled daily accounts, sales records, and expense tracking for smooth shop operations.",
        "Coordinated with management to support operational decision-making.",
        "Managed social media platforms by designing and posting promotional content to increase customer engagement."
      ],
    },
    {
      id: 3,
      company: "ASCII System",
      logo: "/ascii.png",
      role: "Web Developer Intern",
      date: "Aug 2023 – Nov 2023",
      duration: "4 months",
      location: "Hill View Road, Chattogram, Bangladesh",
      type: "Internship",
      color: "from-orange-500 to-red-500",
      points: [
        "Worked with the development team to build and maintain websites.",
        "Managed website design and assisted in application development."
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
const [viewportAmount, setViewportAmount] = useState(0.3); // default

   useEffect(() => {
     const updateViewport = () => {
       if (window.innerWidth < 640) {
         // mobile
         setViewportAmount(0.1); // triggers earlier on small screens
       } else {
         // tablet & desktop
         setViewportAmount(0.3); // default
       }
     };

     updateViewport(); // initial check
     window.addEventListener("resize", updateViewport); // handle resize
     return () => window.removeEventListener("resize", updateViewport);
   }, []);
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const checkScreen = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  checkScreen(); // initial
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);

  return (
    <motion.div initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{
           duration: 0.8,
           ease: "easeOut",
           exit: { duration: 0.1, ease: "easeInOut", y: -50 },
         }}
         viewport={{ once: true, amount: viewportAmount }}
         id='experience'
         className="relative pt-20 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#DDFF00]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDFF00]/10 border border-[#DDFF00]/30 rounded-full backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 text-[#DDFF00]" />
            <span className="text-[#DDFF00] text-sm font-medium">Career Journey</span>
          </div>
          
          {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Work </span>
            <span className="text-[#DDFF00]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A journey of growth, learning, and creating impactful digital solutions
          </p> */}
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DDFF00] via-[#DDFF00]/50 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative group"
              >
                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden lg:block absolute left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#DDFF00] ring-4 ring-black z-10">
                  <div className="absolute inset-0 rounded-full bg-[#DDFF00] animate-ping opacity-75" />
                </div>

                {/* Card */}
                <div className="lg:ml-20 relative bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-[#DDFF00]/50 transition-all duration-500">
                  {/* Gradient Orb */}
                  <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-all duration-700`} />
                  
                  <div className="relative z-10 p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Company Logo */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 p- flex-shrink-0 overflow-hidden">
                          <img 
                            src={exp.logo} 
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
  
                        {/* Company Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 break-words">
                            {exp.company}
                          </h3>
                          <p className="text-base sm:text-lg text-[#DDFF00] font-semibold mb-2">
                            {exp.role}
                          </p>
                          
                          {/* Type Badge */}
                          <span className="inline-block px-3 py-1 bg-[#DDFF00]/10 border border-[#DDFF00]/30 rounded-full text-[#DDFF00] text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="break-words">{exp.date}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-500">{exp.duration}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities - Expandable on Mobile */}
                    <div className="space-y-3">
                      <div   className={`space-y-3 ${
    expandedId === exp.id || isDesktop
      ? ""
      : "max-h-0 overflow-hidden"
  } lg:max-h-none transition-all duration-500`}
>
                        {exp.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#DDFF00] shrink-0 mt-2 group-hover/item:scale-150 transition-transform duration-300" />
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Expand Button - Mobile Only */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="lg:hidden flex items-center gap-2 text-[#DDFF00] text-sm font-medium mt-4 hover:gap-3 transition-all duration-300"
                      >
                        <span>{expandedId === exp.id ? 'Show less' : 'Read more'}</span>
                        {expandedId === exp.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="ml-auto  mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: "3+", label: "Companies" },
            { number: "2+", label: "Years Experience" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 bg-black border border-white/10 rounded-2xl hover:border-[#DDFF00]/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#DDFF00] mb-2">{stat.number}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
}