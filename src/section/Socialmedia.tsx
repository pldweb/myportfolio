import React from 'react'
import { Github, Linkedin, Instagram } from 'lucide-react'

const Socialmedia = () => {
  return (
    <>
    {/* Social Media Section */}
    <section className="py-20 bg-gray-50 fade-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Connect With Me</h2>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/pldweb" className="text-gray-600 hover:text-asphalt-500 transition-colors transform hover:-translate-y-1 duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rivaldi-fanani-550772318/" className="text-gray-600 hover:text-asphalt-500 transition-colors transform hover:-translate-y-1 duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/rivaldipostman" className="text-gray-600 hover:text-asphalt-500 transition-colors transform hover:-translate-y-1 duration-300">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Socialmedia