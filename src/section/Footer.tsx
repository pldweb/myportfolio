import React from 'react'


const Footer = ({nama, role}: {nama: string; role: string}) => {
  return (
    <>
    {/* Footer */}
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{nama}</h3>
            <p className="mb-4">{role}</p>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer