"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function References() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      text: "Fardin contributed significantly to our UI/UX projects at BitByte Innovations. He showed strong creativity, attention to detail, and a solid understanding of modern design principles while collaborating effectively with our development team to deliver user-friendly and visually appealing solutions.",
      author: "Mohammad Ashraf Ali",
      role: "CEO",
      company: "Bibtbyte Innovations",
      image: "/ashraf-bhai.jpg",
      color: "from-cyan-500 to-blue-500",
    },
    {
      text: "During his time as a Web Developer Intern at ASCII System, Fardin demonstrated strong design thinking and a clear understanding of how design and development work together. His ideas and collaborative mindset added real value to the team.",
      author: "Sourav Paul",
      role: "CEO",
      company: "ASCII System",
      image: "/sourav.jpg",
      color: "from-purple-500 to-pink-500",
    },
    {
      text: "I'm really happy to have worked with Fardin. He helped translate Figma designs into clean, responsive UI elements and made the development process smoother through clear communication and a friendly teamwork mindset.",
      author: "Showrab Paul",
      role: "Front End Developer",
      company: "Bibtbyte Innovations",
      image: "/showrab-paul-photo.png",
      color: "from-orange-500 to-red-500",
    },
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
        ease: [0.22, 1, 0.36, 1], // smooth, natural easing
      },
    },
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      id="references"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="pt-20 px-4 sm:px-6 lg:px-12 xl:px-16"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(221, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(221, 255, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#DDFF00]" />
            <span className="text-[#DDFF00] text-sm font-medium tracking-wider uppercase">
              Testimonials
            </span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Large Featured Testimonial - Left */}
          <div
            className="lg:col-span-7 relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-full bg-black border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:border-[#DDFF00]/50">
              {/* Gradient Orb */}
              <div
                className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${testimonials[0].color} opacity-20 blur-3xl rounded-full transition-all duration-700 ${hoveredIndex === 0 ? "scale-150" : "scale-100"}`}
              />

              <div className="relative z-10">
                {/* Quote Mark */}
                <div className="w-16 h-16 mb-8 bg-[#DDFF00]/10 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl text-[#DDFF00]">{`"`}</span>
                </div>

                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 font-light">
                  {testimonials[0].text}
                </p>

                {/* Author Card */}
                <div className="flex items-center gap-4">
                  <div
                    className={`relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#DDFF00]/30 transition-all duration-300`}
                  >
                    <img
                      src={testimonials[0].image}
                      alt={testimonials[0].author}
                      className="w-full h-full object-center"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {testimonials[0].author}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[0].role}
                    </p>
                    <p className="text-[#DDFF00] text-xs font-medium">
                      {testimonials[0].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Stacked Testimonials - Right */}
          <div className="lg:col-span-5 space-y-6">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index + 1}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-black border border-white/10 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:border-[#DDFF00]/50">
                  {/* Gradient Orb */}
                  <div
                    className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${testimonial.color} opacity-20 blur-3xl rounded-full transition-all duration-700 ${hoveredIndex === index + 1 ? "scale-150" : "scale-100"}`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className={`relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#DDFF00]/30 transition-all duration-300`}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {testimonial.role}
                        </p>
                        <p className="text-[#DDFF00] text-xs font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      {`"${testimonial.text}"`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { metric: "50+", label: "Projects", icon: "🚀" },
            { metric: "98%", label: "Success Rate", icon: "✨" },
            { metric: "40+", label: "Clients", icon: "🤝" },
            { metric: "5.0", label: "Avg Rating", icon: "⭐" }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-black border border-white/10 rounded-2xl p-6 hover:border-[#DDFF00]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#DDFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{item.metric}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            </div>
          ))}
        </div> */}

        {/* CTA Section with Split Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DDFF00]/5 via-transparent to-purple-500/5 rounded-3xl blur-2xl" />

          <div className="relative bg-black border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  {`Let's`} Create Together
                </h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Ready to bring your vision to life? {`Let's`} discuss your
                  next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/+8801878131404?text=Hi!%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20Let%E2%80%99s%20chat!"
                    className="group relative bg-[#DDFF00] text-black font-semibold px-8 py-4 rounded-full
               transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden z-10"
                  >
                    <span className="relative z-10">Start a project</span>
                    {/* THIS was blocking clicks */}
                  </a>
                  <button
                    id="work"
                    onClick={() => scrollToSection("work")}
                    className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-[#DDFF00]/50 transition-all duration-300"
                  >
                    View Work
                  </button>
                </div>
              </div>

              {/* Right Side - Visual Element */}
              <div className="relative bg-gradient-to-br from-[#DDFF00]/10 to-purple-500/10 p-12 lg:p-16 flex items-center justify-center">
                <div className="relative">
                  {/* Floating Elements */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#DDFF00]/20 rounded-full blur-2xl animate-pulse" />
                  <div
                    className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />

                  {/* Icon Grid */}
                  <div className="relative grid grid-cols-3 gap-4">
                    {["💼", "🎨", "⚡", "🎯", "✨", "🚀", "💡", "🔥", "⭐"].map(
                      (emoji, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {emoji}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
