import { useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| MODAL - TOOLTIPS IN A MODAL ||============================== //

export default function TooltipsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <MainCard title="Tooltips in a modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Tooltips in a Button</Modal.Title>
          <p>
            This <Button variant="secondary">button</Button>
            triggers a popover on click.
          </p>
          <hr />
          <Modal.Title>Tooltip in a modal</Modal.Title>
          <p>
            <Link to="#">This link</Link> and <Link to="#">that link</Link> have tooltips on hover
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal>

      <Button onClick={handleShow}>Launch demo modal</Button>
    </MainCard>
  );
}
