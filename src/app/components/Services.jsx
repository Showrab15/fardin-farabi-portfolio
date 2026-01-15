import React from 'react';
import { Monitor, Search, Calendar } from 'lucide-react';

export default function AboutServices() {
  const services = [
  {
    title: "Landing Page Design",
    price: "$1999",
    features: [
      "High-converting, conversion-focused UI",
      "Responsive design (mobile, tablet, desktop)",
      "SEO-ready layout & performance best practices",
      "Delivery within 2 weeks"
    ],
    priority: "primary"
  },
  {
    title: "Website UI/UX Design",
    price: "$3499",
    features: [
      "Modern, scalable website design system",
      "User-centered UX with clear information hierarchy",
      "Responsive layouts for all screen sizes",
      "Wireframes + high-fidelity UI screens"
    ],
    priority: "secondary"
  },
  {
    title: "App UI/UX Design",
    price: "$3999",
    features: [
      "iOS & Android app interface design",
      "Smooth user flows & intuitive interactions",
      "Design system for future scalability",
      "Interactive prototype for testing"
    ],
    priority: "secondary"
  }
];

  return (
    <div className="min-h-screen bg-black text-white mt-5  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6">
              I'm Alex
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12">
              A passionate designer focused on crafting meaningful, user-centered digital experiences. With over 7 years of experience working with brands and startups, I aim to create design solutions that balance aesthetics and functionality.
            </p>

            {/* Services Section */}
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">
              My services
            </h2>

            {/* Service Card */}
 {services.map((service, index) => (
  <div
    key={index}
    className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#DDFF00] via-[#DDFF00]/50 to-[#DDFF00]/20 animate-gradient mb-6"
  >
    <div className="rounded-2xl p-6 sm:p-8 bg-black">

      {/* Service Header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl sm:text-2xl font-medium">
          {service.title}
        </h3>
        <span className="text-[#DDFF00] text-xl sm:text-2xl font-semibold">
          {service.price}
        </span>
      </div>

      {/* Service Features */}
      <div className="space-y-4">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Monitor className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm sm:text-base">
              {feature}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
))}


            {/* Navigation Links */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
              <button className="hover:text-[#DDFF00] transition-colors">About</button>
              <span>•</span>
              <button className="hover:text-[#DDFF00] transition-colors">Services</button>
              <span>•</span>
              <button className="hover:text-[#DDFF00] transition-colors">Portfolio</button>
              <span>•</span>
              <button className="hover:text-[#DDFF00] transition-colors">Contact</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#DDFF00] via-[#DDFF00]/50 to-[#DDFF00]/20 p-[1px]">
                <div className="w-full h-full rounded-3xl bg-black overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="w-full h-full group flex items-center justify-center">
                    
                    <img className='w-full h-full object-contain grayscale group-hover:grayscale-0 transition duration-500' src="https://i.ibb.co.com/KjnY1Cbw/fardin-bhai-removebg-preview.png" alt="" />
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