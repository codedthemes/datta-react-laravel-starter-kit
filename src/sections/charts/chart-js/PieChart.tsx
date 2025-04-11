// third-party
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Data 1', 'Data 2', 'Data 3'],
  datasets: [
    {
      data: [30, 30, 40],
      backgroundColor: ['#439bff', '#39daba', '#ffc065'],
      hoverBackgroundColor: ['#439bff', '#39daba', '#ffc065']
    }
  ]
};

// =============================|| CHART JS - PIE CHART ||============================== //

export default function PieChart() {
  const options = {
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        titleColor: 'rgba(0, 0, 0, 0.85)',
        bodyColor: 'rgba(0, 0, 0, 0.65)'
      }
    },
    maintainAspectRatio: false
  };
  return <Pie data={data} height={300} options={options} />;
}
