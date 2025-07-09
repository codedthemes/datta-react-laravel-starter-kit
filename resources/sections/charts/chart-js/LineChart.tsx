// third party
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// project-imports
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = [0, 1, 2, 3, 4, 5, 6];

const data = {
  labels,
  datasets: [
    {
      label: 'D1',
      data: [85, 55, 70, 50, 75, 45, 60],
      fill: 'origin',
      borderWidth: 1,
      borderColor: '#ff6a83',
      backgroundColor: '#ff6a83',
      hoverborderColor: '#ff6a83',
      hoverBackgroundColor: '#ff6a83',
      tension: 0.5
    }
  ]
};
// ==============================|| CHART JS - LINE CHART ||============================== //

export default function LineChart() {
  const { mode } = useConfig();
  const options = {
    barValueSpacing: 20,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        backgroundColor: mode === ThemeMode.DARK ? '#000000' : '#fff',
        titleColor: mode === ThemeMode.DARK ? '#ffffff' : '#000000',
        bodyColor: mode === ThemeMode.DARK ? '#ffffff' : '#000000'
      }
    },
    interaction: {
      intersect: false
    }
  };
  return <Line height={300} options={options} data={data} />;
}
