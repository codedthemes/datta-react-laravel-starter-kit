// react-bootstrap
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Image1 from 'assets/images/user/avatar-1.jpg';
import Image2 from 'assets/images/user/avatar-2.jpg';
import Image3 from 'assets/images/user/avatar-3.jpg';

const recentUser = [
  {
    image: Image1,
    projectname: 'Isabella Christensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '11 MAY 12:56',
    iconClass: 'text-success m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  },
  {
    image: Image2,
    projectname: 'Mathilde Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '11 MAY 10:35',
    iconClass: 'text-danger m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  },
  {
    image: Image3,
    projectname: 'Karla Sorensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '9 MAY 17:38',
    iconClass: 'text-success m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Ida Jorgensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '19 MAY 12:56',
    iconClass: 'text-danger m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Albert Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '21 July 12:56',
    iconClass: 'text-success m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  }
];

// ==========================|| DEFAULT - RECENT USERS ||========================== //

export default function RecentUsers() {
  return (
    <MainCard title="Recent Users" className="Recent-Users" bodyClassName="pb-0">
      <Table responsive hover>
        <tbody>
          {recentUser.map((user, index) => (
            <tr key={index}>
              <td>
                <Image src={user.image} width="40px" />
              </td>
              <td>
                <h6>{user.projectname}</h6>
                <p className="mb-0">{user.desc}</p>
              </td>
              <td>
                <i className={`fas fa-circle f-10 ${user.iconClass}`} />
                {user.date}
              </td>
              <td>
                <Badge bg="brand-color-2" className="me-2 f-12">
                  {user.badge1}
                </Badge>
                <Badge bg="brand-color-1" className="me-2 f-12">
                  {user.badge2}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}
