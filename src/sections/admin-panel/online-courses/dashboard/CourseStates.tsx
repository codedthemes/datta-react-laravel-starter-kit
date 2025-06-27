// react-bootstrap
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import MainCard from 'components/MainCard';

// user data
const users = [
  {
    name: 'Web Designing Course',
    teacher: 'Airi Satou',
    rating: 4.8,
    earning: 200,
    sale: 5 / 7
  },
  {
    name: 'UI/UX Training Course',
    teacher: 'Ashton Cox',
    rating: 5.0,
    earning: 100,
    sale: 4 / 7
  },
  {
    name: 'PHP Training Course',
    teacher: 'Ashton Cox',
    rating: 4.8,
    earning: 80,
    sale: 2 / 7
  },
  {
    name: 'Bootstrap 5 Course',
    teacher: 'Brielle Williamson',
    rating: 4.4,
    earning: 150,
    sale: 6 / 7
  },
  {
    name: 'C Training Course',
    teacher: 'Cedric Kelly',
    rating: 4.3,
    earning: 50,
    sale: 3 / 7
  }
];

// action icons data
const actionIcons = [
  { icon: 'ti ti-eye', name: 'View' },
  { icon: 'ti ti-edit', name: 'Edit' },
  { icon: 'ti ti-trash', name: 'Delete' }
];

// ==============================|| DASHBOARD - COURSE STATES TABLE ||============================== //

export default function CourseStateTable() {
  return (
    <MainCard
      className="table-card"
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">Course States</h5>
          <Button size="sm" variant="link-primary">
            View All
          </Button>
        </Stack>
      }
    >
      <Table hover responsive className="align-middle mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Teacher</th>
            <th>Rating</th>
            <th>Earring</th>
            <th>Sale</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.teacher}</td>
              <td className="f-w-600">
                <i className="ti ti-star-filled align-baseline text-warning" /> {value.rating}
              </td>
              <td>${value.earning}</td>
              <td>
                <span className="donut">{(value.sale * 100).toFixed(0)}%</span>
              </td>
              <td>
                <Stack direction="horizontal" gap={1}>
                  {actionIcons.map((action, idx) => (
                    <OverlayTrigger key={idx} placement="bottom" overlay={<Tooltip>{action.name}</Tooltip>}>
                      <a href="#!" className="btn-link-secondary avatar avatar-xs mx-1">
                        <i className={`${action.icon} f-20`} />
                      </a>
                    </OverlayTrigger>
                  ))}
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}
