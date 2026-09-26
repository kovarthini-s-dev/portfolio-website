import { useEffect } from "react";
import type { Project } from "../../types/project";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="project_modal" role="presentation" onClick={onClose}>
      <div
        className="project_modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project_modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          x
        </button>

        <p className="project_modal-category">{project.category}</p>

        <h3 id="project-modal-title" className="project_modal-title">
          {project.title}
        </h3>

        <p className="project_modal-description">
          {project.description}
        </p>

        {project.clients.length > 0 && (
          <div className="project_modal-section">
            <h4>Client Context</h4>

            <div className="project_modal-tags">
              {project.clients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </div>
        )}

        <div className="project_modal-section">
          <h4>What I worked on</h4>

          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="project_modal-section">
          <h4>Technologies</h4>

          <div className="project_modal-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        {project.confidential && (
          <p className="project_modal-note">
            Screenshots and source code are not publicly available because
            this work was completed for professional client projects.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;