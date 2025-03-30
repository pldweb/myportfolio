import React from 'react'
import { Award } from 'lucide-react'

const Experience = () => {
  return (
    <>
    {/* Experience Section */}
    <section className="py-20 asphalt-grid fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Award className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              { year: '2022 - Present', title: 'Senior Developer', company: 'Tech Corp' },
              { year: '2020 - 2022', title: 'Full Stack Developer', company: 'StartUp Inc' },
              { year: '2018 - 2020', title: 'Junior Developer', company: 'Web Solutions' },
            ].map((exp, index) => (
              <div key={index} className="flex gap-6 items-start group hover:bg-asphalt-50 p-4 rounded-xl transition-colors duration-300 card-hover">
                <div className="w-32 flex-shrink-0">
                  <p className="text-asphalt-600 font-semibold">{exp.year}</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold group-hover:text-asphalt-600 transition-colors">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience