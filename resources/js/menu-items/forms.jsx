
// ==============================|| MENU ITEMS - FORM ||============================== //

const formComponents = {
  id: 'forms',
  title: 'forms',
  type: 'group',
  children: [
    {
      id: 'form-elements',
      title: 'form elements',
      type: 'collapse',
      icon: 'ph ph-textbox',
      children: [
        {
          id: 'form-basic',
          title: 'form basic',
          type: 'item',
          url: '/forms/form-elements/basic'
        },
        
      ]
    }
  ]
};

export default formComponents;
