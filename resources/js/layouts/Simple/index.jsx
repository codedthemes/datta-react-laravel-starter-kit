import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';

// project-imports
import Loader from '@/components/Loader';
import useConfig from '@/hooks/useConfig';

const Header = lazy(() => import('./Header'));

// ==============================|| SIMPLE - LAYOUT ||============================== //
export default function SimpleLayout({ children }) {
  const { themeDirection, customColor, mode } = useConfig();

  return (
    <Suspense fallback={<Loader />}>
      <div
        data-pc-preset={customColor}
        data-pc-direction={themeDirection}
        data-pc-theme={mode}
        className="landing-page"
      >
        <Header />
        {children}
      </div>
    </Suspense>
  );
}

SimpleLayout.propTypes = {
  children: PropTypes.any
};
