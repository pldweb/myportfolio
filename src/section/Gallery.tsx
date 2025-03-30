import React from 'react';
import { Image as ImageIcon  } from "lucide-react";

import imageGallery from "../assets/website-1.png";

const Gallery = () => {
    return (
    <>
      {/* Gallery Section */}
      <section className="py-20 asphalt-grid fade-section">
        <div className="container mx-auto max-w-[70%]">
          <div className="flex items-center gap-2 justify-center mb-12">
            <ImageIcon className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl card-hover">
                <img 
                  src={imageGallery}
                  alt={`Gallery ${item}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            ))}
            </div>
        </div>
        </section>
    </>
    )
}

export default Gallery