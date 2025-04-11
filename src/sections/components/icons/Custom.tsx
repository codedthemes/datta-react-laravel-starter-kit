import { useEffect } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import ClipboardJS from 'clipboard';

// project-imports
import MainCard from 'components/MainCard';

// assets
import {
  Add,
  Bluetooth2,
  Box1,
  Clock,
  Copy,
  Document,
  DocumentText,
  Edit,
  Flag,
  HambergerMenu,
  Home3,
  Import,
  InfoCircle,
  Layer,
  Level,
  Lock,
  Logout,
  Moon,
  Music,
  Notification,
  Play,
  Profile2User,
  SearchNormal1,
  Security,
  Setting,
  Setting2,
  Share,
  Sms,
  Sort,
  Trash,
  User,
  VolumeHigh,
  Wifi
} from 'iconsax-react';

type IconVariant = 'Bulk' | 'Bold' | 'Linear' | 'Outline' | 'Broken' | 'TwoTone' | undefined;

const iconList = [
  { name: 'custom-home', component: Home3, variant: 'Bulk' },
  { name: 'custom-document-text', component: DocumentText, variant: 'Bold' },
  { name: 'custom-sort-outline', component: Sort, variant: 'Bulk' },
  { name: 'custom-notification', component: Notification, variant: 'Bold' },
  { name: 'custom-search-normal-1', component: SearchNormal1 },
  { name: 'custom-box-1', component: Box1, variant: 'Bulk' },
  { name: 'custom-layer', component: Layer, variant: 'Bold' },
  { name: 'custom-setting-outline', component: Setting },
  { name: 'custom-add-outline', component: Add },
  { name: 'custom-user-bold', component: User, variant: 'Bold' },
  { name: 'custom-user', component: User, variant: 'Bulk' },
  { name: 'custom-logout-1-outline', component: Logout },
  { name: 'custom-security-safe', component: DocumentText, variant: 'Bold' },
  { name: 'custom-notification-outline', component: DocumentText, variant: 'Bold' },
  { name: 'custom-setting-2', component: Setting2, variant: 'Bulk' },
  { name: 'custom-share-bold', component: Share, variant: 'Bold' },
  { name: 'custom-lock-outline', component: Lock },
  { name: 'custom-level', component: Level, variant: 'Bulk' },
  { name: 'custom-profile-2user-outline', component: Profile2User },
  { name: 'custom-sms', component: Sms, variant: 'Bold' },
  { name: 'custom-document', component: Document, variant: 'Bulk' },
  { name: 'custom-bluetooth2', component: Bluetooth2 },
  { name: 'custom-clock', component: Clock, variant: 'Bulk' },
  { name: 'custom-copy', component: Copy },
  { name: 'custom-edit', component: Edit, variant: 'Bulk' },
  { name: 'custom-flag', component: Flag, variant: 'Bold' },
  { name: 'custom-hamberger-menu', component: HambergerMenu },
  { name: 'custom-info-circle', component: InfoCircle, variant: 'Bulk' },
  { name: 'custom-import', component: Import },
  { name: 'custom-music', component: Music, variant: 'Bold' },
  { name: 'custom-moon', component: Moon, variant: 'Bulk' },
  { name: 'custom-play', component: Play },
  { name: 'custom-security', component: Security, variant: 'Bold' },
  { name: 'custom-trash', component: Trash, variant: 'Bold' },
  { name: 'custom-volume-high', component: VolumeHigh },
  { name: 'custom-wifi', component: Wifi, variant: 'Bulk' }
];

// =============================|| ICONS - CUSTOM  ||============================== //

export default function CustomIcons() {
  useEffect(() => {
    const clipboard = new ClipboardJS('.i-block');
    clipboard.on('success', (e: ClipboardJS.Event) => {
      const targetElement = e.trigger as HTMLElement;
      const badge = document.createElement('span');
      badge.className = 'ic-badge badge bg-success';
      badge.innerText = 'Copied';
      targetElement.appendChild(badge);
      setTimeout(() => {
        targetElement.removeChild(badge);
      }, 3000);
    });

    clipboard.on('error', (e: ClipboardJS.Event) => {
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
    <MainCard title="Custom Icons">
      <Stack direction="horizontal" className="i-main flex-wrap" gap={1}>
        {iconList.map(({ component: Icon, variant, name }, index) => (
          <div key={index} className="i-block" data-clipboard-text={name} data-bs-toggle="tooltip" data-filter={name} title={name}>
            <Icon key={index} variant={variant as IconVariant} className="pc-icon" />
          </div>
        ))}
      </Stack>
    </MainCard>
  );
}
