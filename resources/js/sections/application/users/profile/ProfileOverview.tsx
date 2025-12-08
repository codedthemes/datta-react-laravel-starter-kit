// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from '@/components/MainCard';

interface Education {
  year: string;
  title: string;
  degree: string;
  institution: string;
}

interface Employment {
  year: string;
  position: string;
  level: string;
  company: string;
  description?: string;
}

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

// personal data
const personalDetails = [
  { label: 'Full Name', value: 'Akshay Handge' },
  { label: "Father's Name", value: 'Mr. Deepak Handge' },
  { label: 'Address', value: 'Street 110-B Kalani Bag, Dewas, M.P. INDIA' },
  { label: 'Zip Code', value: '12345' },
  { label: 'Phone', value: '+0 123456789 , +0 123456789' },
  { label: 'Email', value: 'support@example.com' },
  { label: 'Website', value: 'http://example.com' }
];

// education data
const educationData: Education[] = [
  {
    year: '2014-2017',
    title: 'Master Degree',
    degree: 'Master Degree in Computer Application',
    institution: 'University of Oxford, England'
  },
  {
    year: '2011-2013',
    title: 'Bachelor',
    degree: 'Bachelor Degree in Computer Engineering',
    institution: 'Imperial College London'
  },
  {
    year: '2009-2011',
    title: 'School',
    degree: 'Higher Secondary Education',
    institution: 'School of London, England'
  }
];

// employment data
const employmentData: Employment[] = [
  {
    year: 'Current',
    level: 'Senior',
    position: 'Senior UI/UX Designer',
    company: 'Microsoft, TX, USA',
    description:
      'Perform tasks related to project management with a 100+ team under my observation. Team management is a key role in this company.'
  },
  {
    year: '2017-2019',
    level: 'Junior',
    position: 'Trainee cum Project Manager',
    company: 'Microsoft, TX, USA'
  }
];

// skills data
const skillsData: Skill[] = [
  { name: 'Web Designer', percentage: 70, color: 'primary' },
  { name: 'Graphic Designer', percentage: 80, color: 'success' },
  { name: 'UX Researcher', percentage: 85, color: 'success' },
  { name: 'HTML', percentage: 45, color: 'warning' },
  { name: 'WordPress', percentage: 25, color: 'danger' },
  { name: 'PHP', percentage: 65, color: 'primary' }
];

// ==============================|| PROFILE - PROFILE OVERVIEW ||============================== //

export default function ProfileOverview() {
  return (
    <>
      <Alert variant="danger" dismissible>
        <h5 className="alert-heading d-flex align-items-center">
          <i className="ph ph-warning-circle f-24 me-2" aria-hidden="true" />
          Email Verification
        </h5>
        <p className="mb-0">
          Your email is not confirmed. Please check your inbox.{' '}
          <a href="#!" className="text-danger" aria-label="Resend email confirmation link">
            Resend confirmation
          </a>
        </p>
      </Alert>

      {/* About Me */}
      <MainCard
        title={
          <h4 className="mb-0 f-w-500">
            <i className="ph ph-user align-bottom text-primary f-20" aria-hidden="true" />
            <span className="ps-2"> About me</span>
          </h4>
        }
      >
        <p>
          Hello, I’m Akshay Handge, a Creative Graphic Designer & User Experience Designer. I create digital products to make them more
          beautiful and usable. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
        </p>

        {/* Personal Details */}
        <h5 className="mt-4 f-w-500 pb-3 border-bottom">Personal Details</h5>
        <Table responsive borderless className="mb-0">
          <tbody>
            {personalDetails.map(({ label, value }, index) => (
              <tr key={index}>
                <td>{label}</td>
                <td>:</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Education Section */}
        <h5 className="mt-3 mb-4 pb-3 f-w-500 border-bottom">Education</h5>
        {educationData.map((item, index) => (
          <Row key={index} className="align-items-center g-3 user-details mb-sm-3 mb-4">
            <Col sm={3}>
              <h5>{item.year}</h5>
              <span>{item.title}</span>
            </Col>
            <Col sm={9} className="border-start">
              <h6>{item.degree}</h6>
              <p className="mb-0">{item.institution}</p>
            </Col>
          </Row>
        ))}

        {/* Employment Section */}
        <h5 className="mt-4 mb-4 pb-3 f-w-500 border-bottom">Employment</h5>
        {employmentData.map((item, index) => (
          <Row key={index} className={`align-items-center g-3 user-details ${index !== employmentData.length - 1 ? 'mb-sm-3 mb-4' : ''}`}>
            <Col sm={3}>
              <h5>{item.year}</h5>
              <span className="text-muted">{item.level}</span>
            </Col>
            <Col sm={9} className="border-start">
              <h6>{item.position}</h6>
              {item.description && <p className="mb-1">{item.description}</p>}
              <span className="text-muted">{item.company}</span>
            </Col>
          </Row>
        ))}

        {/* Skills */}
        <h5 className="mt-4 mb-4 pb-3 f-w-500 border-bottom">Skills</h5>
        <Row className="align-items-center gy-3 gx-5">
          {skillsData.map((skill, index) => (
            <Col md={6} key={index}>
              <h6 className="mb-2 text-muted">{skill.name}</h6>
              <Row className="align-items-center">
                <Col>
                  <ProgressBar now={skill.percentage} variant={skill.color} style={{ height: '8px' }} />
                </Col>
                <Col xs="auto">
                  <h6 className="mb-0">{skill.percentage}%</h6>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </MainCard>
    </>
  );
}
