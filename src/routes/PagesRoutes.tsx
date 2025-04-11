import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import GuestLayout from 'layout/Auth';

// render - Maintenance components page
const ErrorPage = Loadable(lazy(() => import('views/pages/maintenance/Error')));
const ComingSoonPage = Loadable(lazy(() => import('views/pages/maintenance/ComingSoon')));
const OfflineUiPage = Loadable(lazy(() => import('views/pages/maintenance/OfflineUi')));
const LandingPage = Loadable(lazy(() => import('views/Landing')));

// render - Authentication page
const LoginV1Page = Loadable(lazy(() => import('views/auth/login/LoginV1')));
const LoginV2Page = Loadable(lazy(() => import('views/auth/login/LoginV2')));
const LoginV3Page = Loadable(lazy(() => import('views/auth/login/LoginV3')));
const LoginV4Page = Loadable(lazy(() => import('views/auth/login/LoginV4')));
const LoginV5Page = Loadable(lazy(() => import('views/auth/login/LoginV5')));

const RegisterV1Page = Loadable(lazy(() => import('views/auth/register/RegisterV1')));
const RegisterV2Page = Loadable(lazy(() => import('views/auth/register/RegisterV2')));
const RegisterV3Page = Loadable(lazy(() => import('views/auth/register/RegisterV3')));
const RegisterV4Page = Loadable(lazy(() => import('views/auth/register/RegisterV4')));
const RegisterV5Page = Loadable(lazy(() => import('views/auth/register/RegisterV5')));

const ResetPasswordV1Page = Loadable(lazy(() => import('views/auth/reset-password/ResetPasswordV1')));
const ResetPasswordV2Page = Loadable(lazy(() => import('views/auth/reset-password/ResetPasswordV2')));
const ResetPasswordV3Page = Loadable(lazy(() => import('views/auth/reset-password/ResetPasswordV3')));
const ResetPasswordV4Page = Loadable(lazy(() => import('views/auth/reset-password/ResetPasswordV4')));
const ResetPasswordV5Page = Loadable(lazy(() => import('views/auth/reset-password/ResetPasswordV5')));

const ChangePasswordV1Page = Loadable(lazy(() => import('views/auth/change-password/ChangePasswordV1')));
const ChangePasswordV2Page = Loadable(lazy(() => import('views/auth/change-password/ChangePasswordV2')));
const ChangePasswordV3Page = Loadable(lazy(() => import('views/auth/change-password/ChangePasswordV3')));
const ChangePasswordV4Page = Loadable(lazy(() => import('views/auth/change-password/ChangePasswordV4')));
const ChangePasswordV5Page = Loadable(lazy(() => import('views/auth/change-password/ChangePasswordV5')));

// ==============================|| ROUTES - PAGES ROUTES ||============================== //

const PagesRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: 'pages',
          children: [
            {
              path: 'maintenance',
              children: [
                {
                  path: 'error',
                  element: <ErrorPage />
                },
                {
                  path: 'coming-soon',
                  element: <ComingSoonPage />
                },
                {
                  path: 'offline-ui',
                  element: <OfflineUiPage />
                }
              ]
            }
          ]
        },
        {
          path: '/landing',
          element: <LandingPage />
        },
        {
          path: 'auth',
          children: [
            {
              path: 'login-v1',
              element: <LoginV1Page />
            },
            {
              path: 'login-v2',
              element: <LoginV2Page />
            },
            {
              path: 'login-v3',
              element: <LoginV3Page />
            },
            {
              path: 'login-v4',
              element: <LoginV4Page />
            },
            {
              path: 'login-v5',
              element: <LoginV5Page />
            },
            {
              path: 'register-v1',
              element: <RegisterV1Page />
            },
            {
              path: 'register-v2',
              element: <RegisterV2Page />
            },
            {
              path: 'register-v3',
              element: <RegisterV3Page />
            },
            {
              path: 'register-v4',
              element: <RegisterV4Page />
            },
            {
              path: 'register-v5',
              element: <RegisterV5Page />
            },
            {
              path: 'reset-password-v1',
              element: <ResetPasswordV1Page />
            },
            {
              path: 'reset-password-v2',
              element: <ResetPasswordV2Page />
            },
            {
              path: 'reset-password-v3',
              element: <ResetPasswordV3Page />
            },
            {
              path: 'reset-password-v4',
              element: <ResetPasswordV4Page />
            },
            {
              path: 'reset-password-v5',
              element: <ResetPasswordV5Page />
            },
            {
              path: 'change-password-v1',
              element: <ChangePasswordV1Page />
            },
            {
              path: 'change-password-v2',
              element: <ChangePasswordV2Page />
            },
            {
              path: 'change-password-v3',
              element: <ChangePasswordV3Page />
            },
            {
              path: 'change-password-v4',
              element: <ChangePasswordV4Page />
            },
            {
              path: 'change-password-v5',
              element: <ChangePasswordV5Page />
            }
          ]
        }
      ]
    }
  ]
};

export default PagesRoutes;
