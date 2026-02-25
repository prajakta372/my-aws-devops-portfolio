function Footer(){
  return(
    <footer id="contact" className="footer">
      
      <div className="footer-container">

        <div className="footer-left">
          <h2>Prajakta</h2>
          <p>AWS DevOps Engineer & React Developer</p>
        </div>

        <div className="footer-center">
          <h3>Connect With Me</h3>
          <p>Email: prajakta@example.com</p>
          <p>GitHub: github.com/prajakta372</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </div>

        <div className="footer-right">
          <h3>Tech Stack</h3>
          <p>AWS • Docker • Linux • React • Git</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Prajakta | Built with React & Deployed on AWS
      </div>

    </footer>
  )
}

export default Footer