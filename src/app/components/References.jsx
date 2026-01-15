import React from 'react';

export default function References() {
  const testimonials = [
    {
      text: "Alex has an exceptional ability to collaborate across teams, ensuring the final product is not only visually beautiful but technically sound. Their designs always align with development constraints, making the entire process efficient and smooth.",
      author: "Rachel Kim",
      role: "Senior Developer, ThinkCraft Studio"
    },
    {
      text: "Alex brings a fresh perspective to every project. Their innovative ideas and dedication to detail transformed the way we approached our design challenges, resulting in visually striking products that exceeded client expectations.",
      author: "Jonathan Lee",
      role: "Creative Director, Waveform Agency"
    },
    {
      text: "Alex has a remarkable understanding of user psychology, translating complex requirements into experience that feels both modern and timeless. The attention to detail and commitment to excellence is unmatched.",
      author: "Sarah Mitchell",
      role: "Product Manager, CoreTech Solutions"
    }
  ];

  return (
    <div className="mt-20 text-white  px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 sm:mb-10">
          References
        </h1>

        {/* Testimonials Grid */}
        {/* Testimonials */}
<div className="space-y-16">
  {testimonials.map((testimonial, index) => {
    const isRight = index % 2 !== 0;

    return (
      <div
        key={index}
        className={`flex ${isRight ? "justify-end" : "justify-start"}`}
      >
        <div className="max-w-2xl">
          {/* Quote + Text */}
          <div className="mb-6">
            <svg
              className="w-8 h-8 text-[#DDFF00] mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
              {testimonial.text}
            </p>
          </div>

          {/* Author */}
          <div className="border-t border-gray-800 pt-4">
            <p className="text-white font-medium mb-1">
              {testimonial.author}
            </p>
            <p className="text-gray-500 text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>


        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Want to work together?</p>
          <button className="px-8 py-3 bg-[#DDFF00] text-black font-medium rounded-full hover:bg-[#c5e600] transition-colors duration-300">
            Get in Touch
          </button>
          
        </div>
      </div>
    </div>
  );
}