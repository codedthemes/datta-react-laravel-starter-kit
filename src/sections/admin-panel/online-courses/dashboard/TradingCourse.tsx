// react-bootstrap
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import BootstrapImg from 'assets/images/admin/img-bootstrap.svg';
import PhpImg from 'assets/images/admin/img-php.svg';
import UiUxImg from 'assets/images/admin/img-ux.svg';
import WebImg from 'assets/images/admin/img-web.svg';
import CImg from 'assets/images/admin/img-c.svg';

// course data
const courses = [
  { id: 1, title: 'Bootstrap 5 Beginner Course', img: BootstrapImg },
  { id: 2, title: 'PHP Training Course', img: PhpImg },
  { id: 3, title: 'UI/UX Training Course', img: UiUxImg },
  { id: 4, title: 'Web Designing Course', img: WebImg },
  { id: 5, title: 'C Training Course', img: CImg }
];

// ===============================|| DASHBOARD - TRADING COURSE ||============================== //

export default function TraningCourseCard() {
  return (
    <MainCard title="Trending Course" bodyClassName="px-0 py-2">
      <ListGroup variant="flush">
        {courses.map((course, index) => (
          <ListGroupItem key={index}>
            <Stack direction="horizontal" className="align-items-center">
              <Image src={course.img} alt="course-img" className="wid-40 rounded flex-shrink-0" />
              <div className="flex-grow-1 mx-3">{course.title}</div>
              <a href="#!" className="avatar avatar-s btn-link-secondary flex-shrink-0">
                <i className="ti ti-chevron-right f-20" />
              </a>
            </Stack>
          </ListGroupItem>
        ))}
      </ListGroup>
    </MainCard>
  );
}
