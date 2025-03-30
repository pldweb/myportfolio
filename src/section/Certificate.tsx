import React from 'react';
import  {AlignCenterVertical } from 'lucide-react'
import certificate from "../assets/website-1.png";


const Certificate = () => {
  return (
    <>
    {/* Certificates Section */}
    <section className="py-20 fade-section">
        <div className="container mx-auto max-w-[70%]">
          <div className="flex items-center gap-2 justify-center mb-12">
            <AlignCenterVertical className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl title-section font-bold text-gray-800">Certificates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'AWS Certified Solutions Architect',
                image: certificate,
                issuer: 'Amazon Web Services'
              },
              {
                name: 'Google Cloud Professional Developer',
                image: certificate,
                issuer: 'Google Cloud'
              },
              {
                name: 'Meta Frontend Developer',
                image: certificate,
                issuer: 'Meta'
              },
              {
                name: 'MongoDB Certified Developer',
                image: certificate,
                issuer: 'MongoDB University'
              },
              {
                name: 'Docker Certified Associate',
                image: certificate,
                issuer: 'Docker'
              },
              {
                name: 'Kubernetes Administrator',
                image: certificate,
                issuer: 'Cloud Native Computing Foundation'
              }
            ].map((cert, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-48">
                  <img 
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600">Issued by: {cert.issuer}</p>
                  <p className="text-gray-500 text-sm mt-2">Issued: 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Certificate