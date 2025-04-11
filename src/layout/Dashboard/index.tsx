import { Outlet } from 'react-router-dom';

// project-imports
import CustomBreadcrumbs from 'components/@extended/CustomBreadcrumb';
import Footer from './Footer';
import HeaderContent from './Header/headerContent/HeaderContent';
import MainDrawer from './drawer';
import HorizontalBar from './drawer/HorizontalBar';
import Settings from './settings/Settings';

// ==============================|| DASHBOARD - MAIN LAYOUT ||============================== //

export default function DashboardLayout() {
  const isHorizontal = window.location.pathname === '/layouts/horizontal';

  return (
    <>
      <Settings />
      <MainDrawer />
      <HeaderContent />
      {!isHorizontal ? <MainDrawer /> : <HorizontalBar />}
      <div className="pc-container">
        <div className="pc-content">
          <CustomBreadcrumbs />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
