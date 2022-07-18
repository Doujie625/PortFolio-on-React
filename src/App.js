import './CSS/App.module.css'
import './CSS/App.css'

import Nav from "./Components/Nav"
import About from './Components/About';
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Foot from './Components/Foot'
import Animation from './Components/Animation'

import React, { useEffect, useState } from 'react';

function App() {
  const [deviceSize, setDeviceSize] = useState()
  
  useEffect(() => {
    if (window.innerWidth < 640) {
      setDeviceSize('small')
    } else if (window.innerWidth > 640 && window.innerWidth < 1008) {
      setDeviceSize('medium')
    } else {
      setDeviceSize('large')
    }
  }) 

  return (
    <div className="App" >
      <Animation />
      <Nav />
      <About />
      <Projects deviceSize={deviceSize}/>
      <Skills deviceSize={deviceSize}/>
      <Foot />
    </div>
  );
}

export default App;
