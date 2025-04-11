// types
import { NavItemType } from 'types/menu';

const icons = { dashboard: <i className="ti ti-home" />, layouts: <i className="ti ti-home" /> };

const navigation: NavItemType = {
  id: 'group-dashboard-loading-unique',
  title: 'navigation',
  type: 'group',
  icon: icons.dashboard,
  children: [
    {
      id: 'dashboard',
      title: 'dashboard',
      type: 'collapse',
      icon: icons.dashboard,
      children: [
        {
          id: 'default',
          title: 'default',
          type: 'item',
          url: '/dashboard/default'
        },
        {
          id: 'e-commerce',
          title: 'e-commerce',
          type: 'item',
          url: '/dashboard/ecommerce'
        },
        {
          id: 'crm',
          title: 'crm',
          type: 'item',
          url: '/dashboard/crm'
        },
        {
          id: 'analytics',
          title: 'analytics',
          type: 'item',
          url: '/dashboard/analytics'
        },
        {
          id: 'crypto',
          title: 'crypto',
          type: 'item',
          url: '/dashboard/crypto'
        },
        {
          id: 'finance',
          title: 'finance',
          type: 'item',
          url: '/dashboard/finance'
        },
        {
          id: 'project',
          title: 'project',
          type: 'item',
          url: '/dashboard/project'
        }
      ]
    },
    {
      id: 'layouts',
      title: 'layouts',
      type: 'collapse',
      icon: <i className="ti ti-layout" />,
      children: [
        {
          id: 'vertical',
          title: 'vertical',
          type: 'item',
          url: 'layouts/vertical',
          layout: 'vertical'
        },
        {
          id: 'horizontal',
          title: 'horizontal',
          type: 'item',
          url: 'layouts/horizontal',
          layout: 'horizontal'
        },
        {
          id: 'compact',
          title: 'compact',
          type: 'item',
          url: 'layouts/compact',
          layout: 'compact'
        },
        {
          id: 'tab',
          title: 'tab',
          type: 'item',
          url: 'layouts/tab',
          layout: 'tab'
        },
        {
          id: 'layout-2',
          title: 'layout-2',
          type: 'item',
          url: 'layouts/layout-2',
          layout: 'layout-2'
        },
        {
          id: 'layout-3',
          title: 'layout-3',
          type: 'item',
          url: 'layouts/layout-3',
          layout: 'layout-3'
        }
      ]
    },
    {
      id: 'widget',
      title: 'widget',
      type: 'collapse',
      icon: <i className="ti ti-stack" />,
      children: [
        {
          id: 'statistics',
          title: 'statistics',
          type: 'item',
          url: 'widget/statistics'
        },
        {
          id: 'data',
          title: 'data',
          type: 'item',
          url: 'widget/data'
        },
        {
          id: 'table',
          title: 'table',
          type: 'item',
          url: 'widget/table'
        },
        {
          id: 'user',
          title: 'user',
          type: 'item',
          url: 'widget/user'
        },
        {
          id: 'chart',
          title: 'chart',
          type: 'item',
          url: 'widget/chart'
        }
      ]
    }
  ]
};

export default navigation;
