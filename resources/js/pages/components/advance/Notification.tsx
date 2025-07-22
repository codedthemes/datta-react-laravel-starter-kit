// third-party
import { ToastContainer } from 'react-toastify';

// project-imports
import DismissNotification from 'sections/components/advance/notification/Dismiss';
import NotificationAlert from 'sections/components/advance/notification/Alert';
import NotificationColored from 'sections/components/advance/notification/ColoredNotification';
import NotificationIcon from 'sections/components/advance/notification/Icon';
import ReferenceHeader from 'components/ReferenceHeader';

// ==============================|| ADVANCED - NOTIFICATION ||============================== //

export default function NotificationPage() {
  return (
    <>
      <ReferenceHeader
        caption="Beautiful notifications with CSS and React!"
        link="https://fkhadra.github.io/react-toastify/introduction/"
      />
      <ToastContainer />
      <NotificationAlert />
      <NotificationIcon />
      <NotificationColored />
      <DismissNotification />
    </>
  );
}
