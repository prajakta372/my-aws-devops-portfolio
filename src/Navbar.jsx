import { useEffect } from "react";

function Navbar() {

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 👇 glow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if(window.scrollY > 50){
        nav.classList.add("navbar-glow");
      } else {
        nav.classList.remove("navbar-glow");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">Prajakta</h2>

      <ul className="nav-links">
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("skills")}>Skills</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;