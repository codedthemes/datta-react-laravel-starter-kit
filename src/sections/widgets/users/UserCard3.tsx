// react-bootstrap
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';

// =============================|| USERS - CARD 3 ||============================== //

export default function UserCard3() {
  return (
    <>
      <Col md={6} xl={4}>
        <MainCard
          className="bg-brand-color-2 "
          title={<h5 className="text-white ">Project Design Sprint</h5>}
          subheader={<p className="d-block f-w-300 text-white card-text">11 MAY 10:35</p>}
        >
          <p className="text-white f-w-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <p className="text-white f-w-300">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>

          <Nav className="design-image">
            <Nav.Item>
              <Button className="rounded-pill bg-white border-0">
                <i className="fas fa-plus f-14 me-0 text-light " />
              </Button>
            </Nav.Item>
            <Nav.Item className="ms-1 ">
              <Image src={Avatar1} width={40} className="rounded-pill" />
            </Nav.Item>

            <Nav.Item className="ms-1">
              <Image src={Avatar2} width={40} className="rounded-pill" />
            </Nav.Item>

            <Nav.Item className="ms-1">
              <Image src={Avatar3} width={40} className="rounded-pill" />
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="text-white">+63</Nav.Link>
            </Nav.Item>
          </Nav>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <Row className="align-items-center justify-between-center">
            <Col xs="auto">
              <Image src={Avatar2} width={70} />
            </Col>
            <Col>
              <h5>Alma Christensen</h5>
              <span>UX Designer</span>
            </Col>
          </Row>
          <ul className="task-list">
            <li>
              <i className="task-icon bg-success" />
              <h6>
                Anton Knudsen<span className="float-end text-muted">14 MAY</span>
              </h6>
              <p className="text-muted">Lorem ipsum is dolorem…</p>
            </li>
            <li>
              <i className="task-icon bg-success" />
              <h6>
                Anton Knudsen<span className="float-end text-muted">14 MAY</span>
              </h6>
              <p className="text-muted">Lorem ipsum is dolorem…</p>
            </li>
            <li>
              <i className="task-icon bg-success" />
              <h6>
                Anton Knudsen<span className="float-end text-muted">14 MAY</span>
              </h6>
              <p className="text-muted">Lorem ipsum is dolorem…</p>
            </li>
          </ul>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard bodyClassName="p-0">
          <div className="text-center project-main">
            <Image src={Avatar3} />
            <h5 className="mt-4">Alma Christensen</h5>
            <span>UX Designer</span>
            <Row className="m-t-30">
              <Col xs={6} className=" p-r-0">
                <div className="d-grid">
                  <Button className="text-uppercase">add friend</Button>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-grid">
                  <Button className=" text-uppercase border " variant="outline-secondary">
                    message
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-top" />
          <div className="project-main">
            <Row className=" text-center">
              <Col md={4} xs={6}>
                <h6 className="text-muted">
                  <i className="fas fa-star m-r-5" /> 4.8
                </h6>
              </Col>
              <Col md={4} xs={6}>
                <h6 className="text-muted">
                  <i className="fas fa-map-marker-alt m-r-5" />
                  USA
                </h6>
              </Col>
              <Col md={4} xs={6}>
                <h6 className="text-muted m-0">
                  <i className="fas fa-file-alt m-r-5" /> 28 Task
                </h6>
              </Col>
            </Row>
          </div>
        </MainCard>
      </Col>
    </>
  );
}
