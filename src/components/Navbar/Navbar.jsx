import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleAboutClick = () => {
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <>
      <nav className="navbar">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <Link to="/" className="logo" onClick={handleAboutClick}>
          Darren Kang
        </Link>
      </nav>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/people" onClick={closeMenu}>
          People
        </Link>

        <Link to="/travel" onClick={closeMenu}>
          Travel
        </Link>

        <Link to="/lifestyle" onClick={closeMenu}>
          Lifestyle
        </Link>

        <Link to="/friends" onClick={closeMenu}>
          Friends
        </Link>

        <button onClick={handleAboutClick}>
          About
        </button>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}