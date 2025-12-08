import { lazy, type ReactNode, Suspense } from 'react';

// project-imports
import Loader from '@/components/Loader';
import useConfig from '@/hooks/useConfig';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

interface SimpleLayout {
  children: ReactNode
}
// ==============================|| SIMPLE - LAYOUT ||============================== //
export default function SimpleLayout({ children }: SimpleLayout) {
  const { themeDirection, customColor, mode } = useConfig();

  return (
    <Suspense fallback={<Loader />}>
      <div data-pc-preset={customColor} data-pc-direction={themeDirection} data-pc-theme={mode} className="landing-page">
        <Header />
        {children}
        <FooterBlock />
      </div>
    </Suspense>
  );
}
