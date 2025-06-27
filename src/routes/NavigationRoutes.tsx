import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - dashboard pages
const DefaultPages = Loadable(lazy(() => import('views/navigation/dashboard/Default')));
const EcommercePages = Loadable(lazy(() => import('views/navigation/dashboard/Ecommerce')));
const CrmPages = Loadable(lazy(() => import('views/navigation/dashboard/CRM')));
const AnalyticsPages = Loadable(lazy(() => import('views/navigation/dashboard/Analytics')));
const CryptoPages = Loadable(lazy(() => import('views/navigation/dashboard/Crypto')));
const FinancePages = Loadable(lazy(() => import('views/navigation/dashboard/Finance')));
const ProjectPages = Loadable(lazy(() => import('views/navigation/dashboard/Project')));

// render - layout pages
const VerticalPage = Loadable(lazy(() => import('views/navigation/layouts/Vertical')));
const TabPage = Loadable(lazy(() => import('views/navigation/layouts/Tab')));
const LayoutTwoPage = Loadable(lazy(() => import('views/navigation/layouts/LayoutTwoPage')));
const LayoutThreePage = Loadable(lazy(() => import('views/navigation/layouts/LayoutThreePage')));

// render - widgets pages
const StatisticsPage = Loadable(lazy(() => import('views/navigation/widgets/statistics')));
const DataPage = Loadable(lazy(() => import('views/navigation/widgets/DataPages')));
const TablePage = Loadable(lazy(() => import('views/navigation/widgets/TablePages')));
const UserPage = Loadable(lazy(() => import('views/navigation/widgets/UserPage')));
const ChartPage = Loadable(lazy(() => import('views/navigation/widgets/Charts')));

// ==============================|| NAVIGATION ROUTING ||============================== //

const NavigationRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DefaultPages />
            },
            {
              path: 'ecommerce',
              element: <EcommercePages />
            },
            {
              path: 'crm',
              element: <CrmPages />
            },
            {
              path: 'analytics',
              element: <AnalyticsPages />
            },
            {
              path: 'crypto',
              element: <CryptoPages />
            },
            {
              path: 'Finance',
              element: <FinancePages />
            },
            {
              path: 'project',
              element: <ProjectPages />
            }
          ]
        },
        {
          path: 'layouts',
          children: [
            {
              path: 'vertical',
              element: <VerticalPage />
            },
            {
              path: 'tab',
              element: <TabPage />
            },
            {
              path: 'layout-2',
              element: <LayoutTwoPage />
            },
            {
              path: 'layout-3',
              element: <LayoutThreePage />
            }
          ]
        },
        {
          path: 'widget',
          children: [
            {
              path: 'statistics',
              element: <StatisticsPage />
            },
            {
              path: 'data',
              element: <DataPage />
            },
            {
              path: 'table',
              element: <TablePage />
            },
            {
              path: 'user',
              element: <UserPage />
            },
            {
              path: 'chart',
              element: <ChartPage />
            }
          ]
        }
      ]
    }
  ]
};

export default NavigationRoutes;
