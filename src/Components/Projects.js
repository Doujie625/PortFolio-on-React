import CSS from "./../CSS/Projects.css";
import "./../CSS/style.css"
import { projectData } from "./ProjectData";
import { useEffect, useRef, useState } from "react";


var Projects = function (props) {
  const [slide, setSlide] = useState(1);

  const next_slide = () => {
    if (slide >= 3) {
      return
    }
    setSlide(slide + 1)
  }
  const prev_slide = () => {
    if (slide <= 1) {
      
      return
    }
    setSlide(slide - 1)
  }

    console.log(slide)
  return (
    <div className="Projects" id="Projects">
      <div className="Projects_top" id="Top">
        <p className="neonTextPink">Projects</p>
      </div>

      <div className="Projects_bottom" >
      <div className="left_button" onClick={prev_slide}>
          <p className="neonTextBlue" id="left_arrow">
            V
          </p>
        </div>

        {projectData.map((link) => {
          if (props.deviceSize == "small") {
            if (link.id == slide && link.text == "JellyFish") {            
              return (
              <div key={link.id} className="carousel_item">
                <a href={link.url} key={link.id} className={link.class}>
                  <div id="sprite-icon">
                    <div className="pink" id="sprite-image">
                    </div>
                  </div>
                  {link.text}
                </a>
              </div>
            );
            } else if (link.id == slide) {
              return (
                <div key={link.id} className="carousel_item">
                  <a href={link.url} key={link.id} className={link.class}>
                    <img id="icons" src={link.icon} />
                    <br/>
                    <br/>
                    {link.text}
                  </a>
                </div>
              );
            }
          }
          if (props.deviceSize != "small") {
            if (link.text == "JellyFish") {
              return (
                <div key={link.id} className="carousel_item">
                  <a href={link.url} key={link.id} className={link.class}>
                    <div id="sprite-icon">
                      <div className="pink" id="sprite-image">
                      </div>
                    </div>
                    {link.text}
                  </a>
                </div>
              );
            } else {
              return (
                <div key={link.id} className="carousel_item">
                  <a href={link.url} key={link.id} className={link.class}>
                    <img id="icons" src={link.icon} />
                    <br/>
                    <br/>
                    {link.text}
                  </a>
                </div>
              );
            }
          }

        })}

<div className="right_button" onClick={next_slide}>
          <p className="neonTextBlue" id="right_arrow">
            V
          </p>
        </div>

      </div>



    </div>
  );
};

export default Projects;
