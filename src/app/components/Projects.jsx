"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    image: "/project1.avif",
    title: "Serene Urban Retreat",
    subtitle: "Where modern comfort meets peaceful sophistication.",
    number: "01",
  },
  {
    id: 2,
    image: "/project2.avif",
    title: "Luxurious Coastal Living",
    subtitle: "Bringing the beauty of the shore into your home.",
    number: "02",
  },
  {
    id: 3,
    image: "/project3.avif",
    title: "Modern Elegance in Every Room",
    subtitle: "Redefining spaces with timeless style and innovation.",
    number: "03",
  },
   {
    id: 4,
    image: "/project4.avif",
    title: "Modern Elegance in Every Room",
    subtitle: "Redefining spaces with timeless style and innovation.",
    number: "03",
  },
];

function ProjectItem({ project, index, scrollYProgress, total }) {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]); // নিচ থেকে উঠে আসবে
  const zIndex = total - 3;

  return (
    <motion.div key={project.id} style={{ y }} className="absolute inset-0">
      {/* Background Image */}
      <div
        className="mx-auto border-[#DDFF00] border-2 w-[460px] h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

      
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="mt-40  relative h-[300vh] w-full">
      <div className="-mt-[550px] sticky top-0 h-screen overflow-hidden">
        {projects.map((project, i) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
