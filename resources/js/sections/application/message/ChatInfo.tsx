// react-bootstrap
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// project-imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';

// assets
import Avatar5 from '@assets/images/user/avatar-5.png';

interface UserItem {
  icon: string;
  text?: string;
  link?: string;
  badge?: {
    text: string;
  };
}

interface FileItem {
  icon: string;
  iconClass: string;
  title: string;
  subtitle: string;
  link?: string;
}

const userDetails: UserItem[] = [
  { icon: 'ti ti-map-pin', text: '32188 Sips Parkways, U.S' },
  { icon: 'ph ph-envelope-open', text: 'Keefe@codedtheme.com' },
  { icon: 'ph ph-phone-call', text: '995-250-1803' },
  { icon: 'ph ph-calendar-blank', text: '30, Nov 2021' },
  { icon: 'ph ph-globe-hemisphere-east', text: 'India' },
  { icon: 'ph ph-briefcase', link: 'www.dattaable.com', text: 'www.dattaable.com' },
  { icon: 'ph ph-radio-button', badge: { text: 'UI/UX Designer' } }
];

const fileItems: FileItem[] = [
  {
    icon: 'ti ti-file-text',
    iconClass: 'btn-light-success',
    title: 'Document',
    subtitle: '123 files, 193MB'
  },
  {
    icon: 'ti ti-photo',
    iconClass: 'btn-light-danger',
    title: 'Photos',
    subtitle: '53 files, 321MB'
  },
  {
    icon: 'ti ti-id',
    iconClass: 'btn-light-primary',
    title: 'Other',
    subtitle: '49 files, 193MB'
  }
];

// =============================|| MESSAGE - CHAT INFO ||============================== //

export default function ChatInfo() {
  return (
    <div className="chat-user_info">
      <Card className="bg-transparent shadow-none border-0 mb-0">
        <Card.Body className="text-center position-relative p-3 pb-0 px-0">
          <div className="chat-avatar d-inline-flex mx-auto">
            <Image className="rounded-circle img-fluid wid-100" src={Avatar5} alt="User" />
          </div>
          <h5 className="mb-0">Alene</h5>
          <p className="text-muted text-sm">
            DM on{' '}
            <a href="#" className="link-primary">
              @williambond
            </a>
          </p>
          <ul className="list-inline ms-auto">
            <li className="list-inline-item">
              <a href="#" className="avatar avatar-s btn-link-secondary">
                <i className="ti ti-phone-call f-18" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="avatar avatar-s btn-link-secondary">
                <i className="ti ti-message-circle f-18" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="avatar avatar-s btn-link-secondary">
                <i className="ti ti-video f-18" />
              </a>
            </li>
          </ul>
        </Card.Body>
        <SimpleBarScroll style={{ maxHeight: 'calc(100vh - 340px)' }}>
          <Card.Body className="py-0">
            <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
              <label className="form-check-label h5 mb-0" htmlFor="customSwitchemlnot1">
                Notification
              </label>
              <Form.Check type="switch" id="customSwitchemlnot1" defaultChecked />
            </Stack>
            <hr className="border border-secondary-subtle" />

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header className="custom-accordion-header">
                  <h5 className="mb-0">Information</h5>
                </Accordion.Header>
                <Accordion.Body className="px-0 pt-3 pb-0">
                  {userDetails.map((item, index) => (
                    <Stack
                      key={index}
                      direction="horizontal"
                      className={`align-items-center gap-2 ${index !== userDetails.length - 1 ? 'mb-2' : ''}`}
                    >
                      <i className={item.icon} />
                      <p className="mb-0 text-muted">
                        {item.link ? (
                          <a href={item.link} className="link-primary">
                            {item.text}
                          </a>
                        ) : item.badge ? (
                          <Badge bg="light-warning" text="warning">
                            {item.badge.text}
                          </Badge>
                        ) : (
                          item.text
                        )}
                      </p>
                    </Stack>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="border border-secondary-subtle" />
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="1" className="border-0">
                <Accordion.Header className="custom-accordion-header">
                  <h5 className="mb-0">File Type</h5>
                </Accordion.Header>
                <Accordion.Body className="p-0 py-3">
                  {fileItems.map((item, index) => (
                    <Stack
                      key={index}
                      direction="horizontal"
                      className={`align-items-center ${index !== fileItems.length - 1 ? 'mb-2' : ''}`}
                    >
                      {/* Left Icon */}
                      <div className="flex-shrink-0">
                        <a href={item.link || '#!'} className={`avatar avatar-s ${item.iconClass}`}>
                          <i className={`${item.icon} f-20`} />
                        </a>
                      </div>

                      {/* Title + Subtitle */}
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">{item.title}</h6>
                        <span className="text-muted text-sm">{item.subtitle}</span>
                      </div>

                      <div className="flex-shrink-0">
                        <a href={item.link || '#!'} className="avatar avatar-xs btn-link-secondary">
                          <i className="ti ti-chevron-right f-16" />
                        </a>
                      </div>
                    </Stack>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </SimpleBarScroll>
      </Card>
    </div>
  );
}
