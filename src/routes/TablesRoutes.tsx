import { lazy } from 'react';

// project-imports
import DashboardLayout from 'layout/Dashboard';
import Loadable from 'components/Loadable';

// render - Tables components page
const BasicTablePage = Loadable(lazy(() => import('views/table/bootstrap-table/BasicTable')));
const BorderTablePage = Loadable(lazy(() => import('views/table/bootstrap-table/BorderTable')));
const EditTable = Loadable(lazy(() => import('views/table/reactTable/EditTable')));
const ReactTablesBasic = Loadable(lazy(() => import('views/table/reactTable/BasicTable')));
const ReactTablesDense = Loadable(lazy(() => import('views/table/reactTable/DenseTable')));
const ReactTablesSorting = Loadable(lazy(() => import('views/table/reactTable/SortingTable')));
const ReactTablesFiltering = Loadable(lazy(() => import('views/table/reactTable/FilteringTable')));
const ReactTablesGrouping = Loadable(lazy(() => import('views/table/reactTable/GroupingTable')));
const ReactTablesPagination = Loadable(lazy(() => import('views/table/reactTable/Pagination')));
const ReactTablesRowSelection = Loadable(lazy(() => import('views/table/reactTable/RowSelectionTable')));
const ReactTablesExpanding = Loadable(lazy(() => import('views/table/reactTable/ExpandingTable')));
const ReactTablesStickyHeader = Loadable(lazy(() => import('views/table/reactTable/StickyHeader')));
const ReactTablesDragDrop = Loadable(lazy(() => import('views/table/reactTable/DragDropTable')));
const ReactTablesColumnVisibility = Loadable(lazy(() => import('views/table/reactTable/ColumnVisibility')));
const ReactTablesColumnResizing = Loadable(lazy(() => import('views/table/reactTable/ColumnResizing')));
const ReactTablesUmbrella = Loadable(lazy(() => import('views/table/reactTable/UmbrellaTable')));
const ReactTablesEmpty = Loadable(lazy(() => import('views/table/reactTable/EmptyTable')));
const ReactTablesVirtualized = Loadable(lazy(() => import('views/table/reactTable/Virtualized')));
const SizingTablePage = Loadable(lazy(() => import('views/table/bootstrap-table/SizingTable')));
const StylingTablePage = Loadable(lazy(() => import('views/table/bootstrap-table/StylingTable')));

// ==============================|| ROUTES - TABLES ROUTES ||============================== //

const TablesRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'bootstrap-table',
          children: [
            {
              path: 'basic-table',
              element: <BasicTablePage />
            },
            {
              path: 'sizing-table',
              element: <SizingTablePage />
            },
            {
              path: 'border-table',
              element: <BorderTablePage />
            },
            {
              path: 'styling-table',
              element: <StylingTablePage />
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
            },
            {
              path: 'edit-table',
              element: <EditTable />
            }
          ]
        }
      ]
    }
  ]
};

export default TablesRoutes;
