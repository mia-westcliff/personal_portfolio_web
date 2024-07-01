import React from 'react';
import './Projects.css';
import Image1 from "/Users/xue/Documents/GitHub/personal_portfolio_website/portfolio/src/image/project1.png"
import Image2 from "/Users/xue/Documents/GitHub/personal_portfolio_website/portfolio/src/image/project2.png"
import Image3 from "/Users/xue/Documents/GitHub/personal_portfolio_website/portfolio/src/image/project3.png"
import Image4 from "/Users/xue/Documents/GitHub/personal_portfolio_website/portfolio/src/image/project4.png"

const projects = [
  {
    name: 'Project 1',
    image: Image1,
    demoLink: 'https://live-demo1.com',
    githubLink: 'https://github.com/mia-westcliff/final-project-team4/tree/main'
  },
  {
    name: 'Project 2',
    image: Image2,
    demoLink: 'https://jobquest-client-jdr6.onrender.com',
    githubLink: 'https://github.com/fehms1864/JobQuest'
  },
  {
    name: 'Project 3',
    image: Image3,
    demoLink: 'https://live-demo3.com',
    githubLink: 'https://github.com/mia-westcliff/personal_portfolio_website/tree/main'
  },
  {
    name: 'Project 4',
    image: Image4,
    demoLink: 'https://live-demo3.com',
    githubLink: 'https://github.com/mia-westcliff/m4-w4-d2-exercise'
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p>Check out some of my work</p>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
