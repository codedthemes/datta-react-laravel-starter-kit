// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//third-party
import SimpleBar from 'simplebar-react';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| WIDGETS DATA - CHAT ||============================== //

export default function WidgetDataChat() {
  return (
    <MainCard title={<span className="text-white">"Chat with Kristina Sanders"</span>} className="chat-sanders" bodyClassName="p-0 m-t-30">
      <SimpleBar className="simple-bar">
        <div className="scroll-div" id="chat-scroll">
          <div className="px-4 pb-4">
            <p className="text-center text-muted">JUN 23 3:46PM</p>
            <Row className="m-b-20 received-chat align-items-end">
              <Col className="col-auto p-r-0">
                <h5 className="text-white d-flex align-items-center bg-brand-color-2 justify-content-center"> k</h5>
              </Col>
              <Col>
                <h6 className="m-b-0 msg">How may i help you?</h6>
              </Col>
            </Row>
            <Row className="m-b-20 send-chat align-items-end">
              <Col className="text-end">
                <h6 className="m-b-0 text-white msg">I need support for my ticket XXX.</h6>
              </Col>
              <Col className="col-auto p-l-0">
                <h5 className="text-white d-flex align-items-center bg-brand-color-1 justify-content-center"> Y</h5>
              </Col>
            </Row>
            <Row className="m-b-20 received-chat align-items-end">
              <Col className="col-auto p-r-0">
                <h5 className="text-white d-flex align-items-center bg-brand-color-2 justify-content-center"> k</h5>
              </Col>
              <Col>
                <h6 className="m-b-0 msg">Our support staff will contact you soon.. </h6>
              </Col>
            </Row>
            <Row className="m-b-0 send-chat align-items-end">
              <Col className="text-end">
                <h6 className="m-b-0 text-white msg">Nice to meet you!</h6>
              </Col>
              <Col className="col-auto p-l-0">
                <h5 className="text-white d-flex align-items-center bg-brand-color-1 justify-content-center"> Y</h5>
              </Col>
            </Row>
          </div>
        </div>
      </SimpleBar>
      <div className="right-icon-control border-top">
        <div className="input-group input-group-button p-10">
          <input type="text" className="form-control border-0 text-muted" placeholder="Write your message" />
          <div className="input-group-append">
            <button className="btn">
              <i className="fas f-20 fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
    </MainCard>
  );
}
