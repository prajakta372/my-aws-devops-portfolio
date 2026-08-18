function Skills() {
  const skillCategories = [
    {
      category: "01. Cloud & AWS Services",
      icon: "☁️",
      skills: [
        { name: "AWS EC2", desc: "Compute & Auto Scaling" },
        { name: "AWS S3", desc: "Object Storage & Static Web" },
        { name: "AWS IAM", desc: "Users, Roles & Security Policies" },
        { name: "AWS VPC", desc: "Subnets, Gateways & Route Tables" },
        { name: "AWS CloudWatch", desc: "Metrics, Alarms & Logs" },
      ]
    },
    {
      category: "02. Containers & Orchestration",
      icon: "🐳",
      skills: [
        { name: "Docker", desc: "Dockerfiles & Multi-stage Builds" },
        { name: "Kubernetes", desc: "Pods, Deployments & Services" },
        { name: "Container Registry", desc: "Image Tagging & Registry Push" },
        { name: "Microservices", desc: "Containerized Workflows" }
      ]
    },
    {
      category: "03. CI/CD & Automation",
      icon: "🔄",
      skills: [
        { name: "Jenkins", desc: "Declarative & Scripted Pipelines" },
        { name: "GitHub Actions", desc: "Automated Build & Deploy Workflows" },
        { name: "Git & GitHub", desc: "Branching, PRs & Code Versioning" },
        { name: "Bash Scripting", desc: "Deployment & System Automation" }
      ]
    },
    {
      category: "04. Linux, Networking & Security",
      icon: "🛡️",
      skills: [
        { name: "Linux Administration", desc: "CLI, Permissions & Process Control" },
        { name: "Networking Protocols", desc: "SSH, TCP/IP, DNS, HTTP/HTTPS" },
        { name: "Security & SSL/TLS", desc: "Port Config, Certificates & Firewall" },
        { name: "DevSecOps Basics", desc: "Least Privilege & Secure IAM" }
      ]
    },
    {
      category: "05. Monitoring & Observability",
      icon: "📊",
      skills: [
        { name: "Prometheus", desc: "Time-series Metrics & Exporters" },
        { name: "Grafana", desc: "Monitoring Dashboards & Alerts" },
        { name: "CloudWatch Logs", desc: "Log Streaming & Metric Filters" },
        { name: "SonarQube (Learning)", desc: "Code Quality & Static Analysis" }
      ]
    },
    {
      category: "06. Databases & Development",
      icon: "💾",
      skills: [
        { name: "PostgreSQL & SQL", desc: "Relational Queries & Schemas" },
        { name: "React", desc: "Frontend UI Components" },
        { name: "HTML5 & CSS3", desc: "Responsive Layouts" },
        { name: "Terraform / Ansible", desc: "IaC & Config Mgmt (Integrating)" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <div className="section-terminal-tag">
            <span className="prompt-char">&gt;</span> ./display_skills.sh --all
          </div>
          <h2 className="section-title">Technical Skill Matrix</h2>
          <p className="section-subtitle">
            Core competencies across Cloud Infrastructure, DevOps pipelines, Containerization, and Systems.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((cat, index) => (
            <div className="skill-cat-card" key={index}>
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-title">{cat.category}</h3>
              </div>

              <div className="cat-skill-list">
                {cat.skills.map((skill, sIndex) => (
                  <div className="cat-skill-item" key={sIndex}>
                    <div className="skill-item-header">
                      <span className="skill-bullet">&gt;</span>
                      <span className="skill-item-name">{skill.name}</span>
                    </div>
                    <span className="skill-item-desc">{skill.desc}</span>
                  </div>
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