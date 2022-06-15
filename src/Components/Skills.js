import CSS from './../CSS/Skills.css'
import { useState } from 'react';
import Carousel from './Carousel/Carousel';


 
const Skills = function () {
    return (
        <div className="Skills" id="Skills">
            <div className="top" id="Top">
                <p className="neonTextBlue">Skills</p>
            </div>
            <div className="bottom">
                <Carousel />
            </div>

        </div>
    )
}

export default Skills

