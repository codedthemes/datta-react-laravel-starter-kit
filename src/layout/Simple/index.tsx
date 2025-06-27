import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project-imports
import Loader from 'components/Loader';
import useConfig from 'hooks/useConfig';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| LAYOUT - SIMPLE ||============================== //

export default function SimpleLayout() {
  const { themeDirection, customColor, mode } = useConfig();

  return (
    <Suspense fallback={<Loader />}>
      <div data-pc-preset={customColor} data-pc-direction={themeDirection} data-pc-theme={mode} className="landing-page">
        <Header />
        <Outlet />
        <FooterBlock />
      </div>
    </Suspense>
  );
}
