// third-party
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = [0, 1, 2, 3, 4, 5, 6];

const data = {
  labels,
  datasets: [
    {
      label: 'D1',
      data: [45, 60, 45, 80, 60, 80, 45],
      fill: true,
      borderWidth: 4,
      borderColor: '#6eb1ff',
      backgroundColor: '#6eb1ff',
      hoverborderColor: '#6eb1ff',
      hoverBackgroundColor: '#6eb1ff',
      tension: 0.5
    },
    {
      label: 'D2',
      data: [45, 80, 45, 45, 60, 45, 80],
      fill: true,
      borderWidth: 0,
      borderColor: '#59e0c5',
      backgroundColor: '#59e0c5',
      hoverborderColor: '#59e0c5',
      hoverBackgroundColor: '#59e0c5',
      tension: 0.5
    },
    {
      label: 'D3',
      data: [83, 45, 60, 45, 45, 55, 45],
      fill: true,
      borderWidth: 4,
      borderColor: '#ff869a',
      backgroundColor: '#ff869a',
      hoverborderColor: '#ff869a',
      hoverBackgroundColor: '#ff869a',
      tension: 0.5
    }
  ]
};

// =============================|| CHART JS - LINE BASIC CHART ||============================== //

export default function LineBasicChart() {
  const options = {
    barValueSpacing: 20,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        titleColor: 'rgba(0, 0, 0, 0.85)',
        bodyColor: 'rgba(0, 0, 0, 0.65)'
      }
    }
  };

  return <Line height={300} options={options} data={data} />;
}
