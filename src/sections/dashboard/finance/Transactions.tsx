// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import DropDown from './DropDown';
import MainCard from 'components/MainCard';

interface TransactionsProps {
  colorCondition: 'success' | 'danger';
}

const chartOptions: (colorCondition: 'success' | 'danger') => ChartProps = (colorCondition) => ({
  chart: {
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: colorCondition === 'success' ? ['#1de9b6'] : ['#f44336'],
  stroke: {
    curve: 'straight',
    lineCap: 'round',
    width: 3
  },
  series: [
    {
      name: 'series1',
      data: [20, 10, 18, 12, 25, 10, 20]
    }
  ],
  yaxis: {
    min: 0,
    max: 30,
    label: {
      show: false
    }
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});

// ==============================|| FINANCE - TRANSACTIONS ||============================== //

export default function Transactions({ colorCondition }: TransactionsProps) {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <div>
          <h6 className="mb-0">Transactions</h6>
          <p className="mb-0 text-muted">2-31 July 2023</p>
        </div>
        <DropDown />
      </Stack>

      <ReactApexChart
        options={chartOptions(colorCondition)}
        series={chartOptions(colorCondition).series}
        type="line"
        height={chartOptions(colorCondition).chart.height}
      />

      <Stack direction="horizontal" gap={2} className=" align-items-center justify-content-between mt-3">
        <h4 className="mb-0">
          <small className="text-muted">$</small>650k
        </h4>
        <p className="mb-0 text-muted text-sm">Compare to last week</p>
      </Stack>
    </MainCard>
  );
}
