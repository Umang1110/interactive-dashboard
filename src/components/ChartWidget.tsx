import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { mockData } from '../utils/mockData';
import styles from './ChartWidget.module.css';
import '../lib/chart';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ChartWidget = () => {
  const data = {
    labels: mockData.labels,
    datasets: [
      {
        label: 'Sales',
        data: mockData.salesData,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Sales Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default ChartWidget;
