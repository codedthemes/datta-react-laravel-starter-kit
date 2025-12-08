import React from 'react';

// project-imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import Navigation from '../DrawerContent';

// types
import { NavItemType } from '@/types/menu';

// ==============================|| LAYOUT2 DRAWER CONTENT ||============================== //

interface Layout2DrawerContentProps {
  selectedItems: NavItemType | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

export default function Layout2DrawerContent({ selectedItems, setSelectedItems }: Layout2DrawerContentProps) {
  return (
    <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
      <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
    </SimpleBarScroll>
  );
}
