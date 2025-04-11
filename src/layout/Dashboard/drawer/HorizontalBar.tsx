import { useLayoutEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Image from 'react-bootstrap/Image';

// project-imports
import Navigation from './drawerContent/navigation';
import { MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';

// assets
import DarkImage from 'assets/images/logo-dark.svg';
import { NavItemType } from 'types/menu';

export default function LayoutHorizontal() {
  const [selectedItems, setSelectedItems] = useState<NavItemType | undefined>(undefined);
  const { menuOrientation } = useConfig();

  const collapseEdge = useCallback((event: Event) => {
    const target = event.currentTarget as HTMLElement;
    const submenu = target.children[1] as HTMLElement | undefined;
    if (!submenu) return;

    const { left, top, width, height } = submenu.getBoundingClientRect();
    const docH = window.innerHeight;
    const docW = window.innerWidth;

    submenu.classList.toggle('edge', left + width > docW);
    submenu.classList.toggle('edge-alt', top + height > docH);

    if (top < height) {
      submenu.classList.add('edge-alt-full');
    }
  }, []);

  const setEdgeMenu = useCallback(() => {
    document.querySelectorAll('.pc-sidebar .pc-navbar .pc-hasmenu').forEach((item) => {
      item.removeEventListener('mouseenter', collapseEdge as EventListener);
      item.addEventListener('mouseenter', collapseEdge as EventListener);
    });
  }, [collapseEdge]);

  const reinitHorizontalMenu = useCallback(() => {
    setEdgeMenu();
    document.querySelectorAll('.pc-navbar li:not(.pc-trigger) .pc-submenu').forEach((el) => el.removeAttribute('style'));
    document.querySelector('.pc-sidebar .pc-menu-overlay')?.remove();
  }, [setEdgeMenu]);

  const handleResize = useCallback(() => {
    const navbarContent = document.querySelector('.navbar-content');
    if (navbarContent) navbarContent.innerHTML = navbarContent.innerHTML || '';

    setTimeout(() => {
      if (window.innerWidth >= 1024) {
        reinitHorizontalMenu();
      }
    }, 500);
  }, [reinitHorizontalMenu]);

  useLayoutEffect(() => {
    if (window.innerWidth > 1024) {
      document.body.setAttribute('data-pc-layout', 'horizontal');
      const logo = document.querySelector('.pc-sidebar .m-header .logo-lg') as HTMLImageElement | null;
      if (logo) logo.src = DarkImage;
      setEdgeMenu();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, setEdgeMenu]);

  return (
    <nav className="pc-sidebar" id="pc-sidebar">
      <div className="navbar-wrapper">
        {/* Drawer-header section */}
        <div className="m-header">
          <Link to="#" className="b-brand text-primary">
            <Image src={DarkImage} fluid className="logo-lg" alt="logo" />
          </Link>
        </div>

        {/* Drawer-content section */}
        <div className={`navbar-content ${menuOrientation === MenuOrientation.HORIZONTAL ? 'pc-trigger' : ''}`}>
          <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
    </nav>
  );
}
