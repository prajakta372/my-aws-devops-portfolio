function GitHub() {
  const featuredRepos = [
    {
      name: "Task-Manager-DevSecOps",
      desc: "CI/CD pipeline with SonarQube security scanning, Docker containerization, Kubernetes deployment & Prometheus/Grafana monitoring.",
      url: "https://github.com/prajakta372/Task-Manager-DevSecOps",
      lang: "DevSecOps / CI/CD",
      icon: "🛡️"
    },
    {
      name: "my-aws-devops-portfolio",
      desc: "AWS cloud DevOps portfolio built with React, deployed with AWS S3 static hosting, IAM policies, and automated workflows.",
      url: "https://github.com/prajakta372/my-aws-devops-portfolio",
      lang: "React / AWS",
      icon: "☁️"
    },
    {
      name: "weather-dashboard-SPA",
      desc: "Single Page Application consuming real-time weather APIs, containerized with Docker and deployed on Linux compute.",
      url: "https://github.com/prajakta372/weather-dashboard-SPA",
      lang: "JavaScript / Docker",
      icon: "⚡"
    }
  ];

  return (
    <section id="github" className="github">
      <div className="section-container">
        <div className="section-header">
          <div className="section-terminal-tag">
            <span className="prompt-char">&gt;</span> gh repo list prajakta372 --visibility public
          </div>
          <h2 className="section-title">Open Source &amp; GitHub Activity</h2>
          <p className="section-subtitle">
            Repository codebases, DevSecOps pipelines, Docker recipes, and cloud infrastructure configurations.
          </p>
        </div>

        <div className="github-terminal-panel">
          <div className="panel-header">
            <div className="panel-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="panel-title">github.com/prajakta372</div>
          </div>

          <div className="panel-body">
            <div className="gh-user-banner">
              <div className="gh-user-avatar">
                <span className="gh-avatar-text">PG</span>
              </div>
              <div className="gh-user-details">
                <h3 className="gh-user-name">Prajakta Gavhane</h3>
                <span className="gh-user-handle">@prajakta372</span>
                <p className="gh-user-bio">
                  DevOps &amp; Cloud Engineer | AWS Certified Solutions Architect | Docker • Kubernetes • CI/CD
                </p>
              </div>
            </div>

            <div className="gh-highlights-grid">
              <div className="gh-highlight-item">
                <span className="gh-hl-label">FOCUS_DOMAINS</span>
                <span className="gh-hl-val">AWS Cloud • CI/CD • DevSecOps</span>
              </div>
              <div className="gh-highlight-item">
                <span className="gh-hl-label">PRIMARY_TOOLS</span>
                <span className="gh-hl-val">Docker • Jenkins • Kubernetes • Linux</span>
              </div>
              <div className="gh-highlight-item">
                <span className="gh-hl-label">CERTIFICATION</span>
                <a 
                  href="https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70"
                  target="_blank"
                  rel="noreferrer"
                  className="gh-hl-val text-green"
                  title="Verify on Credly"
                >
                  AWS Solutions Architect (Assoc) ↗
                </a>
              </div>
              <div className="gh-highlight-item">
                <span className="gh-hl-label">AVAILABILITY</span>
                <span className="gh-hl-val text-green">Ready to Join Immediately</span>
              </div>
            </div>

            {/* Featured Repositories List */}
            <div className="gh-repos-container">
              <div className="gh-repos-title">// Featured Public Repositories:</div>
              <div className="gh-repos-list">
                {featuredRepos.map((repo, index) => (
                  <a
                    key={index}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="gh-repo-card"
                  >
                    <div className="repo-card-head">
                      <span className="repo-card-icon">{repo.icon}</span>
                      <span className="repo-card-name">{repo.name}</span>
                      <span className="repo-card-lang">{repo.lang}</span>
                    </div>
                    <p className="repo-card-desc">{repo.desc}</p>
                    <span className="repo-card-arrow">[ view_repo &rarr; ]</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="gh-action-row">
              <a 
                href="https://github.com/prajakta372" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-primary"
              >
                <span className="btn-icon">🐙</span> [ open_github_profile &rarr; ]
              </a>
              <a 
                href="https://www.linkedin.com/in/prajakta-gavhane-6b145a25a" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <span className="btn-icon">💼</span> [ view_linkedin_profile &rarr; ]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHub;