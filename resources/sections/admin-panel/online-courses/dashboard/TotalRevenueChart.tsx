import { useEffect, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';

// chart-options
const chartOptions: ChartProps = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1de9b6'],
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
};

// ===============================|| DASHBOARD - TOTAL REVENUE CHART ||============================== //

export default function TotalRevenueChart() {
  const [options, setOptions] = useState(chartOptions);
  const { mode } = useConfig();

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode]);

  return (
    <MainCard>
      <p className="text-muted mb-1">Total Revenue</p>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <h4 className="mb-0">7,265</h4>
        <p className="d-inline-flex align-items-center gap-1 mb-0">
          +11.02% <i className="ti ti-arrow-up-right text-success" />
        </p>
      </Stack>
      <ReactApexChart options={options} series={options.series} type="line" height={60} />
    </MainCard>
  );
}
