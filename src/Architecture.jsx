function Architecture() {
  const steps = [
    {
      step: "01",
      title: "Git & GitHub",
      desc: "Source code commit, branch management & automated webhook triggers",
      icon: "🐙",
      tool: "Version Control"
    },
    {
      step: "02",
      title: "Jenkins / CI Pipeline",
      desc: "Automated testing, artifact builds, and Bash deployment scripting",
      icon: "⚙️",
      tool: "CI/CD Engine"
    },
    {
      step: "03",
      title: "Docker Image Build",
      desc: "Multi-stage container packaging with minimal base images & security scan",
      icon: "🐳",
      tool: "Containerization"
    },
    {
      step: "04",
      title: "AWS EC2 / K8s",
      desc: "Container orchestration on Kubernetes & hardened AWS EC2 Linux servers",
      icon: "☁️",
      tool: "Compute & Cluster"
    },
    {
      step: "05",
      title: "Security & IAM",
      desc: "Least-privilege IAM roles, VPC subnets & Security Group firewall rules",
      icon: "🛡️",
      tool: "Cloud Security"
    },
    {
      step: "06",
      title: "Prometheus & Grafana",
      desc: "Real-time metrics, CloudWatch log streams, and uptime alert notifications",
      icon: "📊",
      tool: "Observability"
    }
  ];

  return (
    <section id="architecture" className="architecture">
      <div className="section-container">
        <div className="section-header">
          <div className="section-terminal-tag">
            <span className="prompt-char">&gt;</span> cat ./infra/pipeline_architecture.diag
          </div>
          <h2 className="section-title">End-to-End DevOps Pipeline</h2>
          <p className="section-subtitle">
            Continuous integration, containerized deployment, and full-stack observability architecture.
          </p>
        </div>

        <div className="pipeline-container">
          <div className="pipeline-flow">
            {steps.map((item, index) => (
              <div className="pipeline-step-unit" key={index}>
                <div className="pipeline-card">
                  <div className="pipeline-card-top">
                    <span className="step-tag">STEP_{item.step}</span>
                    <span className="step-tool">{item.tool}</span>
                  </div>
                  <div className="step-main">
                    <span className="step-icon">{item.icon}</span>
                    <h4 className="step-title">{item.title}</h4>
                  </div>
                  <p className="step-desc">{item.desc}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="pipeline-link" aria-hidden="true">
                    <div className="connector-line-desktop">
                      <span className="arrow-sym">--&gt;</span>
                    </div>
                    <div className="connector-line-mobile">
                      <span className="arrow-sym-vert">| v</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pipeline-footer-note">
            <span className="note-label">[INFO]</span> Future integrations underway: Terraform (IaC), Ansible config management, and SonarQube automated quality gates.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;