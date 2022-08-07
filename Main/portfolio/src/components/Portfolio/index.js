import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

 
  const [projects] = useState([
    {
      name: 'lost-ark-group-finder',
      description: 'Front End Javascript',
      link: "https://github.com/RobertRouthier/Lost-Ark-Group-Finder",
      repo: "https://github.com/RobertRouthier/Lost-Ark-Group-Finder"
    },
    {
      name: 'watch-&-sell',
      description: 'Node.js, Express',
      link: "https://github.com/RobertRouthier/Project-2-Watch-and-Sell",
      repo: "https://github.com/RobertRouthier/Project-2-Watch-and-Sell"
    },
    
   
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
