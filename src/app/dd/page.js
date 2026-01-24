// "use client"
// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, ArrowRight, Send } from 'lucide-react';
// import Projects from '../components/Projects';

// const Portfolio = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with real-time inventory management and payment integration.",
//       image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
//       tags: ["Next.js", "Stripe", "MongoDB"],
//       link: "#"
//     },
//     {
//       title: "AI Chat Application",
//       description: "Real-time chat application with AI-powered responses and sentiment analysis.",
//       image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
//       tags: ["React", "WebSocket", "OpenAI"],
//       link: "#"
//     },
//     {
//       title: "Analytics Dashboard",
//       description: "Interactive data visualization dashboard with real-time metrics and reporting.",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//       tags: ["Vue.js", "D3.js", "PostgreSQL"],
//       link: "#"
//     },
//     {
//       title: "Mobile Fitness App",
//       description: "Cross-platform fitness tracking app with workout plans and progress analytics.",
//       image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
//       tags: ["React Native", "Firebase", "Redux"],
//       link: "#"
//     }
//   ];

//   const skills = [
//     { icon: <Code className="w-8 h-8" />, title: "Frontend Development", desc: "React, Next.js, Vue.js, Tailwind CSS" },
//     { icon: <Palette className="w-8 h-8" />, title: "UI/UX Design", desc: "Figma, Adobe XD, Responsive Design" },
//     { icon: <Zap className="w-8 h-8" />, title: "Backend Development", desc: "Node.js, Express, MongoDB, PostgreSQL" }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'projects', 'skills', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className=" text-white min-h-screen">
//       {/* Navigation */}
//       <motion.nav 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-800"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <motion.div 
//             className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
//             whileHover={{ scale: 1.05 }}
//           >
//             Portfolio
//           </motion.div>
          
//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-8">
//             {['home', 'projects', 'skills', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`capitalize transition-colors ${
//                   activeSection === item ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="md:hidden bg-slate-900 border-t border-slate-800"
//           >
//             {['home', 'projects', 'skills', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="block w-full text-left px-6 py-4 capitalize hover:bg-slate-800 transition-colors"
//               >
//                 {item}
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </motion.nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
//        <div className="h-screen my-auto text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       {/* Background gradient overlay */}
      
//       {/* Content container */}
//       <div className=" ">
//         {/* Tag line */}
//         <div className="mb-6 sm:mb-8">
//           <span className="inline-flex items-center gap-2 text-[#DDFF00] text-sm sm:text-base font-medium">
//             <span className="w-2 h-2 bg-[#DDFF00] rounded-full"></span>
//             Open to New Projects
//           </span>
//         </div>
        
//         {/* Main heading */}
//         <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xls xl:text-6xl font-semibold leading-16 mb-8 sm:mb-12">
//           I turn ideas into{' '}
//           <span className="block mt-2">meaningful design</span>
//           <span className="block mt-2">solutions that inspire.</span>
//         </h1>
        
//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//           <button className="bg-[#DDFF00] text-black font-semibold px-8 py-4 hover:shadow-md shadow-[#DDFF00] rounded-[16px] transition-all duration-300 text-base sm:text-lg">
//             Get in touch
//           </button>
//           <button className="bg-[#313610] border-2 shadow-[#DDFF00] shadow-md hover:shadow-lg
//            border-[#DDFF00] text-[#DDFF00] font-semibold px-8 py-4 rounded-[16px]   transition-all duration-300 text-base sm:text-lg">
//             My work
//           </button>
//         </div>
//       </div>
      
   
//     </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-32 px-6">
//         <Projects/>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-32 px-6 bg-slate-900/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Skills & Expertise
//             </h2>
//             <p className="text-slate-400 text-lg">What I bring to the table</p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all text-center"
//               >
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center"
//                 >
//                   {skill.icon}
//                 </motion.div>
//                 <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
//                 <p className="text-slate-400">{skill.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-32 px-6">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Get In Touch
//             </h2>
//             <p className="text-slate-400 text-lg">Have a project in mind? Let's talk!</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
//           >
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold mb-2">Name</label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold mb-2">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold mb-2">Message</label>
//                 <textarea
//                   rows={5}
//                   className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
//               >
//                 Send Message <Send className="w-5 h-5" />
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-6 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto text-center text-slate-400">
//           <p>© 2024 Portfolio. Built with Next.js, Framer Motion & Tailwind CSS</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;