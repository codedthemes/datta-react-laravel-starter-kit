// third-party
import { ToastContainer } from 'react-toastify';

// project-imports
import DismissNotification from 'sections/components/advance/notification/Dismiss';
import NotificationAlert from 'sections/components/advance/notification/Alert';
import NotificationAutoClose from 'sections/components/advance/notification/AutoClose';
import NotificationIcon from 'sections/components/advance/notification/Icon';
import ComponentHeader from 'components/cards/ComponentHeader';

// ==============================|| ADVANCED - NOTIFICATION ||============================== //

export default function NotificationPage() {
  return (
    <>
      <ComponentHeader
        caption="Beautiful notifications with CSS and React!"
        link="https://fkhadra.github.io/react-toastify/introduction/"
      />
      <ToastContainer />
      <NotificationAlert />
      <NotificationIcon />
      <NotificationAutoClose />
      <DismissNotification />
    </>
  );
}
