import { useEffect, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const transactionsChartOptions = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: '40%'
    }
  },
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return 'Amount Spent:';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| CRM - TRANSACTIONS CARD ||============================== //

export default function TransactionsCard() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      data: [48, 30, 25, 30, 20, 40, 30]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(transactionsChartOptions);

  useEffect(() => {
    setOptions({
      ...transactionsChartOptions,
      chart: { ...transactionsChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard title="Transactions" subheader={<p className="mb-0 mt-0">Jun 23 - Jul 23</p>}>
      <Row className="align-items-center justify-content-center">
        <Col xs={6}>
          <h3 className="f-w-300 mb-0 float-left">$59,48</h3>
        </Col>
        <Col xs={6}>
          <Stack className="justify-content-center align-items-center">
            <ReactApexChart options={options} series={series} type="bar" height={80} width={80} />
          </Stack>
        </Col>
      </Row>
    </MainCard>
  );
}
