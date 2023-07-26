import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "movie-dashboard",
      description: "HTML/CSS/JS",
      link: "https://timebytes.github.io/Movie-Dashboard/",
      repo: "https://github.com/TimeBytes/Movie-Dashboard",
    },
    {
      name: "movie-review",
      description: "Node.js/Javascript",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "code-refactor",
      description: "HTML/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "text-editor",
      description: "PWA/IndexedDB/Service Workers",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "password-generator",
      description: "HTML/CSS/JavaScript",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "timed-quiz",
      description: "HTML/CSS/JavaScript",
      link: "https://matthewzmija.github.io/TimedQuiz/",
      repo: "https://github.com/matthewzmija/TimedQuiz",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
