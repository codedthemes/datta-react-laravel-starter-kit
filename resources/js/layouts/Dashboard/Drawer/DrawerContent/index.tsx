import { useCallback, useEffect, useState } from 'react';
import { usePage, Link } from '@inertiajs/react';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// project imports
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import { MenuOrientation } from '@/config';
import menuItems from '@/menu-items';
import useConfig from '@/hooks/useConfig';

// types
import { NavItemType } from '@/types/menu';

interface NavigationProps {
  selectedItems?: NavItemType;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
  setSelectTab?: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

// ==============================|| DRAWER CONTENT ||============================== //

export default function Navigation({ selectedItems, setSelectedItems, setSelectTab }: NavigationProps) {
  const [selectedID, setSelectedID] = useState<string | undefined>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const { menuOrientation } = useConfig();

  const lastItem = null;
  let lastItemIndex = menuItems.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.items.slice(lastItem - 1, menuItems.items.length).map((item) => ({
      id: item.id,
      type: item.type,
      title: item.title,
      elements: item.children,
      icon: item.icon,
      ...(item.url && {
        url: item.url
      })
    }));
  }

  const navGroups = menuItems.items.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        if (item.url && item.id !== lastItemId) {
          return (
            <ListGroup.Item key={item.id}>
              <NavItem item={item} level={1} isParents />
            </ListGroup.Item>
          );
        }

        return (
          <NavGroup
            key={item.id}
            setSelectedID={setSelectedID}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedID={selectedID}
            selectedItems={selectedItems}
            lastItem={lastItem!}
            remItems={remItems}
            lastItemId={lastItemId}
            item={item}
            setSelectTab={setSelectTab ?? (() => {})}
          />
        );
    }

    return (
      <h6 key={item.id} className="text-danger align-items-center">
        Fix - Navigation Group
      </h6>
    );
  });

  // Handle menu orientation classes
  const listClass =
    menuOrientation === MenuOrientation.TAB
      ? 'pc-navbar d-block pc-tab-link nav flex-column'
      : menuOrientation === MenuOrientation.HORIZONTAL
        ? 'pc-navbar'
        : 'pc-navbar d-block';

  return <ul className={listClass}>{navGroups}</ul>;
}
