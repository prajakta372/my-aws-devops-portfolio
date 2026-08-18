import { useState, useEffect } from "react";

function Hero() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navOffset = 75;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const roles = [
    "AWS Certified Solutions Architect ☁️",
    "DevOps & Cloud Engineer 🛠️",
    "Kubernetes & Docker Specialist 🐳",
    "CI/CD Pipeline Builder (Jenkins/GitHub) 🔄",
    "Linux, Prometheus & DevSecOps Enthusiast 🐧"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((index + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, index, roles]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Terminal Window Header */}
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">prajakta@aws-devops: ~</div>
            <div className="terminal-status">
              <span className="status-ping"></span> READY_TO_JOIN
            </div>
          </div>

          <div className="terminal-body">
            <div className="terminal-prompt-line">
              <span className="prompt-user">prajakta@cloud</span>
              <span className="prompt-sep">:</span>
              <span className="prompt-dir">~</span>
              <span className="prompt-sym">$</span>
              <span className="prompt-cmd">whoami --verbose</span>
            </div>

            <div className="hero-intro">
              <h1 className="hero-name">Prajakta Gavhane</h1>
              <div className="hero-role-wrapper">
                <span className="role-prefix">&gt; </span>
                <span className="hero-role-typing">{text}</span>
                <span className="cursor">_</span>
              </div>
            </div>

            <p className="hero-summary">
              AWS Certified Solutions Architect – Associate with hands-on experience in Linux, 
              AWS Cloud, Docker, Kubernetes, and CI/CD automation using Jenkins and GitHub Actions. 
              Passionate about scalable infrastructure, DevSecOps, cloud security, and observability.
            </p>

            <div className="hero-meta-pills">
              <span className="meta-pill">
                <span className="pill-key">status:</span>
                <span className="pill-val">available_immediately</span>
              </span>
              <a 
                href="https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70"
                target="_blank"
                rel="noreferrer"
                className="meta-pill meta-pill-link"
                title="Verify AWS Certification on Credly"
              >
                <span className="pill-key">aws_cert:</span>
                <span className="pill-val text-green">solutions_architect ↗</span>
              </a>
              <span className="meta-pill">
                <span className="pill-key">education:</span>
                <span className="pill-val">MCA (Distinction)</span>
              </span>
            </div>

            <div className="hero-cta-group">
              <button 
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo("projects")}
              >
                <span className="btn-icon">⚡</span> [ 03. view_projects ]
              </button>

              <a 
                href="/Prajakta_Gavhane_Resume.pdf" 
                download="Prajakta_Gavhane_Resume.pdf"
                className="btn btn-secondary"
              >
                <span className="btn-icon">📄</span> [ download_resume.pdf ]
              </a>

              <button 
                type="button"
                className="btn btn-outline"
                onClick={() => scrollTo("contact")}
              >
                <span className="btn-icon">✉️</span> [ contact_me ]
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;