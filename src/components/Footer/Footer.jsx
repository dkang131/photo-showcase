import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Darren Kang</h2>

        <p className="footer-tagline">
          Capturing moments worth remembering.
        </p>

        <div className="footer-links">
          <a
            href="https://instagram.com/eyesofdarren"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a href="mailto:darrenkang03@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Darren Kang
        </p>
      </div>
    </footer>
  );
}