// react-bootstrap
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Image1 from 'assets/images/user/avatar-1.jpg';
import Image2 from 'assets/images/user/avatar-2.jpg';
import Image3 from 'assets/images/user/avatar-3.jpg';

const userActivities = [
  {
    name: 'Ida Jorgensen',
    image: Image1,
    activity: 'The quick brown fox',
    time: '3:28 PM',
    status: 'Done',
    statusClass: 'text-success',
    iconClass: 'text-success'
  },
  {
    name: 'Albert Andersen',
    image: Image2,
    activity: 'Jumps over the lazy',
    time: '2:37 PM',
    status: 'Missed',
    statusClass: 'text-danger',
    iconClass: 'text-danger'
  },
  {
    name: 'Silje Larsen',
    image: Image3,
    activity: 'Dog the quick brown',
    time: '10:23 PM',
    status: 'Delayed',
    statusClass: 'text-c-purple',
    iconClass: 'text-c-purple'
  },
  {
    name: 'Ida Jorgensen',
    image: Image1,
    activity: 'The quick brown fox',
    time: '4:28 PM',
    status: 'Done',
    statusClass: 'text-success',
    iconClass: 'text-success'
  }
];

// ==============================|| WIDGETS TABLES - USERACTIVITY TABLE ||============================== //

export default function UserActivityTable() {
  return (
    <MainCard title="User Activity" bodyClassName="pb-0">
      <Table responsive hover>
        <thead>
          <tr>
            <th>USER</th>
            <th>Activity</th>
            <th>Time</th>
            <th>Status</th>
            <th className="text-end"></th>
          </tr>
        </thead>
        <tbody>
          {userActivities.map((user, index) => (
            <tr key={index}>
              <td>
                <Stack gap={2} direction="horizontal">
                  <Image src={user.image} width="40px" />
                </Stack>
              </td>
              <td>
                <h6>{user.activity}</h6>
              </td>
              <td>
                <h6>{user.time}</h6>
              </td>
              <td className={user.statusClass}>{user.status}</td>
              <td className="text-end">
                <i className={`fas fa-circle f-10 ${user.iconClass}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}
