import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project-imports
import Loader from 'components/Loader';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| SIMPLE - LAYOUT ||============================== //

export default function SimpleLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <div
        data-pc-preset="preset-1"
        data-pc-sidebar-caption="true"
        data-pc-direction="ltr"
        data-pc-sidebar_theme=""
        data-pc-theme="light"
        className="landing-page"
      >
        <Header />
        <Outlet />
        <FooterBlock />
      </div>
    </Suspense>
  );
}
