import { Link } from 'react-router-dom';

// react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// project-imports
import MainCard from 'components/MainCard';
import CourseListCard from 'sections/admin-panel/online-courses/courses/CourseListCard';

// assets
import Course1 from 'assets/images/admin/img-course-1.png';
import Course2 from 'assets/images/admin/img-course-2.png';
import Course3 from 'assets/images/admin/img-course-3.png';
import Course4 from 'assets/images/admin/img-course-4.png';
import Course5 from 'assets/images/admin/img-course-5.png';
import Course6 from 'assets/images/admin/img-course-6.png';
import Course7 from 'assets/images/admin/img-course-7.png';
import Course8 from 'assets/images/admin/img-course-8.png';

interface Course {
  name: string;
  rating: number;
  duration: number;
  teacher: string;
  student: number;
  badge?: boolean;
  img: string;
}

const courseList: Course[] = [
  {
    name: 'Bootstrap 5 Beginner Course',
    rating: 4.8,
    duration: 10,
    teacher: 'Jimmy Morris',
    student: 120,
    badge: true,
    img: Course1
  },
  {
    name: 'PHP Training Course',
    rating: 4.5,
    duration: 12,
    teacher: 'Nashid Martines',
    student: 50,
    img: Course2
  },
  {
    name: 'MERN Stack Training Course',
    rating: 3.9,
    duration: 5,
    teacher: 'Jack Ronan',
    student: 80,
    badge: true,
    img: Course3
  },
  {
    name: 'Python Training Course',
    rating: 4.5,
    duration: 9,
    teacher: 'Garrett Winters',
    student: 110,
    img: Course4
  },
  {
    name: 'Web Designing Course',
    rating: 4.2,
    duration: 8,
    teacher: 'Tiger Nixon',
    student: 85,
    img: Course5
  },
  {
    name: 'C Training Course',
    rating: 4.6,
    duration: 11,
    teacher: 'Airi Satou',
    student: 120,
    badge: true,
    img: Course6
  },
  {
    name: 'UI/UX Designing Course',
    rating: 3.6,
    duration: 10,
    teacher: 'Sonya Fros',
    student: 150,
    img: Course7
  },
  {
    name: 'SEO Training Course',
    rating: 4.3,
    duration: 12,
    teacher: 'Cedric Kelly',
    student: 60,
    img: Course8
  }
];

// ==============================|| COURSE - VIEW ||============================== //

export default function CourseViewPage() {
  return (
    <Row>
      <Col xs={12}>
        <MainCard
          title="Course"
          secondary={
            <Link className="btn btn-primary" to="/admin-panel/online-course/course/add">
              Add Courses
            </Link>
          }
        >
          <Row>
            {courseList.map((course, index) => (
              <Col sm={6} lg={4} xxl={3} key={index}>
                <CourseListCard {...course} />
              </Col>
            ))}
          </Row>
        </MainCard>
      </Col>
    </Row>
  );
}
