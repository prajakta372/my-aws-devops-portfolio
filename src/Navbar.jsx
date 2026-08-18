import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const navOffset = 75;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { id: "home", label: "01. // home" },
    { id: "about", label: "02. // about" },
    { id: "skills", label: "03. // skills" },
    { id: "projects", label: "04. // projects" },
    { id: "architecture", label: "05. // pipeline" },
    { id: "certifications", label: "06. // certs_edu" },
    { id: "github", label: "07. // github" },
    { id: "contact", label: "08. // contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollTo("home")}>
          <span className="logo-prompt">prajakta@cloud</span>
          <span className="logo-sep">:</span>
          <span className="logo-path">~</span>
          <span className="logo-cursor">$</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`hamburger-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="mobile-nav-item"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;