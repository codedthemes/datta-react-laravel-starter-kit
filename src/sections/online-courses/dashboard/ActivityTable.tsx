// react-bootstrap
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';
import Avatar4 from 'assets/images/user/avatar-4.jpg';
import Avatar5 from 'assets/images/user/avatar-5.jpg';

const users = [
  {
    id: 1,
    name: 'Airi Satou',
    qualification: 'Developer',
    rating: 5.0,
    avatar: Avatar4
  },
  {
    id: 2,
    name: 'Ashton Cox',
    qualification: 'Junior Technical',
    rating: 4.5,
    avatar: Avatar1
  },
  {
    id: 3,
    name: 'Bradley Greer',
    qualification: 'Sales Assistant',
    rating: 4.3,
    avatar: Avatar2
  },
  {
    id: 4,
    name: 'Brielle Williamson',
    qualification: 'JavaScript Developer',
    rating: 4.9,
    avatar: Avatar3
  },
  {
    id: 5,
    name: 'Colleen Hurst',
    qualification: 'Software Engineer',
    rating: 4.9,
    avatar: Avatar5
  }
];

// =============================|| DASHBOARD - ACTIVITY TABLE ||============================== //

export default function ActivityTable() {
  return (
    <MainCard
      className="table-card"
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">Activity</h5>
          <Button variant="link-primary">View All</Button>
        </Stack>
      }
    >
      <Table hover responsive className="align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, qualification, rating, avatar }) => (
            <tr key={id}>
              <td>
                <Stack direction="horizontal" className="align-items-center">
                  <Image src={avatar} alt={name} roundedCircle width={40} height={40} className="m-r-15" />
                  <div className="ms-3">
                    <h6 className="mb-0">{name}</h6>
                  </div>
                </Stack>
              </td>
              <td>{qualification}</td>
              <td className="fw-semibold">
                <i className="fas fa-star text-warning me-1" /> {rating}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}
