import { useState, useEffect } from 'react';
import { mockData } from '../utils/mockData';
import styles from './DataTableWidget.module.css';

interface DataTableWidgetProps {
  sortOption: string;
  rowsPerPage: number;
}

const DataTableWidget: React.FC<DataTableWidgetProps> = ({ sortOption, rowsPerPage }) => {
  const [sortedData, setSortedData] = useState(mockData.tableData);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const sortData = [...mockData.tableData].sort((a, b) => {
      if (sortOption === 'date') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a.amount - b.amount;
    });
    setSortedData(sortData);
  }, [sortOption]);

  const paginatedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>Data Table</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>₹{row.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>{currentPage}</span>
        <button 
          onClick={() => setCurrentPage(prev => (prev * rowsPerPage < sortedData.length ? prev + 1 : prev))}
          disabled={currentPage * rowsPerPage >= sortedData.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DataTableWidget;
