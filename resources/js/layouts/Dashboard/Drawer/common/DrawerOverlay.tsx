import React from 'react';

// ==============================|| COMMON DRAWER OVERLAY ||============================== //

interface DrawerOverlayProps {
  drawerOpen: boolean;
  isMobile: boolean;
  overlayRef: React.RefObject<HTMLDivElement | null>;
}

export const DrawerOverlay: React.FC<DrawerOverlayProps> = ({ drawerOpen, isMobile, overlayRef }) => {
  if (!drawerOpen || !isMobile) {
    return null;
  }

  return <div className="pc-menu-overlay" ref={overlayRef} />;
};
