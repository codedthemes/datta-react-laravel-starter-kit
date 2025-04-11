import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import ClipboardJS from 'clipboard';

// project-imports
import MainCard from 'components/MainCard';

// assets
import AccessibleRounded from '@mui/icons-material/AccessibleRounded';
import AccountBoxSharp from '@mui/icons-material/AccountBoxSharp';
import AirplanemodeActive from '@mui/icons-material/AirplanemodeActive';
import BackupSharp from '@mui/icons-material/BackupSharp';
import BuildCircleTwoTone from '@mui/icons-material/BuildCircleTwoTone';
import CalendarTodayRounded from '@mui/icons-material/CalendarTodayRounded';
import Call from '@mui/icons-material/Call';
import CardGiftcardOutlined from '@mui/icons-material/CardGiftcardOutlined';
import Code from '@mui/icons-material/Code';
import CompareArrows from '@mui/icons-material/CompareArrows';
import CreateTwoTone from '@mui/icons-material/CreateTwoTone';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import Description from '@mui/icons-material/Description';
import DoneSharp from '@mui/icons-material/DoneSharp';
import ExploreOutlined from '@mui/icons-material/ExploreOutlined';
import ExtensionTwoTone from '@mui/icons-material/ExtensionTwoTone';
import FavoriteBorderRounded from '@mui/icons-material/FavoriteBorderRounded';
import Feedback from '@mui/icons-material/Feedback';
import FlipToBack from '@mui/icons-material/FlipToBack';
import GifOutlined from '@mui/icons-material/GifOutlined';
import HelpCenterSharp from '@mui/icons-material/HelpCenterSharp';
import HttpTwoTone from '@mui/icons-material/HttpTwoTone';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import PlayCircleFilledRounded from '@mui/icons-material/PlayCircleFilledRounded';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import Reorder from '@mui/icons-material/Reorder';
import SearchTwoTone from '@mui/icons-material/SearchTwoTone';
import ThreeDRotationOutlined from '@mui/icons-material/ThreeDRotationOutlined';
import VisibilityTwoTone from '@mui/icons-material/VisibilityTwoTone';
import WarningOutlined from '@mui/icons-material/WarningOutlined';

const iconList = [
  { component: ThreeDRotationOutlined, name: '3d_rotation' },
  { component: AccessibleRounded, name: 'accessible_rounded' },
  { component: AccountBoxSharp, name: 'account_box_sharp' },
  { component: BackupSharp, name: 'backup_sharp' },
  { component: BuildCircleTwoTone, name: 'build_circle_two_tone' },
  { component: CalendarTodayRounded, name: 'calendar_today_rounded' },
  { component: CardGiftcardOutlined, name: 'card_giftcard_outlined' },
  { component: CompareArrows, name: 'compare_arrows' },
  { component: Description, name: 'description' },
  { component: DoneSharp, name: 'done_sharp' },
  { component: DeleteTwoTone, name: 'delete_two_tone' },
  { component: Logout, name: 'logout' },
  { component: ExploreOutlined, name: 'explore_outlined' },
  { component: ExtensionTwoTone, name: 'extension_two_tone' },
  { component: Code, name: 'code' },
  { component: Reorder, name: 'reorder' },
  { component: FavoriteBorderRounded, name: 'favorite_border_rounded' },
  { component: Feedback, name: 'feedback' },
  { component: SearchTwoTone, name: 'search_two_tone' },
  { component: FlipToBack, name: 'flip_to_back' },
  { component: PlayCircleFilledRounded, name: 'play_circle_filled_rounded' },
  { component: GifOutlined, name: 'gif_outlined' },
  { component: LockClockOutlined, name: 'lock_clock_outlined' },
  { component: HelpCenterSharp, name: 'help_center_sharp' },
  { component: HttpTwoTone, name: 'http_two_tone' },
  { component: Login, name: 'login' },
  { component: LogoutRounded, name: 'logout_rounded' },
  { component: Call, name: 'call' },
  { component: WarningOutlined, name: 'warning_outlined' },
  { component: CreateTwoTone, name: 'create_two_tone' },
  { component: VisibilityTwoTone, name: 'visibility_two_tone' },
  { component: AirplanemodeActive, name: 'airplanemode_active' },
  { component: RemoveCircle, name: 'remove_circle' }
];

// =============================|| ICONS - MATERIAL  ||============================== //

export default function MaterialIcons() {
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
    <MainCard title="Material Icons">
      <Stack direction="horizontal" gap={1} id="icon-wrapper" className="i-main flex-wrap align-items-center ">
        {iconList.map(({ component: Icon, name }, index) => (
          <OverlayTrigger key={index} placement="top" overlay={<Tooltip id={`tooltip-${index}`}>{name}</Tooltip>}>
            <div className="i-block" data-clipboard-text={name} title={name}>
              <Icon key={index} className="font-size-30" />
            </div>
          </OverlayTrigger>
        ))}
        <Link to="https://mui.com/material-ui/material-icons/" target="_blank" className="text-primary">
          more ...
        </Link>
      </Stack>
    </MainCard>
  );
}
