import CSS from "./../CSS/Projects.css";
import "./../CSS/style.css"
import { projectData } from "./ProjectData";

const Projects = function () {
  return (
    <div className="Projects" id="Projects">

      <div className="Projects_top" id="Top">
        <p className="neonTextPink">Projects</p>
      </div>

      <div className="Projects_bottom">
        {projectData.map((link) => {
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
          })}
      </div>

    </div>
  );
};

export default Projects;
