import './App.css'
import { Suspense, lazy, useEffect } from 'react'

import Navbar from "./components/Navbar/Navbar.jsx"
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Footer from "./components/Footer/Footer.jsx"

const AboutSection = lazy(() => import('./components/AboutSection/AboutSection.jsx'));
const ResumeSection = lazy(() => import('./components/ResumeSection/ResumeSection.jsx'));
const ProjectSection = lazy(() => import('./components/ProjectSection/ProjectSection.jsx'));
const ContactSection = lazy(() => import('./components/ContactSection/ContactSection.jsx'));

function App() {

  // useEffect(() => {
    
  //   const rightClick = (e) => {
  //     e.preventDefault();
  //   }

  //   document.addEventListener("contextmenu", rightClick);
  // }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <Suspense>
        <AboutSection />
      </Suspense>
      <Suspense>
        <ResumeSection />
      </Suspense>
      <Suspense>
        <ProjectSection />
      </Suspense>
      <Suspense>
        <ContactSection />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
