import './CSS/App.module.css'
import './CSS/App.css'

import Nav from "./Components/Nav"
import About from './Components/About';
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Foot from './Components/Foot'
import Jelly from './Components/Jelly'
import Animation from './Components/Animation'

function App() {

  let width = window.innerWidth

  return (
    <div className="App" >
      <Animation />
      <Nav/>
      <About />
      <Projects />
      <Skills />
      <Foot />
      {/* <Jelly /> */}
    </div>
  );
}

export default App;
