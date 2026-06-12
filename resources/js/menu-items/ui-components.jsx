
// ==============================|| MENU ITEMS - UI-COMPONENTS ||============================== //

const uiComponents = {
  id: 'group-ui-components',
  title: 'ui components',
  type: 'group',
  children: [
    {
      id: 'basic',
      title: 'basic',
      icon: 'ph ph-pencil-ruler',
      type: 'collapse',
      children: [
        {
          id: 'button',
          title: 'button',
          type: 'item',
          url: '/basic/buttons'
        },
        {
          id: 'badges',
          title: 'badges',
          type: 'item',
          url: '/basic/badges'
        },
        {
          id: 'breadcrumb',
          title: 'breadcrumb',
          type: 'item',
          url: '/basic/breadcrumb'
        },
        {
          id: 'collapse',
          title: 'collapse',
          type: 'item',
          url: '/basic/collapse'
        },
        {
          id: 'tabs-pills',
          title: 'tabs-pills',
          type: 'item',
          url: '/basic/tabs-pills'
        },

        {
          id: 'typography',
          title: 'typography',
          type: 'item',
          url: '/basic/typography'
        }
      ]
    }
  ]
};

export default uiComponents;
