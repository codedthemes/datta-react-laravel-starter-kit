import React from 'react';

// project-imports
import { DrawerHeader, DrawerOverlay, useDrawerLogic } from '../common';
import HorizontalDrawerContent from './HorizontalDrawerContent';

// ==============================|| HORIZONTAL DRAWER ||============================== //

export const HorizontalDrawer: React.FC = () => {
  const { drawerOpen, selectedItems, setSelectedItems, isMobile, overlayRef, sidebarTheme } = useDrawerLogic();

  // For horizontal layout, keep sidebar visible on desktop; on mobile behave like overlay drawer
  const getSidebarClassName = () => {
    if (isMobile) {
      return `pc-sidebar ${drawerOpen ? 'mob-sidebar-active' : ''}`;
    }
    return 'pc-sidebar';
  };

  return (
    <nav id="pc-sidebar" className={getSidebarClassName()}>
      <div className="navbar-wrapper">
        <DrawerHeader sidebarTheme={sidebarTheme} />
        <div className="navbar-content">
          <HorizontalDrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
      <DrawerOverlay drawerOpen={drawerOpen} isMobile={isMobile} overlayRef={overlayRef} />
    </nav>
  );
};
