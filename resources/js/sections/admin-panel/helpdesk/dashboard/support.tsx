import { useEffect, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const getTextColorClass = (color: string) => {
  if (color === '#3ebfea') return 'text-info';
  if (color === '#04A9F5') return 'text-primary';
  if (color === '#1DE9B6') return 'text-success';
  return 'text-danger';
};

interface Props {
  color: string;
  data: number[];
}

// ==============================|| DASHBOARD - SUPPORT ||============================== //

function SupportCardChart({ color, data }: Props) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  // chart options
  const areaChartOptions = {
    chart: {
      id: 'new-stack-chart',
      type: 'area',
      stacked: true,
      sparkline: {
        enabled: true
      },
      offsetX: 0
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        barHeight: '100%'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      hover: {
        size: 5
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.7,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.5
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    yaxis: {
      min: 0,
      max: Math.max(...data) * 1.1, // Adjusts max based on data for better area filling
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    tooltip: {
      x: {
        show: false
      }
    },
    grid: {
      show: false
    }
  };

  const [series] = useState([{ name: 'Orders', data }]);

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: [color],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="area" height={100} />;
}

interface SupportCardProps {
  title: string;
  count: number;
  details: string;
  color?: any;
  bgColor?: string;
  openValue: number;
  runningValue: number;
  solvedValue: number;
  chartData: number[];
}

// ==============================|| SUPPORT CARD & CHART ||============================== //

export default function SupportCard({
  title,
  count,
  details,
  bgColor,
  color,
  openValue,
  runningValue,
  solvedValue,
  chartData
}: SupportCardProps) {
  return (
    <MainCard
      className="support-bar"
      bodyClassName="p-0"
      footerClassName={`${bgColor} text-white`}
      footer={
        <Row className="text-center">
          <Col className="border-end">
            <h4 className="m-0 text-white">{openValue}</h4>
            <span>Open</span>
          </Col>
          <Col className="border-end">
            <h4 className="m-0 text-white">{runningValue}</h4>
            <span>Running</span>
          </Col>
          <Col>
            <h4 className="m-0 text-white">{solvedValue}</h4>
            <span>Solved</span>
          </Col>
        </Row>
      }
    >
      <div className="p-4 pb-0">
        <h2 className="m-0">{count}</h2>
        <span className={getTextColorClass(color)}>{title}</span>
        <p className="mb-3 mt-3">{details}</p>
      </div>

      <SupportCardChart color={color} data={chartData} />
    </MainCard>
  );
}
