import resumeUrl from "./assets/Gavhane_Prajakta_resume_new.pdf";

function FloatingResume() {
  return (
    <aside className="floating-resume-wrapper" aria-label="Quick Resume Download">
      <a
        href={resumeUrl}
        download="/src/Gavhane_Prajakta_resume_new.pdf"
        className="floating-resume-btn"
        title="Download Prajakta's Resume (PDF)"
        aria-label="Download Prajakta's Resume PDF"
      >
        <span className="fab-pulse" aria-hidden="true"></span>
        <span className="fab-icon">📄</span>
        <span className="fab-text">RESUME.PDF</span>
        <span className="fab-download-arrow">↓</span>
      </a>
    </aside>
  );
}

export default FloatingResume;

