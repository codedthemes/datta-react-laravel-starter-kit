// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - ADMIN PANEL ||============================== //

const adminPanel: NavItemType = {
  id: 'admin-panel',
  title: 'admin-panel',
  type: 'group',
  children: [
    {
      id: 'online-course',
      title: 'online-course',
      type: 'collapse',
      icon: <i className="ti ti-book" />,
      children: [
        {
          id: 'dashboard',
          title: 'dashboard',
          type: 'item',
          url: '/online-course/dashboard'
        },
        {
          id: 'teacher',
          title: 'teacher',
          type: 'collapse',
          children: [
            {
              id: 'list',
              title: 'list',
              type: 'item',
              url: '/online-course/teacher/list'
            },
            {
              id: 'apply',
              title: 'apply',
              type: 'item',
              url: '/online-course/teacher/apply'
            },
            {
              id: 'add',
              title: 'add',
              type: 'item',
              url: '/online-course/teacher/add'
            }
          ]
        },
        {
          id: 'student',
          title: 'student',
          type: 'collapse',
          children: [
            {
              id: 'list',
              title: 'list',
              type: 'item',
              url: '/online-course/student/list'
            },
            {
              id: 'apply',
              title: 'apply',
              type: 'item',
              url: '/online-course/student/apply'
            },
            {
              id: 'add',
              title: 'add',
              type: 'item',
              url: '/online-course/student/add'
            }
          ]
        },
        {
          id: 'course',
          title: 'course',
          type: 'collapse',
          children: [
            {
              id: 'view',
              title: 'view',
              type: 'item',
              url: '/online-course/course/view'
            },
            {
              id: 'add',
              title: 'add',
              type: 'item',
              url: '/online-course/course/add'
            }
          ]
        },
        {
          id: 'pricing',
          title: 'pricing',
          type: 'item',
          url: '/online-course/pricing'
        },
        {
          id: 'site',
          title: 'site',
          type: 'item',
          url: '/online-course/site'
        },
        {
          id: 'setting',
          title: 'setting',
          type: 'collapse',
          children: [
            {
              id: 'payment',
              title: 'payment',
              type: 'item',
              url: '/online-course/setting/payment'
            },
            {
              id: 'pricing',
              title: 'pricing',
              type: 'item',
              url: '/online-course/setting/pricing'
            },
            {
              id: 'notification',
              title: 'notification',
              type: 'item',
              url: '/online-course/setting/notification'
            }
          ]
        }
      ]
    },

    {
      id: '/membership',
      title: 'membership',
      type: 'collapse',
      icon: <i className="ti ti-users" />,
      url: '/admin-panel/membership/dashboard',
      children: [
        {
          id: 'dashboard',
          title: 'dashboard',
          type: 'item',
          url: '/admin-panel/membership/dashboard'
        },
        {
          id: 'list',
          title: 'list',
          type: 'item',
          url: '/admin-panel/membership/list'
        },
        {
          id: 'pricing',
          title: 'pricing',
          type: 'item',
          url: '/admin-panel/membership/pricing'
        },
        {
          id: 'setting',
          title: 'setting',
          type: 'item',
          url: '/admin-panel/membership/setting'
        }
      ]
    },
    {
      id: '/helpdesk',
      title: 'helpdesk',
      type: 'collapse',
      icon: <i className="ti ti-help" />,
      children: [
        {
          id: 'dashboard',
          title: 'dashboard',
          type: 'item',
          url: '/admin-panel/helpdesk/dashboard'
        },
        {
          id: 'ticket',
          title: 'ticket',
          type: 'collapse',
          children: [
            {
              id: 'create',
              title: 'create',
              type: 'item',
              url: '/admin-panel/helpdesk/ticket/create'
            },
            {
              id: 'list',
              title: 'list',
              type: 'item',
              url: '/admin-panel/helpdesk/ticket/list'
            },
            {
              id: 'details',
              title: 'details',
              type: 'item',
              url: '/admin-panel/helpdesk/ticket/details'
            }
          ]
        },
        {
          id: 'customers',
          title: 'customers',
          type: 'item',
          url: '/admin-panel/helpdesk/customers'
        }
      ]
    },
    {
      id: '/invoice',
      title: 'invoice',
      type: 'collapse',
      icon: <i className="ti ti-help" />,
      children: [
        {
          id: 'dashboard',
          title: 'dashboard',
          type: 'item',
          url: '/admin-panel/invoice/dashboard'
        },
        {
          id: 'create',
          title: 'create',
          type: 'item',
          url: '/admin-panel/invoice/create'
        },
        {
          id: 'details',
          title: 'details',
          type: 'item',
          url: '/admin-panel/invoice/details'
        },
        {
          id: 'list',
          title: 'list',
          type: 'item',
          url: '/admin-panel/invoice/list'
        },
        {
          id: 'edit',
          title: 'edit',
          type: 'item',
          url: '/admin-panel/invoice/edit'
        }
      ]
    }
  ]
};

export default adminPanel;
