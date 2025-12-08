import Avatar1 from '@assets/images/user/avatar-1.png';
import Avatar2 from '@assets/images/user/avatar-2.png';
import Avatar3 from '@assets/images/user/avatar-3.png';
import Avatar4 from '@assets/images/user/avatar-4.png';
import Avatar5 from '@assets/images/user/avatar-5.png';

import Product1 from '@assets/images/admin/p1.jpg';
import Product2 from '@assets/images/admin/p2.jpg';
import Product3 from '@assets/images/admin/p3.jpg';
import Product4 from '@assets/images/admin/p4.jpg';
import Product5 from '@assets/images/admin/p5.jpg';

import Image1 from '@assets/images/gallery-grid/img-grd-gal-1.jpg';
import Image2 from '@assets/images/gallery-grid/img-grd-gal-2.jpg';
import Image3 from '@assets/images/gallery-grid/img-grd-gal-3.jpg';
import Image4 from '@assets/images/gallery-grid/img-grd-gal-4.jpg';
import Image5 from '@assets/images/gallery-grid/img-grd-gal-5.jpg';

// support card data
export const supportData = [
  {
    count: 350,
    title: 'Support Requests',
    details: 'Total number of support requests that come in.',
    color: '#3ebfea',
    bgColor: 'bg-info',
    open: 10,
    running: 5,
    solved: 3,
    fullWidth: false,
    chartData: [0, 20, 10, 45, 30, 55, 20, 30, 0]
  },
  {
    count: 500,
    title: 'Agent Response',
    details: 'Total number of support requests that come in.',
    color: '#04A9F5',
    bgColor: 'bg-primary',
    open: 50,
    running: 75,
    solved: 30,
    fullWidth: false,
    chartData: [0, 20, 10, 45, 30, 55, 20, 30, 0]
  },
  {
    count: 800,
    title: 'Support Resolved',
    details: 'Total number of support requests that come in.',
    color: '#1DE9B6',
    bgColor: 'bg-success',
    open: 80,
    running: 60,
    solved: 90,
    fullWidth: true,
    chartData: [0, 20, 10, 45, 30, 55, 20, 30, 0]
  }
];

// social source data
export const sourceData = [
  {
    title: 'Facebook Source',
    color: 'primary',
    progressData: [
      { label: 'Page Profile', value: 25 },
      { label: 'Favorite', value: 80 },
      { label: 'Like Story', value: 70 }
    ]
  },
  {
    title: 'Twitter Source',
    color: 'danger',
    progressData: [
      { label: 'Wall Profile', value: 85 },
      { label: 'Favorite', value: 25 },
      { label: 'Like Tweets', value: 70 }
    ]
  }
];

// latest activity data
export const feeds = [
  {
    icon: 'ph ph-bell',
    bgColor: 'bg-light-primary',
    text: 'You have 3 pending tasks.',
    time: 'Just Now'
  },
  {
    icon: 'ph ph-shopping-cart',
    bgColor: 'bg-light-danger',
    text: 'New order received',
    textColor: 'text-danger',
    time: 'Just Now'
  },
  {
    icon: 'ph ph-file-text',
    bgColor: 'bg-light-success',
    text: 'You have 3 pending tasks.',
    time: 'Just Now'
  },
  {
    icon: 'ph ph-shopping-cart',
    bgColor: 'bg-light-warning',
    text: 'New order received',
    time: 'Just Now'
  },
  {
    icon: 'ph ph-bell',
    bgColor: 'bg-light-primary',
    text: 'You have 3 pending tasks.',
    time: 'Just Now'
  },
  {
    icon: 'ph ph-shopping-cart',
    bgColor: 'bg-light-danger',
    text: 'New order received',
    time: 'Just Now'
  },

  {
    icon: 'ph ph-file-text',
    bgColor: 'bg-light-success',
    text: 'You have 3 pending tasks.',
    textColor: 'text-success',
    time: 'Just Now'
  },
  {
    icon: 'ph ph-shopping-cart',
    bgColor: 'bg-light-warning',
    text: 'New order received',
    textColor: 'text-warning',
    time: 'Just Now'
  }
];

// ticket data
export const ticketData = [
  {
    chipLabel: 'Replied',
    customerName: 'John Lui',
    ticketCount: 1,
    issueTitle: 'Theme customization issue',
    likes: 3,
    customerAvatar: Avatar1,
    productAvatar: Product1,
    productName: 'Piaf able',
    supporterAvatar: Avatar2,
    supporterName: 'Tom Hae',
    updateTime: '22 hours ago',
    addCode: '"toolbar-options" div only',
    removeCode: 'this div fill found every "td" tag in your page,',
    messageCount: 9
  },
  {
    chipLabel: 'Replied',
    customerName: 'John Lui',
    ticketCount: 1,
    issueTitle: 'Theme customization issue',
    likes: 3,
    customerAvatar: Avatar1,
    productAvatar: Product1,
    productName: 'Piaf able',
    supporterAvatar: Avatar2,
    supporterName: 'Tom Hae',
    updateTime: '22 hours ago',
    messageCount: 9,
    addCode: '"toolbar-options" div only',
    removeCode: 'this div fill found every "td" tag in your page,',
    proClass: 'open-ticket'
  },
  {
    chipLabel: 'Replied',
    customerName: 'John Lui',
    ticketCount: 1,
    issueTitle: 'Theme customization issue',
    likes: 3,
    customerAvatar: Avatar1,
    productAvatar: Product1,
    productName: 'Piaf able',
    supporterAvatar: Avatar2,
    supporterName: 'Tom Hae',
    updateTime: '22 hours ago',
    messageCount: 9,
    addCode: '"toolbar-options" div only',
    removeCode: 'this div fill found every "td" tag in your page,',
    proClass: 'close-ticket'
  }
];

// ticket notifications data
export const ticketNotificationsData = [
  {
    title: 'Ticket Categories',
    notifications: [
      { avatar: Product1, color: 'success', name: 'Piaf able', badges: { primary: '1', secondary: '3' } },
      { avatar: Product2, color: 'primary', name: 'Pro able', badges: { secondary: '3' } },
      { avatar: Product3, color: 'info', name: 'CRM admin', badges: { primary: '1', secondary: '3' } },
      { avatar: Product4, color: 'warning', name: 'Alpha pro', badges: { secondary: '3' } },
      { avatar: Product5, color: 'error', name: 'Carbon able', badges: { secondary: '3' } }
    ]
  },
  {
    title: 'Support Aggent',
    notifications: [
      { avatar: Avatar1, color: 'success', name: 'Tom Cook', badges: { primary: '1', secondary: '3' } },
      { avatar: Avatar2, color: 'primary', name: 'Brad Larry', badges: { primary: '1', secondary: '3' } },
      { avatar: Avatar3, color: 'info', name: 'Jhon White', badges: { secondary: '3' } },
      { avatar: Avatar4, color: 'warning', name: 'Mark Jobs', badges: { secondary: '3' } },
      { avatar: Avatar5, color: 'error', name: 'John lui', badges: { secondary: '3' } }
    ]
  }
];

// message card data
export const messageData = [
  {
    avatar: Avatar2,
    supportAgentName: 'Michael',
    customerName: 'John Luis',
    likes: 4,
    chipLabel: 'replied',
    timeAgo: '1 day ago on Wednesday at 8:18am',
    message: `<p>you need to create&nbsp;<strong>"toolbar-options" div only once</strong>&nbsp;in a page in your code, this div fill found&nbsp;<strong>every "td"</strong>&nbsp;tag in your page, just remove those things.</p><p>and also</p><p>in option button add&nbsp;<strong>"p-0" class in "I"</strong> tag&nbsp;to</p><p>Thanks...</p>`,
    images: [],
    ticketNumber: null,
    codeString: `<pre>
    <code class="language-css">
      p {
          color: #1abc9c
      }
    </code>
</pre>`
  },
  {
    avatar: Avatar1,
    likes: 4,
    supportAgentName: 'Robert Alia',
    customerName: 'John Luis',
    chipLabel: 'replied',
    timeAgo: '1 day ago on Wednesday at 8:18am',
    message: `<p>you need to create&nbsp;<strong>"toolbar-options" div only once</strong>&nbsp;in a page in your code, this div fill found&nbsp;<strong>every "td"</strong>&nbsp;tag in your page, just remove those things.</p><p>and also</p><p>in option button add&nbsp;<strong>"p-0" class in "I"</strong> tag&nbsp;to</p><p>Thanks...</p>`,
    images: [Image1, Image2, Image3, Image4, Image5],
    ticketNumber: 1,
    codeString: false
  },
  {
    avatar: Avatar2,
    likes: 4,
    supportAgentName: 'Michael',
    customerName: 'John Luis',
    chipLabel: 'replied',
    timeAgo: '1 day ago on Wednesday at 8:18am',
    message: `<p>you need to create&nbsp;<strong>"toolbar-options" div only once</strong>&nbsp;in a page in your code, this div fill found&nbsp;<strong>every "td"</strong>&nbsp;tag in your page, just remove those things.</p><p>and also</p><p>in option button add&nbsp;<strong>"p-0" class in "I"</strong> tag&nbsp;to</p><p>Thanks...</p>`,
    images: [],
    ticketNumber: null,
    codeString: `<pre>
    <code class="language-css">
      p {
          color: #1abc9c
      }
    </code>
</pre>`
  }
];

// ticket details list data
export const listData = [
  {
    primary: 'Customer',
    secondaryText: 'Jack Pall',
    avatar: { src: Avatar2, alt: 'Customer Avatar' }
  },
  {
    primary: 'Contact',
    secondaryText: 'mail@mail.com',
    icon: 'ph ph-envelope-simple'
  },
  {
    primary: 'Category',
    secondaryText: 'able pro',
    avatar: { src: Product1 }
  },
  {
    primary: 'Assigned',
    secondaryText: 'Lina Hop',
    avatar: { src: Avatar3, alt: 'Assigned Avatar' }
  },
  {
    primary: 'Created',
    secondaryText: 'Date',
    icon: 'ph ph-calendar-blank'
  },
  {
    primary: 'Response',
    secondaryText: 'Time',
    icon: 'ph ph-clock'
  }
];
