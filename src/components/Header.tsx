import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Dashboard</Link>
        <Link href="/settings" className={styles.link}>Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
 