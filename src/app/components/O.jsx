"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "https://fardin-portfolio.netlify.app/assets/project1-Dd--GYLN.jpg",
    title: "Agency Landing Page",
    subtitle:
      "A modern landing page designed for creative agencies with strong hierarchy.",
    number: "01",
    url: "https://www.behance.net/gallery/232476519/Agency-Landing-Page"
  },
  {
    id: 2,
    image: "https://fardin-portfolio.netlify.app/assets/project2-CSgm0AoP.jpg",
    title: "Contact Dashboard",
    subtitle:
      "An intuitive dashboard for managing contacts with clarity and efficiency.",
    number: "02",
    url: "https://www.behance.net/gallery/232472791/Contact-Dashboard"
  },
  {
    id: 3,
    image: "https://fardin-portfolio.netlify.app/assets/project3-iE15qzdc.jpg",
    title: "Vapeshop Landing Page",
    subtitle:
      "Bold landing page focused on branding and product highlights.",
    number: "03",
    url: "https://www.behance.net/gallery/232472791/Contact-Dashboard"
  },
];

export default function Projects() {
  return (
    <section className="pt-20 text-white px-4 sm:px-6 lg:px-12 xl:px-16 space-y-32">
      {projects.map((project, i) => {
        const isEven = i % 2 === 0;

        return (
          <div
            key={project.id}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative rounded-3xl overflow-hidden ${
                isEven ? "order-1" : "order-2"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className={`relative ${
                isEven ? "order-2" : "order-1"
              }`}
            >
              {/* Background Number */}
              <div className="absolute -top-20 left-0 text-[120px] font-bold text-white/5 select-none">
                {project.number}
              </div>

              <h3 className="text-3xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-lg text-white/70 mb-6 max-w-md">
                {project.subtitle}
              </p>

              <button className="flex items-center gap-2 text-[#DDFF00] hover:text-white transition">
               <Link className="flex items-center gap-2" href={project.url}>
                View Project <ArrowUpRight size={20} />
               </Link>
              </button>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
