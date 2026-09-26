import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="project_card">
      <div className="project_card-top">
        <p className="project_card-category">{project.category}</p>

        {project.confidential && (
          <span className="project_card-label">Confidential</span>
        )}
      </div>

      <h3 className="project_card-title">{project.title}</h3>

      <p className="project_card-description">{project.description}</p>

      <div className="project_card-technologies">
        {project.technologies.map((technology) => (
          <span className="project_card-technology" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="project_card-button"
        onClick={() => onSelect(project)}
      >
        View Details
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

export default ProjectCard;