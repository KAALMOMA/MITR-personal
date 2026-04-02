import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="fbx_logo.png" alt="FBX Logo" className={styles.logo} />

      {/* Desktop nav links */}
      <div className={styles.navlinksContainer}>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.navlinks}>About</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.navlinks}>Learn</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.navlinks}>Enterprise</a>
      </div>

      <div className={styles.navActions}>
        <a href="https://example.com" target="_blank" className={styles.whitebutton}>Contact Us</a>
        <a href="https://example.com" target="_blank" className={styles.gradientButton}>Sign In</a>
      </div>

      {/* Hamburger — must be after desktop nav for sibling CSS selector to work */}
      <input type="checkbox" id="menuToggle" className={styles.menuToggle} />
      <label htmlFor="menuToggle" className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </label>

      {/* Mobile menu — sibling of checkbox */}
      <div className={styles.mobileMenu}>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.navlinks}>About</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.navlinks}>Learn</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.navlinks}>Enterprise</a>
        <a href="https://example.com" target="_blank" className={styles.whitebutton}>Contact Us</a>
        <a href="https://example.com" target="_blank" className={styles.gradientButton}>Sign In</a>
      </div>
    </div>
  );
}