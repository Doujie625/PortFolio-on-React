import CSS from "./../CSS/Projects.css";
import { projectData } from "./ProjectData";

const Projects = function () {
  return (
    <div className="Projects" id="Projects">
      <div className="top">
        <p className="neonTextPink">Projects</p>
      </div>
      <div className="bottom">
      {projectData.map((link) => {
          return (
            <span key={link.id}>
              <a href={link.url} key={link.id} className={link.class}>
                {link.text}
              </a>
            </span>
          );
        })}
      </div>

    </div>
  );
};

export default Projects;
