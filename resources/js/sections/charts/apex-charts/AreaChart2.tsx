import { useState, useEffect, useCallback } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// project imports
import useConfig from '@/hooks/useConfig';
import { areachart2Data } from '@/data/aeraChartdata';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';
import { ThemeMode } from '@/config';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const aeraChartOptions = {
  chart: {
    toolbar: {
      show: false
    }
  },
  annotations: {
    yaxis: [
      {
        y: 30,
        borderColor: '#999',
        label: {
          show: true,
          text: 'Support',
          style: {
            color: '#fff',
            background: '#00E396'
          }
        }
      }
    ],
    xaxis: [
      {
        x: new Date('14 Nov 2012').getTime(),
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Rally',
          style: {
            color: '#fff',
            background: '#775DD0'
          }
        }
      }
    ]
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0,
    style: 'hollow'
  },
  xaxis: {
    type: 'datetime',
    min: new Date('01 feb 2012').getTime(),
    tickAmount: 6
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  }
};

// ==============================|| APEX CHART - AREA CHART 2 ||============================== //

export default function AreaChart2() {
  const [selectedRange, setSelectedRange] = useState<'1M' | '6M' | '1Y' | 'YTD' | 'ALL'>('1Y');
  const [chartOptions, setChartOptions] = useState<ChartProps>(aeraChartOptions);
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [chartSeries] = useState([
    {
      name: 'Series 1',
      data: areachart2Data
    }
  ]);

  const handleTimeRange = useCallback((range: '1M' | '6M' | '1Y' | 'YTD' | 'ALL') => {
    setChartOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };

      switch (range) {
        case '1M':
          updatedOptions.xaxis = {
            ...prevOptions.xaxis,
            min: new Date('01 Feb 2013').getTime(),
            max: new Date('01 Mar 2013').getTime()
          };
          break;
        case '6M':
          updatedOptions.xaxis = {
            ...prevOptions.xaxis,
            min: new Date('01 Sep 2012').getTime(),
            max: new Date('01 Mar 2013').getTime()
          };
          break;
        case '1Y':
          updatedOptions.xaxis = {
            ...prevOptions.xaxis,
            min: new Date('01 Mar 2012').getTime(),
            max: new Date('01 Mar 2013').getTime()
          };
          break;
        case 'YTD':
          updatedOptions.xaxis = {
            ...prevOptions.xaxis,
            min: new Date('01 Jan 2013').getTime(),
            max: new Date('01 Mar 2013').getTime()
          };
          break;
        case 'ALL':
          updatedOptions.xaxis = {
            ...prevOptions.xaxis,
            min: undefined,
            max: undefined
          };
          break;
        default:
          break;
      }

      return updatedOptions;
    });
    setSelectedRange(range);
  }, []);

  useEffect(() => {
    handleTimeRange('1Y');
  }, [handleTimeRange]);

  useEffect(() => {
    setChartOptions({
      ...aeraChartOptions,
      chart: { ...aeraChartOptions.chart, fontFamily: fontFamily },
      colors: ['#04a9f5'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <>
      <ButtonGroup>
        {['1M', '6M', '1Y', 'YTD', 'ALL'].map((range) => (
          <Button
            key={range}
            variant={selectedRange === range ? 'primary' : 'outline-primary'}
            onClick={() => handleTimeRange(range as '1M' | '6M' | '1Y' | 'YTD' | 'ALL')}
            className="px-2 py-1"
          >
            {range}
          </Button>
        ))}
      </ButtonGroup>
      <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={320} />
    </>
  );
}
