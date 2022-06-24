import CSS from "./../CSS/Projects.css";
import { projectData } from "./ProjectData";

const Projects = function () {
  return (
    <div className="Projects" id="Projects">

      <div className="Projects_top">
        <p className="neonTextPink">Projects</p>
      </div>

      <div className="Projects_bottom">
        {projectData.map((link) => {
            return (
              <div key={link.id} className="carousel_item">
                <a href={link.url} key={link.id} className={link.class}>
                  {link.text}
                </a>
              </div>
            );
          })}
      </div>

    </div>
  );
};

export default Projects;
