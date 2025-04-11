import { useEffect, useState, useRef, useMemo } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

interface DataPoint {
  x: number;
  y: number;
}

// ==============================|| APEX CHART - REALTIME CHART ||============================== //

export default function RealTimeChart() {
  const [data, setData] = useState<DataPoint[]>([]);
  const lastDate = useRef(0);

  // Function to generate time series data
  const getDayWiseTimeSeries = (baseval: number, count: number, yrange: { min: number; max: number }) => {
    const newData: DataPoint[] = [];
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      newData.push({ x, y });
      lastDate.current = baseval;
      baseval += 86400000;
      i++;
    }
    return newData;
  };

  const getNewSeries = (yrange: { min: number; max: number }) => {
    const newDate = lastDate.current + 86400000;
    lastDate.current = newDate;
    return {
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    };
  };

  const resetData = () => {
    setData((prevData) => prevData.slice(prevData.length - 10));
  };

  useEffect(() => {
    setData(getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 }));

    const updateInterval = setInterval(() => {
      setData((prevData) => {
        const newSeries = getNewSeries({ min: 10, max: 90 });
        return [...prevData, newSeries];
      });
    }, 2000);

    const resetInterval = setInterval(() => {
      resetData();
    }, 60000);

    return () => {
      clearInterval(updateInterval);
      clearInterval(resetInterval);
    };
  }, []);

  const chartOptions: ChartProps = useMemo(
    () => ({
      chart: {
        id: 'realtime-chart',
        animations: {
          enabled: true,
          easing: 'easeinout',
          dynamicAnimation: {
            speed: 1000
          }
        }
      },
      xaxis: {
        type: 'datetime',
        categories: data.map((d) => d.x)
      },
      stroke: {
        curve: 'smooth'
      }
    }),
    [data]
  );

  return <ReactApexChart options={chartOptions} series={[{ data }]} type="line" height={320} />;
}
