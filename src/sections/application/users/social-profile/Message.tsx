// react-bootstrap
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// third-party
import SimpleBar from 'simplebar-react';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avtar1 from 'assets/images/user/avatar-1.jpg';
import avtar2 from 'assets/images/user/avatar-2.jpg';
import avtar3 from 'assets/images/user/avatar-3.jpg';
import avtar4 from 'assets/images/user/avatar-4.jpg';
import avtar5 from 'assets/images/user/avatar-5.jpg';

interface Message {
  src: string;
  name: string;
  message: string;
  status: 'active' | 'deactive';
  time?: string;
}

const messages: Message[] = [
  { src: avtar1, name: 'Alex', message: 'Cheers!', status: 'active' },
  { src: avtar2, name: 'John Doue', message: 'Stay hungry!', status: 'active' },
  { src: avtar3, name: 'Alex', message: 'Cheers!', status: 'deactive', time: '30 min' },
  { src: avtar4, name: 'John Doue', message: 'Cheers!', status: 'deactive', time: '10 min' },
  { src: avtar5, name: 'Shirley Hoe', message: 'Stay hungry!', status: 'active' },
  { src: avtar1, name: 'John Doue', message: 'Cheers!', status: 'active' },
  { src: avtar2, name: 'Jon Alex', message: 'Stay hungry!', status: 'active' },
  { src: avtar3, name: 'John Doue', message: 'Cheers!', status: 'deactive', time: '10 min ago' }
];

// ==============================|| SOCIAL PROFILE - MESSAGE LIST ||============================== //

export default function MessageList() {
  return (
    <MainCard title="Messages" className="new-cust-card" bodyClassName="p-b-0">
      <SimpleBar style={{ maxHeight: '415px' }}>
        {messages.map((msg, index) => (
          <Stack key={index} direction="horizontal" className="align-items-center mb-3">
            <Image src={msg.src} alt="user" roundedCircle className="me-3" width={50} height={50} />
            <div>
              <a href="#!" className="text-decoration-none">
                <h6 className="mb-1">{msg.name}</h6>
              </a>
              <p className="mb-1">{msg.message}</p>
              <span className={`status ${msg.status}`}>{msg.time || ''}</span>
            </div>
          </Stack>
        ))}
      </SimpleBar>
    </MainCard>
  );
}
