"use client"
import React, { useState } from 'react';
import {Minus} from "lucide-react"
export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Intro');

  const menuItems = [
    { name: 'Intro', link: '#intro' },
    { name: 'Work', link: '#work' },
    { name: 'Experience', link: '#experience' },
    { name: 'Skills', link: '#skills' },
    { name: 'References', link: '#references' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' }
  ];

  return (
    <div className=" my-auto fixed left-0 top-0 h-screen w-64  text-white flex flex-col">
      {/* Header */}
      <div className="pt-6 pl-10 pb-8">
        <h1 className="font-bold uppercase text-2xl text-white">
          Fardin Farabi
        </h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 pl-10 ">
        <ul className="space-y-1 ">
          {menuItems.map((item) => (
            <li className="flex items-center" key={item.name}>
               
              <a
                href={item.link}
                onClick={() => setActiveSection(item.name)}
                className={`flex items-center  py-2 text-sm transition-colors ${
                  activeSection === item.name
                    ? 'text-[#DDFF00] hover:text-[#f0ff23c4] font-medium'
                    : 'text-white hover:text-[#DDFF00]'
                }`}
              >
                {activeSection === item.name && (
                  <span className=""> <Minus size={15} className=" mr-2" /></span>
                )}
              {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Text */}
      <div className="pl-10 pb-8">
        <p className="text-xs text-gray-500 transform -rotate-90 origin-left whitespace-nowrap">
          Open to New Projects
        </p>
      </div>
    </div>
  );
}

// https://framer.com/projects/Fardin-Portfolio--v5hWW8Pgom1A13AUWYJc-d2XrY