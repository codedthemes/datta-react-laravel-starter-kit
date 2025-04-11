// third-party
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const labels = [0, 1, 2, 3];

const data = {
  labels,
  datasets: [
    {
      label: 'Data 1',
      data: [25, 45, 74, 85],
      backgroundColor: '#62abff'
    },
    {
      label: 'Data 2',
      data: [30, 52, 65, 65],
      backgroundColor: '#ffc777'
    }
  ]
};

// ==============================|| CHART JS - BAR STACKED CHART ||============================== //

export default function BarStackedChart() {
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        titleColor: 'rgba(0, 0, 0, 0.85)',
        bodyColor: 'rgba(0, 0, 0, 0.65)'
      }
    }
  };
  return <Bar options={options} data={data} />;
}
