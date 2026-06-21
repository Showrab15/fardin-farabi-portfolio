"use client";
import { motion } from "framer-motion";
import { Smartphone, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import Conatact from "./Contact";

export default function AboutServices() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const services = [
    {
      title: "Landing Page Design",
      price: "$150",
      icon: Sparkles,
      features: [
        "High-converting, conversion-focused UI",
        "Responsive design (mobile, tablet, desktop)",
        "SEO-ready layout & performance best practices",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Website UI/UX Design",
      price: "$1200",
      icon: Zap,
      features: [
        "Modern, scalable website design system",
        "User-centered UX with clear information hierarchy",
        "Responsive layouts for all screen sizes",
        "Wireframes + high-fidelity UI screens",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "App UI/UX Design",
      price: "$1000",
      icon: Smartphone,
      features: [
        "iOS & Android app interface design",
        "Smooth user flows & intuitive interactions",
        "Design system for future scalability",
        "Interactive prototype for testing",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Thank you ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <motion.div
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="pt-20 px-4 sm:px-6 lg:px-12 xl:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDFF00]/10 border border-[#DDFF00]/30 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#DDFF00]" />
            <span className="text-[#DDFF00] text-sm font-medium">
              Services & Pricing
            </span>
          </div>

          {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">What I </span>
            <span className="text-[#DDFF00]">Offer</span>
          </h2> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content - Services */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-black border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#DDFF00]/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Orb */}
                  <div
                    className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-all duration-700`}
                  />

                  <div className="relative z-10">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#DDFF00]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#DDFF00]" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            {service.title}
                          </h3>
                          <p className="text-[#DDFF00] text-2xl sm:text-3xl font-bold">
                            {service.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Service Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#DDFF00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#DDFF00]" />
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    {/* <button className="mt-6 flex items-center gap-2 text-[#DDFF00] font-medium text-sm group/btn">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Content - Contact Form */}
          <Conatact />
        </div>
      </div>
    </motion.div>
  );
}
