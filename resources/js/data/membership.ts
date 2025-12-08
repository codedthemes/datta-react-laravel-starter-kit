// dashboard widget card data
export const dashboardWidgetData = [
  {
    title: 'Registrations',
    value: '980+',
    content: 'May 23 - June 01 (2018)',
    iconPrimary: 'ph ph-book-bookmark',
    bgColor: 'bg-light-primary'
  },
  {
    title: 'Renewals',
    value: '1,563',
    content: 'May 23 - June 01 (2018)',
    iconPrimary: 'ph ph-rocket',
    bgColor: 'bg-light-success'
  },
  {
    title: 'Revenue',
    value: '42.6%',
    content: 'May 23 - June 01 (2018)',
    iconPrimary: 'ph ph-credit-card',
    bgColor: 'bg-light-warning'
  },
  {
    title: 'Cancelations',
    value: '32.4%',
    content: 'May 23 - June 01 (2018)',
    iconPrimary: 'ph ph-user-minus',
    bgColor: 'bg-light-danger'
  }
];

export const calenderData = [
  {
    date: 'Aug 10, Mon',
    selectedToday: true,
    items: [
      { title: 'Realize offers!', time: '16:00', border: 'success' },
      { title: 'Add new members.', time: '14:00', border: 'warning' },
      { title: 'Add new benefit list.', time: '13:00', border: 'primary' },
      { title: 'Second offer is end!', time: '09:00', border: 'danger' }
    ]
  }
];

export const pricingPlans = [
  {
    name: 'Casual',
    price: 50,
    color: 'success',
    features: ['Full Facility Access', 'Meals plans', '10% Discounts', 'Cancel anytime']
  },
  {
    name: 'Addicted',
    price: 150,
    color: 'primary',
    features: ['Full Facility Access', 'Meals plans', '50% Discounts', 'Cancel anytime', 'Basic feature']
  },
  {
    name: 'Diehard',
    price: 250,
    color: 'warning',
    features: ['Full Facility Access', 'Meals plans', '75% Discounts', 'Primmum feature', 'Cancel anytime', 'Online booking']
  }
];
