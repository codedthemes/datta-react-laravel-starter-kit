// react-bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// =============================|| MESSAGE - MESSAGE INPUT ||============================== //

export default function MessageInput() {
  return (
    <Card.Footer className="border-top py-2 px-3 position-absolute bottom-0 start-0 end-0">
      <div className="input-group align-items-center">
        <ul className="list-inline me-auto mb-0">
          <li className="list-inline-item">
            <a href="#" className="avatar avatar-xs btn-link-secondary">
              <i className="ti ti-paperclip f-18" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="avatar avatar-xs btn-link-secondary">
              <i className="ti ti-photo f-18" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="avatar avatar-xs btn-link-secondary">
              <i className="ti ti-mood-smile f-18" />
            </a>
          </li>
        </ul>
        <Form.Control type="text" className="shadow-none border-0 bg-transparent" placeholder="Type Link Message" />
        <ul className="list-inline ms-auto mb-0">
          <li className="list-inline-item">
            <a href="#" className="avatar avatar-s rounded-circlen btn btn-primary">
              <i className="ti ti-send f-18" />
            </a>
          </li>
        </ul>
      </div>
    </Card.Footer>
  );
}
