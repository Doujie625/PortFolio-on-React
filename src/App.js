import './CSS/App.css'
import Nav from "./Components/Nav"
import About from './Components/About';
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Foot from './Components/Foot'

function App() {

  return (
    <div className="App">
      <Nav/>
      <About />
      <Projects />
      <Skills />
      <Foot />
    </div>
  );
}

export default App;
