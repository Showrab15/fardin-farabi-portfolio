import React from 'react'

export default function Banner() {
  return (
    <div 
      id="intro" 
      className="sm:py-8 pt-20 flex items-center justify-start px-4 sm:px-6 lg:px-12 xl:px-16  text-white"
    >
      {/* Content container */}
      <div className="max-w-5xl">
        {/* Tag line */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-[#DDFF00] text-xs sm:text-sm lg:text-base font-medium">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#DDFF00] rounded-full animate-pulse"></span>
            Open to New Projects
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold lg:leading-20 mb-6 sm:mb-10 lg:mb-12">
          I turn ideas into{' '}
          <span className="block mt-2 sm:mt-3">meaningful design</span>
          <span className="block mt-2 sm:mt-3">solutions that inspire.</span>
        </h1>
        
        {/* Description text - optional, uncomment if needed */}
        {/* <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
          Creating user-centered digital experiences with over 7 years of expertise in design and development.
        </p> */}
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-6">
          <button className="bg-[#DDFF00] text-black font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 hover:shadow-lg hover:shadow-[#DDFF00]/50 rounded-2xl transition-all duration-300 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95">
            Get in touch
          </button>
          <button className="bg-[#313610] border-2 border-[#DDFF00] text-[#DDFF00] font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl shadow-md shadow-[#DDFF00]/30 hover:shadow-lg hover:shadow-[#DDFF00]/50 transition-all duration-300 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95">
            My work
          </button>
        </div>
      </div>
    </div>
  )
}