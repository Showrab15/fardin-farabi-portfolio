"use client"

import {
  Pencil,
  LayoutDashboard,
  Smartphone,
  ShoppingCart,
  Layers,
  Figma,
  Globe,
  Boxes
} from "lucide-react";
import { motion } from 'framer-motion';

export default function Wid() {
  const skills = [
    {
      icon: <Figma size={22} strokeWidth={1.5} />,
      title: "UI/UX & Product Design",
      description:
        "Designing user-centered digital products with a strong focus on usability, clarity, and business goals."
    },
    {
      icon: <Globe size={22} strokeWidth={1.5} />,
      title: "Website Design",
      description:
        "Crafting responsive, modern, and visually appealing websites that align with brand identity."
    },
    {
      icon: <Boxes size={22} strokeWidth={1.5} />,
      title: "SaaS Product Design",
      description:
        "Designing scalable SaaS products with intuitive flows, clean interfaces, and data-driven UX."
    },
    {
      icon: <LayoutDashboard size={22} strokeWidth={1.5} />,
      title: "Dashboard & Admin Design",
      description:
        "Creating user-friendly dashboards and admin panels for analytics, management, and reporting."
    },
    {
      icon: <Smartphone size={22} strokeWidth={1.5} />,
      title: "Mobile App Design",
      description:
        "Designing intuitive and engaging mobile applications for Android and iOS platforms."
    },
    {
      icon: <ShoppingCart size={22} strokeWidth={1.5} />,
      title: "E-commerce Experience Design",
      description:
        "Designing conversion-focused e-commerce experiences with seamless user journeys."
    },
    {
      icon: <Layers size={22} strokeWidth={1.5} />,
      title: "Wireframing & Prototyping",
      description:
        "Creating wireframes and interactive prototypes to validate ideas before development."
    },
    {
      icon: <Pencil size={22} strokeWidth={1.5} />,
      title: "Design Systems & UX Strategy",
      description:
        "Building consistent design systems and UX strategies to scale products efficiently."
    }
  ];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

  return (
    <motion.div  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={containerVariants}
  className="pt-20 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with border */}
        <h1 className="text-left text-4xl sm:text-5xl  font-medium text-white">
          What I do
        </h1>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4 lg:gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
                variants={itemVariants}

              className="group relative"
            >
              {/* Card Content */}
              <div className="flex items-start gap-6 sm:gap-4">
                {/* Icon Circle */}
                <div className="relative flex-shrink-0 w-10 h-10 sm:w-18 sm:h-18 rounded-full">
                  {/* Smooth fading rotating ring */}
                  <div
                    className="absolute inset-0 rounded-full animate-spin"
                    style={{
                      animationDuration: "4s",
                      background: `
        conic-gradient(
          rgba(221,255,0,0.2),
          rgba(221,255,0,0.4),
          rgba(221,255,0,0.4),
          rgba(221,255,0,0.1),
          rgba(221,255,0,0.5),
          rgba(221,255,0,0.4),
          rgba(221,255,0,0.3),
          rgba(221,255,0,0.1)
        )
      `,
                    }}
                  />

                  {/* Inner circle */}
                  <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                    <div className="text-white group-hover:text-[#DDFF00] transition-colors duration-300">
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}