import CSS from "./../CSS/Skills.css";
import Neon from "./../CSS/Neon_CSS.css";
import { useEffect, useRef, useState } from "react";
import { skillData } from "./SkillData";


const Skills = function () {
  const ref = useRef(null);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  });

  const scroll = (scrollOffset) => {
    setWidth(ref.current.offsetWidth);
   ref.current.scrollLeft += scrollOffset;
  };

  const prev = () => {
    scroll(-width);
  };
  const next = () => {
    scroll(width);

  };
  return (
    <div className="Skills" id="Skills">
      <div className="Skill_top" id="Top">
        <p className="neonTextBlue">Skills</p>
      </div>
      
      <div className="Skill_bottom" ref={ref}>

        <div className="left_button" onClick={prev}>
          <p className="neonTextBlue" id="left_arrow">
            V
          </p>
        </div>

        {skillData.map((link) => {
          return (
            <div key={link.id} className="carousel_item">
              <h1 className="Skill_Icon" href={link.url}>
                {link.icon}   
              </h1>
              <p className="Skill_Text" href={link.url}>
              {link.text}         
              </p>
            </div>
          );
        })}
        
        <div className="right_button" onClick={next}>
          <p className="neonTextBlue" id="right_arrow">
            V
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
