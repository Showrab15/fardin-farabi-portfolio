// import React from 'react'

// export default function Banner() {
//   return (
//     <div 
//       id="intro" 
//       className="sm:py-8 pt-20 flex items-center justify-start px-4 sm:px-6 lg:px-12 xl:px-16  text-white"
//     >
//       {/* Content container */}
//       <div className="max-w-5xl">
//         {/* Tag line */}
//         <div className="mb-6">
//           <span className="inline-flex items-center gap-2 text-[#DDFF00] text-xs sm:text-sm lg:text-base font-medium">
//             <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#DDFF00] rounded-full animate-pulse"></span>
//             Open to New Projects
//           </span>
//         </div>
        
//         {/* Main heading */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold lg:leading-20 mb-6 sm:mb-10 lg:mb-12">
//           I turn ideas into{' '}
//           <span className="block mt-2 sm:mt-3">meaningful design</span>
//           <span className="block mt-2 sm:mt-3">solutions that inspire.</span>
//         </h1>
        
//         {/* Description text - optional, uncomment if needed */}
//         {/* <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
//           Creating user-centered digital experiences with over 7 years of expertise in design and development.
//         </p> */}
        
//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-6">
//           <button className="bg-[#DDFF00] text-black font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 hover:shadow-lg hover:shadow-[#DDFF00]/50 rounded-2xl transition-all duration-300 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95">
//             Get in touch
//           </button>
//           <button className="bg-[#313610] border-2 border-[#DDFF00] text-[#DDFF00] font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl shadow-md shadow-[#DDFF00]/30 hover:shadow-lg hover:shadow-[#DDFF00]/50 transition-all duration-300 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95">
//             My work
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


// import Image from "next/image";

// export default function Banner() {
//   return (
//     <section
//       id="intro"
//       className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-12 xl:px-16 text-white"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* LEFT CONTENT */}
//         <div>
//           {/* Tag */}
//           <div className="mb-6">
//             <span className="inline-flex items-center gap-2 text-[#DDFF00] text-sm font-medium">
//               <span className="w-2.5 h-2.5 bg-[#DDFF00] rounded-full animate-pulse" />
//               Open to New Projects
//             </span>
//           </div>

//           {/* Name */}
//           <h2 className="text-lg sm:text-xl text-gray-300 mb-3">
//             Hi, I’m
//           </h2>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading- mb-6">
//             <span className="text-[#DDFF00]">Showrab Paul</span>
//           </h1>

//           {/* Headline */}
//           <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-10 max-w-xl">
//             I turn ideas into <br />
//             <span className="text-white font-medium">
//               meaningful design solutions
//             </span>{" "}
//             that inspire.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-[#DDFF00] text-black font-semibold px-8 py-4 rounded-2xl transition hover:scale-105 active:scale-95">
//               Get in touch
//             </button>
//             <button className="border-2 border-[#DDFF00] text-[#DDFF00] font-semibold px-8 py-4 rounded-2xl hover:bg-[#DDFF00]/10 transition hover:scale-105 active:scale-95">
//               My work
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center lg:justify-end">
//           {/* Glow */}
//           <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#DDFF00]/20 blur-3xl rounded-full -z-10" />

//           {/* Image */}
//           <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border border-[#DDFF00]/30">
//             <Image
//               src="/fardin.png"
//               alt="Showrab Paul"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';

export default function Banner() {
  return (
    <section
      id="intro"
      className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-12 xl:px-16 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#DDFF00]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
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
            I craft digital experiences that blend{" "}
            <span className="text-[#DDFF00] font-semibold">beautiful design</span>
            {" "}with{" "}
            <span className="text-white font-semibold">intuitive functionality</span>
          </p>

          {/* Stats */}
          <div className="flex gap-8 pt-">
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
          </div>

          {/* Buttons with improved styling */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative bg-[#DDFF00] text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(221,255,0,0.5)] hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#DDFF00] to-[#CCEE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="group border-2 border-[#DDFF00]/50 text-[#DDFF00] font-semibold px-8 py-4 rounded-2xl hover:bg-[#DDFF00]/10 transition-all duration-300 hover:border-[#DDFF00] hover:scale-105 active:scale-95 backdrop-blur-sm">
              View Portfolio
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Multiple glow layers */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#DDFF00]/20 blur-3xl rounded-full -z-10 animate-pulse" />
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 blur-3xl rounded-full -z-10 animate-pulse" style={{animationDelay: '0.5s'}} />

          {/* Image container with decorative elements */}
          <div className="relative">
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#DDFF00] rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#DDFF00] rounded-br-3xl" />

            {/* Image */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-[28rem] rounded-3xl overflow-hidden border-2 border-[#DDFF00]/40 shadow-[0_0_50px_rgba(221,255,0,0.3)]">
              <img
                src="/fardin.png"
                alt="Showrab Paul"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="text-center absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-3 bg-black/80 backdrop-blur-md border border-[#DDFF00]/50 rounded-full shadow-lg">
              <span className="text-white text-center text-xs font-medium">✨ Award-Winning Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}