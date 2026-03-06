import { useState, useEffect } from "react"

function Hero(){

const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if(section){
      section.scrollIntoView({ behavior: "smooth" });
    }
};
    
  const roles = [
    "AWS DevOps Engineer ☁️",
    "React Developer ⚛️",
    "Linux & Cloud Enthusiast 🐧"
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if(charIndex < roles[index].length){
      const timeout = setTimeout(()=>{
        setText(prev => prev + roles[index][charIndex])
        setCharIndex(charIndex + 1)
      }, 80)

      return () => clearTimeout(timeout)
    } else {
      setTimeout(()=>{
        setText("")
        setCharIndex(0)
        setIndex((index + 1) % roles.length)
      },1500)
    }
  },[charIndex,index])

  return(
   <section id="home" className="hero">
      <h1>Hi, I'm Prajakta 👋</h1>
      <h2 className="typing">{text}|</h2>

      <p>
        I build web applications using React and deploy them on AWS 
        using DevOps tools like Docker, Git and Linux.
      </p>

      <div className="hero-buttons">
 <button className="primary-btn" onClick={scrollToProjects}>
  View My Projects
</button>
  <a href="/public/Prajakta_Gavhane_Resume.pdf" download>
  <button className="secondary-btn" >Download Resume</button>
</a>
</div>

    </section>
  )
}

export default Hero