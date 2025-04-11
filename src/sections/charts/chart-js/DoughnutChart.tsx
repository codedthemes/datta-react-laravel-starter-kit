// third-party
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Data 1', 'Data 2', 'Data 3'],
  datasets: [
    {
      data: [30, 30, 40],
      backgroundColor: ['#459cff', '#3adaba', '#ff6a83'],
      hoverBackgroundColor: ['#459cff', '#3adaba', '#ff6a83']
    }
  ]
};

// ==============================|| CHART JS - DOUGHNUT CHART ||============================== //

export default function DoughnutChart() {
  const options = {
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        titleColor: 'rgba(0, 0, 0, 0.85)',
        bodyColor: 'rgba(0, 0, 0, 0.65)'
      }
    },
    maintainAspectRatio: false,
    resizeTo: 'fit'
  };

  return <Doughnut data={data} height={300} options={options} />;
}
