import React, { useEffect } from 'react';
import Header from './section/Header'
import Hero from './section/Hero'
import Portfolio from './section/Portfolio'
import Gallery from './section/Gallery'
import Project from './section/Project'
import Experience from './section/Experience'
import Certificate from './section/Certificate'
import Tools from './section/Tools'
import Socialmedia from './section/Socialmedia'
import Footer from './section/Footer'
import Artikel from './section/Artikel';

const nama = "Muhammad Rivaldi Fanani";
const role = "Code Enthusiast"

function App(){

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();

  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero nama={nama} role={role}/>
        <Portfolio />
        <Gallery />
        <Project />
        {/* <Experience /> */}
        <Certificate />
        <Tools />
        <Artikel />
        <Socialmedia />
        <Footer nama={nama} role={role} />
      </div>
    </>
  )
}

export default App;