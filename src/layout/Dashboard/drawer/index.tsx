import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react-bootstrap
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import DrawerContent from './drawerContent';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';
import { MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';

// assets
import logo from 'assets/images/logo-white.svg';
import DarkLogo from 'assets/images/logo-dark.svg';
import CompactLogo from 'assets/images/favicon.svg';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

export default function MainDrawer() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;
  const [selectedItems, setSelectedItems] = useState<NavItemType | undefined>(undefined);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const { menuOrientation } = useConfig();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle outside click logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current?.contains(event.target as Node)) {
        handlerDrawerOpen(false);
      }
    };

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  useEffect(() => {
    const removeClasses = ['layout-2', 'layout-3', 'preset-1', 'preset-brand-1'];
    const resetAttributes = () => {
      document.body.removeAttribute('data-pc-preset');
      document.body.classList.remove(...removeClasses);
    };

    switch (menuOrientation) {
      case MenuOrientation.COMPACT:
      case MenuOrientation.HORIZONTAL:
      case MenuOrientation.TAB:
      case MenuOrientation.VERTICAL:
        document.body.setAttribute('data-pc-layout', menuOrientation.toLowerCase());
        resetAttributes();
        break;

      case MenuOrientation.LAYOUT2:
        document.body.setAttribute('data-pc-layout', 'vertical');
        resetAttributes();
        document.body.classList.add('layout-2', 'preset-1');
        break;

      case MenuOrientation.LAYOUT3:
        document.body.setAttribute('data-pc-layout', 'vertical');
        document.body.setAttribute('data-pc-preset', 'preset-1');
        resetAttributes();
        document.body.classList.add('layout-3', 'preset-brand-1');
        break;

      default:
        resetAttributes();
        document.body.removeAttribute('data-pc-layout');
        break;
    }
  }, [menuOrientation]);

  useEffect(() => {
    const navElement = document.querySelector('nav');
    const isCompactPath = menuOrientation === MenuOrientation.COMPACT;

    document.body.classList.toggle('pc-compact-submenu-active', isCompactPath && !!selectedItems);
    navElement?.classList.toggle('pc-compact-submenu-active', isCompactPath && !!selectedItems);
  }, [selectedItems, menuOrientation]);

  return (
    <nav className={`pc-sidebar ${drawerOpen && 'pc-sidebar-hide mob-sidebar-active'}`} id="pc-sidebar">
      <div className="navbar-wrapper">
        <div className="m-header">
          <Link to="#" className="b-brand text-primary">
            <Image src={menuOrientation === MenuOrientation.HORIZONTAL ? DarkLogo : logo} fluid className="logo logo-lg" alt="logo" />
            <Image src={CompactLogo} fluid className="logo logo-sm" alt="logo" />
          </Link>
        </div>

        <div className={`${menuOrientation === MenuOrientation.TAB ? 'tab-container' : 'navbar-content'}`}>
          <DrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>

        {['/layouts/compact', '/layouts/vertical'].includes(pathname) && (
          <div className="pc-compact-submenu">
            <div className="pc-compact-title">
              <Stack direction="horizontal" className="align-items-center gap-2">
                <div className="avatar avatar-xs bg-light-primary">
                  {selectedItems && typeof selectedItems.icon === 'string' ? <i className={selectedItems.icon} /> : selectedItems?.icon}
                </div>
                <h5 className="text-capitalize mb-0">{selectedItems?.title}</h5>
              </Stack>
            </div>
            <div className="pc-compact-list">
              {Array.isArray(selectedItems?.children) &&
                selectedItems.children.map((item: any, index: number) => (
                  <Link className="pc-link" key={index} to={item?.url}>
                    <FormattedMessage id={item.title.toString()} />
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>

      {drawerOpen && isMobile && <div className="pc-menu-overlay" />}
    </nav>
  );
}
