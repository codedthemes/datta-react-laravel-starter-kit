import { Link } from 'react-router-dom';

// react-bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';

// project-imports
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import MainCard from 'components/MainCard';

// ==============================|| BREADCRUMB - CHARACTER ||============================== //

export default function BreadcrumbCharacter() {
  return (
    <MainCard title="Breadcrumb Dividers [ character ]">
      <Breadcrumb>
        <Breadcrumb.Item active>
          <i className="ti ti-home-2" />
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumbs>
        <Breadcrumb.Item as={Link} to="#">
          <i className="ti ti-home-2 fs-6" />
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
      </Breadcrumbs>
      <Breadcrumbs>
        <Breadcrumb.Item as={Link} to="#">
          <i className="ti ti-home-2" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumbs>
    </MainCard>
  );
}
