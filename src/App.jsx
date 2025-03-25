import './App.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Project from './components/project';
import TechStack from './components/techstack';
import AboutMe from './components/aboutme';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <TechStack />
      <AboutMe />
    </>
  )
}

export default App
