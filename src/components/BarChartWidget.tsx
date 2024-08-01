import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { mockData } from '../utils/mockData';
import styles from './BarChartWidget.module.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChartWidget = () => {
  const data = {
    labels: mockData.labels,
    datasets: [
      {
        label: 'Revenue',
        data: mockData.revenueData,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Revenue Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChartWidget;
