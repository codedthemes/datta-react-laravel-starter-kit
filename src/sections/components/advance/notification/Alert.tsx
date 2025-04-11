// react-bootstrap
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// third-party
import { toast } from 'react-toastify';

// project-imports
import MainCard from 'components/MainCard';

type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'default';

// ==============================|| NOTIFICATION - ALERT ||============================== //

export default function NotificationAlert() {
  const notify = (type: NotificationType) => {
    const notifications = {
      default: { title: 'Hello', message: 'I am a default notification.' },
      info: { title: 'Reminder!', message: 'You have a meeting at 10:30 AM.' },
      success: { title: 'Success!', message: 'You just submit your resume successfully.' },
      warning: { title: 'Warning!', message: 'The data presented here can be change.' },
      error: { title: 'Sorry!', message: 'Could not complete your transaction.' }
    };

    const { title, message } = notifications[type] || notifications.default;

    toast(
      <div>
        <h5 className="mb-1">{title}</h5>
        <p className="mb-0 custom-text">{message}</p>
      </div>,
      {
        autoClose: false,
        icon: false,
        className: `custom-toast ${type}-toast cutom-toast-${type}`,
        bodyClassName: 'custom-toast-body'
      }
    );
  };

  return (
    <MainCard title="Notification Alert">
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        <Button onClick={() => notify('default')}>Default</Button>
        <Button variant="info" onClick={() => notify('info')}>
          Info
        </Button>
        <Button variant="success" onClick={() => notify('success')}>
          Success
        </Button>
        <Button variant="warning" onClick={() => notify('warning')}>
          Warning
        </Button>
        <Button variant="danger" onClick={() => notify('error')}>
          Danger
        </Button>
      </Stack>
    </MainCard>
  );
}
