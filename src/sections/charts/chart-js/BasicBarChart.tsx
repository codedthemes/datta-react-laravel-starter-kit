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
      borderColor: '#70b2ff',
      backgroundColor: '#70b2ff',
      hoverBorderColor: '#70b2ff',
      hoverBackgroundColor: '#70b2ff'
    },
    {
      label: 'Data 2',
      data: [30, 52, 65, 65],
      borderColor: '#4cdec0',
      backgroundColor: '#4cdec0',
      hoverBorderColor: '#4cdec0',
      hoverBackgroundColor: '#4cdec0'
    }
  ]
};

// ==============================|| CHART JS - BAR BASIC CHART ||============================== //

export default function BarBasicChart() {
  const options = {
    barValueSpacing: 20,
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
