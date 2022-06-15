import SkillTile from "./SkillTile";
import { useState } from "react";
import { skillData } from "../SkillData";

const Carousel = function () {
  const numItems = 8
  const grid = skillData.filter((item) => item.id < (numItems  + 1) );
  const [newItems, setNewItems] = useState([grid]);

  console.log(newItems);

  return (
    
    <div className="Carousel">
      {grid.map((link) => {
        
        return (
          <div key={link.id} className="carousel_item">
            <a href={link.url} key={link.id} className={link.class}>
              {link.text}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;

// const Projects = function () {
//   return (
//     <div className="Projects" id="Projects">
//       <div className="top">
//         <p className="neonTextPink">Projects</p>
//       </div>
//       <div className="bottom">
//       {projectData.map((link) => {
//           return (
//             <span key={link.id}>
//               <a href={link.url} key={link.id} className={link.class}>
//                 {link.text}
//               </a>
//             </span>
//           );
//         })}
//       </div>

//     </div>
//   );
// };

// export default Projects;

