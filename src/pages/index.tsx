import { useSettings } from '../context/SettingsContext';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChartWidget from '../components/ChartWidget';
import DataTableWidget from '../components/DataTableWidget';
import BarChartWidget from '../components/BarChartWidget';
import styles from '../styles/layout.module.css';

const Home = () => {
  const { sortOption, rowsPerPage } = useSettings();

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Interactive Dashboard" />
      </Head>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <h3>Dashboard</h3>
        <div className={styles.charts}>
          <ChartWidget />
          <BarChartWidget />
        </div>
        <DataTableWidget sortOption={sortOption} rowsPerPage={rowsPerPage} />
      </main>
    </div>
  );
};

export default Home;
