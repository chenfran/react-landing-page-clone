import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.globalContainer}>
        <a className={styles.brand} href="/">
          <img src="/img/robotos-logo.webp" alt="/" />
          <div className={styles.navLink}>Robots</div>
        </a>

        <nav className={styles.navMenu}>
          <a className={styles.wNavLink} href="/">
            Workshop
          </a>
          <a className={styles.wNavLink} href="/">
            Shop
          </a>
          <a className={styles.wNavLink} href="/">
            Your Stuff
          </a>
          <button className={styles.wButton} href="/">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
}
