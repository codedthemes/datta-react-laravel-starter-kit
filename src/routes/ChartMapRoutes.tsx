import { lazy } from 'react';

// project-imports
import DashboardLayout from 'layout/Dashboard';
import Loadable from 'components/Loadable';

// render - Charts & Maps components page
const ApexChart = Loadable(lazy(() => import('views/charts/ApexChart')));
const ChartJS = Loadable(lazy(() => import('views/charts/ChartJS')));
const VectorMaps = Loadable(lazy(() => import('views/maps/VectorMap')));
const GoogleMaps = Loadable(lazy(() => import('views/maps/GoogleMap')));

// ==============================|| COMPONENT ROUTES ||============================== //

const ChartMapRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'charts',
          children: [
            {
              path: 'apex-chart',
              element: <ApexChart />
            },
            {
              path: 'chart-js',
              element: <ChartJS />
            }
          ]
        },
        {
          path: 'map',
          children: [
            {
              path: 'vector-map',
              element: <VectorMaps />
            },
            {
              path: 'google-map',
              element: <GoogleMaps />
            }
          ]
        }
      ]
    }
  ]
};

export default ChartMapRoutes;
