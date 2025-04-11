import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

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

// ==============================|| DASHBOARD - COURSE STATES TABLE ||============================== //

export default function CourseStateTable() {
  return (
    <MainCard
      className="table-card"
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">Course States</h5>
          <Button variant="link-primary">View All</Button>
        </Stack>
      }
    >
      <Table hover responsive className="align-middle">
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
                <i className="fas fa-star text-warning"></i> {value.rating}
              </td>
              <td>${value.earning}</td>
              <td>
                <span className="donut">{(value.sale * 100).toFixed(0)}%</span>
              </td>
              <td>
                <Link to="#" className="avatar avatar-xs btn-link-secondary">
                  <i className="ti ti-eye f-20" />
                </Link>
                <Link to="#" className="avatar avatar-xs btn-link-secondary">
                  <i className="ti ti-edit f-20" />
                </Link>
                <Link to="#" className="avatar avatar-xs btn-link-secondary">
                  <i className="ti ti-trash f-20" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}
