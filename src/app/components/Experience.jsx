"use client"

import React, { useEffect, useState } from 'react';
import { Infinity } from 'lucide-react';
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "BitByte Innovations",
      logo: "https://bitbyteinnovations.com/logo/optimized/horizontal-logo-black-large.png",
      role: "UI/UX & Product Designer",
      date: "Oct 2025 – Dec 2025",
      location:
        "1103, CDA Avenue (Beside Sanmar Ocean City), East Nasirabad, Chittagong, Bangladesh",
      points: [
        "Designed and maintained responsive websites focusing on usability, visual consistency, and modern UI standards.",
        "Worked on digital product design including user interfaces, layouts, and scalable design systems aligned with business goals.",
        "Collaborated closely with developers to translate designs into functional and user-friendly interfaces."
      ],
    },
    {
      id: 2,
      company: "Madina Furniture",
      logo: "https://bitbyteinnovations.com/logo/optimized/horizontal-logo-black-large.png",
      role: "Accounts & Operations Executive",
      date: "Feb 2025 – Sep 2025",
      location:
        "S.S Khaled Road, West Side of Ashkar Dighi, Chattogram, Bangladesh",
      points: [
        "Handled daily accounts, sales records, and expense tracking for smooth shop operations.",
        "Coordinated with management to support operational decision-making.",
        "Managed social media platforms by designing and posting promotional content to increase customer engagement."
      ],
    },
    {
      id: 3,
      company: "ASCII System",
      logo: "https://bitbyteinnovations.com/logo/optimized/horizontal-logo-black-large.png",
      role: "Web Developer Intern",
      date: "Aug 2023 – Nov 2023",
      location:
        "House-100 (5th Floor), 8 Hill View Road, Chattogram 4203, Bangladesh",
      points: [
        "Worked with the development team to build and maintain websites.",
        "Managed website design and assisted in application development."
      ],
    },
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
    <div id='experience' className="pt-20 px-4 sm:px-6 lg:px-12 xl:px-16">
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
          <div className="text-left mb-8">
            <h2 className="text-4xl sm:text-5xl  font-medium text-white mb-4">
              Work experience
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1  gap-6 lg:gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="rounded-2xl p-8 border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all duration-300"
              >
                {/* Logo */}
                <div className="mb-5">
                  <img className="w-32 h-10 object-contain" src={exp.logo} alt={exp.company} />
                </div>

                {/* Company */}
                <h3 className="text-2xl font-medium text-white mb-1">
                  {exp.company}
                </h3>

                {/* Role + Date */}
                <p className="text-sm text-gray-400 mb-2">
                  {exp.role}
                </p>

                {/* Location */}
                <p className="text-xs text-gray-500 mb-5 max-w-2xl">
                  {exp.date}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}