import Navber from "./components/Navber"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import WhatIDo from "./pages/WhatIDo"
import Project from "./pages/project"

function App() {
  return (
    <div className=' '>
      <Navber/>

      <section id="home" ><Home/></section>
      <section id="about" ><About/></section>
      <section id="skills"><Skills /></section>
      <section id="services"><WhatIDo /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>

    </div>
  )
}

export default App 

