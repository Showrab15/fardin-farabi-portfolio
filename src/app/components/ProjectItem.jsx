// import { motion, useTransform } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// export function ProjectItem({ project, index, scrollYProgress, total }) {
//   const start = index / total;
//   const end = (index + 1) / total;

//   // ⬆️ Slide from bottom to center
//   const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
//   const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

//   return (
//     <motion.div
//       style={{ y, opacity }}
//       className="absolute inset-0 flex items-center justify-center px-4"
//     >
//       {/* Project Card */}
//       <div className="relative w-full max-w-6xl">
//         <div className="group relative rounded-3xl overflow-hidden bg-black border border-white/10">

//           {/* Image */}
//           <div className="relative aspect-[16/9] overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

//             {/* Number */}
//             <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-[#DDFF00]/10 border border-[#DDFF00]/30 flex items-center justify-center">
//               <span className="text-[#DDFF00] font-bold text-xl">
//                 {project.number}
//               </span>
//             </div>

//             {/* Action */}
//             <div className="absolute top-6 right-6">
//               <button className="w-14 h-14 rounded-2xl bg-black/50 border border-white/20 flex items-center justify-center hover:bg-[#DDFF00] transition">
//                 <ArrowUpRight className="text-white hover:text-black transition" />
//               </button>
//             </div>

//             {/* Tags
//             <div className="absolute bottom-6 left-6 flex gap-2 flex-wrap">
//               {project.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div> */}
//           </div>

//           {/* Info */}
//           <div className="bg-black border-t border-white/10 p-6">
//             <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#DDFF00] transition">
//               {project.title}
//             </h3>
//             <p className="text-gray-400">
//               {project.subtitle}
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
