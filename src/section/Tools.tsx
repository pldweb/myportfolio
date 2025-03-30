import React from 'react'
import { Wrench } from 'lucide-react'

const Tools = () => {
  return (
    <>
    {/* Tools & Skills Section */}
    <section className="py-20 asphalt-grid fade-section">
        <div className="container mx-auto max-w-[70%]">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Wrench className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Tools & Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js',
              'Python', 'Docker', 'AWS', 'MongoDB',
              'Git', 'GraphQL', 'PostgreSQL', 'Redis'
            ].map((skill, index) => (
              <div key={index} 
                className="bg-white p-4 rounded-xl text-center card-hover border border-gray-100">
                <p className="font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tools