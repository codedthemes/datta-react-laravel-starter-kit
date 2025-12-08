import { useEffect } from 'react';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import ClipboardJS from 'clipboard';

// project-imports
import MainCard from '@/components/MainCard';

const iconNames = [
  'ph-user',
  'ph-address-book',
  'ph-airplane',
  'ph-arrow-clockwise',
  'ph-bell-simple',
  'ph-calendar-check',
  'ph-cards',
  'ph-caret-down',
  'ph-check',
  'ph-clock',
  'ph-dots-three-vertical',
  'ph-facebook-logo',
  'ph-file-text',
  'ph-gear',
  'ph-globe',
  'ph-heart',
  'ph-house',
  'ph-link',
  'ph-list',
  'ph-phone',
  'ph-play-circle',
  'ph-plus',
  'ph-share-network',
  'ph-camera',
  'ph-shield-check',
  'ph-users',
  'ph-sign-in',
  'ph-sign-out',
  'ph-spinner',
  'ph-smiley',
  'ph-warning-circle',
  'ph-trash',
  'ph-whatsapp-logo',
  'ph-youtube-logo',
  'ph-align-right-simple'
] as const;

// =============================|| ICONS - PHOSPHOR  ||============================== //

export default function PhosphorIcons() {
  useEffect(() => {
    const clipboard = new ClipboardJS('.i-block');
    clipboard.on('success', (e) => {
      const targetElement = e.trigger as HTMLElement;
      const existingBadge = targetElement.querySelector('.ic-badge');
      if (existingBadge) targetElement.removeChild(existingBadge);
      const badge = document.createElement('span');
      badge.className = 'ic-badge center badge bg-success';
      badge.innerText = 'Copied';
      targetElement.appendChild(badge);
      setTimeout(() => {
        if (badge.parentElement === targetElement) {
          targetElement.removeChild(badge);
        }
      }, 3000);
    });

    clipboard.on('error', (e) => {
      const targetElement = e.trigger as HTMLElement;
      const existingBadge = targetElement.querySelector('.ic-badge');
      if (existingBadge) targetElement.removeChild(existingBadge);
      const badge = document.createElement('span');
      badge.className = 'ic-badge center badge bg-danger';
      badge.innerText = 'Error';
      targetElement.appendChild(badge);
      setTimeout(() => {
        if (badge.parentElement === targetElement) {
          targetElement.removeChild(badge);
        }
      }, 3000);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isActivationKey = event.key === 'Enter' || event.key === ' ';
    if (!isActivationKey) return;
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLDivElement).click();
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    setTimeout(() => target.focus(), 0);
  };

  return (
    <MainCard title="Phosphor Icons">
      <Stack direction="horizontal" gap={1} id="icon-wrapper" className="i-main flex-wrap align-items-center">
        {iconNames.map((name, index) => (
          <OverlayTrigger key={index} placement="top" overlay={<Tooltip id={`tooltip-${name}`}>{name}</Tooltip>}>
            <div
              className="i-main i-block"
              data-clipboard-text={name}
              data-filter={name}
              title={name}
              role="button"
              tabIndex={0}
              aria-label={`Copy ${name} icon class`}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
            >
              <i className={`ph ${name}`} />
            </div>
          </OverlayTrigger>
        ))}
        <a
          href="https://phosphoricons.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="i-main i-block text-primary text-decoration-none d-flex align-items-center justify-content-center"
          aria-label="Open Phosphor icons website"
          title="more ..."
        >
          more ...
        </a>
      </Stack>
    </MainCard>
  );
}
