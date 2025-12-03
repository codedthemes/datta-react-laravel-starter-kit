import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

// react bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import ReferenceHeader from '@/components/ReferenceHeader';
import BasicGMap from '@/sections/maps/google-maps/BasicMap';
import TrafficLayerMap from '@/sections/maps/google-maps/TrafficGMap';

// ===============================|| MAPS - GOOGLE MAP ||============================== //

export default function GoogleMapPage() {
  return (
    <AppLayout>
      <Head title="Google map" />
      <ReferenceHeader
        caption="Converts an elements content into a svg mini pie donut line or bar chart and is compatible with any browser that supports svg"
        link="https://developers.google.com/maps/documentation/javascript/libraries"
      />
      <Row>
        <Col sm={12}>
          <BasicGMap />
        </Col>
        <Col sm={12}>
          <TrafficLayerMap />
        </Col>
      </Row>
    </AppLayout>
  );
}
