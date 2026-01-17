// import React from 'react';

// export default function References() {
//   const testimonials = [
//     {
//       text: "Alex has an exceptional ability to collaborate across teams, ensuring the final product is not only visually beautiful but technically sound. Their designs always align with development constraints, making the entire process efficient and smooth.",
//       author: "Rachel Kim",
//       role: "Senior Developer, ThinkCraft Studio"
//     },
//     {
//       text: "Alex brings a fresh perspective to every project. Their innovative ideas and dedication to detail transformed the way we approached our design challenges, resulting in visually striking products that exceeded client expectations.",
//       author: "Jonathan Lee",
//       role: "Creative Director, Waveform Agency"
//     },
//     {
//       text: "Alex has a remarkable understanding of user psychology, translating complex requirements into experience that feels both modern and timeless. The attention to detail and commitment to excellence is unmatched.",
//       author: "Sarah Mitchell",
//       role: "Product Manager, CoreTech Solutions"
//     }
//   ];

//   return (
//     <div className="pt-20 px-4 sm:px-6 lg:px-12 xl:px-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 sm:mb-10">
//           References
//         </h1>

//         {/* Testimonials */}
//         <div className="space-y-16">
//           {testimonials.map((testimonial, index) => {
//             const isRight = index % 2 !== 0;

//             return (
//               <div
//                 key={index}
//                 className={`flex ${isRight ? "justify-end" : "justify-start"}`}
//               >
//                 <div className="max-w-2xl">
//                   {/* Quote + Text */}
//                   <div className="mb-6">
//                     <svg
//                       className="w-8 h-8 text-[#DDFF00] mb-4"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                     </svg>

//                     <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
//                       {testimonial.text}
//                     </p>
//                   </div>

//                   {/* Author */}
//                   <div className="border-t border-gray-800 pt-4">
//                     <p className="text-white font-medium mb-1">
//                       {testimonial.author}
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       {testimonial.role}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>


//         {/* Bottom CTA */}
//         <div className="mt-20 text-center">
//           <p className="text-gray-400 mb-6">Want to work together?</p>
//           <button className="px-8 py-3 bg-[#DDFF00] text-black font-medium rounded-full hover:bg-[#c5e600] transition-colors duration-300">
//             Get in Touch
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }


// "use client"
// import React, { useState } from 'react';

// export default function References() {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const testimonials = [
//     {
//       text: "Alex has an exceptional ability to collaborate across teams, ensuring the final product is not only visually beautiful but technically sound. Their designs always align with development constraints, making the entire process efficient and smooth.",
//       author: "Rachel Kim",
//       role: "Senior Developer, ThinkCraft Studio",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
//       rating: 5
//     },
//     {
//       text: "Alex brings a fresh perspective to every project. Their innovative ideas and dedication to detail transformed the way we approached our design challenges, resulting in visually striking products that exceeded client expectations.",
//       author: "Jonathan Lee",
//       role: "Creative Director, Waveform Agency",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
//       rating: 5
//     },
//     {
//       text: "Alex has a remarkable understanding of user psychology, translating complex requirements into experience that feels both modern and timeless. The attention to detail and commitment to excellence is unmatched.",
//       author: "Sarah Mitchell",
//       role: "Product Manager, CoreTech Solutions",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
//       rating: 5
//     }
//   ];

//   return (
//     <div className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-40 right-20 w-96 h-96 bg-[#DDFF00]/5 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
//       </div>

//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDFF00]/10 border border-[#DDFF00]/30 rounded-full backdrop-blur-sm mb-6">
//             <span className="text-[#DDFF00] text-sm font-medium">💬 Client Testimonials</span>
//           </div>
          
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-[#DDFF00] bg-clip-text text-transparent">
//             What People Say
//           </h1>
          
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Don't just take my word for it — hear from some of the amazing people I've worked with
//           </p>
//         </div>

//         {/* Desktop Grid View */}
//         <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-20">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#DDFF00]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(221,255,0,0.15)]"
//             >
//               {/* Decorative corner */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#DDFF00]/20 to-transparent rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               {/* Quote Icon */}
//               <div className="mb-6">
//                 <svg 
//                   className="w-10 h-10 text-[#DDFF00]/60" 
//                   fill="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                 </svg>
//               </div>

//               {/* Rating Stars */}
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-[#DDFF00]" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-gray-300 leading-relaxed mb-8 text-sm">
//                 "{testimonial.text}"
//               </p>

//               {/* Author Info */}
//               <div className="flex items-center gap-4 pt-6 border-t border-white/10">
//                 <div className="relative">
//                   <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#DDFF00]/30">
//                     <img 
//                       src={testimonial.image} 
//                       alt={testimonial.author}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#DDFF00] rounded-full border-2 border-black" />
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold text-sm">{testimonial.author}</p>
//                   <p className="text-gray-500 text-xs">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mobile Carousel View */}
//         <div className="lg:hidden mb-16">
//           <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
//             {/* Quote Icon */}
//             <div className="mb-6">
//               <svg 
//                 className="w-10 h-10 text-[#DDFF00]/60" 
//                 fill="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//               </svg>
//             </div>

//             {/* Rating Stars */}
//             <div className="flex gap-1 mb-4">
//               {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5 text-[#DDFF00]" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>

//             {/* Testimonial Text */}
//             <p className="text-gray-300 leading-relaxed mb-8">
//               "{testimonials[activeIndex].text}"
//             </p>

//             {/* Author Info */}
//             <div className="flex items-center gap-4 pt-6 border-t border-white/10 mb-6">
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#DDFF00]/30">
//                   <img 
//                     src={testimonials[activeIndex].image} 
//                     alt={testimonials[activeIndex].author}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#DDFF00] rounded-full border-2 border-black" />
//               </div>
//               <div>
//                 <p className="text-white font-semibold">{testimonials[activeIndex].author}</p>
//                 <p className="text-gray-500 text-sm">{testimonials[activeIndex].role}</p>
//               </div>
//             </div>

//             {/* Navigation Dots */}
//             <div className="flex justify-center gap-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     index === activeIndex 
//                       ? 'w-8 bg-[#DDFF00]' 
//                       : 'w-2 bg-white/20 hover:bg-white/40'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
//           {[
//             { number: "50+", label: "Happy Clients" },
//             { number: "100%", label: "Satisfaction Rate" },
//             { number: "5★", label: "Average Rating" },
//             { number: "80+", label: "Projects Delivered" }
//           ].map((stat, index) => (
//             <div 
//               key={index}
//               className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#DDFF00]/30 transition-all duration-300"
//             >
//               <div className="text-3xl md:text-4xl font-bold text-[#DDFF00] mb-2">{stat.number}</div>
//               <div className="text-gray-400 text-sm">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA with enhanced design */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#DDFF00]/10 via-purple-500/10 to-[#DDFF00]/10 rounded-3xl blur-xl" />
//           <div className="relative text-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-12">
//             <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
//               Ready to Start Your Project?
//             </h3>
//             <p className="text-gray-400 mb-8 max-w-xl mx-auto">
//               Let's collaborate and create something extraordinary together
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="group relative px-8 py-4 bg-[#DDFF00] text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(221,255,0,0.5)] hover:scale-105">
//                 <span className="relative z-10">Get in Touch</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#DDFF00] to-[#CCEE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
//               <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300">
//                 View Portfolio
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"
import React, { useState } from 'react';

export default function References() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const testimonials = [
    {
      text: "Alex has an exceptional ability to collaborate across teams, ensuring the final product is not only visually beautiful but technically sound. Their designs always align with development constraints, making the entire process efficient and smooth.",
      author: "Rachel Kim",
      role: "Senior Developer",
      company: "ThinkCraft Studio",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      color: "from-cyan-500 to-blue-500"
    },
    {
      text: "Alex brings a fresh perspective to every project. Their innovative ideas and dedication to detail transformed the way we approached our design challenges, resulting in visually striking products that exceeded client expectations.",
      author: "Jonathan Lee",
      role: "Creative Director",
      company: "Waveform Agency",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      text: "Alex has a remarkable understanding of user psychology, translating complex requirements into experience that feels both modern and timeless. The attention to detail and commitment to excellence is unmatched.",
      author: "Sarah Mitchell",
      role: "Product Manager",
      company: "CoreTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="relative pt-20 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(221, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(221, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#DDFF00]" />
            <span className="text-[#DDFF00] text-sm font-medium tracking-wider uppercase">Testimonials</span>
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
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${testimonials[0].color} opacity-20 blur-3xl rounded-full transition-all duration-700 ${hoveredIndex === 0 ? 'scale-150' : 'scale-100'}`} />
              
              <div className="relative z-10">
                {/* Quote Mark */}
                <div className="w-16 h-16 mb-8 bg-[#DDFF00]/10 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl text-[#DDFF00]">"</span>
                </div>

                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 font-light">
                  {testimonials[0].text}
                </p>

                {/* Author Card */}
                <div className="flex items-center gap-4">
                  <div className={`relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#DDFF00]/30 transition-all duration-300`}>
                    <img src={testimonials[0].image} alt={testimonials[0].author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{testimonials[0].author}</p>
                    <p className="text-gray-400 text-sm">{testimonials[0].role}</p>
                    <p className="text-[#DDFF00] text-xs font-medium">{testimonials[0].company}</p>
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
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${testimonial.color} opacity-20 blur-3xl rounded-full transition-all duration-700 ${hoveredIndex === index + 1 ? 'scale-150' : 'scale-100'}`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#DDFF00]/30 transition-all duration-300`}>
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{testimonial.author}</p>
                        <p className="text-gray-400 text-xs">{testimonial.role}</p>
                        <p className="text-[#DDFF00] text-xs font-medium">{testimonial.company}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
        </div>

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
                  Ready to bring your vision to life? Let's discuss your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-4 py-4 bg-[#DDFF00] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start a Project
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                  <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-[#DDFF00]/50 transition-all duration-300">
                    View Work
                  </button>
                </div>
              </div>

              {/* Right Side - Visual Element */}
              <div className="relative bg-gradient-to-br from-[#DDFF00]/10 to-purple-500/10 p-12 lg:p-16 flex items-center justify-center">
                <div className="relative">
                  {/* Floating Elements */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#DDFF00]/20 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
                  
                  {/* Icon Grid */}
                  <div className="relative grid grid-cols-3 gap-4">
                    {['💼', '🎨', '⚡', '🎯', '✨', '🚀', '💡', '🔥', '⭐'].map((emoji, i) => (
                      <div 
                        key={i}
                        className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300"
                        style={{animationDelay: `${i * 0.1}s`}}
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}