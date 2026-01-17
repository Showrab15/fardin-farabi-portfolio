// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowBigUp, ArrowUpRight } from "lucide-react";
// import Link from "next/link";
// import { useRef } from "react";

// const projects = [
//   {
//     id: 1,
//     image: "https://fardin-portfolio.netlify.app/assets/project1-Dd--GYLN.jpg",
//     title: "Agency Landing Page",
//     subtitle: "A modern landing page designed for creative agencies with strong hierarchy and conversion-focused layout.",
//     number: "01",
//   },
//   {
//     id: 2,
//     image: "https://fardin-portfolio.netlify.app/assets/project2-CSgm0AoP.jpg",
//     title: "Contact Dashboard",
//     subtitle: "An intuitive dashboard for managing contacts with clarity and efficiency.",
//     number: "02",
//   },
//   {
//     id: 3,
//     image: "https://fardin-portfolio.netlify.app/assets/project3-iE15qzdc.jpg",
//     title: "Vapeshop Landing Page",
//     subtitle: "Bold landing page focused on branding and product highlights.",
//     number: "03",
//   },
//   {
//     id: 4,
//     image: "https://fardin-portfolio.netlify.app/assets/project4-hzAYbF18.jpg",
//     title: "Furniture Landing Page",
//     subtitle: "Minimal furniture website showcasing products elegantly.",
//     number: "04",
//   },
//   {
//     id: 5,
//     image: "https://fardin-portfolio.netlify.app/assets/project5-CdXc3Wq_.jpg",
//     title: "Turf Easy UX Case Study",
//     subtitle: "UX case study covering research, wireframes, and usability.",
//     number: "05",
//   },
// ];

// function ProjectItem({ project, index, scrollYProgress, total }) {
//   const start = index / total;
//   const end = (index + 1) / total;

//   const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);

//   return (
//     <motion.div
//       id="work"
//       style={{ y }}
//       className="absolute inset-0 flex flex-col justify-center items-center"
//     >
//       {/* Image Wrapper */}
//       <div className="relative w-[90%] sm:w-[70%] md:w-[520px] lg:w-[1020px] h-[70vh] sm:h-[75vh] md:h-[80vh] rounded-[30px] group">
//         {/* Gradient Border Layer */}
//         <div className="absolute inset-0 rounded-[30px] p-[2px] bg-[linear-gradient(1315deg,rgba(221,255,0,1),rgba(221,255,0,0.4),rgba(221,255,0,0.1),rgba(221,255,0,0.1))]">
//           {/* Inner Content Container */}
//           <div className="relative h-full w-full rounded-[28px] overflow-hidden bg-black">
//             {/* Background Image */}
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${project.image})` }}
//             />

//             {/* Icon with hover effect */}
//             <div className="absolute top-4 right-4 z-20 bg-[#0B0B0B] p-2 rounded-xl text-[#DDFF00] overflow-hidden group/icon">
//               {/* Background slide effect */}
//               <div className="rounded-xl absolute " />
//               {/* Icon */}
//               <ArrowUpRight size={22} className="transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out relative z-10 group-hover:text-white transition-colors duration-500" />
//             </div>

//             <div className="group-hover:hidden block absolute top-4 right-4 z-20 bg-[#0B0B0B] p-2 rounded-xl text-[#DDFF00] overflow-hidden group/icon">
//               {/* Background slide effect */}
//               <div className="rounded-xl absolute " />
//               {/* Icon */}
//               <ArrowUpRight size={22} className="" />
//             </div>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

//             {/* Bottom Content */}
//             <div className="absolute bottom-0 left-0 right-0 bg-[#0B0B0B] py-4 px-4">
//               <h3 className="text-lg font-medium text-white group-hover:text-[#DDFF00] transition-colors duration-300">
//                 {project.title}
//               </h3>
//               <p className="text-base text-[#B8B8B8]">{project.subtitle}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>

//   );
// }



// export default function Projects() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section id="work" ref={containerRef} className="relative h-[150vh] w-full">
//       <div className="sticky top-0 h-screen overflow-hidden flex  items-start">
//         {projects.map((project, i) => (
//           <ProjectItem
//             key={project.id}
//             project={project}
//             index={i}
//             total={projects.length}
//             scrollYProgress={scrollYProgress}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client"
import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    image: "https://fardin-portfolio.netlify.app/assets/project1-Dd--GYLN.jpg",
    title: "Agency Landing Page",
    subtitle: "A modern landing page designed for creative agencies with strong hierarchy and conversion-focused layout.",
    number: "01",
    tags: ["Web Design", "UI/UX"]
  },
  {
    id: 2,
    image: "https://fardin-portfolio.netlify.app/assets/project2-CSgm0AoP.jpg",
    title: "Contact Dashboard",
    subtitle: "An intuitive dashboard for managing contacts with clarity and efficiency.",
    number: "02",
    tags: ["Dashboard", "UX"]
  },
  {
    id: 3,
    image: "https://fardin-portfolio.netlify.app/assets/project3-iE15qzdc.jpg",
    title: "Vapeshop Landing Page",
    subtitle: "Bold landing page focused on branding and product highlights.",
    number: "03",
    tags: ["E-commerce", "Branding"]
  },
  {
    id: 4,
    image: "https://fardin-portfolio.netlify.app/assets/project4-hzAYbF18.jpg",
    title: "Furniture Landing Page",
    subtitle: "Minimal furniture website showcasing products elegantly.",
    number: "04",
    tags: ["Minimal", "Web Design"]
  },
  {
    id: 5,
    image: "https://fardin-portfolio.netlify.app/assets/project5-CdXc3Wq_.jpg",
    title: "Turf Easy UX Case Study",
    subtitle: "UX case study covering research, wireframes, and usability.",
    number: "05",
    tags: ["Case Study", "UX Research"]
  },
];

function ProjectItem({ project, isActive, opacity }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 transition-opacity duration-700 ease-out"
      style={{ 
        opacity,
        pointerEvents: isActive ? 'auto' : 'none'
      }}
    >
      {/* Project Card */}
      <div className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        {/* Card Container */}
        <div className="group relative rounded-3xl overflow-hidden bg-black border border-white/10 hover:border-[#DDFF00]/50 transition-all duration-500">
          {/* Image Container */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

            {/* Number Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DDFF00]/10 backdrop-blur-sm border border-[#DDFF00]/30 flex items-center justify-center">
              <span className="text-[#DDFF00] font-bold text-lg sm:text-xl">{project.number}</span>
            </div>

            {/* View Project Button */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <button className="group/btn w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden hover:bg-[#DDFF00] transition-all duration-300 hover:scale-110">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover/btn:text-black transition-all duration-300 group-hover/btn:rotate-45" />
              </button>
            </div>

            {/* Tags */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Info Panel */}
          <div className="relative bg-black border-t border-white/10 p-4 sm:p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#DDFF00] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Start animation when section enters viewport
      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        // Calculate progress (0 to 1) based on scroll position
        const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (containerHeight + windowHeight)));
        setScrollProgress(progress);

        // Calculate which project should be shown
        const newIndex = Math.min(
          projects.length - 1,
          Math.floor(progress * projects.length)
        );
        setCurrentIndex(newIndex);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work" className="relative pt-20 px-4 sm:px-6 lg:px-12 xl:px-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#DDFF00]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDFF00]/10 border border-[#DDFF00]/30 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#DDFF00]" />
            <span className="text-[#DDFF00] text-sm font-medium">Featured Projects</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Selected </span>
            <span className="text-[#DDFF00]">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent design projects and case studies
          </p>
        </div>

        {/* Projects Container */}
        <div ref={containerRef} className="relative h-[400vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            {projects.map((project, index) => {
              // Calculate opacity for smooth transitions
              const progress = scrollProgress * projects.length;
              let opacity = 0;

              if (index === currentIndex) {
                opacity = 1;
              } else if (index === currentIndex - 1) {
                opacity = Math.max(0, 1 - (progress - index));
              } else if (index === currentIndex + 1) {
                opacity = Math.max(0, progress - currentIndex - 1);
              }

              return (
                <ProjectItem
                  key={project.id}
                  project={project}
                  isActive={index === currentIndex}
                  opacity={opacity}
                />
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'w-12 bg-[#DDFF00]'
                  : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-[#DDFF00] text-black font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(221,255,0,0.5)] hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View All Projects
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DDFF00] to-[#CCEE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}