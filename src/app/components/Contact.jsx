"use client"
import { Mail, MessageSquare, Send, User } from 'lucide-react'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    // Send email via EmailJS
    emailjs.send(
      'service_s2ykmbl',      // replace with your EmailJS service ID
      'template_rhbwj8h',     // replace with your EmailJS template ID
      formData,               // form data
      'tYbO0EZ1XPMA3P9Od'       // replace with your EmailJS public key
    )
    .then((response) => {
      console.log('Email sent successfully!', response)
    toast.success("Thanks for staying connected! 🚀");
      setFormData({ name: '', email: '', service: '', message: '' })
    })
    .catch((error) => {
      console.error('Email send error:', error)
      alert('Oops! Something went wrong. Please try again.')
    })
  }

  return (
    <div className="lg:sticky lg:top-8 h-fit">
      <div className="relative bg-black border border-white/10 rounded-3xl p-8 sm:p-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#DDFF00]/10 to-purple-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {`Let's`} Work Together
            </h3>
            <p className="text-gray-400">
              Fill out the form and {`I'll`} get back to you within 24 hours
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#DDFF00]/50 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#DDFF00]/50 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Service
              </label>
             <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white 
             focus:outline-none focus:border-[#DDFF00]/50 transition-colors duration-300 
             appearance-none cursor-pointer"
>
  <option value="" className="bg-black text-gray-400">
    Choose a service...
  </option>

  <option value="landing" className="bg-black text-white">
    Landing Page Design - $150
  </option>

  <option value="website" className="bg-black text-white">
    Website UI/UX Design - $1200
  </option>

  <option value="app" className="bg-black text-white">
    App UI/UX Design - $1000
  </option>

  <option value="others" className="bg-black text-white">
    Others -/-
  </option>
</select>

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Details
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#DDFF00]/50 transition-colors duration-300 resize-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full group relative bg-[#DDFF00] text-black font-bold py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(221,255,0,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#DDFF00] to-[#CCEE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm text-center">
              Or email directly at{' '}
              <a href="mailto:fardinfarabi1998@gmail.com" className="text-[#DDFF00] hover:underline">
               fardinfarabi1998@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
