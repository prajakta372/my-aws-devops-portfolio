function Projects() {
  const projects = [
    {
      badge: "DEVSECOPS // CI_CD_MONITORING",
      title: "Task-Manager-DevSecOps",
      summary: "End-to-end DevSecOps pipeline automating code quality scanning, Docker containerization, Kubernetes cluster deployment, and real-time Prometheus & Grafana observability.",
      highlights: [
        "Built automated CI/CD pipelines using GitHub Actions & Jenkins with automated build triggers.",
        "Integrated security analysis and static code scanning with SonarQube quality gates.",
        "Packaged multi-tier applications into lightweight Docker containers and deployed onto Kubernetes.",
        "Configured real-time metric collection with Prometheus and interactive dashboards in Grafana.",
        "Automated server provisioning and Linux environment hardening on AWS EC2 servers."
      ],
      tags: ["DevSecOps", "AWS EC2", "Kubernetes", "Docker", "Jenkins", "Prometheus", "Grafana", "SonarQube", "Bash"],
      github: "https://github.com/prajakta372/Task-Manager-DevSecOps"
    },
    {
      badge: "AWS_CLOUD // REACT_DEPLOYMENT",
      title: "My AWS DevOps Portfolio",
      summary: "Cloud-native portfolio web application built with React, containerized with Docker, and provisioned on AWS infrastructure with high availability and security policies.",
      highlights: [
        "Designed responsive developer portfolio with monospace terminal theme and optimized viewport layouts.",
        "Configured AWS S3 static website hosting, bucket policies, and CloudFront CDN distribution.",
        "Implemented strict AWS IAM roles, least privilege policies, and secure credentials management.",
        "Automated build and continuous deployment workflows via GitHub repository hooks.",
        "Integrated CloudWatch monitoring alarms for uptime and resource tracking."
      ],
      tags: ["AWS S3", "AWS EC2", "IAM", "Docker", "React", "CI/CD", "CloudWatch", "Linux"],
      github: "https://github.com/prajakta372/my-aws-devops-portfolio"
    },
    {
      badge: "CONTAINERIZED_SPA // CLOUD_DEPLOY",
      title: "Weather Dashboard SPA",
      summary: "Interactive single-page weather dashboard consuming live meteorological APIs, containerized with Docker, and deployed on cloud Linux compute.",
      highlights: [
        "Developed responsive single-page web app (SPA) with dynamic real-time weather metrics.",
        "Authored optimized Dockerfile for multi-stage production container packaging.",
        "Configured Linux host security groups, reverse proxy port routing, and environment secrets.",
        "Verified container runtime isolation, logs monitoring, and reliable restart policies."
      ],
      tags: ["Docker", "SPA", "REST APIs", "AWS EC2", "Linux", "JavaScript", "Port Mapping"],
      github: "https://github.com/prajakta372/weather-dashboard-SPA"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <div className="section-terminal-tag">
            <span className="prompt-char">&gt;</span> ls -la ./projects/
          </div>
          <h2 className="section-title">DevOps &amp; Cloud Projects</h2>
          <p className="section-subtitle">
            Direct GitHub repositories for DevSecOps pipelines, cloud infrastructure, containerization, and full-stack deployments.
          </p>
        </div>

        <div className="projects-stack">
          {projects.map((project, index) => (
            <div className="project-terminal-card" key={index}>
              <div className="project-card-header">
                <div className="project-tag-wrap">
                  <span className="project-index">[{String(index + 1).padStart(2, "0")}]</span>
                  <span className="project-badge">{project.badge}</span>
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-gh-btn"
                  title={`View ${project.title} on GitHub`}
                >
                  <span className="gh-icon">🐙</span> [ view_repository &rarr; ]
                </a>
              </div>

              <h3 className="project-title-text">{project.title}</h3>
              <p className="project-summary-text">{project.summary}</p>

              <div className="project-highlights-box">
                <div className="highlights-header">// Key Implementations &amp; Deliverables:</div>
                <ul className="highlights-list">
                  {project.highlights.map((item, hIndex) => (
                    <li key={hIndex}>
                      <span className="list-arrow">&gt;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tags-wrap">
                <span className="tags-label">stack:</span>
                <div className="tags-list">
                  {project.tags.map((tag, tIndex) => (
                    <span className="tag-pill" key={tIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;