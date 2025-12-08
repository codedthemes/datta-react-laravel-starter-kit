// react-bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// project-imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import avatar2 from '@assets/images/user/avatar-2.png';
import avatar3 from '@assets/images/user/avatar-3.png';
import avatar4 from '@assets/images/user/avatar-4.png';
import avatar5 from '@assets/images/user/avatar-5.png';

interface Message {
  id: string;
  src: string;
  name: string;
  message: string;
  status: 'active' | 'inactive';
  time?: string;
}

// user data
const userMessages: Message[] = [
  { id: 'msg-1', src: avatar1, name: 'Alex', message: 'Cheers!', status: 'active' },
  { id: 'msg-2', src: avatar2, name: 'John Doue', message: 'Stay hungry!', status: 'active' },
  { id: 'msg-3', src: avatar3, name: 'Alex', message: 'Cheers!', status: 'inactive', time: '30 min' },
  { id: 'msg-4', src: avatar4, name: 'John Doue', message: 'Cheers!', status: 'inactive', time: '10 min' },
  { id: 'msg-5', src: avatar5, name: 'Shirley Hoe', message: 'Stay hungry!', status: 'active' },
  { id: 'msg-6', src: avatar1, name: 'John Doue', message: 'Cheers!', status: 'active' },
  { id: 'msg-7', src: avatar2, name: 'Jon Alex', message: 'Stay hungry!', status: 'active' },
  { id: 'msg-8', src: avatar3, name: 'John Doue', message: 'Cheers!', status: 'inactive', time: '10 min ago' }
];

// ==============================|| SOCIAL PROFILE - MESSAGE LIST ||============================== //

export default function MessageList() {
  return (
    <Card className="new-cust-card">
      <Card.Header>
        <h5 className="mb-0">Message</h5>
      </Card.Header>
      <SimpleBarScroll style={{ maxHeight: '415px' }}>
        <Card.Body>
          {userMessages.map((msg) => (
            <Stack
              key={msg.id}
              direction="horizontal"
              className={`align-items-center ${msg !== userMessages[userMessages.length - 1] && 'mb-3'}`}
            >
              <Image src={msg.src} alt="user" roundedCircle className="me-2" width={50} height={50} />
              <Stack direction="horizontal" className="justify-content-between w-100">
                <div>
                  <a href="#!" className="text-decoration-none">
                    <h6 className="mb-1">{msg.name}</h6>
                  </a>
                  <p className="mb-0">{msg.message}</p>
                </div>
                {msg.status === 'active' ? (
                  <span className="status-dot bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                ) : (
                  <span className="text-muted small">{msg.time}</span>
                )}
              </Stack>
            </Stack>
          ))}
        </Card.Body>
      </SimpleBarScroll>
    </Card>
  );
}
