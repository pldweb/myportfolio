import React from 'react'

import { Briefcase, ExternalLink } from 'lucide-react'
import image1 from "../assets/website-1.png";

const Portfolio = () => {
  return (
    <>
    {/* Portfolio Section */}
    <section className="py-20 fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Briefcase className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured online shopping platform',
                image: image1,
                domain: 'shop.example.com',
                link: 'https://shop.example.com'
              },
              {
                title: 'Travel Blog',
                description: 'Personal travel blog with dynamic content',
                image: image1,
                domain: 'travel.example.com',
                link: 'https://travel.example.com'
              },
              {
                title: 'Task Management App',
                description: 'Project management tool for teams',
                image: image1,
                domain: 'tasks.example.com',
                link: 'https://tasks.example.com'
              }
            ].map((item, index) => (
              <div key={index} 
                className="group rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-asphalt-500 hover:text-asphalt-600 flex items-center gap-2 transition-colors"
                  >
                    {item.domain}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio