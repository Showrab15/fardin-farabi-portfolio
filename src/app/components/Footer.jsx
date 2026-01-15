import React from 'react';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const caseStudies = [
    { name: 'Project 1', href: '#' },
    { name: 'Project 2', href: '#' },
    { name: 'Project 3', href: '#' },
    { name: 'Project 4', href: '#' }
  ];

  const socialMedia = [
    { name: 'X/Twitter', href: '#' },
    { name: 'Youtube', href: '#' },
    { name: 'Threads', href: '#' },
    { name: 'TikTok', href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Alex Matthews</h2>
            <p className="text-gray-400 text-sm uppercase tracking-wide">
              Product Designer | Web Designer
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Case Studies
            </h3>
            <ul className="space-y-3">
              {caseStudies.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Social Media
            </h3>
            <ul className="space-y-3">
              {socialMedia.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 — Toni Järvinen @tonjrv
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legalLinks.map((item, index) => (
                <React.Fragment key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-500 hover:text-[#DDFF00] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-700 hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}