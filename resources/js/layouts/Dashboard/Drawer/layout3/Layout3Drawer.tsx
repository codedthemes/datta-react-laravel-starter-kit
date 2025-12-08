import React from 'react';

// project-imports
import { DrawerHeader, DrawerOverlay, useDrawerLogic } from '../common';
import Layout3DrawerContent from './Layout3DrawerContent';

// ==============================|| LAYOUT3 DRAWER ||============================== //

export const Layout3Drawer: React.FC = () => {
  const { drawerOpen, selectedItems, setSelectedItems, isMobile, overlayRef, sidebarTheme } = useDrawerLogic();

  return (
    <nav id="pc-sidebar" className={`pc-sidebar ${drawerOpen && 'pc-sidebar-hide mob-sidebar-active'}`}>
      <div className="navbar-wrapper">
        <DrawerHeader sidebarTheme={sidebarTheme} />
        <div className="navbar-content">
          <Layout3DrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
      <DrawerOverlay drawerOpen={drawerOpen} isMobile={isMobile} overlayRef={overlayRef} />
    </nav>
  );
};
