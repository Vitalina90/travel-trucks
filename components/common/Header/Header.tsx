import Link from 'next/link';
import { Logo } from './Logo';
import styles from './Header.module.css';

/**
 * Головний компонент навігаційної шапки сайту з логотипом та посиланнями на сторінки.
 */
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Travel Trucks Logo">
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/campers" className={styles.navLink}>
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
};
