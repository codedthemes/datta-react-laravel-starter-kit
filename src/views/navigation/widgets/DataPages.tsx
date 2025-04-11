// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import WidgetsReleaseCard from 'sections/widgets/data/ReleaseCard';
import WidgetDataChat from 'sections/widgets/data/Chat';
import WidgetDataLorem from 'sections/widgets/data/Lorem';
import WidgetDagtaNotifications from 'sections/widgets/data/Notifications';
import WidgetDagtaNotifications2 from 'sections/widgets/data/Notifications2';
import WidgetsDataProjectDesign from 'sections/widgets/data/ProjectDesign';
import WidgetsDataRating from 'sections/widgets/data/Rating';
import WidgetDataSocialMedia from 'sections/widgets/data/SocialMedia';
import WidgetDagtaToDo from 'sections/widgets/data/ToDo';
import WidgetDagtaUserList from 'sections/widgets/data/UserList';

// ==============================|| WIDGET - USER ||============================== //

export default function UserPage() {
  return (
    <Row>
      <Col xl={4} md={6}>
        <WidgetsDataRating />
      </Col>
      <Col xl={4} md={6}>
        <WidgetDataChat />
      </Col>
      <Col xl={4} md={12}>
        <WidgetDagtaUserList />
      </Col>
      <Col xl={4} md={6}>
        <WidgetDagtaNotifications />
      </Col>
      <Col xl={4} md={6}>
        <WidgetDagtaToDo />
      </Col>
      <Col xl={4} md={6}>
        <WidgetDagtaNotifications2 />
      </Col>
      <Col xl={4} md={6}>
        <WidgetsReleaseCard />
      </Col>
      <Col xl={4} md={6}>
        <WidgetsDataProjectDesign />
      </Col>
      <Col xl={4} md={6}>
        <WidgetDataLorem />
      </Col>
      <Col xl={12}>
        <WidgetDataSocialMedia />
      </Col>
    </Row>
  );
}
