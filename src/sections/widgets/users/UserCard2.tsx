// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/widget/dashborad-1.jpg';
import Avatar2 from 'assets/images/widget/dashborad-2.jpg';
import Avatar3 from 'assets/images/user/avatar-1.jpg';
import Avatar4 from 'assets/images/user/avatar-2.jpg';
import Avatar5 from 'assets/images/user/avatar-3.jpg';
import Emoticons from 'assets/images/widget/emoticon.jpg';

// =============================|| USERS - CARD 2 ||============================== //

export default function UserCard2() {
  return (
    <>
      <Col md={6} xl={4}>
        <MainCard className="dashboard-kit widget-focus">
          <h5>Dashboard UI Kit</h5>
          <span className="text-muted">By Creative Studio Form</span>
          <Image src={Avatar1} className="card-img mt-4" />

          <Nav className="design-image">
            <Nav.Item>
              <Button className="btn bg-muted">
                <i className="fa fa-plus f-14 mr-0" />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Image src={Avatar3} width={40} />
            </Nav.Item>

            <Nav.Item>
              <Image src={Avatar4} width={40} />
            </Nav.Item>

            <Nav.Item>
              <Image src={Avatar5} width={40} />
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                +63
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="dashboard-kit widget-focus">
          <h5>Post with emoticons</h5>
          <span className="text-muted">May 12, 2017</span>
          <Image src={Emoticons} className="card-img mt-4 rounded" />

          <Nav className="design-image">
            <Nav.Item className="m-r-25">
              <i className="far fa-smile f-26 text-success m-r-10" /> 235
            </Nav.Item>
            <Nav.Item className="m-r-25">
              <i className="far fa-smile f-26 m-r-10 " /> 95
            </Nav.Item>

            <Nav.Item className="m-r-25">
              <i className="far fa-smile f-26 text-danger m-r-10" /> 18
            </Nav.Item>
          </Nav>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="widget-focus" bodyClassName="p-0">
          <Image src={Avatar2} className="card-img" />
          <div className="ux-designer">
            <Button className="btn btn-primary">
              <i className="fa fa-plus f-14 me-0" />
            </Button>
            <h5>Alma Christensen</h5>
            <span>UX Designer</span>
          </div>
        </MainCard>
      </Col>
    </>
  );
}
