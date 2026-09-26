import "./About.scss";

function About() {
  return (
    <section id="about" className="about section">
      <div className="about_container">
        <div className="about_heading">
          <p className="about_eyebrow">About Me</p>

          <h2 className="about_title">
            I enjoy turning complex ideas into simple, usable interfaces.
          </h2>
        </div>

        <div className="about_content">
          <p>
            I'm a frontend engineer focused on building scalable web
            applications with React and TypeScript. My work has involved
            AI-powered products, real-time interfaces, search platforms, and
            performance-focused frontend development.
          </p>

          <p>
            I care about writing maintainable code, improving the experience
            for users, and making interfaces work reliably across devices and
            browsers.
          </p>

          <p>
            Outside of day-to-day development, I enjoy learning new frontend
            technologies and building projects that help me experiment with
            ideas beyond my professional work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;