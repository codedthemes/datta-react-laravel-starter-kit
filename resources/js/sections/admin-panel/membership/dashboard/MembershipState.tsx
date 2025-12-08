import { ChangeEvent, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';
import MembershipStateChart from './charts/MembershipStateChart';

// ===============================|| MEMBERSHIP - MEMBERSHIP STATE ||============================== //

export default function MembershipState() {
  const [value, setValue] = useState('monthly');
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value as string);
  };
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <h5 className="mb-0">Membership State</h5>
        <Form.Select size="sm" className="rounded-3 w-auto" defaultValue={value} onChange={handleChange}>
          <option value="today">Today</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Form.Select>
      </Stack>

      <Row className="mt-3">
        <Col xs={12} md={6} lg={7}>
          <MembershipStateChart />
        </Col>
        <Col xs={12} md={6} lg={5}>
          <div className="rounded border p-3 mb-2">
            <span className="d-block">
              <i className="ti ti-circle-filled align-baseline text-blue-500 f-10 m-r-10" />
              New Membership
            </span>
          </div>
          <div className="rounded border p-3">
            <span className="d-block">
              <i className="ti ti-circle-filled align-baseline text-blue-200 f-10 m-r-10" />
              Repeat Membership
            </span>
          </div>
        </Col>
      </Row>
    </MainCard>
  );
}
