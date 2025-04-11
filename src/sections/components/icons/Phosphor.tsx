import { useEffect } from 'react';
import { Link as LinkTag } from 'react-router-dom';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import ClipboardJS from 'clipboard';

// project-imports
import MainCard from 'components/MainCard';

// assets
import {
  User,
  Camera,
  AddressBook,
  Airplane,
  ArrowClockwise,
  BellSimple,
  CalendarCheck,
  Cards,
  CaretDown,
  Check,
  Clock,
  DotsThreeVertical,
  FacebookLogo,
  FileText,
  Gear,
  Globe,
  Heart,
  House,
  Link,
  List,
  Phone,
  PlayCircle,
  Plus,
  ShareNetwork,
  ShieldCheck,
  Users,
  WarningCircle,
  YoutubeLogo,
  WhatsappLogo,
  Trash,
  Spinner,
  Smiley,
  SignOut,
  SignIn
} from 'phosphor-react';

const iconList = [
  { name: 'User', component: User },
  { name: 'AddressBook', component: AddressBook },
  { name: 'Airplane', component: Airplane },
  { name: 'ArrowClockwise', component: ArrowClockwise },
  { name: 'BellSimple', component: BellSimple },
  { name: 'CalendarCheck ', component: CalendarCheck },
  { name: 'Cards', component: Cards },
  { name: 'CaretDown ', component: CaretDown },
  { name: 'Check', component: Check },
  { name: 'Clock', component: Clock },
  { name: 'DotsThreeVertical', component: DotsThreeVertical },
  { name: 'FacebookLogo', component: FacebookLogo },
  { name: 'FileText', component: FileText },
  { name: 'Gear', component: Gear },
  { name: 'Globe', component: Globe },
  { name: 'Heart', component: Heart },
  { name: 'House', component: House },
  { name: 'Link', component: Link },
  { name: 'List', component: List },
  { name: 'Phone', component: Phone },
  { name: 'PlayCircle ', component: PlayCircle },
  { name: 'Plus', component: Plus },
  { name: 'ShareNetwork', component: ShareNetwork },
  { name: 'Camera', component: Camera },
  { name: 'ShieldCheck', component: ShieldCheck },
  { name: 'User', component: User },
  { name: 'Users', component: Users },
  { name: 'SignIn', component: SignIn },
  { name: 'SignOut ', component: SignOut },
  { name: 'Spinner', component: Spinner },
  { name: 'Smiley ', component: Smiley },
  { name: 'WarningCircle', component: WarningCircle },
  { name: 'Trash', component: Trash },
  { name: 'WhatsappLogo  ', component: WhatsappLogo },
  { name: 'YoutubeLogo ', component: YoutubeLogo }
];

// =============================|| ICONS - PHOSPHOR  ||============================== //

export default function PhosphorIcons() {
  useEffect(() => {
    const clipboard = new ClipboardJS('.i-block');
    clipboard.on('success', (e) => {
      const targetElement = e.trigger as HTMLElement;
      const badge = document.createElement('span');
      badge.className = 'ic-badge badge bg-success';
      badge.innerText = 'Copied';
      targetElement.appendChild(badge);
      setTimeout(() => {
        targetElement.removeChild(badge);
      }, 3000);
    });

    clipboard.on('error', (e) => {
      const targetElement = e.trigger as HTMLElement;
      const badge = document.createElement('span');
      badge.className = 'ic-badge badge bg-danger';
      badge.innerText = 'Error';
      targetElement.appendChild(badge);
      setTimeout(() => {
        targetElement.removeChild(badge);
      }, 3000);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <MainCard title="Phosphor Icons">
      <Stack direction="horizontal" gap={1} id="icon-wrapper" className="i-main flex-wrap align-items-center ">
        {iconList.map(({ component: Icon, name }, index) => (
          <OverlayTrigger key={index} placement="top" overlay={<Tooltip id={`tooltip-${index}`}>{name}</Tooltip>}>
            <div className="i-block" data-clipboard-text={name} data-filter={name} title={name}>
              <Icon key={index} size={30} weight="duotone" />
            </div>
          </OverlayTrigger>
        ))}
        <LinkTag to="https://phosphoricons.com/" target="_blank" className="text-primary">
          more ...
        </LinkTag>
      </Stack>
    </MainCard>
  );
}
