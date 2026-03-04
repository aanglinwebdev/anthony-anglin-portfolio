import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={styles.navbar}>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
      >
        ☰
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;

