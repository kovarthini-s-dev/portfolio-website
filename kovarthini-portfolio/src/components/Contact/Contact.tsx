import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact_container">
        <div className="contact_heading">
          <p className="contact_eyebrow">Contact</p>

          <h2 className="contact_title">
            Let's build something useful together.
          </h2>

          <p className="contact_description">
            I'm open to frontend opportunities where I can work on meaningful
            products, solve interesting frontend challenges, and continue
            growing as an engineer.
          </p>
        </div>

        <div className="contact_links">
          <a
            className="contact_link"
            href="mailto:kovarthinisathya06@gmail.com"
          >
            <span className="contact_link-label">Email</span>
            <span className="contact_link-value">
              kovarthinisathya06@gmail.com
            </span>
            <span className="contact_link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            className="contact_link"
            href="https://www.linkedin.com/in/kovarthini-sathya-9204b6216"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact_link-label">LinkedIn</span>
            <span className="contact_link-value">
              Connect with me on LinkedIn
            </span>
            <span className="contact_link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            className="contact_link"
            href="https://github.com/kovarthini-s-dev"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact_link-label">GitHub</span>
            <span className="contact_link-value">
              View my projects and code
            </span>
            <span className="contact_link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;