import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <h1 className={styles.companyName}>Saasaki Technologies</h1>
      </div>
      <ul>
        <li>
          <Link href="/" className={styles.link}>
            <FontAwesomeIcon icon={faTachometerAlt} className={styles.icon} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/settings" className={styles.link}>
            <FontAwesomeIcon icon={faCog} className={styles.icon} />
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
