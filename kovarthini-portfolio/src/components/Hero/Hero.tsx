import "./Hero.scss";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero_container">
        <p className="hero_eyebrow">
          Frontend Engineer · React.js · TypeScript
        </p>

        <h1 className="hero_title">
          Building fast, accessible interfaces for real-time and AI-powered
          products.
        </h1>

        <p className="hero_description">
          I'm a frontend engineer with 4+ years of experience building
          scalable web applications, real-time interfaces, and AI-powered
          products, with a focus on performance and user experience.
        </p>

        <div className="hero_actions">
          <a className="hero_button hero_button-primary" href="#projects">
            View Projects
          </a>

          <a className="hero_button hero_button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;