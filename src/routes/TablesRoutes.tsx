import { lazy } from 'react';

// project-imports
import DashboardLayout from 'layout/Dashboard';
import Loadable from 'components/Loadable';

// render - bootstrap table pages
const BootstrapTableBasic = Loadable(lazy(() => import('views/table/bootstrap-table/BasicTable')));
const BootstrapTableSizing = Loadable(lazy(() => import('views/table/bootstrap-table/SizingTable')));
const BootstrapTableBorder = Loadable(lazy(() => import('views/table/bootstrap-table/BorderTable')));
const BootstrapTableStyling = Loadable(lazy(() => import('views/table/bootstrap-table/StylingTable')));

// render - react table pages
const ReactTablesBasic = Loadable(lazy(() => import('views/table/react-table/Basic')));
const ReactTablesDense = Loadable(lazy(() => import('views/table/react-table/Dense')));
const ReactTablesSorting = Loadable(lazy(() => import('views/table/react-table/Sorting')));
const ReactTablesFiltering = Loadable(lazy(() => import('views/table/react-table/Filtering')));
const ReactTablesGrouping = Loadable(lazy(() => import('views/table/react-table/Grouping')));
const ReactTablesPagination = Loadable(lazy(() => import('views/table/react-table/Pagination')));
const ReactTablesRowSelection = Loadable(lazy(() => import('views/table/react-table/RowSelection')));
const ReactTablesExpanding = Loadable(lazy(() => import('views/table/react-table/Expanding')));
const ReactTableEditable = Loadable(lazy(() => import('views/table/react-table/EditTable')));
const ReactTablesStickyHeader = Loadable(lazy(() => import('views/table/react-table/StickyHeader')));
const ReactTablesDragDrop = Loadable(lazy(() => import('views/table/react-table/DragDrop')));
const ReactTablesColumnVisibility = Loadable(lazy(() => import('views/table/react-table/ColumnVisibility')));
const ReactTablesColumnResizing = Loadable(lazy(() => import('views/table/react-table/ColumnResizing')));
const ReactTablesUmbrella = Loadable(lazy(() => import('views/table/react-table/Umbrella')));
const ReactTablesEmpty = Loadable(lazy(() => import('views/table/react-table/Empty')));
const ReactTablesVirtualized = Loadable(lazy(() => import('views/table/react-table/Virtualized')));

// ==============================|| TABLES ROUTING ||============================== //

const TablesRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'tables/bootstrap-table',
          children: [
            {
              path: 'basic-table',
              element: <BootstrapTableBasic />
            },
            {
              path: 'sizing-table',
              element: <BootstrapTableSizing />
            },
            {
              path: 'border-table',
              element: <BootstrapTableBorder />
            },
            {
              path: 'styling-table',
              element: <BootstrapTableStyling />
            }
          ]
        },

        {
          path: 'tables/react-table',
          children: [
            {
              path: 'basic',
              element: <ReactTablesBasic />
            },
            {
              path: 'dense',
              element: <ReactTablesDense />
            },
            {
              path: 'sorting',
              element: <ReactTablesSorting />
            },
            {
              path: 'filtering',
              element: <ReactTablesFiltering />
            },
            {
              path: 'grouping',
              element: <ReactTablesGrouping />
            },
            {
              path: 'pagination',
              element: <ReactTablesPagination />
            },
            {
              path: 'row-selection',
              element: <ReactTablesRowSelection />
            },
            {
              path: 'expanding',
              element: <ReactTablesExpanding />
            },
            {
              path: 'edit-table',
              element: <ReactTableEditable />
            },
            {
              path: 'drag-drop',
              element: <ReactTablesDragDrop />
            },
            {
              path: 'column-visibility',
              element: <ReactTablesColumnVisibility />
            },
            {
              path: 'column-resizing',
              element: <ReactTablesColumnResizing />
            },
            {
              path: 'sticky',
              element: <ReactTablesStickyHeader />
            },
            {
              path: 'umbrella',
              element: <ReactTablesUmbrella />
            },
            {
              path: 'empty',
              element: <ReactTablesEmpty />
            },
            {
              path: 'virtualized',
              element: <ReactTablesVirtualized />
            }
          ]
        }
      ]
    }
  ]
};

export default TablesRoutes;
