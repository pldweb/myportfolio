import React from 'react'

import { Code2 } from 'lucide-react'

const Project = () => {
    return (
        <>
        {/* Projects Section */}
        <section className="py-20 fade-section">
            <div className="container mx-auto max-w-[70%]">
            <div className="flex items-center gap-2 justify-center mb-12">
                <Code2 className="w-8 h-8 text-asphalt-500" />
                <h2 className="text-4xl title-section font-bold text-gray-800">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                    <h3 className="text-xl font-semibold mb-2">Project Name {item}</h3>
                    <p className="text-gray-600 mb-4">Detailed description of the project including technologies used and challenges overcome.</p>
                    <div className="flex gap-2">
                    <span className="px-3 py-1 bg-asphalt-50 text-asphalt-600 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-asphalt-50 text-asphalt-600 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-asphalt-50 text-asphalt-600 rounded-full text-sm">Tailwind</span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
        </>
    )
}

export default Project