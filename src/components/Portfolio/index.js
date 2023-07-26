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
      link: "https://movie-reviews-2021.herokuapp.com/",
      repo: "https://github.com/DanialDevelops/movie-review",
    },
    {
      name: "code-refactor",
      description: "HTML/CSS",
      link: "https://github.com",
      repo: "https://github.com/matthewzmija/CSS-HTML-Accessibility",
    },
    {
      name: "text-editor",
      description: "PWA/IndexedDB/Service Workers",
      link: "https://limitless-cove-61311-2c78e642b2d2.herokuapp.com/",
      repo: "https://github.com/matthewzmija/PWA-Text-Editor",
    },
    {
      name: "password-generator",
      description: "HTML/CSS/JavaScript",
      link: "https://matthewzmija.github.io/JavaScript-Password-Generator/",
      repo: "https://github.com/matthewzmija/JavaScript-Password-Generator",
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
