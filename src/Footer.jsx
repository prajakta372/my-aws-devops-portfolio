function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Terminal Contact Box */}
        <div className="footer-terminal-box">
          <div className="footer-header">
            <div className="footer-header-left">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="footer-title-text">contact_session.sh</span>
            </div>
            <span className="footer-status-tag">STATUS: ONLINE</span>
          </div>

          <div className="footer-body">
            <div className="footer-columns-grid">
              {/* Profile info */}
              <div className="footer-col">
                <div className="footer-brand">
                  <span className="brand-prefix">&gt;</span> Prajakta Gavhane
                </div>
                <p className="footer-bio">
                  AWS Certified Solutions Architect – Associate with expertise in Linux, AWS Cloud,
                  Docker, Kubernetes, CI/CD automation, DevSecOps, and observability.
                </p>
                <div className="footer-availability">
                  <span className="avail-dot"></span> Available for immediate joining
                </div>
              </div>

              {/* Direct Communication */}
              <div className="footer-col">
                <div className="col-heading">// Direct Contacts</div>
                <ul className="footer-contact-list">
                  <li>
                    <span className="contact-icon">✉️</span>
                    <a href="mailto:prajaktagavhane372@gmail.com" className="contact-link">
                      prajaktagavhane372@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="contact-icon">📞</span>
                    <a href="tel:+919146350978" className="contact-link">
                      +91 9146350978
                    </a>
                  </li>
                  <li>
                    <span className="contact-icon">📍</span>
                    <span className="contact-static">Pune, Maharashtra, India</span>
                  </li>
                </ul>
              </div>

              {/* Professional Links */}
              <div className="footer-col">
                <div className="col-heading">// Social &amp; Code</div>
                <ul className="footer-contact-list">
                  <li>
                    <span className="contact-icon">💼</span>
                    <a
                      href="https://www.linkedin.com/in/prajakta-gavhane-6b145a25a"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      linkedin.com/in/prajakta-gavhane
                    </a>
                  </li>
                  <li>
                    <span className="contact-icon">🐙</span>
                    <a
                      href="https://github.com/prajakta372"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      github.com/prajakta372
                    </a>
                  </li>
                  <li>
                    <span className="contact-icon">☁️</span>
                    <a
                      href="https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      credly.com/badges/aws-solutions-architect
                    </a>
                  </li>
                  <li>
                    <span className="contact-icon">📄</span>
                    <a
                      href={`${import.meta.env.BASE_URL}Gavhane_Prajakta_resume_new.pdf`}
                      download="Gavhane_Prajakta_resume_new.pdf"
                      className="contact-link text-green"
                    >
                      [ Download Prajakta's Resume PDF ]
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom-bar">
              <div className="bottom-copy">
                &copy; {currentYear} Prajakta Dnyaneshwar Gavhane. Built with React &amp; Monospace CSS.
              </div>
              <div className="bottom-built">
                <span>[ENV: PRODUCTION]</span>
                <span className="sep">•</span>
                <span>[HOSTED_ON: AWS]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;