import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { matchPath } from 'react-router-dom';
import { Link, usePage } from '@inertiajs/react';

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

// types
import { NavItemType } from '@/types/menu';

interface Props {
  item: NavItemType;
  lastItem: number;
  remItems: NavItemType[];
  lastItemId: string;
  setSelectedID: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedID: string | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
  selectedItems: NavItemType | undefined;
  setSelectedLevel: React.Dispatch<React.SetStateAction<number>>;
  selectedLevel: number;
  setSelectTab: (item: NavItemType) => void;
}

// ==============================|| NAVIGATION - GROUP ||============================== //

export default function NavGroup(props: Props) {
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
  const [currentItem, setCurrentItem] = useState<NavItemType>(item);
  const [firstChild, setFirstChild] = useState<NavItemType | undefined>(item.children?.[0]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>();

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
  const findMatchingChild = useCallback(
    (children: NavItemType[], parentId: string) => {
      children.forEach((child) => {
        if (child.children?.length) findMatchingChild(child.children, parentId);
        const path = child.link || child.url;
        if (path && matchPath({ path, end: true }, pathname.url)) {
          setSelectedID(parentId);
        }
      });
    },
    [pathname, setSelectedID]
  );

  //  On-load selection
  useEffect(() => {
    const children = currentItem.children ?? [];
    children.forEach((child) => {
      if (child.children?.length) findMatchingChild(child.children, currentItem.id!);
      const path = child.link || child.url;
      if (path && matchPath({ path, end: true }, pathname.url)) {
        setSelectedID(currentItem.id!);
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
              parentId={currentItem.id!}
            />
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
        onMouseLeave={() => setOpen(false)}
      >
        <a className="pc-link" href="#!" onClick={handleClick}>
          {firstChild?.icon && (
            <span className="pc-micon">
              <i className={firstChild.icon} />
            </span>
          )}
          <span className="pc-mtext">
            <FormattedMessage id={item.title as string} />
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
              <FormattedMessage id={item.title as string} />
            </Tooltip>
          }
        >
          <a
            href="#!"
            className={`nav-link ${item.id === selected ? 'active' : ''}`}
            onClick={() => {
              handleClick();
              if (item?.layout === item?.title) {
                onChangeMenuOrientation(item.layout as MenuOrientation);
              }
            }}
          >
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
          <FormattedMessage id={item.title as string} />
        </label>
      </li>
      {navCollapse}
    </Fragment>
  );
}
