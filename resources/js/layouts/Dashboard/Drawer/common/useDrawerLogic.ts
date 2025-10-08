import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// project-imports
import { handlerDrawerOpen, useGetMenuMaster } from '@/api/menu';
import { MenuOrientation } from '@/config';
import useConfig from '@/hooks/useConfig';

// types
import { NavItemType } from '@/types/menu';

// ==============================|| COMMON DRAWER LOGIC HOOK ||============================== //

export const useDrawerLogic = () => {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened ?? false;

  const [selectedItems, setSelectedItems] = useState<NavItemType | undefined>();
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 1024);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { menuOrientation, sidebarTheme, themeDirection } = useConfig();
  const location = useLocation();

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //  Derived Value (memoized)
  const isLargeScreen = useMemo(() => !isMobile, [isMobile]);

  //  Close Drawer on Outside Click (only for mobile)
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (overlayRef.current?.contains(event.target as Node)) {
      handlerDrawerOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile, handleClickOutside]);

  //  Reflect direction (RTL/LTR) to DOM
  useEffect(() => {
    document.body.setAttribute('data-pc-direction', themeDirection);
    document.documentElement.setAttribute('dir', themeDirection);
  }, [themeDirection]);

  //  Layout Logic
  useEffect(() => {
    const removeClasses = ['layout-2', 'layout-3', 'preset-1', 'preset-brand-1'];
    document.body.classList.remove(...removeClasses);
    document.body.removeAttribute('data-pc-preset');

    const pathname = location.pathname;

    if (!isLargeScreen) {
      document.body.setAttribute('data-pc-layout', 'vertical');
    }

    const applyLayout = (_layout: string, preset: string, classes: string[]) => {
      document.body.removeAttribute('data-pc-layout');
      document.body.setAttribute('data-pc-preset', preset);
      document.body.classList.add(...classes);
    };

    if (pathname === '/layouts/layout-2') {
      applyLayout('vertical', 'preset-1', ['layout-2', 'preset-1']);
    }

    if (pathname === '/layouts/layout-3') {
      applyLayout('vertical', 'preset-1', ['layout-3', 'preset-brand-1']);
    }

    switch (menuOrientation) {
      case MenuOrientation.TAB:
      case MenuOrientation.VERTICAL:
      case MenuOrientation.HORIZONTAL:
        document.body.setAttribute('data-pc-layout', menuOrientation.toLowerCase());
        break;
      case MenuOrientation.LAYOUT2:
        applyLayout(MenuOrientation.VERTICAL, 'preset-1', ['layout-2', 'preset-1']);
        break;
      case MenuOrientation.LAYOUT3:
        applyLayout(MenuOrientation.VERTICAL, 'preset-1', ['layout-3', 'preset-brand-1']);
        break;
      default:
        break;
    }
  }, [menuOrientation, isLargeScreen, location.pathname]);

  return {
    drawerOpen,
    selectedItems,
    setSelectedItems,
    isMobile,
    overlayRef,
    menuOrientation,
    sidebarTheme
  };
};
