"use client"

import React, { useEffect, useState } from 'react';
import { Infinity } from 'lucide-react';
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Madina Furniture",
      logo: (
        <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none">
          <rect x="8" y="8" width="24" height="24" rx="4" stroke="white" strokeWidth="2" />
          <rect x="14" y="14" width="12" height="12" rx="2" stroke="white" strokeWidth="2" />
        </svg>
      ),
      position: "Accounts & Operations Executive",
      description: "At PixelCraft Studio, I led the UI/UX design for a range of digital products, from mobile apps to web platforms. My role involved closely collaborating with cross-functional teams to deliver user-centered designs that enhanced both functionality and aesthetic appeal."
    },
    {
      id: 2,
      company: "ASCII System",
      logo: <Infinity className="w-12 h-12" strokeWidth={1.5} />,
      position: "Web Developer Intern",
      description: "As a Senior Product Designer at CreativeMinds, I worked on a wide variety of branding and web design projects for clients across industries, from tech startups to established businesses."
    },
    {
      id: 3,
      company: "BitByte Innovations",
      logo: (
        <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none">
          <path d="M10 30V10L30 30V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      position: "Website Design & Product Design",
      description: "At DesignSphere Solutions, I focused on branding, print design, and visual identity creation. My work contributed to building cohesive, memorable brand experiences for clients across various industries."
    }
  ];
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


  return (
    <div id='experience' className="mt-5  px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          exit: { duration: 0.1, ease: "easeInOut", y: -50 },
        }}
        viewport={{ once: true, amount: viewportAmount }} >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-16">
            <h2 className="text-4xl sm:text-5xl  font-medium text-white mb-4">
              Work experience
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1  gap-6 lg:gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className=" rounded-2xl p-8 border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all duration-300 flex flex-col"
              >
                {/* Logo */}
                <div className="mb-6 text-white">
                  {exp.logo}
                </div>

                {/* Company Name */}
                <h3 className="text-2xl font-medium text-white mb-2">
                  {exp.company}
                </h3>

                {/* Position */}
                <p className="text-sm text-gray-400 mb-4">
                  {exp.position}
                </p>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm flex-grow">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}