import React from 'react'
import bgImage from "../assets/bg-river.svg";
import { ChevronDown } from 'lucide-react';

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

            <section className="relative py-20 flex items-center justify-center">
                <div className="absolute from-transparent to-black/30"></div>
                <div className="relative z-10 text-center fade-section">
                    <h1 className="text-6xl font-bold mb-4 text-slate-900">{nama}</h1>
                    <p className="text-2xl mb-8 text-slate-900">{role}</p>
                    <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-white" />
                </div>
            </section>
        </>
    )
}

export default Hero