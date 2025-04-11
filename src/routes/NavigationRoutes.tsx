import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - Basic components page
const AnalyticsPages = Loadable(lazy(() => import('views/navigation/dashboard/Analytics')));
const ChartPage = Loadable(lazy(() => import('views/navigation/widgets/Charts')));
const CompactPage = Loadable(lazy(() => import('views/navigation/layouts/Compact')));
const CrmPages = Loadable(lazy(() => import('views/navigation/dashboard/CRM')));
const CryptoPages = Loadable(lazy(() => import('views/navigation/dashboard/Crypto')));
const DefaultPages = Loadable(lazy(() => import('views/navigation/dashboard/Default')));
const DataPage = Loadable(lazy(() => import('views/navigation/widgets/DataPages')));
const EcommercePages = Loadable(lazy(() => import('views/navigation/dashboard/Ecommerce')));
const FinancePages = Loadable(lazy(() => import('views/navigation/dashboard/Finance')));
const HorizontalPage = Loadable(lazy(() => import('views/navigation/layouts/Horizontal')));
const ProjectPages = Loadable(lazy(() => import('views/navigation/dashboard/Project')));
const LayoutTwoPage = Loadable(lazy(() => import('views/navigation/layouts/LayoutTwoPage')));
const LayoutThreePage = Loadable(lazy(() => import('views/navigation/layouts/LayoutThreePage')));
const StatisticsPage = Loadable(lazy(() => import('views/navigation/widgets/StatisticsPages')));
const TabPage = Loadable(lazy(() => import('views/navigation/layouts/Tab')));
const TablePage = Loadable(lazy(() => import('views/navigation/widgets/TablePages')));
const UserPage = Loadable(lazy(() => import('views/navigation/widgets/UserPage')));
const VerticalPage = Loadable(lazy(() => import('views/navigation/layouts/Vertical')));

// ==============================|| NAVIGATION ROUTES ||============================== //

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
              path: 'horizontal',
              element: <HorizontalPage />
            },
            {
              path: 'compact',
              element: <CompactPage />
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
