import { useLocation, matchPath, Link } from 'react-router-dom';
import { usePage } from '@inertiajs/react';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
// import { FormattedMessage } from 'react-intl';

// project-imports
import { handlerDrawerOpen } from '@/api/menu';
import useConfig from '@/hooks/useConfig';
import { MenuOrientation } from '@/config';

// types
import { LinkTarget, NavItemType } from '@/types/menu';

interface Props {
  item: NavItemType;
  level: number;
  isParents?: boolean;
}

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item }: Props) {
  const pathname = usePage();
  const { menuOrientation, onChangeMenuOrientation } = useConfig();
  const itemPath = item?.link || item?.url;

  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }
  const isSelected = itemPath ? !!matchPath({ path: itemPath, end: true }, pathname.url) : false;
  return (
    <li className={`pc-item ${isSelected ? 'active' : ''} `}>
      {menuOrientation !== MenuOrientation.TAB ? (
        <a
          className="pc-link"
          href={item?.url || '#'}
          target={itemTarget}
          onClick={() => {
            handlerDrawerOpen(false);
            if (item?.layout === item?.title) {
              onChangeMenuOrientation(item?.layout as MenuOrientation);
            }
          }}
        >
          {item?.icon && (
            <span className="pc-micon">
              <i className={typeof item.icon === 'string' ? item.icon : item.icon?.props.className} />
            </span>
          )}
          {item.title}
        </a>
      ) : (
        <>
          {menuOrientation !== MenuOrientation.TAB && (
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id={`tooltip-${item.title as string}`}>
                  {item.title}
                </Tooltip>
              }
            >
              <a
                className="pc-link"
                href={item?.url || ''}
                target={itemTarget}
                onClick={() => {
                  if (item?.layout === item?.title) {
                    onChangeMenuOrientation(item?.layout as MenuOrientation);
                  }
                }}
              >
                {item?.icon && (
                  <span className="pc-micon">
                    <i className={typeof item.icon === 'string' ? item.icon : item.icon?.props.className} />
                  </span>
                )}
              </a>
            </OverlayTrigger>
          )}
        </>
      )}
    </li>
  );
}
