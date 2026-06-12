// Import avatar images
import Img1 from '@assets/images/user/avatar-1.png';
import Img2 from '@assets/images/user/avatar-2.png';
import Img3 from '@assets/images/user/avatar-3.png';
import Img4 from '@assets/images/user/avatar-4.png';

export const initialTasks = [
  {
    id: 12,
    title: 'Add Proper Cursor In Sortable Page',
    status: 'Open',
    name: 'Joseph',
    assignedUsers: [
      { img: Img1, name: 'Joseph' },
      { img: Img2, name: 'William' },
      { img: Img3, name: 'Joseph' },
      { img: Img4, name: 'William' }
    ],
    extraUsers: 5,
    dueDate: '2024-01-15'
  },
  {
    id: 56,
    title: 'Edit the draft for the icons',
    status: 'In Progress',
    name: 'William',
    assignedUsers: [
      { img: Img1, name: 'Joseph' },
      { img: Img2, name: 'William' },
      { img: Img3, name: 'Joseph' },
      { img: Img4, name: 'William' }
    ],
    extraUsers: 2,
    dueDate: '2024-01-20'
  },
  {
    id: 78,
    title: 'Create UI design model',
    status: 'Review',
    name: 'Joseph',
    assignedUsers: [
      { img: Img1, name: 'Joseph' },
      { img: Img2, name: 'William' },
      { img: Img3, name: 'Joseph' }
    ],
    dueDate: '2024-01-25'
  },
  {
    id: 89,
    title: 'Implement responsive design',
    status: 'Open',
    name: 'William',
    assignedUsers: [
      { img: Img1, name: 'Joseph' },
      { img: Img2, name: 'William' },
      { img: Img3, name: 'Joseph' },
      { img: Img4, name: 'William' }
    ],
    dueDate: '2024-01-30'
  },
  {
    id: 14,
    title: 'Optimize performance',
    status: 'Completed',
    name: 'Joseph',
    assignedUsers: [{ img: Img1, name: 'Joseph' }],
    dueDate: '2024-01-10'
  }
];

export const taskStatus = [
  { value: 'Open', label: 'Open', color: 'primary' },
  { value: 'In Progress', label: 'In Progress', color: 'warning' },
  { value: 'Review', label: 'Review', color: 'info' },
  { value: 'Completed', label: 'Completed', color: 'success' },
  { value: 'On Hold', label: 'On Hold', color: 'secondary' },
  { value: 'Cancelled', label: 'Cancelled', color: 'danger' }
];
