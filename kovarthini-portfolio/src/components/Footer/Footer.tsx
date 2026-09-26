import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="footer_text">
          © {currentYear} Kovarthini Sathya. Built with React and TypeScript.
        </p>

        <a className="footer_back-to-top" href="#home">
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;