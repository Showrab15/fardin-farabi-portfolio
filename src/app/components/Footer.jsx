

"use client"
import React from 'react';
import { Mail, Phone, MapPin, Behance, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react';
import { FaBehance, FaBehanceSquare } from 'react-icons/fa';

export default function Footer() {
  const navigation = [
    { name: 'About', id: "intro" },
    { name: 'Work', id: "work" },
    { name: 'Experience', id: "experience" },
    { name: 'Skills', id: "skills" },
    { name: 'References', id: "references" },
    { name: 'Services', id: "services" },
  ];

  const projects = [
    { name: 'Agency Landing Page', href: '#' },
    { name: 'Contact Dashboard', href: '#' },
    { name: 'Vapeshop Landing Page', href: '#' },
    { name: 'Turf Easy UX Case Study', href: '#' },
    { name: 'Furniture Landing Page', href: '#' }
  ];
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialMedia = [

    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/fardin-farabi-84b1462a5?', color: 'hover:text-blue-600' },

    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ui.fardin?igsh=azJwenRwMDdneGc0&utm_source=ig_contact_invite', color: 'hover:text-purple-400' },
    { name: 'Behance', icon: FaBehanceSquare, href: 'https://www.behance.net/fardinfarabi1', color: 'hover:text-[#1769FF]' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative  text-white pt-20 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#DDFF00]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">

          {/* Brand Column - Takes more space */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                <span className="text-white">Fardin </span>
                <span className="text-[#DDFF00]">Farabi</span>
              </h2>
              <p className="text-gray-400 text-sm  leading-relaxed max-w-sm">
                Crafting beautiful digital experiences through thoughtful UI/UX design. {`Let's`} create something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a target="_blank"
                rel="noopener noreferrer"
                href="mailto:fardinfarabi1998@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#DDFF00] transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#DDFF00]/10 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">fardinfarabi1998@gmail.com</span>
              </a>

              <a target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+8801878131404?text=Hi!%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20Let%E2%80%99s%20chat!"
                className="flex items-center gap-3 text-gray-400 hover:text-[#DDFF00] transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#DDFF00]/10 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+880 1878 131 404</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm leading-relaxed">Chittagong, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base sm:text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#DDFF00] transition-all duration-300" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

          </div>

          {/* Featured Projects */}
          <div className="lg:col-span-3">
            <h3 className="text-base sm:text-lg font-semibold mb-6 text-white">
              Featured Work
            </h3>
            <ul className="space-y-3">
              {projects.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-300 text-sm  flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#DDFF00] transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div className="lg:col-span-3">
            <h3 className="text-base sm:text-lg font-semibold mb-6 text-white">
              Stay Connected
            </h3>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-4">
                Get updates on new projects and design insights.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-40 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DDFF00]/50 transition-colors duration-300"
                />
                <button className="px-6  bg-[#DDFF00] text-black font-semibold rounded-xl hover:bg-[#CCEE00] transition-colors duration-300">
                  <ArrowUp className="w-4 h-3 rotate-45" />
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow me</p>
              <div className="flex f gap-3">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                        target="_blank" 
  rel="noopener noreferrer"

                      className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center ${social.color} hover:border-current transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-500 text-sm text-center md:text-left">
            <span>© 2026 Fardin Farabi. All rights reserved.</span>
            {/* <span className="hidden sm:inline">•</span> */}
            {/* <span className="hidden sm:inline flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Bangladesh
            </span> */}
          </div>

          {/* Legal Links & Scroll to Top */}
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-[#DDFF00] transition-colors duration-300 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#DDFF00] transition-colors duration-300 text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-[#DDFF00] transition-colors duration-300 text-sm">
                Cookies
              </a>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#DDFF00]/10 border border-[#DDFF00]/30 flex items-center justify-center hover:bg-[#DDFF00] hover:text-black transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#DDFF00] group-hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}