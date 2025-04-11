import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import ClipboardJS from 'clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// project-imports
import MainCard from 'components/MainCard';

// assets
import {
  faAd,
  faAdjust,
  faArrowRight,
  faBackward,
  faBan,
  faCheckCircle,
  faCloud,
  faCoffee,
  faDna,
  faFeather,
  faFileText,
  faGreaterThan,
  faGrin,
  faHandPointer,
  faHeart,
  faHouse,
  faInfo,
  faLessThan,
  faLink,
  faLock,
  faMagic,
  faMapMarkerAlt,
  faMinus,
  faMoon,
  faPlane,
  faPowerOff,
  faRss,
  faSearchMinus,
  faSortDown,
  faSortUp,
  faStar,
  faTv,
  faUndo,
  faUserGroup,
  faVectorSquare
} from '@fortawesome/free-solid-svg-icons';

const iconList = [
  { name: 'fa-coffee', component: faCoffee },
  { name: 'fa-house', component: faHouse },
  { name: 'fa-ad', component: faAd },
  { name: 'fa-adjust', component: faAdjust },
  { name: 'fa-ban', component: faBan },
  { name: 'fa-backward', component: faBackward },
  { name: 'fa-check-circle', component: faCheckCircle },
  { name: 'fa-cloud', component: faCloud },
  { name: 'fa-dna', component: faDna },
  { name: 'fa-feather', component: faFeather },
  { name: 'fa-greater-than', component: faGreaterThan },
  { name: 'fa-grin', component: faGrin },
  { name: 'fa-hand-pointer', component: faHandPointer },
  { name: 'fa-heart', component: faHeart },
  { name: 'fa-info', component: faInfo },
  { name: 'fa-less-than', component: faLessThan },
  { name: 'fa-magic', component: faMagic },
  { name: 'fa-map-marker-alt', component: faMapMarkerAlt },
  { name: 'fa-minus', component: faMinus },
  { name: 'fa-moon', component: faMoon },
  { name: 'fa-power-off', component: faPowerOff },
  { name: 'fa-rss', component: faRss },
  { name: 'fa-search-minus', component: faSearchMinus },
  { name: 'fa-sort-down', component: faSortDown },
  { name: 'fa-tv', component: faTv },
  { name: 'fa-undo', component: faUndo },
  { name: 'fa-sort-up', component: faSortUp },
  { name: 'fa-star', component: faStar },
  { name: 'fa-plane', component: faPlane },
  { name: 'fa-file-text', component: faFileText },
  { name: 'fa-link', component: faLink },
  { name: 'fa-arrow-right', component: faArrowRight },
  { name: 'fa-vector-square', component: faVectorSquare },
  { name: 'fa-user-group', component: faUserGroup },
  { name: 'fa-lock', component: faLock }
];

// =============================|| ICONS - FONTAWESOME  ||============================== //

export default function FontAwesomeIcons() {
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
    <MainCard title="Font Awesome 5 Icons">
      <Stack direction="horizontal" gap={1} id="icon-wrapper" className="i-main flex-wrap align-items-center ">
        {iconList.map(({ name, component }, index) => (
          <OverlayTrigger key={index} placement="top" overlay={<Tooltip id={`tooltip-${index}`}>{name}</Tooltip>}>
            <div className="i-block" data-clipboard-text={name} data-filter={name} title={name}>
              <FontAwesomeIcon icon={component} className="f-30" />
            </div>
          </OverlayTrigger>
        ))}
        <Link to="https://fontawesome.com/search" target="_blank" className="text-primary">
          more ...
        </Link>
      </Stack>
    </MainCard>
  );
}
