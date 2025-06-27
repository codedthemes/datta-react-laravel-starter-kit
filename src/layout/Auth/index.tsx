import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// project-imports
import Loader from 'components/Loader';
import Customizer from '../Dashboard/Customizer';
import useConfig from 'hooks/useConfig';
import { setResolvedTheme } from 'components/setResolvedTheme';

/**
 * AuthLayout is a top-level component that wraps around the <Outlet> component
 * from react-router-dom. It is used to set the page type of the application
 * and renders the Configuration component (which is used to set the page title).
 *
 * The AuthLayout component also sets the page type based on the value from
 * the ConfigContext.
 *
 * @returns {React.ReactElement} The AuthLayout component.
 */

// ==============================|| LAYOUT - AUTH ||============================== //

export default function AuthLayout(): React.ReactElement {
  const { themeDirection, customColor, mode } = useConfig();

  useEffect(() => {
    const body = document.body;

    body.setAttribute('data-pc-preset', customColor);
    body.setAttribute('data-pc-direction', themeDirection);
    body.setAttribute('data-pc-theme', mode);
    setResolvedTheme(mode);
  }, [customColor, themeDirection, mode]);

  return (
    <Suspense fallback={<Loader />}>
      <Customizer />
      <Outlet />
    </Suspense>
  );
}
