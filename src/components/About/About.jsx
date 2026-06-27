import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <span className="section-tag">About</span>

        <h2>Behind the Camera</h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              Hi, I'm Darren.
            </p>

            <p>
              Photography began as a hobby, but over time it became my way of
              slowing down and appreciating the little moments that often go
              unnoticed.
            </p>

            <p>
              I enjoy documenting everyday life—friends, people, new
              places, and the small details that make each journey memorable.
              Most of my favorite photographs weren't planned; they happened
              simply because I was there with a camera.
            </p>

            <div className="signature">
              — Until the next frame.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}