function Architecture(){
  return(
    <section className="architecture">
      <h2 className="arch-title">Deployment Architecture</h2>

      <div className="arch-flow">

        <div className="arch-box">React App</div>
        <span>→</span>

        <div className="arch-box">GitHub</div>
        <span>→</span>

        <div className="arch-box">AWS EC2</div>
        <span>→</span>

        <div className="arch-box">Docker</div>
        <span>→</span>

        <div className="arch-box">Security Group</div>
        <span>→</span>

        <div className="arch-box">Live Website</div>

      </div>
    </section>
  )
}

export default Architecture