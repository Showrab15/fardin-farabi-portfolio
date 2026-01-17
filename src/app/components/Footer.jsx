// import React from 'react';

// export default function Footer() {
//   const navigation = [
//     { name: 'Home', href: '#' },
//     { name: 'Blog', href: '#' },
//     { name: 'Contact', href: '#' }
//   ];

//   const caseStudies = [
//     { name: 'Project 1', href: '#' },
//     { name: 'Project 2', href: '#' },
//     { name: 'Project 3', href: '#' },
//     { name: 'Project 4', href: '#' }
//   ];

//   const socialMedia = [
//     { name: 'X/Twitter', href: '#' },
//     { name: 'Youtube', href: '#' },
//     { name: 'Threads', href: '#' },
//     { name: 'TikTok', href: '#' }
//   ];

//   const legalLinks = [
//     { name: 'Privacy Policy', href: '#' },
//     { name: 'Cookies', href: '#' },
//     { name: 'Terms & Conditions', href: '#' }
//   ];

//   return (
//     <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

//           {/* Brand Column */}
//           <div className="sm:col-span-2 lg:col-span-1">
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Fardin Farabi</h2>
//             <p className="text-gray-400 text-sm uppercase tracking-wide">
//               Product Designer | UI/UX Designer
//             </p>
//           </div>

//           {/* Navigation Column */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
//               Navigation
//             </h3>
//             <ul className="space-y-3">
//               {navigation.map((item) => (
//                 <li key={item.name}>
//                   <a 
//                     href={item.href}
//                     className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Case Studies Column */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
//               Case Studies
//             </h3>
//             <ul className="space-y-3">
//               {caseStudies.map((item) => (
//                 <li key={item.name}>
//                   <a 
//                     href={item.href}
//                     className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Media Column */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
//               Social Media
//             </h3>
//             <ul className="space-y-3">
//               {socialMedia.map((item) => (
//                 <li key={item.name}>
//                   <a 
//                     href={item.href}
//                     className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="pt-8 border-t border-gray-800">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             {/* Copyright */}
//             <p className="text-gray-500 text-sm text-center sm:text-left">
//               © 2024 — Toni Järvinen @tonjrv
//             </p>

//             {/* Legal Links */}
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
//               {legalLinks.map((item, index) => (
//                 <React.Fragment key={item.name}>
//                   <a 
//                     href={item.href}
//                     className="text-gray-500 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
//                   >
//                     {item.name}
//                   </a>
//                   {index < legalLinks.length - 1 && (
//                     <span className="text-gray-700 hidden sm:inline">•</span>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client"
import React from 'react';
import { Mail, Phone, MapPin,Behance, Linkedin,  Instagram, ArrowUp, Heart } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '#intro' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const projects = [
    { name: 'E-Commerce Platform', href: '#' },
    { name: 'Mobile Banking App', href: '#' },
    { name: 'SaaS Dashboard', href: '#' },
    { name: 'Portfolio Website', href: '#' }
  ];

  const socialMedia = [
   
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/fardin-farabi-84b1462a5?', color: 'hover:text-blue-600' },

    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ui.fardin?igsh=azJwenRwMDdneGc0&utm_source=ig_contact_invite', color: 'hover:text-purple-400' }
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
              <a href="mailto:fardinfarabi1998@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#DDFF00] transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#DDFF00]/10 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">fardinfarabi1998@gmail.com</span>
              </a>

              <a href="tel:+8801234567890" className="flex items-center gap-3 text-gray-400 hover:text-[#DDFF00] transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#DDFF00]/10 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+880 123 456 7890</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm leading-relaxed">Dhaka, Bangladesh</span>
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
            <span>© 2026 Fardin Farabi Paul. All rights reserved.</span>
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