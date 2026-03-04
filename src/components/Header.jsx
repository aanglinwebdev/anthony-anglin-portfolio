
import styles from "./Header.module.css";
function Header() {
   return (
    <header style={{ padding: "20px", textAlign: "center" }}>
      <h1>Anthony Anglin</h1>
      <p classsname={styles.intro}>
        Hi! I'm Anthony — a frontend developer building modern web experiences.
      </p>
      {/* Any existing buttons or elements */}
    </header>
  );
}

export default Header;
