import { Dispatch, SetStateAction, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import { addressData } from '@/data/invoice';

interface AddressModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handlerAddress: (a: any) => void;
}

// ================================|| ADDRESS MODAL ||============================== //

export default function AddressModal({ open, setOpen, handlerAddress }: AddressModalProps) {
  const [collapseShow, setCollapseShow] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(0);

  const toggleCollapse = () => setCollapseShow((prev) => !prev);

  function closeAddressModal() {
    setOpen(false);
  }

  const handleAddressSelect = (index: number, address: any) => {
    setSelectedAddress(index);
    handlerAddress(address);
  };

  const formTitleData = [
    ['First Name', 'Enter your first name', 'text'],
    ['Last Name', 'Enter your last name', 'text'],
    ['Email Id', 'Enter Email id', 'email'],
    ['Date of Birth', 'Enter the date of birth', 'date'],
    ['Phone number', 'Enter Phone number', 'text'],
    ['City', 'Enter City name', 'text']
  ];

  return (
    <Modal show={open} onHide={closeAddressModal} centered size="lg" scrollable>
      <Modal.Header>
        <Stack direction="horizontal" className="w-100 align-items-center justify-content-between">
          <Stack className="justify-content-center">
            <Collapse in={collapseShow}>
              <h5 className="mb-0">Select address</h5>
            </Collapse>
            <Collapse in={!collapseShow}>
              <h5 className="mb-0">Add New address</h5>
            </Collapse>
          </Stack>
          <Stack direction="horizontal" className="align-items-center">
            {collapseShow && (
              <OverlayTrigger placement="top" overlay={<Tooltip>Add New</Tooltip>}>
                <Button variant="link-secondary" className="avatar avatar-s" onClick={toggleCollapse}>
                  <i className="ti ti-plus f-20" />
                </Button>
              </OverlayTrigger>
            )}
            <OverlayTrigger placement="top" overlay={<Tooltip>Close</Tooltip>}>
              <Button variant="link-danger" className="avatar avatar-s" onClick={closeAddressModal}>
                <i className="ti ti-x f-20" />
              </Button>
            </OverlayTrigger>
          </Stack>
        </Stack>
      </Modal.Header>

      <Modal.Body>
        <Collapse in={collapseShow}>
          <div className="address-check-block">
            {addressData.map((address, index) => (
              <div key={index} className="address-check border rounded p-3 mb-3" onClick={() => handleAddressSelect(index, address)}>
                <Form.Check>
                  <Form.Check.Input
                    type="radio"
                    name="address"
                    id={`address-${index}`}
                    checked={selectedAddress === index}
                    onChange={() => handleAddressSelect(index, address)}
                  />
                  <Form.Check.Label className="w-100" htmlFor={`address-${index}`}>
                    <h6 className="mb-1 d-block f-w-600">{address.name}</h6>
                    <span className="address-details d-block mb-2 text-break">{address.address}</span>
                    <Row className="align-items-start align-items-md-center justify-content-between">
                      <Col xs={12} lg={7}>
                        <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1 gap-sm-2">
                          <span className="mb-0 text-break fw-medium text-nowrap">{address.phone}</span>
                          <span className="mb-0 text-break">{address.email}</span>
                        </div>
                      </Col>
                      <Col xs={12} lg={5} className="text-lg-end mt-2 mt-lg-0">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap gap-2">
                          <a href="#" className="avatar avatar-s text-danger flex-shrink-0">
                            <i className="ti ti-trash f-20" />
                          </a>
                          <Button
                            variant="outline-primary"
                            className="btn-sm flex-shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddressSelect(index, address);
                            }}
                          >
                            Deliver to this address
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form.Check.Label>
                </Form.Check>
              </div>
            ))}
          </div>
        </Collapse>

        <Collapse in={!collapseShow}>
          <Form>
            <Row className="mb-3 align-items-center">
              <Form.Label column lg={4}>
                Address Type:
                <small className="text-muted d-block">Enter Add Type</small>
              </Form.Label>
              <Col lg={8}>
                <Form.Check inline type="radio" id="addtypecheck1" label="Home (All day Delivery)" name="addressType" defaultChecked />
                <Form.Check inline type="radio" id="addtypecheck2" label="Work (Between 10 AM to 5 PM)" name="addressType" />
              </Col>
            </Row>

            {formTitleData.map(([label, hint, type], index) => (
              <Row className="mb-3" key={index}>
                <Form.Label column lg={4}>
                  {label}:<small className="text-muted d-block">{hint}</small>
                </Form.Label>
                <Col lg={8}>
                  <Form.Control type={type as string} />
                </Col>
              </Row>
            ))}

            <Form.Check
              className="mb-3"
              type="checkbox"
              id="checkaddres"
              label="Save this new address for future shipping"
              defaultChecked
            />

            <Stack direction="horizontal" gap={1} className="justify-content-end btn-page mt-4">
              <Button variant="outline-secondary" type="button" onClick={toggleCollapse}>
                Cancel
              </Button>
              <Button variant="primary" onClick={closeAddressModal}>
                Save & Deliver to this Address
              </Button>
            </Stack>
          </Form>
        </Collapse>
      </Modal.Body>

      <Collapse in={collapseShow}>
        <Modal.Footer className="justify-content-between">
          <ul className="list-inline mb-0 me-auto">
            <li className="list-inline-item align-bottom">
              <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                <Button variant="link-danger" className="avatar avatar-s p-0">
                  <i className="ti ti-trash f-20" />
                </Button>
              </OverlayTrigger>
            </li>
          </ul>
          <Stack direction="horizontal" gap={1}>
            <Button variant="link-danger" onClick={closeAddressModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={closeAddressModal}>
              Save
            </Button>
          </Stack>
        </Modal.Footer>
      </Collapse>
    </Modal>
  );
}
