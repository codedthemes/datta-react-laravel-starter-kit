// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  chart: {
    type: 'line',
    height: 245,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],
  fill: {
    type: 'solid'
  },
  plotOptions: {
    bar: {
      columnWidth: '30%'
    }
  },
  series: [
    {
      data: [45, 30, 55]
    }
  ],
  xaxis: {
    categories: ['2019', '2020', '2021'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      width: 0
    },
    labels: {
      show: false
    }
  },
  grid: {
    padding: {
      bottom: 0,
      left: 10
    },
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  markers: {
    size: 5,
    colors: '#04a9f5',
    strokeColors: '#fff',
    opacity: 0.9,
    strokeWidth: 2,
    hover: {
      size: 7
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
          return 'Statistics :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| WIDGET - STATISTICS 11 ||============================== //

export default function Statistics11() {
  return (
    <MainCard headerClassName="borderless-header" title={<p className="mb-0 text-white">Statistics</p>} className="bg-primary">
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" height={230} />
    </MainCard>
  );
}
