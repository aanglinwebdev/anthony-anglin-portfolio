import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <Link to="/">Anthony Anglin</Link>
      </div>

      <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
      >
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;