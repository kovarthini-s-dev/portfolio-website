import { experience } from "../../data/experience";
import "./Experience.scss";

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="experience_container">
        <div className="experience_heading">
          <p className="experience_eyebrow">Experience</p>

          <h2 className="experience_title">
            Building products across frontend, AI, and real-time experiences.
          </h2>
        </div>

        <div className="experience_list">
          {experience.map((item) => (
            <article
              className="experience_item"
              key={`${item.company}-${item.period}`}
            >
              <div className="experience_meta">
                <p className="experience_period">{item.period}</p>
              </div>

              <div className="experience_content">
                <h3 className="experience_role">{item.role}</h3>

                <p className="experience_company">{item.company}</p>

                <ul className="experience_highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;