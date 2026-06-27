import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <h2 className="logo">Darren Kang</h2>
      </nav>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <button onClick={closeMenu}>Home</button>
        <button onClick={closeMenu}>People</button>
        <button onClick={closeMenu}>Travel</button>
        <button onClick={closeMenu}>Lifestyle</button>
        <button onClick={closeMenu}>Friends</button>
        <button onClick={closeMenu}>About</button>
        <button onClick={closeMenu}>Instagram</button>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}