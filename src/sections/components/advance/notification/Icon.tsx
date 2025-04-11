// react-bootstrap
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// third-party
import { toast } from 'react-toastify';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Img1 from 'assets/images/notification/clock-48.png';
import Img2 from 'assets/images/notification/survey-48.png';
import Img3 from 'assets/images/notification/ok-48.png';
import Img4 from 'assets/images/notification/medium_priority-48.png';
import Img5 from 'assets/images/notification/high_priority-48.png';

type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'default';

// ==============================|| NOTIFICATION - ICON ||============================== //

export default function NotificationIcon() {
  const notify = (type: NotificationType) => {
    const notifications = {
      default: { title: 'Default!', message: 'I am a default notification..', img: Img1 },
      info: { title: 'Reminder!', message: 'You have a meeting at 10:30 AM.', img: Img2 },
      success: { title: 'Well Done!', message: 'You just submit your resume successfully.', img: Img3 },
      warning: { title: 'Warning!', message: 'The data presented here can be change.', img: Img4 },
      error: { title: 'Sorry!', message: 'Could not complete your transaction.', img: Img5 }
    };
    const { title, message, img } = notifications[type] || notifications.default;

    toast(
      <Stack direction="horizontal" gap={2}>
        <Image src={img} className="img" thumbnail />
        <div>
          <h5 className="mb-0">{title}</h5>
          <p className="mb-0 custom-text">{message}</p>
        </div>
      </Stack>,
      {
        autoClose: false,
        icon: false,
        className: `custom-toast ${type}-toast cutom-toast-${type}`,
        bodyClassName: 'custom-toast-body'
      }
    );
  };
  return (
    <MainCard title="Notification with Icons">
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        <Button onClick={() => notify('default')}>Default</Button>
        <Button className="btn-info" onClick={() => notify('info')}>
          Info
        </Button>
        <Button className="btn-success" onClick={() => notify('success')}>
          Success
        </Button>
        <Button className="btn-warning" onClick={() => notify('warning')}>
          Warning
        </Button>
        <Button className="btn-danger" onClick={() => notify('error')}>
          Danger
        </Button>
      </Stack>
    </MainCard>
  );
}
