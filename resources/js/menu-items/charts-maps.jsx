
// ==============================|| MENU ITEMS - CHARTS & MAPS ||============================== //

const chartsMaps = {
  id: 'charts-maps',
  title: 'charts-maps',
  type: 'group',
  children: [
    {
      id: 'charts',
      title: 'charts',
      type: 'collapse',
      icon: 'ph ph-chart-donut',
      children: [
        {
          id: 'apex-chart',
          title: 'apex chart',
          type: 'item',
          url: '/charts/apex-chart'
        }
      ]
    },
    {
      id: 'map',
      title: 'map',
      type: 'collapse',
      icon: 'ph ph-map-trifold',
      children: [
        {
          id: 'google-map',
          title: 'google map',
          type: 'item',
          url: '/map/google-map'
        }
      ]
    }
  ]
};

export default chartsMaps;
