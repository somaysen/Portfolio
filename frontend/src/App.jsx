import Navber from "./components/Navber"
import About from "./pages/About"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import WhatIDo from "./pages/WhatIDo"
import Project from "./pages/project"

function App() {
  return (
    <div className=' '>
      <Navber/>
      <Home/>
      <About/>
      <Skills/>
      <WhatIDo/>
      <Project/>
    </div>
  )
}

export default App 

// import { FaGithub } from "react-icons/fa";
// <FaGithub />
// import { RiExternalLinkFill } from "react-icons/ri";
// <RiExternalLinkFill />