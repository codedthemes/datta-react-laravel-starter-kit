import { useMemo, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

// project-imports
import ActivityChart from '@/sections/admin-panel/membership/dashboard/charts/ActivityChart';
import MainCard from '@/components/MainCard';

const activityData: { [key: string]: { name: string; data: number[] }[] } = {
  today: [
    {
      name: 'Active',
      data: [220, 120, 90, 250, 20, 460, 580, 590, 480, 200, 230, 280]
    },
    {
      name: 'Inactive',
      data: [550, 250, 80, 450, 200, 350, 450, 250, 450, 200, 250, 300]
    }
  ],
  weekly: [
    {
      name: 'Active',
      data: [20, 460, 580, 590, 480, 200, 230, 280, 220, 120, 90, 250]
    },
    {
      name: 'Inactive',
      data: [550, 450, 250, 200, 250, 300, 250, 80, 450, 200, 350, 450]
    }
  ],
  monthly: [
    {
      name: 'Active',
      data: [20, 230, 280, 220, 120, 90, 250, 460, 580, 590, 480, 200]
    },
    {
      name: 'Inactive',
      data: [80, 450, 550, 450, 250, 200, 250, 300, 250, 200, 350, 450]
    }
  ]
};

// ===============================|| DASHBOARD - ACTIVITY ||============================== //

export default function ActivityCard() {
  const [value, setValue] = useState('monthly');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value as string);
  };

  const chartData = useMemo(() => activityData[value], [value]);
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
        <h5 className="mb-1 f-w-600 f-14">Activity</h5>
        <Form.Select aria-label="Default select example" className="w-auto form-select-sm rounded-3" value={value} onChange={handleChange}>
          <option value="today">Today</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Form.Select>
      </Stack>
      <ActivityChart data={chartData} />
    </MainCard>
  );
}
