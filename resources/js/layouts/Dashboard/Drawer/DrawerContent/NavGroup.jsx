import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { matchPath } from 'react-router-dom';
import { usePage } from '@inertiajs/react';

// react-bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import useConfig from '@/hooks/useConfig';
import { useGetMenuMaster } from '@/api/menu';
import { MenuOrientation } from '@/config';

// ==============================|| NAVIGATION - GROUP ||============================== //

export default function NavGroup(props) {
  const {
    item,
    lastItem,
    remItems,
    lastItemId,
    setSelectedID,
    setSelectedItems,
    selectedItems,
    setSelectedLevel,
    selectedLevel,
    setSelectTab
  } = props;

  const pathname = usePage();
  const { menuOrientation, onChangeMenuOrientation } = useConfig();
  const { menuMaster } = useGetMenuMaster();

  const drawerOpen = menuMaster?.isDashboardDrawerOpened ?? false;
  const [currentItem, setCurrentItem] = useState(item);
  const [firstChild, setFirstChild] = useState(item.children?.[0]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  //  Combine items if this is the last grouped item
  useEffect(() => {
    if (lastItem && item.id === lastItemId) {
      const children = remItems.flatMap((ele) => ele.children ?? []);
      setCurrentItem({ ...item, children });
    } else {
      setCurrentItem(item);
    }
  }, [item, lastItem, lastItemId, remItems]);

  //  Helper: Recursively check if route matches
  const findMatchingChild = useCallback((children, parentId) => {
    children.forEach((child) => {
      if (child.children?.length) findMatchingChild(child.children, parentId);
      const path = child.link || child.url;
      if (path && matchPath({ path, end: true }, pathname.url)) {
        setSelectedID(parentId);
      }
    });
  }, [pathname, setSelectedID]);

  //  On-load selection
  useEffect(() => {
    const children = currentItem.children ?? [];
    children.forEach((child) => {
      if (child.children?.length) findMatchingChild(child.children, currentItem.id);
      const path = child.link || child.url;
      if (path && matchPath({ path, end: true }, pathname.url)) {
        setSelectedID(currentItem.id);
      }
    });
  }, [pathname, currentItem, findMatchingChild, setSelectedID]);

  //  Update first child reference
  useEffect(() => {
    setFirstChild(item.children?.[0]);
  }, [item.children]);

  //  Memoized children render
  const navCollapse = useMemo(() => {
    if (!currentItem.children) return null;

    return currentItem.children.map((menuItem, index) => {
      const key = menuItem.id || `${menuItem.type}-${index}`;

      switch (menuItem.type) {
        case 'collapse':
          return (
            <NavCollapse
              key={key}
              menu={menuItem}
              setSelectedItems={setSelectedItems}
              setSelectedLevel={setSelectedLevel}
              selectedLevel={selectedLevel}
              selectedItems={selectedItems}
              level={1}
              parentId={currentItem.id} />
          );
        case 'item':
          return <NavItem key={key} item={menuItem} level={1} />;
        default:
          return (
            <h6 key={`fix-${index}`} className="align-center text-danger">
              Fix - Group Collapse or Items
            </h6>
          );
      }
    });
  }, [currentItem, selectedItems, selectedLevel, setSelectedItems, setSelectedLevel]);

  //  Utility: Responsive check
  const isMobile = () => window.innerWidth <= 1024;

  //  Handle group click
  const handleClick = () => {
    setSelectedLevel(1);
    setSelectTab(item);

    if (isMobile() || !drawerOpen) {
      const nextOpen = !open;
      setOpen(nextOpen);
      const nextSelected = nextOpen ? (firstChild?.id ?? null) : null;
      setSelected(nextSelected);
      setSelectedItems(nextOpen ? firstChild : undefined);
    }
  };

  // ===================================|| HORIZONTAL MODE ||=================================== //

  if (menuOrientation === MenuOrientation.HORIZONTAL) {
    return (
      <li
        className={`pc-item pc-hasmenu ${open ? 'pc-trigger' : ''}`}
        onMouseEnter={() => {
          setSelectedLevel(1);
          setOpen(true);
          setSelected(item.id);
          setSelectedItems(firstChild);
        }}
        onMouseLeave={() => setOpen(false)}>
        <a className="pc-link" href="#!" onClick={handleClick}>
          {firstChild?.icon && (
            <span className="pc-micon">
              <i className={firstChild.icon} />
            </span>
          )}
          <span className="pc-mtext">
            <FormattedMessage id={item.title} />
          </span>
          <span className="pc-arrow">
            <i className="ti ti-chevron-right" />
          </span>
        </a>
        <ul className="pc-submenu">{navCollapse}</ul>
      </li>
    );
  }

  // =========================================|| VERTICAL / TAB MODE ||========================================== //

  if (menuOrientation === MenuOrientation.TAB) {
    return (
      <li className="nav-item">
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id={`tooltip-${item?.title ?? ''}`}>
              <FormattedMessage id={item.title} />
            </Tooltip>
          }>
          <a
            href="#!"
            className={`nav-link ${item.id === selected ? 'active' : ''}`}
            onClick={() => {
              handleClick();
              if (item?.layout === item?.title) {
                onChangeMenuOrientation(item.layout);
              }
            }}>
            {firstChild?.icon && <i className={`f-20 ${firstChild.icon}`} />}
          </a>
        </OverlayTrigger>
      </li>
    );
  }

  // =========================================|| DEFAULT VERTICAL MODE ||=========================================== //

  return (
    <Fragment>
      <li className="pc-item pc-caption" key={item.id}>
        <label>
          <FormattedMessage id={item.title} />
        </label>
      </li>
      {navCollapse}
    </Fragment>
  );
}
