import { useEffect } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import JsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';

// project-imports
import Earnings from './Earnings';
import MainCard from 'components/MainCard';

// ===============================|| DEFAULT - USERS FROM UNITED STATES ||============================== //

export default function UsersFromUnitedStates() {
  useEffect(() => {
    new JsVectorMap({
      selector: '#basic-map',
      map: 'world',
      showTooltip: true,
      zoomOnScroll: true,
      zoomButtons: true,
      zoom: {
        min: 1,
        max: 10
      },
      markers: [
        { coords: [-15.7939, -47.8825], name: 'Brazil' },
        { coords: [24.7743, 47.7439], name: 'Saudi Arabia' },
        { coords: [35.8617, 104.1954], name: 'China' },
        { coords: [61.524, 105.3188], name: 'Russia' }
      ]
    });
  }, []);
  return (
    <Row>
      <Col xl={8} md={6}>
        <MainCard title="Users From United States">
          <div id="basic-map" className="set-map hei-450 " />
        </MainCard>
      </Col>
      <Col xl={4} md={6}>
        <Earnings />
        <MainCard className="mb-0 shadow-none border-bottom">
          <Row as={Stack} direction="horizontal" className=" align-items-center">
            <Col xs="auto">
              <i className="ti ti-bolt f-30 text-success" />
            </Col>
            <Col>
              <h3 className="f-w-300">235</h3>
              <span className="d-block text-uppercase">total ideas</span>
            </Col>
          </Row>
        </MainCard>
        <MainCard>
          <Row as={Stack} direction="horizontal" className=" align-items-center">
            <Col xs="auto">
              <i className="ti ti-map-pin f-30 text-primary" />
            </Col>
            <Col>
              <h3 className="f-w-300">26</h3>
              <span className="d-block text-uppercase">total locations</span>
            </Col>
          </Row>
        </MainCard>
      </Col>
    </Row>
  );
}
