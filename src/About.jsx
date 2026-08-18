function About() {
  const journeyMilestones = [
    {
      period: "2018 – 2021",
      title: "BCA Foundation",
      institution: "S.K.Gandhi College, Kada, Beed (First Class with Distinction)",
      desc: "Built a solid technical foundation in programming, web development, databases, and software fundamentals."
    },
    {
      period: "2021 – 2023",
      title: "MCA Specialization",
      institution: "Dr. D. Y. Patil Institute Of Management & Entrepreneur Development, Pune (First Class with Distinction)",
      desc: "Deepened computer science principles, advanced software architecture, data systems, and engineering methodology."
    },
    {
      period: "Nov 2023 – Apr 2024",
      title: "Software Engineering Internship",
      institution: "Industry Practical Exposure",
      desc: "Gained real-world exposure, developed technical skills, and discovered a strong passion for infrastructure, automation, and software deployment."
    },
    {
      period: "2025",
      title: "AWS Certified Solutions Architect – Associate",
      institution: "Amazon Web Services (AWS)",
      desc: "Earned global AWS certification. Built hands-on expertise with EC2, S3, IAM, VPC, Route 53, CloudWatch, and core Linux networking."
    },
    {
      period: "Present",
      title: "DevOps & DevSecOps Ecosystem",
      institution: "Hands-on Pipeline & Cloud Architectures",
      desc: "Architecting end-to-end containerized deployments with Docker, Kubernetes, Jenkins, Prometheus, and Grafana. Actively exploring Terraform, Ansible & SonarQube."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <div className="section-terminal-tag">
            <span className="prompt-char">&gt;</span> cat ~/about_me.md
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Engineering journey, cloud evolution, and technical vision.
          </p>
        </div>

        <div className="about-terminal-window">
          <div className="about-window-header">
            <div className="window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="window-title">prajakta_profile.md — 100% Monospace</span>
            <span className="window-tag">STATUS: ACTIVELY_LOOKING</span>
          </div>

          <div className="about-window-body">
            {/* Story Paragraphs */}
            <div className="about-story">
              <p className="story-lead">
                I’m <span className="highlight-text">Prajakta Gavhane</span>, an MCA graduate and 
                <span className="highlight-text"> AWS Certified Solutions Architect – Associate</span> with a growing focus on Cloud, DevOps, and DevSecOps.
              </p>

              <div className="story-block">
                <span className="code-comment">// 01. Academic Roots &amp; Technical Foundation</span>
                <p>
                  My technical journey began with my <strong>BCA (2018–2021)</strong>, where I built a strong foundation in programming, web development, databases, and software development. I then pursued my <strong>MCA (2021–2023)</strong>, graduating with <strong>First Class with Distinction</strong> and further strengthening my technical foundation.
                </p>
              </div>

              <div className="story-block">
                <span className="code-comment">// 02. Industry Internship &amp; Infrastructure Pivot</span>
                <p>
                  After completing my MCA, I gained practical exposure through an internship from <strong>November 2023 to April 2024</strong>. During this phase, I continued developing my technical skills and gradually became more interested in the infrastructure and deployment side of software.
                </p>
              </div>

              <div className="story-block">
                <span className="code-comment">// 03. AWS Cloud Mastery &amp; Architecture Certification</span>
                <p>
                  I then focused on AWS Cloud and earned my <strong>AWS Certified Solutions Architect – Associate certification in 2025</strong>. I started working hands-on with AWS services including <strong>EC2, S3, IAM, VPC, Route 53, and CloudWatch</strong>, while strengthening my Linux and networking fundamentals.
                </p>
              </div>

              <div className="story-block">
                <span className="code-comment">// 04. DevOps Evolution &amp; Application Delivery</span>
                <p>
                  My learning then evolved toward DevOps. I began building and deploying practical projects using <strong>Git, GitHub, Jenkins, GitHub Actions, Docker, Kubernetes, and CI/CD pipelines</strong>. Rather than learning tools individually, I focused on understanding how they work together in real application delivery.
                </p>
              </div>

              <div className="story-block">
                <span className="code-comment">// 05. DevSecOps, Observability &amp; Continuous Learning</span>
                <p>
                  My current focus is <strong>DevSecOps, cloud security, and observability</strong>. My ongoing Task Manager project brings together containerization, CI/CD, Kubernetes deployment, AWS infrastructure, Prometheus, Grafana, and security practices. I am also currently exploring <strong>SonarQube, Terraform, and Ansible</strong> as the next steps in my technical journey.
                </p>
              </div>

              <div className="story-callout">
                <span className="callout-icon">🎯</span>
                <p className="callout-text">
                  I’m now <strong>actively looking for an opportunity</strong> where I can apply these skills in a real engineering environment, continue learning from experienced teams, and grow as a <strong>Cloud, DevOps, or DevSecOps Engineer</strong>.
                </p>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="about-timeline-section">
              <div className="timeline-header-text">// Engineering Journey Timeline:</div>
              <div className="timeline-cards-grid">
                {journeyMilestones.map((item, index) => (
                  <div className="timeline-card" key={index}>
                    <div className="timeline-card-header">
                      <span className="timeline-badge">{item.period}</span>
                      <h4 className="timeline-title">{item.title}</h4>
                    </div>
                    <span className="timeline-institution">{item.institution}</span>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
