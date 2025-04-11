// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - APPLICATION ||============================== //

const application: NavItemType = {
  id: 'group-application',
  title: 'application',
  type: 'group',
  children: [
    {
      id: 'calendar',
      title: 'calendar',
      type: 'item',
      icon: <i className="ti ti-calendar" />,
      url: '/application/calendar'
    },
    {
      id: 'message',
      title: 'message',
      type: 'item',
      icon: <i className="ti ti-message" />,
      url: '/application/message'
    },
    {
      id: 'task',
      title: 'task',
      type: 'collapse',
      icon: <i className="ti ti-clipboard" />,
      children: [
        {
          id: 'list',
          title: 'list',
          type: 'item',
          url: '/application/task/list'
        },
        {
          id: 'board',
          title: 'board',
          type: 'item',
          url: '/application/task/board'
        },
        {
          id: 'details',
          title: 'details',
          type: 'item',
          url: '/application/task/detail'
        }
      ]
    },
    {
      id: 'todo',
      title: 'todo',
      type: 'item',
      icon: <i className="ti ti-checkbox" />,
      url: '/application/todo'
    },
    {
      title: 'users',
      type: 'collapse',
      icon: <i className="ti ti-server" />,
      children: [
        {
          id: 'profile',
          title: 'profile',
          type: 'item',
          url: '/application/users/profile'
        },
        {
          id: 'social-profile',
          title: 'social-profile',
          type: 'item',
          url: '/application/users/social-profile'
        },
        {
          id: 'user-card',
          title: 'user-card',
          type: 'item',
          url: '/application/users/user-card'
        },
        {
          id: 'user-list',
          title: 'user-list',
          type: 'item',
          url: '/application/users/user-list'
        }
      ]
    },
    {
      id: 'gallery',
      title: 'gallery',
      type: 'collapse',
      icon: <i className="ti ti-photo" />,
      children: [
        {
          id: 'grid',
          title: 'grid',
          type: 'item',
          url: '/application/gallery/grid'
        },
        {
          id: 'masonry',
          title: 'masonry',
          type: 'item',
          url: '/application/gallery/masonry'
        },
        {
          id: 'advance',
          title: 'advance',
          type: 'item',
          url: '/application/gallery/advance'
        }
      ]
    },
    {
      id: 'invoice',
      title: 'invoice',
      type: 'collapse',
      icon: <i className="ti ti-file-invoice" />,
      children: [
        {
          id: 'invoice',
          title: 'invoice',
          type: 'item',
          url: '/application/invoice/invoice'
        },
        {
          id: 'invoice-summary',
          title: 'invoice-summary',
          type: 'item',
          url: '/application/invoice/summary'
        },
        {
          id: 'invoice-list',
          title: 'invoice-list',
          type: 'item',
          url: '/application/invoice/list'
        }
      ]
    }
  ]
};

export default application;
