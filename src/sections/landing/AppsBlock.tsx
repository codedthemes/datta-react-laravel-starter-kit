import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import { motion } from 'framer-motion';

// assets
import App1 from 'assets/images/landing/app-1.png';
import App2 from 'assets/images/landing/app-2.png';
import App3 from 'assets/images/landing/app-3.png';
import App4 from 'assets/images/landing/app-4.png';
import App5 from 'assets/images/landing/app-5.png';
import App6 from 'assets/images/landing/app-6.png';
import App7 from 'assets/images/landing/app-7.png';
import App8 from 'assets/images/landing/app-8.png';
import App9 from 'assets/images/landing/app-9.png';
import App10 from 'assets/images/landing/app-10.png';
import App11 from 'assets/images/landing/app-11.png';
import App12 from 'assets/images/landing/app-12.png';
import {
  Calendar,
  ChatsTeardrop,
  CheckSquareOffset,
  ClipboardText,
  GearSix,
  GraduationCap,
  IconProps,
  ImageSquare,
  ListChecks,
  LockKey,
  Rocket,
  UserCircleGear
} from 'phosphor-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface AppCardProps {
  imgSrc: string;
  href: string;
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  iconClass?: IconProp;
  title: string;
  delay: string;
}

const appCards = [
  {
    imgSrc: App1,
    href: 'auth/login-v1',
    Icon: LockKey,
    title: 'Authentication',
    delay: '0.3s'
  },
  {
    imgSrc: App2,
    href: 'pages/maintenance/error',
    Icon: GearSix,
    title: 'Maintenance',
    delay: '0.4s'
  },
  {
    imgSrc: App3,
    href: '/',
    Icon: Rocket,
    title: 'Landing Page',
    delay: '0.5s'
  },
  {
    imgSrc: App4,
    href: 'application/calendar',
    Icon: Calendar,
    title: 'Calendar',
    delay: '0.6s'
  },
  {
    imgSrc: App5,
    href: 'application/message',
    Icon: ChatsTeardrop,
    title: 'Chat',
    delay: '0.4s'
  },
  {
    imgSrc: App6,
    href: 'application/task/board',
    Icon: ListChecks,
    title: 'Task',
    delay: '0.5s'
  },
  {
    imgSrc: App7,
    href: 'application/todo',
    Icon: CheckSquareOffset,
    title: 'Todo',
    delay: '0.6s'
  },
  {
    imgSrc: App8,
    href: 'application/gallery/advance',
    Icon: ImageSquare,
    title: 'Gallery',
    delay: '0.7s'
  },
  {
    imgSrc: App9,
    href: 'application/invoice/invoice',
    Icon: ClipboardText,
    title: 'Invoice',
    delay: '0.5s'
  },
  {
    imgSrc: App10,
    href: 'application/users/social-profile',
    Icon: GraduationCap,
    title: 'Social Profile',
    delay: '0.6s'
  },
  {
    imgSrc: App11,
    href: 'application/users/profile',
    Icon: UserCircleGear,
    title: 'User Profile',
    delay: '0.7s'
  },
  {
    imgSrc: App12,
    href: 'dashboard/crypto',
    iconClass: faPiggyBank,
    title: 'Bitcoin Dashboard',
    delay: '0.8s'
  }
];

// ==============================|| LANDING - APPS BLOCK ||============================== //

function AppCard({ imgSrc, href, Icon, iconClass, title, delay }: AppCardProps) {
  return (
    <Col lg={3} md={6}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: parseFloat(delay), duration: 0.8, ease: 'easeOut' }}
      >
        <Card className="app-card mb-0">
          <Card.Img variant="top" src={imgSrc} alt={title} className="img-fluid" />
          <Link to={href} target="_blank" rel="noopener noreferrer" className="overlay">
            <Stack gap={3} className="justify-content-center align-items-center">
              {Icon ? (
                <Icon size={30} weight="duotone" className="text-primary" />
              ) : (
                <FontAwesomeIcon icon={iconClass || faPiggyBank} className="text-primary font-size-30" />
              )}
              <h3 className="h5">{title}</h3>
            </Stack>
          </Link>
        </Card>
      </motion.h2>
    </Col>
  );
}

// ==============================|| LANDING - APPS SECTION ||============================== //

export default function AppsSection() {
  return (
    <section className="comminuties-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} xl={6} className="title">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              Ready to use <strong className="landing-background-image">Application</strong>!
            </motion.h2>

            <motion.p
              className="mt-lg-4 mt-2"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            >
              Datta Able admin template includes most common use pages to develop any applications which will ease the developer's efforts.
            </motion.p>
          </Col>
        </Row>
        <Row className="g-3">
          {appCards.map((card, index) => (
            <AppCard key={index} imgSrc={card.imgSrc} href={card.href} Icon={card.Icon} title={card.title} delay={card.delay} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
