import { useEffect, useMemo } from 'react';

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
const transactionsCard1BaseOptions = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1dc4e9'],
  plotOptions: {
    bar: {
      columnWidth: '40%'
    }
  },
  series: [
    {
      data: [44, 26, 22, 35, 28, 35, 28]
    }
  ],
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
          return 'Amount Spent :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

const transactionsCard2BaseOptions = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#a389d4'],
  plotOptions: {
    bar: {
      columnWidth: '40%'
    }
  },
  series: [
    {
      data: [48, 30, 25, 30, 20, 40, 30]
    }
  ],
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
          return 'Amount Spent :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| ANALYTICS - TRANSACTIONS CARD 2 ||============================== //

export default function TransactionsCard2() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);

  useEffect(() => {
    setResolvedTheme(mode);
  }, [mode]);

  const options = useMemo<ChartProps>(() => {
    return {
      ...transactionsCard2BaseOptions,
      chart: { ...transactionsCard2BaseOptions.chart, fontFamily: fontFamily },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    };
  }, [resolvedTheme, fontFamily]);

  const options1 = useMemo<ChartProps>(() => {
    return {
      ...transactionsCard1BaseOptions,
      chart: { ...transactionsCard1BaseOptions.chart, fontFamily: fontFamily },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    };
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard
      title="Transactions"
      subheader={
        <p className="mb-0" aria-label="Reporting period">
          June - July
        </p>
      }
    >
      <Row>
        <Col xs={6}>
          <Stack className="justify-content-center align-items-center">
            <ReactApexChart
              options={options}
              series={options.series}
              type="bar"
              width={80}
              height={45}
              aria-label="Transactions chart primary"
            />
          </Stack>
          <h3 className="f-w-300 pt-3 mb-0 text-center">$80,48</h3>
        </Col>

        <Col xs={6}>
          <Stack className="justify-content-center align-items-center">
            <ReactApexChart
              options={options1}
              series={options1.series}
              type="bar"
              width={80}
              height={45}
              aria-label="Transactions chart secondary"
            />
          </Stack>
          <h3 className="f-w-300 pt-3 mb-0 text-center">$40,27</h3>
        </Col>
      </Row>
    </MainCard>
  );
}
