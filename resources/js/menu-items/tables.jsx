
// ==============================|| MENU ITEMS - TABLES ||============================== //

const tableComponents = {
  id: 'tables',
  title: 'tables',
  type: 'group',
  children: [
    {
      id: 'bootstrap-table',
      title: 'bootstrap table',
      type: 'collapse',
      icon: 'ph ph-table',
      children: [
        {
          id: 'basic-table',
          title: 'basic table',
          type: 'item',
          url: '/tables/bootstrap-table/basic-table'
        }
      ]
    }
  ]
};

export default tableComponents;
