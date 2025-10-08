import { useLocation, matchPath } from 'react-router-dom';
import { Link, usePage } from '@inertiajs/react';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import { handlerDrawerOpen } from '@/api/menu';
import useConfig from '@/hooks/useConfig';
import { MenuOrientation, ThemeDirection } from '@/config';

// types
import { LinkTarget, NavItemType } from '@/types/menu';

interface Props {
  item: NavItemType;
  level: number;
  isParents?: boolean;
}

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item }: Props) {
  const  pathname  = usePage();
  const { menuOrientation, onChangeMenuOrientation, onChangeDirection, themeDirection } = useConfig();

  const itemPath = item?.link || item?.url;
  const itemTarget: LinkTarget = item?.target ? '_blank' : '_self';
  const isSelected = itemPath ? !!matchPath({ path: itemPath, end: true }, pathname.url) : false;
  const isMobile = window.innerWidth <= 1024;

  const handleClick = () => {
    // close drawer on mobile
    if (isMobile) handlerDrawerOpen(false);

    // change layout or direction if specified
    if (item?.layout === item?.title) {
      onChangeMenuOrientation(item?.layout as MenuOrientation);
    }
    if (item?.direction) {
      onChangeDirection(themeDirection === ThemeDirection.RTL ? ThemeDirection.LTR : ThemeDirection.RTL);
    }
  };

  const renderIcon = () =>
    item?.icon && (
      <span className="pc-micon">
        <i className={item.icon} />
      </span>
    );

  const renderLabel = () => <FormattedMessage id={item.title as string} />;

  return (
    <li className={`pc-item ${isSelected ? 'active' : ''}`}>
      {menuOrientation !== MenuOrientation.TAB ? (
        <a className="pc-link" href={item?.url || '#'} target={itemTarget} onClick={handleClick}>
          {renderIcon()}
          {renderLabel()}
        </a>
      ) : (
        <>
          {/* Tooltip for collapsed TAB view */}
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id={`tooltip-${item.title as string}`}>
                <FormattedMessage id={item.title as string} />
              </Tooltip>
            }
          >
            <a className="pc-link" href={item?.url || '#'} target={itemTarget} onClick={handleClick}>
              {renderIcon()}
            </a>
          </OverlayTrigger>

          {/* Show text label for TAB layout */}
          {menuOrientation === MenuOrientation.TAB && (
            <a className="pc-link" href={item?.url || '#'} target={itemTarget} onClick={handleClick}>
              {renderIcon()}
              {renderLabel()}
            </a>
          )}
        </>
      )}
    </li>
  );
}
