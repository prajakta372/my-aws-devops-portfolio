function Projects(){
  return(
   <section id="projects" className="projects">
      <h2 className="project-title">DevOps & Cloud Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>AWS React Portfolio Deployment</h3>
          <p>
            Built portfolio using React and deployed on AWS using S3 static hosting 
            with IAM policies and public access configuration.
          </p>
          <div className="tech-used">React • AWS S3 • IAM</div>
          <a href="#">GitHub</a>
        </div>

        <div className="project-card">
          <h3>EC2 Docker Deployment</h3>
          <p>
            Launched EC2 instance, installed Docker and deployed web application.
            Configured security groups and Linux environment.
          </p>
          <div className="tech-used">EC2 • Docker • Linux</div>
          <a href="#">GitHub</a>
        </div>

        <div className="project-card">
          <h3>CI/CD Basic Pipeline</h3>
          <p>
            Managed code using Git & GitHub and implemented basic CI/CD workflow 
            for deployment practice.
          </p>
          <div className="tech-used">Git • GitHub • CI/CD</div>
          <a href="#">GitHub</a>
        </div>

      </div>
    </section>
  )
}

export default Projects