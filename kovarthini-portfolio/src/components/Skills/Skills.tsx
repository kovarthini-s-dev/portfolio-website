import { skillGroups } from "../../data/skills";
import "./Skills.scss";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="skills_container">
        <div className="skills_heading">
          <p className="skills_eyebrow">Skills</p>

          <h2 className="skills_title">
            The tools and technologies I work with.
          </h2>
        </div>

        <div className="skills_grid">
          {skillGroups.map((group) => (
            <div className="skills_group" key={group.title}>
              <h3 className="skills_group-title">{group.title}</h3>

              <div className="skills_list">
                {group.skills.map((skill) => (
                  <span className="skills_item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;