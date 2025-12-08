import React from 'react';

// project-imports
import Navigation from '../DrawerContent';

// types
import { NavItemType } from '@/types/menu';

// ==============================|| HORIZONTAL DRAWER CONTENT ||============================== //

interface HorizontalDrawerContentProps {
  selectedItems: NavItemType | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

export default function HorizontalDrawerContent({ selectedItems, setSelectedItems }: HorizontalDrawerContentProps) {
  return <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} />;
}
