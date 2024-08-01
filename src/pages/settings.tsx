import { useSettings } from '../context/SettingsContext';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from '../styles/layout.module.css';

const Settings = () => {
  const { sortOption, rowsPerPage, setSortOption, setRowsPerPage } = useSettings();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Settings Page" />
      </Head>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.settingsContainer}>
          <h3>Configure Settings</h3>
          <div className={styles.section}>
            <label htmlFor="sort" className={styles.label}>Sort By:</label>
            <select id="sort" className={styles.select} value={sortOption} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className={styles.section}>
            <label htmlFor="rowsPerPage" className={styles.label}>Rows Per Page:</label>
            <select id="rowsPerPage" className={styles.select} value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
