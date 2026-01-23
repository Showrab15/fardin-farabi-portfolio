"use client"
import React from 'react';

export default function Banner() {
  return (
    <section
      id="intro"
      className="relative pt-20 pb-10 sm:pt-8 px-4 sm:px-6 lg:px-12 xl:px-16 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#DDFF00]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Tag with enhanced styling */}
          <div >
            <span className="inline-flex items-center gap-2 text-[#DDFF00] text-sm font-medium">
              <span className="w-2.5 h-2.5 bg-[#DDFF00] rounded-full animate-pulse" />
              Open to New Projects
            </span>
          </div>

          {/* Name with gradient */}
          <div>
            <h2 className="text-lg sm:text-xl text-gray-400 mb-2 font-light">
              Hello, {`I'm`}
            </h2>

            <h1 className="text-5xl sm:text-6xl  font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#DDFF00] via-[#DDFF00] to-[#b2c059] bg-clip-text text-transparent">
                Fardin Farabi
              </span>
            </h1>

            {/* Role tag */}
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-white/90 text-sm font-medium">UI/UX & Product Designer</span>
            </div>
          </div>

          {/* Headline with improved typography */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-xl">
            I design user focused systems that
            <span className="text-[#DDFF00] font-semibold"> help brands scale </span>
            with clarity and consistency
          </p>

          {/* Stats */}
          {/* <div className="flex gap-8 pt-">
            <div>
              <div className="text-3xl font-bold text-[#DDFF00]">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#DDFF00]">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#DDFF00]">30+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div> */}

          {/* Buttons with improved styling */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+8801878131404?text=Hi!%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20Let%E2%80%99s%20chat!"
              className="group relative bg-[#DDFF00] text-black font-semibold px-8 py-4 rounded-2xl
               transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden z-10"
            >
              <span className="relative z-10">Get in Touch</span>
              {/* THIS was blocking clicks */}
            </a>
            <a
              href="/Fardin-Farabi-Chowdhury.pdf"
              download="Fardin-Farabi-Chowdhury.pdf"
              className="relative overflow-hidden border-2 border-[#DDFF00]/50 text-[#DDFF00] font-semibold px-8 py-4 rounded-2xl
             hover:bg-[#DDFF00]/10 transition-all duration-300 hover:border-[#DDFF00] hover:scale-105 active:scale-95 backdrop-blur-sm flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-[#DDFF00]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-2xl"></span>
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">↓</span>
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Multiple glow layers */}
          <div className="absolute w-72 h-80 sm:w-96 sm:h-96 bg-[#DDFF00]/20 blur-3xl rounded-full -z-10 animate-pulse" />
          <div className="absolute w-72 h-80 sm:w-96 sm:h-96 bg-purple-500/10 blur-3xl rounded-full -z-10 animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Image container with decorative elements */}
          <div className="relative">
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#DDFF00] rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#DDFF00] rounded-br-3xl" />

            {/* Image */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-[28rem] rounded-3xl overflow-hidden border-2 border-[#DDFF00]/40 ">
              <img
                src="https://i.ibb.co.com/ymxD8WnB/fardin.jpg"
                alt="Fardin Farabi"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute  inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="text-center absolute -bottom-6  right-2    sm:left-1/2 -translate-x-1/2 px-2 py-3 bg-black/80 backdrop-blur-md border border-[#DDFF00]/50 rounded-full shadow-lg">
              <span className="text-white text-center text-[8px] sm:text-xs font-medium">✨ Award-Winning Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}