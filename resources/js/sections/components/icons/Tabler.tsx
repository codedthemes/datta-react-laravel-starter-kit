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
  'ti-trending-down-2',
  'ti-virus',
  'ti-wifi',
  'ti-yin-yang',
  'ti-zodiac-taurus',
  'ti-zoom-out',
  'ti-discount',
  'ti-target',
  'ti-eye',
  'ti-circle',
  'ti-fish',
  'ti-checkbox',
  'ti-chart-arcs',
  'ti-fold',
  'ti-bug',
  'ti-brand-steam',
  'ti-bottle',
  'ti-award',
  'ti-file',
  'ti-git-branch',
  'ti-gift',
  'ti-hand-off',
  'ti-hanger',
  'ti-home',
  'ti-italic',
  'ti-layout',
  'ti-letter-d',
  'ti-login',
  'ti-logout',
  'ti-loader',
  'ti-layout-cards',
  'ti-map',
  'ti-markdown',
  'ti-menu'
] as const;

// =============================|| ICONS - TABLER  ||============================== //

export default function TablerIcons() {
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
    // Refocus tile to keep tab order/context after copy
    setTimeout(() => target.focus(), 0);
  };

  return (
    <MainCard title="Tabler Icons">
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
              <i className={`ti ${name}`} />
            </div>
          </OverlayTrigger>
        ))}
        <a
          href="https://tabler.io/icons"
          target="_blank"
          rel="noopener noreferrer"
          className="i-main i-block text-primary text-decoration-none d-flex align-items-center justify-content-center"
          aria-label="Open Tabler icons website"
          title="more ..."
        >
          more ...
        </a>
      </Stack>
    </MainCard>
  );
}
