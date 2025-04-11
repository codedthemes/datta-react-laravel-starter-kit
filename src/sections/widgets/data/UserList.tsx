// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Image1 from 'assets/images/user/avatar-1.jpg';
import Image2 from 'assets/images/user/avatar-2.jpg';
import Image3 from 'assets/images/user/avatar-3.jpg';

const users = [
  { id: 1, name: 'Silje Larsen', role: 'Inventory System', img: Image1 },
  { id: 2, name: 'Storm Hansen', role: 'System Analytic', img: Image3 },
  { id: 3, name: 'Frida Thomsen', role: 'Last login 21/03/2017', img: Image1 },
  { id: 4, name: 'Aksel Andersen', role: 'Last seen 23/05/2017', img: Image2 }
];

// ==============================|| WIDGETS DATA - USER LIST ||============================== //

export default function WidgetDataUserList() {
  return (
    <MainCard title="User List" bodyClassName="p-4">
      {users.map((user) => (
        <div key={user.id} className="to-do-list mb-3">
          <Form.Check type="checkbox" className="checkbox-fade fade-in-default" defaultChecked>
            <Form.Check.Input type="checkbox" className="f-18 mt-2" />
            <Form.Check.Label className="check-task d-flex align-items-center">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image width={40} src={user.img} alt="chat-user" />
                </Col>
                <Col>
                  <h6>{user.name}</h6>
                  <p className="text-muted mb-0">{user.role}</p>
                </Col>
              </Row>
            </Form.Check.Label>
          </Form.Check>
        </div>
      ))}

      <Row className="mt-4">
        <Col xs={6}>
          <div className="d-grid">
            <Button variant="primary" className="text-uppercase">
              Add Friend
            </Button>
          </div>
        </Col>
        <Col xs={6}>
          <div className="d-grid">
            <Button variant="outline-secondary" className="text-uppercase border">
              Message
            </Button>
          </div>
        </Col>
      </Row>
    </MainCard>
  );
}
