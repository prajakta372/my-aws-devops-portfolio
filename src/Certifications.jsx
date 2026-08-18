function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      type: "Global Certification",
      badge: "AWS Certified",
      icon: "☁️",
      credlyUrl: "https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70"
    },
    {
      title: "GitHub Certification",
      issuer: "LetsUpgrade",
      type: "Version Control & CI/CD",
      badge: "Verified",
      icon: "🐙",
      credlyUrl: null
    },
    {
      title: "Wipro DICE ID Certification in AWS",
      issuer: "Wipro / DICE ID",
      type: "Cloud Computing",
      badge: "Verified",
      icon: "🛡️",
      credlyUrl: null
    },
    {
      title: "Solutions Architecture Simulation",
      issuer: "AWS APAC Virtual Job Simulation",
      type: "Architecture & Design",
      badge: "Completed",
      icon: "⚡",
      credlyUrl: null
    }
  ];

  const education = [
    {
      degree: "MCA - Master of Computer Applications",
      institution: "Dr. D. Y. Patil Institute Of Management & Entrepreneur Development, Pune",
      duration: "2021 – 2023",
      grade: "First Class with Distinction",
      icon: "🎓"
    },
    {
      degree: "BCA - Bachelor of Computer Applications",
      institution: "S.K.Gandhi College, Kada, Beed",
      duration: "2018 – 2021",
      grade: "First Class with Distinction",
      icon: "📚"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="section-container">
        <div className="section-header">
          <div className="section-terminal-tag">
            <span className="prompt-char">&gt;</span> cat credentials.json
          </div>
          <h2 className="section-title">Certifications &amp; Education</h2>
          <p className="section-subtitle">
            Formal cloud credentials, industry certifications, and academic background.
          </p>
        </div>

        <div className="credentials-grid">
          {/* Certifications Column */}
          <div className="credential-block">
            <div className="block-header">
              <span className="block-icon">🏆</span>
              <h3 className="block-title">// Industry Certifications</h3>
            </div>

            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div className="cert-card" key={index}>
                  <div className="cert-card-top">
                    <span className="cert-icon">{cert.icon}</span>
                    {cert.credlyUrl ? (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-badge cert-badge-link"
                        title="Verify badge on Credly"
                      >
                        {cert.badge} ↗
                      </a>
                    ) : (
                      <span className="cert-badge">{cert.badge}</span>
                    )}
                  </div>
                  <h4 className="cert-name">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-sep">•</span>
                    <span className="cert-type">{cert.type}</span>
                  </div>
                  {cert.credlyUrl && (
                    <div className="cert-action-wrap">
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="credly-btn"
                      >
                        <span className="credly-icon">🎖️</span> [ verify_credly_badge &rarr; ]
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="credential-block">
            <div className="block-header">
              <span className="block-icon">🎓</span>
              <h3 className="block-title">// Academic Background</h3>
            </div>

            <div className="edu-list">
              {education.map((edu, index) => (
                <div className="edu-card" key={index}>
                  <div className="edu-card-top">
                    <span className="edu-icon">{edu.icon}</span>
                    <span className="edu-duration">{edu.duration}</span>
                  </div>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-grade-badge">
                    <span className="grade-dot"></span> {edu.grade}
                  </div>
                </div>
              ))}

              <div className="strengths-box">
                <div className="strengths-title">// Core Strengths &amp; Readiness</div>
                <ul className="strengths-list">
                  <li>⚡ Ready to join immediately</li>
                  <li>🛡️ Strong interest in DevOps, DevSecOps &amp; Cloud Security</li>
                  <li>🚀 Quick learner and adaptable to modern toolchains</li>
                  <li>🤝 Effective communication and collaborative teamwork</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
