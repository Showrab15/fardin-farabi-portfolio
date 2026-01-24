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
//     <section ref={containerRef} className="relative h-[300vh] w-full">
//       <div className="sticky top-0 h-screen overflow-hidden flex items-center">
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