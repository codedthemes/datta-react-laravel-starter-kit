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
      borderColor: '#69aeff',
      backgroundColor: '#69aeff'
    },
    {
      label: 'Data 2',
      data: [30, 52, 65, 65],
      borderColor: '#ff7a90',
      backgroundColor: '#ff7a90'
    }
  ]
};

// ==============================|| CHART JS - BAR HORIZONTAL CHART ||============================== //

export default function BarHorizontalChart() {
  const options = {
    indexAxis: 'y' as const,
    barValueSpacing: 20,
    elements: {
      bar: {
        borderWidth: 2
      }
    },
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
  return <Bar options={options} data={data} />;
}
