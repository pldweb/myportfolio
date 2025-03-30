import React from 'react'
import bgImage from "../assets/bg-river.svg";
import { ChevronDown } from 'lucide-react';
import image from "../assets/me.png";

const Hero = ({nama, role}: {nama: string; role: string}) => {

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
    } as React.CSSProperties;

    return (
        <>
            <div style={bgStyle} aria-hidden="true"></div>

            <section className="relative pb-20 pt-36 flex items-center justify-center">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-center items-center w-full">
                    <div className="relative z-10 text-start">
                        <h1 className="text-6xl font-bold mb-4 text-slate-900 w-[70%]">{nama}</h1>
                        <p className="text-2xl mb-5 text-asphalt-500">{role}</p>
                        <p className='text-xl text-slate-500 w-[60%] mb-5'>
                            Saya Muhammad Rivaldi, pegiat Website Design, Mobile App Design, dan Motion Graphic Design
                        </p>
                        <ChevronDown className="w-8 h-8 ml-0 animate-bounce text-asphalt-500" />
                    </div>
                    <div className="container-image flex justify-center items-center w-[30%]">
                        <img src={image} alt="" className='w-[90%] rounded-sm overflow-hidden' />
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Hero