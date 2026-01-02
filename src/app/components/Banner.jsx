import React from 'react'

export default function Banner() {
  return (
    <div className="h-screen my-auto text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient overlay */}
      
      {/* Content container */}
      <div className=" ">
        {/* Tag line */}
        <div className="mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 text-[#DDFF00] text-sm sm:text-base font-medium">
            <span className="w-2 h-2 bg-[#DDFF00] rounded-full"></span>
            Open to New Projects
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xls xl:text-6xl font-semibold leading-16 mb-8 sm:mb-12">
          I turn ideas into{' '}
          <span className="block mt-2">meaningful design</span>
          <span className="block mt-2">solutions that inspire.</span>
        </h1>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="bg-[#DDFF00] text-black font-semibold px-8 py-4 hover:shadow-md shadow-[#DDFF00] rounded-[16px] transition-all duration-300 text-base sm:text-lg">
            Get in touch
          </button>
          <button className="bg-[#313610] border-2 shadow-[#DDFF00] shadow-md hover:shadow-lg
           border-[#DDFF00] text-[#DDFF00] font-semibold px-8 py-4 rounded-[16px]   transition-all duration-300 text-base sm:text-lg">
            My work
          </button>
        </div>
      </div>
      
   
    </div>
  )
}