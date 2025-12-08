import React from 'react';

// project-imports
import { DrawerHeader, DrawerOverlay, useDrawerLogic } from '../common';
import Layout2DrawerContent from './Layout2DrawerContent';

// ==============================|| LAYOUT2 DRAWER ||============================== //

export const Layout2Drawer: React.FC = () => {
  const { drawerOpen, selectedItems, setSelectedItems, isMobile, overlayRef, sidebarTheme } = useDrawerLogic();

  return (
    <nav id="pc-sidebar" className={`pc-sidebar ${drawerOpen && 'pc-sidebar-hide mob-sidebar-active'}`}>
      <div className="navbar-wrapper">
        <DrawerHeader sidebarTheme={sidebarTheme} />
        <div className="navbar-content">
          <Layout2DrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
      <DrawerOverlay drawerOpen={drawerOpen} isMobile={isMobile} overlayRef={overlayRef} />
    </nav>
  );
};
