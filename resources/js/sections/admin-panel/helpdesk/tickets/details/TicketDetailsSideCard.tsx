// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import { listData } from '@/data/helpdesk';

// ==============================|| TICKET DETAILS - SIDE CARD ||============================== //

export default function TicketDetailsSideCard() {
  return (
    <MainCard title="Ticket Details" bodyClassName="p-0">
      <Alert variant="success" className="text-center text-uppercase m-3">
        <i className="ph ph-seal-check align-middle me-2"></i>Verified Purchase
      </Alert>

      <div className="select-block p-3">
        <div className="mb-2">
          <Form.Select className="col-sm-12">
            <option>Open</option>
            <option>Close</option>
            <option>Closed Forever</option>
          </Form.Select>
        </div>

        <div className="mb-2">
          <Form.Select className="col-sm-12">
            <option value="avatar-5">Jack Pall</option>
            <option value="avatar-4">Liza Mac</option>
            <option value="avatar-3">Lina Hop</option>
            <option value="avatar-2">Sam Hunk</option>
            <option value="avatar-1">Jhon White</option>
          </Form.Select>
        </div>

        <div className="mb-2">
          <Form.Select className="col-sm-12">
            <option value="prod-1">Able Admin</option>
            <option value="prod-2">Guru Dash</option>
            <option value="prod-3">Able Pro</option>
            <option value="prod-4">Able Dash</option>
            <option value="prod-5">Dash Able</option>
          </Form.Select>
        </div>
      </div>
      <ListGroup variant="flush">
        {listData.map((item, index) => (
          <ListGroup.Item key={index}>
            <Stack direction="horizontal" className="align-items-center">
              <div className="flex-shrink-0">
                <label className="mb-0 wid-100">{item.primary}</label>
              </div>
              <div className="flex-grow-1 ms-3">
                <p className="mb-0">
                  {item.icon && <i className={`${item.icon} me-1 align-middle f-16`} />}
                  {item.avatar && item.avatar.src && <Image src={item.avatar.src} alt={item.avatar.alt} className="wid-20 rounded me-1" />}
                  <a className="link-secondary">{item.secondaryText}</a>
                </p>
              </div>
            </Stack>
          </ListGroup.Item>
        ))}
        <ListGroup.Item className="py-3">
          <Button variant="light-warning" size="sm" className="me-2">
            <div className="d-flex align-items-center">
              <i className="ph ph-thumbs-up align-middle me-2" />
              Make Private
            </div>
          </Button>
          <Button variant="light-danger" size="sm">
            <div className="d-flex align-items-center">
              <i className="ph ph-trash me-1" />
              Delete
            </div>
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </MainCard>
  );
}
