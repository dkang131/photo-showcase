import "./ComingSoon.css";
import { Link } from "react-router-dom";

export default function ComingSoon({
  title,
  description = "I'm still curating this collection. Check back soon for more moments and stories.",
}) {
  return (
    <main className="coming-soon">
      <div className="coming-soon-content">
        <span className="coming-soon-tag">Coming Soon</span>

        <h1>{title}</h1>

        <p>{description}</p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}