
// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'pages',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'authentication',
      type: 'collapse',
      icon: 'ph ph-lock-key',
      children: [
        {
          id: 'login',
          title: 'login',
          type: 'item',
          url: '/auth/login-v1',
          target: true
        },
        {
          id: 'register',
          title: 'register',
          type: 'item',
          url: '/auth/register-v1',
          target: true
        }
      ]
    }
  ]
};

export default pages;
