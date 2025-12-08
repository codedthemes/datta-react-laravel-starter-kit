import React from 'react';

// project-imports
import { DrawerHeader, DrawerOverlay, useDrawerLogic } from '../common';
import TabDrawerContent from './TabDrawerContent';

// ==============================|| TAB DRAWER ||============================== //

export const TabDrawer: React.FC = () => {
  const { drawerOpen, selectedItems, setSelectedItems, isMobile, overlayRef, sidebarTheme } = useDrawerLogic();

  // Different className logic for mobile vs desktop
  const getSidebarClassName = () => {
    if (isMobile) {
      // On mobile: only use mob-sidebar-active, not pc-sidebar-hide
      return `pc-sidebar ${drawerOpen ? 'mob-sidebar-active' : ''}`;
    } else {
      // On desktop: use pc-sidebar-hide for tab layout
      return `pc-sidebar ${drawerOpen ? 'pc-sidebar-hide' : ''}`;
    }
  };

  return (
    <nav id="pc-sidebar" className={getSidebarClassName()}>
      <div className="navbar-wrapper">
        <DrawerHeader sidebarTheme={sidebarTheme} />
        <div className="tab-container">
          <TabDrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
      <DrawerOverlay drawerOpen={drawerOpen} isMobile={isMobile} overlayRef={overlayRef} />
    </nav>
  );
};
