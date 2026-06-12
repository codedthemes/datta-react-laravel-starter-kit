import PropTypes from 'prop-types';
import { useState } from 'react';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// project imports
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import { MenuOrientation } from '@/config';
import menuItems from '@/menu-items';
import useConfig from '@/hooks/useConfig';

// ==============================|| DRAWER CONTENT ||============================== //

export default function Navigation({
  selectedItems,
  setSelectedItems,
  setSelectTab
}) {
  const [selectedID, setSelectedID] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(0);
  const { menuOrientation } = useConfig();

  const lastItem = null;
  let lastItemIndex = menuItems.items.length - 1;
  let remItems = [];
  let lastItemId;

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id;
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
            lastItem={lastItem}
            remItems={remItems}
            lastItemId={lastItemId}
            item={item}
            setSelectTab={setSelectTab ?? (() => {})} />
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


Navigation.propTypes = {selectedItems:PropTypes.any,
setSelectedItems:PropTypes.oneOfType([PropTypes.any, PropTypes.func]),
setSelectTab:PropTypes.oneOfType([PropTypes.any, PropTypes.func])};