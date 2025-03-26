import './App.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Project from './components/project';
import TechStack from './components/techstack';
import AboutMe from './components/aboutme';
import Socials from './components/social';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <TechStack />
      <AboutMe />
      <Socials />
    </>
  )
}

export default App
