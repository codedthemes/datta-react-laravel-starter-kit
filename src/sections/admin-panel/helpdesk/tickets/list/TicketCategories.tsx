import { Link } from 'react-router-dom';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar from 'assets/images/admin/p1.jpg';
import Avatar1 from 'assets/images/admin/p2.jpg';
import Avatar2 from 'assets/images/admin/p3.jpg';
import Avatar3 from 'assets/images/admin/p4.jpg';
import Avatar4 from 'assets/images/admin/p5.jpg';

// =============================|| TICKET - CATEGORIES ||============================== //

export default function TicketCategories() {
  return (
    <MainCard title="Ticket Categories" bodyClassName="p-0">
      <ListGroup className="list-group-flush pb-2">
        <ListGroup.Item>
          <div className="d-inline-block">
            <Image src={Avatar} alt="" className="wid-20 rounded me-1 " />
            <Link to="#" className="link-secondary">
              Piaf able
            </Link>
          </div>
          <div className="float-end">
            <Badge
              bg="light-danger"
              className="rounded-circle me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="tooltip on top"
            >
              1
            </Badge>
            <Badge
              bg="light-secondary"
              className="rounded-circle me-0"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="tooltip on top"
            >
              3
            </Badge>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-inline-block">
            <Image src={Avatar1} alt="" className="wid-20 rounded me-1 " />
            <Link to="#" className="link-secondary">
              Pro able
            </Link>
          </div>
          <div className="float-end">
            <Badge
              bg="light-secondary"
              className="rounded-circle me-0"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="tooltip on top"
            >
              3
            </Badge>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-inline-block">
            <Image src={Avatar2} alt="" className="wid-20 rounded me-1 " />
            <Link to="#" className="link-secondary">
              CRM admin
            </Link>
          </div>
          <div className="float-end">
            <Badge
              bg="light-danger"
              className="rounded-circle me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="tooltip on top"
            >
              1
            </Badge>
            <Badge
              bg="light-secondary"
              className="rounded-circle me-0"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="tooltip on top"
            >
              3
            </Badge>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-inline-block">
            <Image src={Avatar3} alt="" className="wid-20 rounded me-1 " />
            <Link to="#" className="link-secondary">
              Alpha pro
            </Link>
          </div>
          <div className="float-end">
            <Badge
              bg="light-secondary"
              className="rounded-circle me-0"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="tooltip on top"
            >
              3
            </Badge>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-inline-block">
            <Image src={Avatar4} alt="" className="wid-20 rounded me-1 " />
            <Link to="#" className="link-secondary">
              Carbon able
            </Link>
          </div>
          <div className="float-end">
            <Badge
              bg="light-secondary"
              className="rounded-circle me-0"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="tooltip on top"
            >
              3
            </Badge>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </MainCard>
  );
}
