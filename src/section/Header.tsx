import React from 'react'

const Header = () => {
  return (
        <>
            {/* Header */}
            <nav className="fixed w-full z-30 px-4 py-6 bg-white shadow-sm text-center">
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <div className="container flex justify-between items-center mx-auto px-[5%]">
                    <a className="text-3xl font-bold leading-none" href="#">
                        <h5>RVLDPRTFL</h5>
                    </a>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        <li><a className="text-lg font-bold text-gray-400 hover:text-gray-500" href="#">Home</a></li>
                        <li><a className="text-lg font-bold text-asphalt-500" href="#">Portfolio</a></li>
                        <li><a className="text-lg font-bold text-gray-400 hover:text-gray-500" href="#">Gallery</a></li>
                        <li><a className="text-lg font-bold text-gray-400 hover:text-gray-500" href="#">Project</a></li>
                        <li><a className="text-lg font-bold text-gray-400 hover:text-gray-500" href="#">Certificate</a></li>
                        <li><a className="text-lg font-bold text-gray-400 hover:text-gray-500" href="#">Medium</a></li>
                        

                    </ul>
                    <a className="hidden lg:inline-block py-2 px-6 bg-asphalt-500 hover:bg-asphalt-600 text-xl text-white font-bold rounded-xl transition duration-200" href="#">WhatsApp Chat</a>
                </div>
            </nav>
        </>
  )
}

export default Header