import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import Loadable from 'components/Loadable';
import AdminPanelRoutes from './AdminPanelRoutes';
import ApplicationRoutes from './ApplicationRoutes';
import ChartMapRoutes from './ChartMapRoutes';
import ComponentsRoutes from './ComponentsRoutes';
import FormsRoutes from './FormsRoutes';
import OtherRoutes from './OtherRoutes';
import PagesRoutes from './PagesRoutes';
import NavigationRoutes from './NavigationRoutes';
import SimpleLayout from 'layout/Simple';
import TablesRoutes from './TablesRoutes';

const PagesLanding = Loadable(lazy(() => import('../views/Landing')));

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SimpleLayout />,
      children: [
        {
          index: true,
          element: <PagesLanding />
        }
      ]
    },
    ApplicationRoutes,
    AdminPanelRoutes,
    NavigationRoutes,
    ComponentsRoutes,
    FormsRoutes,
    TablesRoutes,
    PagesRoutes,
    OtherRoutes,
    ChartMapRoutes
  ],
  {
    basename: import.meta.env.VITE_APP_BASE_NAME
  }
);

export default router;
