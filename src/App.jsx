import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import HeroSection from './components/HeroSection/HeroSection.jsx'
import AboutSection from './components/AboutSection/AboutSection.jsx'
import ResumeSection from './components/ResumeSection/ResumeSection.jsx'
import ProjectSection from './components/ProjectSection/ProjectSection.jsx'
import ContactSection from './components/ContactSection/ContactSection.jsx'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default App
