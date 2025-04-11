import { ChangeEvent, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { PencilSimpleLine } from 'phosphor-react';

// ==============================|| ADMIN PANEL - INVOICE EDIT ||============================== //

export default function InvoiceEdit() {
  const handleDateTimeChange = (e: ChangeEvent<HTMLInputElement>) => setDateTime(e.target.value);

  const [dateTime, setDateTime] = useState('2022-01-05T11:42:13.510');
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MainCard>
      <Row className="g-3">
        <Col xl={3} sm={6}>
          <div>
            <Form.Label htmlFor="basic-url">Invoice id</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control id="exampleFormControlSelect1" placeholder="8795646525451" aria-describedby="basic-addon3" />
            </InputGroup>
          </div>
        </Col>
        <Col xl={3} sm={6}>
          <div>
            <Form.Label htmlFor="basic-url">Status</Form.Label>
            <InputGroup className="mb-3">
              <Form.Select id="basic-url" aria-describedby="basic-addon3">
                <option>PleaseSelect</option>
                <option selected>Paid</option>
                <option>UnPaid</option>
                <option>PartialPaid</option>
              </Form.Select>
            </InputGroup>
          </div>
        </Col>
        <Col xl={3} sm={6}>
          <div>
            <Form.Label htmlFor="basic-url">Start Date</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
            </InputGroup>
          </div>
        </Col>
        <Col xl={3} sm={6}>
          <div>
            <Form.Label htmlFor="basic-url">Due Date</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="datetime-local"
                placeholder="dd-mm-yyyy --:--"
                value="2022-02-06T11:42:13.510"
                onChange={handleDateTimeChange}
              />
            </InputGroup>
          </div>
        </Col>
        <Col xl={6}>
          <div className="border rounded p-3 h-100">
            <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
              <h6 className="mb-0">From:</h6>
              <Button variant="light-secondary" className="btn-sm" onClick={handleShow} aria-expanded={open}>
                <PencilSimpleLine size={32} className="me-2" />
                Change
              </Button>
              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header className="justify-content-between">
                  <Modal.Title>Select address</Modal.Title>
                  <Stack direction="horizontal" className="align-items-center justify-content-end">
                    <div>
                      <Button className="btn-link-secondary" onClick={() => setOpen(!open)}>
                        <i className="ti ti-plus f-20" />
                      </Button>
                    </div>

                    <Button className="btn-link-danger" onClick={handleClose}>
                      <i className="ti ti-x f-20" />
                    </Button>
                  </Stack>
                </Modal.Header>
                <Modal.Body>
                  <div className="collapse multi-collapse show">
                    <div className="address-check-block">
                      <div className="address-check border rounded p-3">
                        <Form.Group className="form-check">
                          <Form.Check type="radio" />
                          <FormCheckLabel className="w-1">
                            <h6 className="mb-0 d-block">
                              Ian Carpenter<small>(Home)</small>
                            </h6>
                            <span className="address-details">
                              1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO
                            </span>
                            <Row className="align-items-center justify-content-between">
                              <Col xs={6}>
                                <span className="mb-0">+91 1234567890</span>
                              </Col>
                              <Col xs={6} className="text-end">
                                <Stack direction="horizontal" className="align-items-center justify-content-end">
                                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1">
                                    <i className="ti ti-trash f-20" />
                                  </Button>
                                  <Button variant="outline-primary" className="btn-sm">
                                    Deliver to this address
                                  </Button>
                                </Stack>
                              </Col>
                            </Row>
                          </FormCheckLabel>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="address-check-block">
                      <div className="address-check border rounded p-3">
                        <Form.Group className="form-check">
                          <Form.Check type="radio" />
                          <FormCheckLabel className="w-1">
                            <h6 className="mb-0 d-block">
                              Ian Carpenter<small>(Home)</small>
                            </h6>
                            <span className="address-details">
                              1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO
                            </span>
                            <Row className="align-items-center justify-content-between">
                              <Col xs={6}>
                                <span className="mb-0">+91 1234567890</span>
                              </Col>
                              <Col xs={6} className="text-end">
                                <Stack direction="horizontal" className="address-btns align-items-center justify-content-end">
                                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1">
                                    <i className="ti ti-trash f-20" />
                                  </Button>
                                  <Button variant="outline-primary" className="btn-sm">
                                    Deliver to this address
                                  </Button>
                                </Stack>
                              </Col>
                            </Row>
                          </FormCheckLabel>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="address-check-block">
                      <div className="address-check border rounded p-3">
                        <Form.Group className="form-check">
                          <Form.Check type="radio" />
                          <FormCheckLabel className="w-1">
                            <h6 className="mb-0 d-block">
                              Ian Carpenter<small>(Home)</small>
                            </h6>
                            <span className="address-details">
                              1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO
                            </span>
                            <Row className="align-items-center justify-content-between">
                              <Col xs={6}>
                                <span className="mb-0">+91 1234567890</span>
                              </Col>
                              <Col xs={6} className="text-end">
                                <Stack direction="horizontal" className="address-btns align-items-center justify-content-end">
                                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1">
                                    <i className="ti ti-trash f-20" />
                                  </Button>
                                  <Button variant="outline-primary" className="btn-sm">
                                    Deliver to this address
                                  </Button>
                                </Stack>
                              </Col>
                            </Row>
                          </FormCheckLabel>
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-between multi-collapse collapse show">
                  <Button className="btn-link-danger" onClick={handleClose}>
                    <i className="ti ti-trash f-20" />
                  </Button>
                  <div className="flex-grow-1 text-end">
                    <Button className="btn-link-danger" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>
            </Stack>
            <h5>Garcia-Cameron and Sons</h5>
            <p className="mb-0">8534 Saunders Hill Apt. 583</p>
            <p className="mb-0">(970) 982-3353</p>
            <p className="mb-0">brandon07@pierce.com</p>
          </div>
        </Col>
        <Col xl={6}>
          <div className="border rounded p-3 h-100">
            <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
              <h6 className="mb-0">To:</h6>
              <Button variant="light-secondary" className="btn-sm" onClick={handleShow} aria-expanded={open}>
                <PencilSimpleLine size={32} className="me-2" />
                Change
              </Button>
              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header className="justify-content-between">
                  <Modal.Title>Select address</Modal.Title>
                  <Stack direction="horizontal" className="align-items-center justify-content-end">
                    <div>
                      <Button className="btn-link-secondary" onClick={() => setOpen(!open)}>
                        <i className="ti ti-plus f-20" />
                      </Button>
                    </div>

                    <Button className="btn-link-danger" onClick={handleClose}>
                      <i className="ti ti-x f-20" />
                    </Button>
                  </Stack>
                </Modal.Header>
                <Modal.Body>
                  <div className="collapse multi-collapse show">
                    <div className="address-check-block">
                      <div className="address-check border rounded p-3">
                        <Form.Group className="form-check">
                          <Form.Check type="radio" />
                          <FormCheckLabel className="w-1">
                            <h6 className="mb-0 d-block">
                              Ian Carpenter<small>(Home)</small>
                            </h6>
                            <span className="address-details">
                              1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO
                            </span>
                            <Row className="align-items-center justify-content-between">
                              <Col xs={6}>
                                <span className="mb-0">+91 1234567890</span>
                              </Col>
                              <Col xs={6} className="text-end">
                                <Stack direction="horizontal" className="align-items-center justify-content-end">
                                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1">
                                    <i className="ti ti-trash f-20" />
                                  </Button>
                                  <Button variant="outline-primary" className="btn-sm">
                                    Deliver to this address
                                  </Button>
                                </Stack>
                              </Col>
                            </Row>
                          </FormCheckLabel>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="address-check-block">
                      <div className="address-check border rounded p-3">
                        <Form.Group className="form-check">
                          <Form.Check type="radio" />
                          <FormCheckLabel className="w-1">
                            <h6 className="mb-0 d-block">
                              Ian Carpenter<small>(Home)</small>
                            </h6>
                            <span className="address-details">
                              1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO
                            </span>
                            <Row className="align-items-center justify-content-between">
                              <Col xs={6}>
                                <span className="mb-0">+91 1234567890</span>
                              </Col>
                              <Col xs={6} className="text-end">
                                <Stack direction="horizontal" className="address-btns align-items-center justify-content-end">
                                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1">
                                    <i className="ti ti-trash f-20" />
                                  </Button>
                                  <Button variant="outline-primary" className="btn-sm">
                                    Deliver to this address
                                  </Button>
                                </Stack>
                              </Col>
                            </Row>
                          </FormCheckLabel>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="address-check-block">
                      <div className="address-check border rounded p-3">
                        <Form.Group className="form-check">
                          <Form.Check type="radio" />
                          <FormCheckLabel className="w-1">
                            <h6 className="mb-0 d-block">
                              Ian Carpenter<small>(Home)</small>
                            </h6>
                            <span className="address-details">
                              1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO
                            </span>
                            <Row className="align-items-center justify-content-between">
                              <Col xs={6}>
                                <span className="mb-0">+91 1234567890</span>
                              </Col>
                              <Col xs={6} className="text-end">
                                <Stack direction="horizontal" className="address-btns align-items-center justify-content-end">
                                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1">
                                    <i className="ti ti-trash f-20" />
                                  </Button>
                                  <Button variant="outline-primary" className="btn-sm">
                                    Deliver to this address
                                  </Button>
                                </Stack>
                              </Col>
                            </Row>
                          </FormCheckLabel>
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-between multi-collapse collapse show">
                  <Button className="btn-link-danger" onClick={handleClose}>
                    <i className="ti ti-trash f-20" />
                  </Button>
                  <div className="flex-grow-1 text-end">
                    <Button className="btn-link-danger" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>
            </Stack>
            <h5>Belle J. Richter</h5>
            <p className="mb-0">1300 Mine RoadQuemado, NM 87829</p>
            <p className="mb-0">305-829-7809</p>
            <p className="mb-0">Belle@pierce.com</p>
          </div>
        </Col>
        <Col xs={12}>
          <h5>Detail</h5>
          <Table responsive hover className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <span className="text-danger">*</span> NAME
                </th>
                <th>
                  <span className="text-danger">*</span>DESCRIPTION
                </th>
                <th>
                  <span className="text-danger">*</span>QTY
                </th>
                <th>
                  <span className="text-danger">*</span>PRICE
                </th>
                <th>TOTAL AMOUNT</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Form.Control
                    id="basic-url"
                    type="text"
                    placeholder="Name"
                    value="Apple Series 4 GPS A38 MM Space"
                    aria-describedby="basic-addon3"
                  />
                </td>
                <td>
                  <Form.Control
                    id="basic-url"
                    type="text"
                    placeholder="Description"
                    value="Apple Watch SE Smartwatch"
                    aria-describedby="basic-addon3"
                  />
                </td>
                <td>
                  <Form.Control id="basic-url" type="number" placeholder="Qty" value="3" aria-describedby="basic-addon3" />
                </td>
                <td>
                  <Form.Control id="basic-url" type="number" placeholder="Price" value="275.00" aria-describedby="basic-addon3" />
                </td>
                <td>₹825.00</td>
                <td>
                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1 btn btn-primary">
                    <i className="ti ti-trash f-20" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Form.Control
                    id="basic-url"
                    type="text"
                    placeholder="Name"
                    value="Boat On-Ear Wireless"
                    aria-describedby="basic-addon3"
                  />
                </td>
                <td>
                  <Form.Control
                    id="basic-url"
                    type="text"
                    placeholder="Description"
                    value="Mic Bluetooth 4.2, Rockerz 450R"
                    aria-describedby="basic-addon3"
                  />
                </td>
                <td>
                  <Form.Control id="basic-url" type="number" placeholder="Qty" value="45" aria-describedby="basic-addon3" />
                </td>
                <td>
                  <Form.Control id="basic-url" type="number" placeholder="Price" value="81.99" aria-describedby="basic-addon3" />
                </td>
                <td>₹3689.55</td>
                <td>
                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1 btn btn-primary">
                    <i className="ti ti-trash f-20" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Form.Control
                    id="basic-url"
                    type="text"
                    placeholder="Name"
                    value="Fitbit MX30 Smart Watch"
                    aria-describedby="basic-addon3"
                  />
                </td>
                <td>
                  <Form.Control
                    id="basic-url"
                    type="text"
                    placeholder="Description"
                    value="(MX30- waterproof) watch"
                    aria-describedby="basic-addon3"
                  />
                </td>
                <td>
                  <Form.Control id="basic-url" type="number" placeholder="Qty" value="70" aria-describedby="basic-addon3" />
                </td>
                <td>
                  <Form.Control id="basic-url" type="number" placeholder="Price" value="85.00" aria-describedby="basic-addon3" />
                </td>
                <td>₹5950.00</td>
                <td>
                  <Button className="avatar-s btn-link-danger btn-pc-default mx-1 btn btn-primary">
                    <i className="ti ti-trash f-20" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="text-start">
            <hr className="mb-4 mt-0 border-secondary border-opacity-50" />
            <Button variant="light-primary">
              <Stack direction="horizontal" className="align-items-center" gap={2}>
                <i className="ti ti-plus" />
                Add new item
              </Stack>
            </Button>
          </div>
        </Col>
        <Col xs={12}>
          <div className="invoice-total ms-auto">
            <Row>
              <Col xs={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="basic-url">Discount(%)</Form.Label>

                  <Form.Control id="basic-url" value="0.5" aria-describedby="basic-addon3" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="basic-url">Taxes(%)</Form.Label>

                  <Form.Control id="basic-url" value="0.2" aria-describedby="basic-addon3" />
                </div>
              </Col>
              <Col xs={6}>
                <p className="text-muted mb-1 text-start">Sub Total :</p>
              </Col>
              <Col xs={6}>
                <p className="f-w-600 mb-1 text-end">$20.00</p>
              </Col>
              <Col xs={6}>
                <p className="text-muted mb-1 text-start">Discount :</p>
              </Col>
              <Col xs={6}>
                <p className="f-w-600 mb-1 text-end text-success">$10.00</p>
              </Col>
              <Col xs={6}>
                <p className="text-muted mb-1 text-start">Taxes :</p>
              </Col>
              <Col xs={6}>
                <p className="f-w-600 mb-1 text-end">$5.000</p>
              </Col>
              <Col xs={6}>
                <p className="f-w-600 mb-1 text-start">Grand Total :</p>
              </Col>
              <Col xs={6}>
                <p className="f-w-600 mb-1 text-end">$35.00</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12}>
          <div className="mb-0">
            <Form.Label htmlFor="basic-url">Note </Form.Label>
            <Form.Control as="textarea" placeholder="Note" rows={3} />
          </div>
        </Col>
        <Col xs={12}>
          <Row className="align-items-end justify-content-between g-3">
            <Col sm="auto">
              <Form.Label>Set Currency*</Form.Label>
              <Form.Select className="w-auto">
                <option>USD (US Dollar)</option>
                <option>INR (Rupes)</option>
              </Form.Select>
            </Col>
            <Col sm="auto" className="btn-page">
              <Button variant="outline-secondary" as="a" href="/invoice/details">
                Preview
              </Button>
              <Button>Update & Send</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </MainCard>
  );
}
