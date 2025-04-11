// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

const notifications = [
  { id: 1, message: 'New order received', time: '12:56', unreadCount: '2 unread notification' },
  { id: 2, message: 'Payment processed', time: '12:36', unreadCount: 'xx messages' },
  { id: 3, message: 'Customer review received', time: '11:45', unreadCount: '2 read notification' }
];

// ==============================|| WIDGETS DATA - NOTIFICATIONS 2 ||============================== //

export default function WidgetDataNotifications2() {
  return (
    <MainCard title="Notifications" bodyClassName="p-0">
      <div className="card note-bar mb-0">
        {notifications.map((notification) => (
          <Stack
            direction="horizontal"
            as="a"
            key={notification.id}
            href="#!"
            className=" p-25 friendlist-box align-items-center text-decoration-none"
          >
            <div className="flex-shrink-0">
              <i className="far fa-bell f-30" />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6 className="mb-1">{notification.message}</h6>
              <span className="f-12 float-end text-muted">{notification.time}</span>
              <p className="text-muted m-0">{notification.unreadCount} </p>
            </div>
          </Stack>
        ))}
        <Stack direction="horizontal" className=" friendlist-box border-top">
          <div className="flex-shrink-0">
            <i className="far fa-bell f-30" />
          </div>
          <div className="flex-grow-1 ms-3">
            <h6>New order prepend</h6>
            <span className="f-12 float-end text-muted">09:39</span>
            <p className="text-muted m-0">xx messages</p>
          </div>
        </Stack>
      </div>
    </MainCard>
  );
}
