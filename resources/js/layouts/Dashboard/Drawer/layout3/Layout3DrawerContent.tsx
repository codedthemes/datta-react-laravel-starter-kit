import React from 'react';

// project-imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import Navigation from '../DrawerContent';

// types
import { NavItemType } from '@/types/menu';

// ==============================|| LAYOUT3 DRAWER CONTENT ||============================== //

interface Layout3DrawerContentProps {
  selectedItems: NavItemType | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

export default function Layout3DrawerContent({ selectedItems, setSelectedItems }: Layout3DrawerContentProps) {
  return (
    <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
      <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
    </SimpleBarScroll>
  );
}
