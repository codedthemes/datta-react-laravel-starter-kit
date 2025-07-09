import { lazy } from 'react';

// project-imports
import DashboardLayout from 'layout/Dashboard';
import Loadable from 'components/Loadable';

// render - basic component pages
const BasicAlert = Loadable(lazy(() => import('views/components/basic/Alert')));
const BasicButton = Loadable(lazy(() => import('views/components/basic/Button')));
const BasicBadges = Loadable(lazy(() => import('views/components/basic/Badges')));
const BasicBreadcrumb = Loadable(lazy(() => import('views/components/basic/Breadcrumb')));
const BasicCards = Loadable(lazy(() => import('views/components/basic/Cards')));
const BasicColor = Loadable(lazy(() => import('views/components/basic/Color')));
const BasicCarousel = Loadable(lazy(() => import('views/components/basic/Carousel')));
const BasicCollapse = Loadable(lazy(() => import('views/components/basic/Collapse')));
const BasicDropdown = Loadable(lazy(() => import('views/components/basic/DropDown')));
const BasicOffcanvas = Loadable(lazy(() => import('views/components/basic/OffCanvas')));
const BasicPagination = Loadable(lazy(() => import('views/components/basic/Pagination')));
const BasicProgress = Loadable(lazy(() => import('views/components/basic/Progress')));
const BasicListGroup = Loadable(lazy(() => import('views/components/basic/ListGroup')));
const BasicModal = Loadable(lazy(() => import('views/components/basic/Modal')));
const BasicSpinner = Loadable(lazy(() => import('views/components/basic/Spinner')));
const BasicTabsPills = Loadable(lazy(() => import('views/components/basic/TabsPills')));
const BasicTypography = Loadable(lazy(() => import('views/components/basic/Typography')));
const BasicTooltip = Loadable(lazy(() => import('views/components/basic/Tooltip')));
const BasicToasts = Loadable(lazy(() => import('views/components/basic/Toasts')));
const BasicOther = Loadable(lazy(() => import('views/components/basic/Other')));

// render - advance component pages
const AdvanceDatePicker = Loadable(lazy(() => import('views/components/advance/DatePicker')));
const AdvanceLightBox = Loadable(lazy(() => import('views/components/advance/LightBox')));
const AdvanceModal = Loadable(lazy(() => import('views/components/advance/Modal')));
const AdvanceNotification = Loadable(lazy(() => import('views/components/advance/Notification')));
const AdvanceRangeSlider = Loadable(lazy(() => import('views/components/advance/RangeSlider')));
const AdvanceSlider = Loadable(lazy(() => import('views/components/advance/Slider')));
const AdvanceSweetAlert = Loadable(lazy(() => import('views/components/advance/SweetAlert')));
const AdvanceSyntaxHighlighter = Loadable(lazy(() => import('views/components/advance/SyntaxHighLighter')));
const AdvanceTour = Loadable(lazy(() => import('views/components/advance/Tour')));
const AdvanceTreeView = Loadable(lazy(() => import('views/components/advance/TreeView')));

// render - animation component page
const AnimationPage = Loadable(lazy(() => import('views/components/Animation')));

// render - icons component pag
const IconsComponents = Loadable(lazy(() => import('views/components/Icons')));

// ==============================|| COMPONENT ROUTING ||============================== //

const ComponentsRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'basic',
          children: [
            {
              path: 'alert',
              element: <BasicAlert />
            },
            {
              path: 'buttons',
              element: <BasicButton />
            },
            {
              path: 'badges',
              element: <BasicBadges />
            },
            {
              path: 'breadcrumb',
              element: <BasicBreadcrumb />
            },
            {
              path: 'cards',
              element: <BasicCards />
            },
            {
              path: 'color',
              element: <BasicColor />
            },
            {
              path: 'carousel',
              element: <BasicCarousel />
            },
            {
              path: 'collapse',
              element: <BasicCollapse />
            },
            {
              path: 'dropdowns',
              element: <BasicDropdown />
            },
            {
              path: 'offcanvas',
              element: <BasicOffcanvas />
            },
            {
              path: 'pagination',
              element: <BasicPagination />
            },
            {
              path: 'progress',
              element: <BasicProgress />
            },
            {
              path: 'list-group',
              element: <BasicListGroup />
            },
            {
              path: 'modal',
              element: <BasicModal />
            },
            {
              path: 'spinner',
              element: <BasicSpinner />
            },
            {
              path: 'tabs-pills',
              element: <BasicTabsPills />
            },
            {
              path: 'typography',
              element: <BasicTypography />
            },
            {
              path: 'tooltip',
              element: <BasicTooltip />
            },
            {
              path: 'toasts',
              element: <BasicToasts />
            },
            {
              path: 'other',
              element: <BasicOther />
            }
          ]
        },
        {
          path: 'advance',
          children: [
            {
              path: 'sweet-alert',
              element: <AdvanceSweetAlert />
            },
            {
              path: 'date-picker',
              element: <AdvanceDatePicker />
            },
            {
              path: 'light-box',
              element: <AdvanceLightBox />
            },
            {
              path: 'modal',
              element: <AdvanceModal />
            },
            {
              path: 'notification',
              element: <AdvanceNotification />
            },
            {
              path: 'range-slider',
              element: <AdvanceRangeSlider />
            },
            {
              path: 'slider',
              element: <AdvanceSlider />
            },
            {
              path: 'tour',
              element: <AdvanceTour />
            },
            {
              path: 'syntax-highlighter',
              element: <AdvanceSyntaxHighlighter />
            },
            {
              path: 'tree-view',
              element: <AdvanceTreeView />
            }
          ]
        },
        {
          path: 'animation',
          element: <AnimationPage />
        },
        {
          path: 'icons',
          element: <IconsComponents />
        }
      ]
    }
  ]
};

export default ComponentsRoutes;
