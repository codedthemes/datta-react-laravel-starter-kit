import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| PROFILE - EMAIL SETTINGS ||============================== //

export default function EmailSettings() {
  const [notifications, setNotifications] = useState({
    emailNotification: true,
    copyToPersonal: false,
    newNotifications: true,
    directMessage: true,
    newConnection: true,
    newOrder: true,
    membershipApproval: true,
    memberRegistration: true,
    newsUpdates: true,
    tips: true,
    missedUpdates: true,
    productNews: true,
    businessTips: true
  });

  type NotificationKey = keyof typeof notifications;

  const handleToggle = (key: NotificationKey) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const emailOptions = [
    { key: 'newNotifications' as NotificationKey, label: 'Have new notifications' },
    { key: 'directMessage' as NotificationKey, label: "You're sent a direct message" },
    { key: 'newConnection' as NotificationKey, label: 'Someone adds you as a connection' }
  ];

  const escalationOptions = [
    { key: 'newOrder' as NotificationKey, label: 'Upon new order' },
    { key: 'membershipApproval' as NotificationKey, label: 'New membership approval' },
    { key: 'memberRegistration' as NotificationKey, label: 'Member registration' }
  ];

  const systemOptions = [
    { key: 'newsUpdates' as NotificationKey, label: 'News about PCT-themes products and feature updates' },
    { key: 'tips' as NotificationKey, label: 'Tips on getting more out of PCT-themes' },
    { key: 'missedUpdates' as NotificationKey, label: 'Things you missed since last login' },
    { key: 'productNews' as NotificationKey, label: 'News about products and other services' },
    { key: 'businessTips' as NotificationKey, label: 'Tips and Document business products' }
  ];

  const NotificationGroup = ({
    title,
    items,
    type = 'switch'
  }: {
    title: string;
    items: { key: NotificationKey; label: string }[];
    type?: 'switch' | 'checkbox';
  }) => (
    <>
      <h6 className="mt-4 m-l-20">{title}</h6>
      {items.map(({ key, label }) => (
        <Form.Check
          className="m-l-20"
          key={key}
          type={type}
          id={key}
          label={label}
          checked={notifications[key]}
          onChange={() => handleToggle(key)}
        />
      ))}
    </>
  );

  return (
    <MainCard
      title={
        <h5>
          <i className="ph ph-envelope-open align-text-bottom text-primary f-20" /> Email Settings
        </h5>
      }
      bodyClassName="p-0"
      footerClassName="text-end pt-0"
      footer={
        <>
          <Button variant="warning">Update Change</Button>
          <Button variant="outline-dark" className="ms-2">
            Clear
          </Button>
        </>
      }
    >
      <ListGroup variant="flush">
        <ListGroup.Item className="py-4">
          <h5>Setup Email Notification</h5>
          <Form className="mt-3 m-l-20">
            <Form.Check
              type="switch"
              id="emailNotification"
              label="Email Notification"
              checked={notifications.emailNotification}
              onChange={() => handleToggle('emailNotification')}
            />
            <Form.Check
              type="switch"
              id="copyToPersonal"
              label="Send Copy To Personal Email"
              checked={notifications.copyToPersonal}
              onChange={() => handleToggle('copyToPersonal')}
            />
          </Form>
        </ListGroup.Item>
        <ListGroup.Item className="py-4">
          <h5>Activity Related Emails</h5>
          <NotificationGroup title="When to email?" items={emailOptions} />
          <NotificationGroup title="When to escalate emails?" items={escalationOptions} />
        </ListGroup.Item>
        <ListGroup.Item className="py-4">
          <h5>Updates From System Notification</h5>
          <NotificationGroup title="Email you with?" items={systemOptions} type="checkbox" />
        </ListGroup.Item>
      </ListGroup>
    </MainCard>
  );
}
