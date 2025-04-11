import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Stack from 'react-bootstrap/Stack';

// third-party
import ClipboardJS from 'clipboard';

// project-imports
import MainCard from 'components/MainCard';

// assets
import {
  AlertOctagon,
  AlertCircle,
  BarChart,
  BellOff,
  Book,
  Camera,
  CheckSquare,
  ChevronDown,
  Cloud,
  Delete,
  Disc,
  Download,
  Edit,
  Edit2,
  Eye,
  EyeOff,
  Facebook,
  Feather,
  FileText,
  GitHub,
  Globe,
  Hash,
  Heart,
  Info,
  Menu,
  Minimize2,
  Minus,
  Moon,
  MoreVertical,
  Play,
  Slack,
  Trash2,
  Volume,
  ZoomIn,
  ZoomOut
} from 'react-feather';

const iconList = [
  { name: 'alert-octagon', component: AlertOctagon },
  { name: 'alert-circle', component: AlertCircle },
  { name: 'bar-chart', component: BarChart },
  { name: 'bell-off', component: BellOff },
  { name: 'book', component: Book },
  { name: 'camera', component: Camera },
  { name: 'check-square', component: CheckSquare },
  { name: 'chevron-down', component: ChevronDown },
  { name: 'disc', component: Disc },
  { name: 'hash', component: Hash },
  { name: 'download', component: Download },
  { name: 'delete', component: Delete },
  { name: 'edit', component: Edit },
  { name: 'cloud', component: Cloud },
  { name: 'eye', component: Eye },
  { name: 'eye-off', component: EyeOff },
  { name: 'feather', component: Feather },
  { name: 'minus', component: Minus },
  { name: 'facebook', component: Facebook },
  { name: 'file-text', component: FileText },
  { name: 'minimize-2', component: Minimize2 },
  { name: 'play', component: Play },
  { name: 'globe', component: Globe },
  { name: 'slack', component: Slack },
  { name: 'edit', component: Edit2 },
  { name: 'moon', component: Moon },
  { name: 'trash-2', component: Trash2 },
  { name: 'volume', component: Volume },
  { name: 'more-vertical', component: MoreVertical },
  { name: 'zoom-in', component: ZoomIn },
  { name: 'zoom-out', component: ZoomOut },
  { name: 'heart', component: Heart },
  { name: 'github', component: GitHub },
  { name: 'info', component: Info },
  { name: 'menu', component: Menu }
];

// =============================|| ICONS - FEATHER  ||============================== //

export default function FeatherIcons() {
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
    <MainCard title="Feather Icons">
      <Stack direction="horizontal" gap={1} id="icon-wrapper" className="i-main flex-wrap align-items-center ">
        {iconList.map(({ component: Icon, name }, index) => (
          <OverlayTrigger key={index} placement="top" overlay={<Tooltip id={`tooltip-${index}`}>{name}</Tooltip>}>
            <div className="i-block" data-clipboard-text={name} data-filter={name} title={name}>
              <Icon key={index} className="pc-icon" />
            </div>
          </OverlayTrigger>
        ))}
        <Link to="https://feathericons.com/" target="_blank" className="text-primary">
          more ...
        </Link>
      </Stack>
    </MainCard>
  );
}
