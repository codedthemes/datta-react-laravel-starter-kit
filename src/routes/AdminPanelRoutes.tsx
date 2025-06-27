import { lazy } from 'react';

// project-imports
import DashboardLayout from 'layout/Dashboard';
import Loadable from 'components/Loadable';

// render - online course pages
const OnlineCourseDashboard = Loadable(lazy(() => import('views/admin-panel/online-courses/Dashboard')));
const OnlineCourseTeacherList = Loadable(lazy(() => import('views/admin-panel/online-courses/teacher/List')));
const OnlineCourseTeacherApply = Loadable(lazy(() => import('views/admin-panel/online-courses/teacher/Apply')));
const OnlineCourseTeacherAdd = Loadable(lazy(() => import('views/admin-panel/online-courses/teacher/Add')));
const OnlineCourseStudentList = Loadable(lazy(() => import('views/admin-panel/online-courses/student/List')));
const OnlineCourseStudentApply = Loadable(lazy(() => import('views/admin-panel/online-courses/student/Apply')));
const OnlineCourseStudentAdd = Loadable(lazy(() => import('views/admin-panel/online-courses/student/Add')));
const OnlineCourseCourseView = Loadable(lazy(() => import('views/admin-panel/online-courses/courses/View')));
const OnlineCourseCourseAdd = Loadable(lazy(() => import('views/admin-panel/online-courses/courses/Add')));
const OnlineCoursePricing = Loadable(lazy(() => import('views/admin-panel/online-courses/Pricing')));
const OnlineCourseSite = Loadable(lazy(() => import('views/admin-panel/online-courses/Site')));
const OnlineCourseSettingsPayment = Loadable(lazy(() => import('views/admin-panel/online-courses/settings/Payment')));
const OnlineCourseSettingsPricing = Loadable(lazy(() => import('views/admin-panel/online-courses/settings/Pricing')));
const OnlineCourseSettingsNotification = Loadable(lazy(() => import('views/admin-panel/online-courses/settings/Notification')));

// render - helpdesk pages
const CreateMain = Loadable(lazy(() => import('views/admin-panel/helpdesk/tickets/CreateMain')));
const CustomersMain = Loadable(lazy(() => import('views/admin-panel/helpdesk/Customers')));
const DashboardMain = Loadable(lazy(() => import('views/admin-panel/helpdesk/Dashboard')));
const DetailsMain = Loadable(lazy(() => import('views/admin-panel/helpdesk/tickets/DetailsMain')));
const ListMain = Loadable(lazy(() => import('views/admin-panel/helpdesk/tickets/ListMain')));

// render - membership pages
const DashboardPage = Loadable(lazy(() => import('views/admin-panel/membership/DashboardMain')));
const MembershipList = Loadable(lazy(() => import('views/admin-panel/membership/ListMain')));
const PricingMain = Loadable(lazy(() => import('views/admin-panel/membership/PricingMain')));
const SettingMain = Loadable(lazy(() => import('views/admin-panel/membership/SettingMain')));

// render - invoice pages
const InvoiceDashboard = Loadable(lazy(() => import('views/admin-panel/invoice/Dashboard')));
const InvoiceDetails = Loadable(lazy(() => import('views/admin-panel/invoice/Details')));
const InvoiceCreate = Loadable(lazy(() => import('views/admin-panel/invoice/Create')));
const InvoiceList = Loadable(lazy(() => import('views/admin-panel/invoice/List')));
const InvoiceEdit = Loadable(lazy(() => import('views/admin-panel/invoice/Edit')));

// ==============================|| ADMIN PANEL ROUTING ||============================== //

const AdminPanelRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'admin-panel',
          children: [
            {
              path: 'online-course',
              children: [
                {
                  path: 'dashboard',
                  element: <OnlineCourseDashboard />
                },
                {
                  path: 'teacher',
                  children: [
                    {
                      path: 'list',
                      element: <OnlineCourseTeacherList />
                    },
                    {
                      path: 'apply',
                      element: <OnlineCourseTeacherApply />
                    },
                    {
                      path: 'add',
                      element: <OnlineCourseTeacherAdd />
                    }
                  ]
                },
                {
                  path: 'student',
                  children: [
                    {
                      path: 'list',
                      element: <OnlineCourseStudentList />
                    },
                    {
                      path: 'apply',
                      element: <OnlineCourseStudentApply />
                    },
                    {
                      path: 'add',
                      element: <OnlineCourseStudentAdd />
                    }
                  ]
                },
                {
                  path: 'course',
                  children: [
                    {
                      path: 'view',
                      element: <OnlineCourseCourseView />
                    },
                    {
                      path: 'add',
                      element: <OnlineCourseCourseAdd />
                    }
                  ]
                },
                {
                  path: 'pricing',
                  element: <OnlineCoursePricing />
                },
                {
                  path: 'site',
                  element: <OnlineCourseSite />
                },
                {
                  path: 'setting',
                  children: [
                    {
                      path: 'payment',
                      element: <OnlineCourseSettingsPayment />
                    },
                    {
                      path: 'pricing',
                      element: <OnlineCourseSettingsPricing />
                    },
                    {
                      path: 'notification',
                      element: <OnlineCourseSettingsNotification />
                    }
                  ]
                }
              ]
            },
            {
              path: 'membership',
              children: [
                {
                  path: 'dashboard',
                  element: <DashboardPage />
                },
                {
                  path: 'list',
                  element: <MembershipList />
                },
                {
                  path: 'pricing',
                  element: <PricingMain />
                },
                {
                  path: 'setting',
                  element: <SettingMain />
                }
              ]
            },
            {
              path: 'helpdesk',
              children: [
                {
                  path: 'dashboard',
                  element: <DashboardMain />
                },
                {
                  path: 'ticket',
                  children: [
                    {
                      path: 'create',
                      element: <CreateMain />
                    },
                    {
                      path: 'list',
                      element: <ListMain />
                    },
                    {
                      path: 'details',
                      element: <DetailsMain />
                    }
                  ]
                },
                {
                  path: 'customers',
                  element: <CustomersMain />
                }
              ]
            },
            {
              path: 'invoice',
              children: [
                {
                  path: 'dashboard',
                  element: <InvoiceDashboard />
                },
                {
                  path: 'create',
                  element: <InvoiceCreate />
                },
                {
                  path: 'details',
                  element: <InvoiceDetails />
                },
                {
                  path: 'list',
                  element: <InvoiceList />
                },
                {
                  path: 'edit',
                  element: <InvoiceEdit />
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default AdminPanelRoutes;
