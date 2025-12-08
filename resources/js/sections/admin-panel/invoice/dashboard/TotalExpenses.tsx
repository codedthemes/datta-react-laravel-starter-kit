import { useState, useEffect } from 'react';

// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const expenssChartOptions = {
  chart: {
    type: 'donut',
    height: 280
  },
  series: [27, 23, 20, 17],
  labels: ['Pending', 'Paid', 'Overdue', 'Draft'],
  fill: {
    opacity: [1, 1, 1, 0.3]
  },
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: true,
          name: {
            show: true
          },
          value: {
            show: true
          }
        }
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 575,
      options: {
        chart: {
          height: 250
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
              labels: {
                show: false
              }
            }
          }
        }
      }
    }
  ]
};

const expenses = [
  { label: 'Pending', amount: '$3,202', color: 'warning' },
  { label: 'Paid', amount: '$45,050', color: 'success' },
  { label: 'Overdue', amount: '$25,000', color: 'danger' }
];

// ==============================|| ADMIN PANEL - DASHBOARD EXPENSES CHART ||============================== //

export default function ExpensesChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(expenssChartOptions);

  useEffect(() => {
    setOptions({
      ...expenssChartOptions,
      chart: { ...expenssChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-warning)', 'var(--bs-success)', 'var(--bs-danger)', 'var(--bs-primary)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between pb-0">
        <h5 className="mb-0">Total Expenses</h5>
        <Dropdown>
          <Dropdown.Toggle variant="link-secondary" className="avatar avatar-s arrow-none border-0">
            <i className="ti ti-dots-vertical f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Monthly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <Stack className="justify-content-center pt-4">
        <ReactApexChart options={options} series={options.series} type="donut" height={280} />
      </Stack>
      {expenses.map((item, index) => (
        <Stack key={index} direction="horizontal" className="align-items-center justify-content-between mb-2 mt-2">
          <Stack direction="horizontal" gap={2} className="align-items-center">
            <i className={`ti ti-circle-filled text-${item.color} f-12`} />
            <h6 className="mb-0">{item.label}</h6>
          </Stack>
          <p className="mb-0 text-muted">{item.amount}</p>
        </Stack>
      ))}
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <Stack direction="horizontal" gap={2} className="align-items-center">
          <i className="ti ti-circle-filled text-primary text-opacity-25 f-12" />
          <h6 className="mb-0">Draft</h6>
        </Stack>
        <p className="mb-0 text-muted">$7,694</p>
      </Stack>
    </MainCard>
  );
}
