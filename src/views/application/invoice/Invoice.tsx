// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import logoDark from 'assets/images/logo-dark.svg';

// ==============================|| INVOICE - INVOICE ||============================== //

export default function InvoicePage() {
  return (
    <Row>
      <Col md={12}>
        <Stack direction="horizontal" className="justify-content-center">
          <MainCard className="w-100">
            <Row>
              <Col md={8} className="invoice-contact">
                <div className="invoice-box">
                  <Table borderless responsive className="invoice-table">
                    <tbody>
                      <tr>
                        <td>
                          <a href="index.html">
                            <Image className="img-fluid" src={logoDark} alt="Dashboard-kit Logo" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Company name</td>
                      </tr>
                      <tr>
                        <td>
                          1065 Mandan Road, Columbia MO,
                          <br /> Missouri. (123)-65202
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="text-secondary" href="mailto:demo@gmail.com">
                            demo@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>+91 919-91-91-919</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>

            <Row className="invoice-info">
              <Col sm={4} className="invoice-client-info">
                <h6>Client Information :</h6>
                <h6 className="m-0">Josephin Villa</h6>
                <p className="m-0">1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p>
                <p className="m-0">(1234) - 567891</p>
                <p>
                  <a className="text-secondary" href="mailto:demo@gmail.com">
                    demo@gmail.com
                  </a>
                </p>
              </Col>
              <Col sm={4}>
                <h6>Order Information :</h6>
                <Table borderless responsive className="invoice-table invoice-order">
                  <tbody>
                    <tr>
                      <th>Date :</th>
                      <td>November 14</td>
                    </tr>
                    <tr>
                      <th>Status :</th>
                      <td>
                        <span className="label label-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Id :</th>
                      <td>#146859</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={4}>
                <h6 className="m-b-20">
                  Invoice Number <span>#125863478945</span>
                </h6>
                <h6 className="text-uppercase text-primary">
                  Total Due : <span>$950.00</span>
                </h6>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <Table hover responsive className="invoice-detail-table">
                  <thead>
                    <tr className="thead-default">
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6>Logo Design</h6>
                        <p className="m-0">lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </td>
                      <td>6</td>
                      <td>$200.00</td>
                      <td>$1200.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Logo Design</h6>
                        <p className="m-0">lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </td>
                      <td>7</td>
                      <td>$100.00</td>
                      <td>$700.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Logo Design</h6>
                        <p className="m-0">lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </td>
                      <td>5</td>
                      <td>$150.00</td>
                      <td>$750.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <div className="invoice-total">
                  <Table className="invoice-table table-responsive">
                    <tbody>
                      <tr>
                        <th>Sub Total :</th>
                        <td>$4725.00</td>
                      </tr>
                      <tr>
                        <th>Taxes (10%) :</th>
                        <td>$57.00</td>
                      </tr>
                      <tr>
                        <th>Discount (5%) :</th>
                        <td>$45.00</td>
                      </tr>
                      <tr>
                        <td>
                          <hr />
                          <h5 className="text-primary  m-r-10">Total :</h5>
                        </td>
                        <td>
                          <hr />
                          <h5 className="text-primary">$4827.00</h5>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <h6>Terms and Condition :</h6>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor
                </p>
              </Col>
            </Row>
          </MainCard>
        </Stack>

        <Row className="text-center d-print-none">
          <Col sm={12} className="invoice-btn-group text-center mb-3">
            <Button variant="primary" className="m-2" onClick={() => window.print()}>
              Print
            </Button>
            <Button variant="secondary" className="m-2">
              Cancel
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
