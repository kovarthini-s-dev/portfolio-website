import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./Projects.scss";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects section">
      <div className="projects_container">
        <div className="projects_heading">
          <p className="projects_eyebrow">Projects</p>

          <h2 className="projects_title">
            A selection of products and experiences I've worked on.
          </h2>

          <p className="projects_description">
            Some of my professional work is confidential, so I've focused
            these case studies on the problems, technologies, and frontend
            contributions I can publicly discuss.
          </p>
        </div>

        <div className="projects_grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleClose}
        />
      )}
    </section>
  );
}

export default Projects;