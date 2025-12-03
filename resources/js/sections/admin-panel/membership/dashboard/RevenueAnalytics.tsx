import { useMemo, useState } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';
import RevenueAnalyticsChart from './charts/RevenueAnalyticsChart';

const statisticsData: { [key: string]: { name: string; data: number[] }[] } = {
  today: [
    {
      name: 'Revenue',
      data: [4, 2.5, 8, 3.6, 4.4, 1.8, 11, 9.7, 12, 8.5, 11.5, 6]
    },
    {
      name: 'Earning',
      data: [1, 3.5, 3.7, 4.5, 5.4, 4.7, 5.2, 6.5, 5.8, 6.2, 6.7, 8.2]
    }
  ],
  weekly: [
    {
      name: 'Revenue',
      data: [8, 3.6, 4.4, 1.8, 11, 4, 2.5, 9.7, 12, 8.5, 11.5, 6]
    },
    {
      name: 'Earning',
      data: [5.2, 6.5, 5.8, 6.2, 6.7, 8.2, 1, 3.5, 3.7, 4.5, 5.4, 4.7]
    }
  ],
  monthly: [
    {
      name: 'Revenue',
      data: [4, 2.5, 8, 8.5, 11.5, 6, 3.6, 4.4, 1.8, 11, 9.7, 12]
    },
    {
      name: 'Earning',
      data: [5.2, 6.5, 5.8, 6.2, 3.7, 4.5, 5.4, 4.7, 6.7, 8.2, 1, 3.5]
    }
  ]
};

// ===============================|| DASHBOARD - STATISTICS ||============================== //

export default function RevenueAnalytics() {
  const [value, setValue] = useState('today');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value as string);
  };

  const chartData = useMemo(() => statisticsData[value], [value]);

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <div>
          <h5 className="mb-1 f-w-600 f-14">Revenue analytics</h5>
        </div>
        <Form.Select aria-label="Default select example" className="w-auto form-select-sm rounded-3" value={value} onChange={handleChange}>
          <option value="today">Today</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Form.Select>
      </Stack>
      <RevenueAnalyticsChart data={chartData} />
    </MainCard>
  );
}
