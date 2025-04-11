import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - Other components page
const OtherSamplePage = Loadable(lazy(() => import('views/other/sample-page/SamplePage')));

// ==============================|| ROUTES - OTHER ROUTES ||============================== //

const OtherRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'other',
          children: [
            {
              path: 'sample-page',
              element: <OtherSamplePage />
            }
          ]
        }
      ]
    }
  ]
};

export default OtherRoutes;
