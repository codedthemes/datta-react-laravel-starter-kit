import { Fragment, useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import { useGetMenuMaster } from 'api/menu';
import { MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';

// types
import { NavItemType } from 'types/menu';

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

type VirtualElement = {
  getBoundingClientRect: () => ClientRect | DOMRect;
  contextElement?: Element;
};

// ==============================|| NAVIGATION - GROUP ||============================== //

export default function NavGroup({
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
}: Props) {
  const [anchorEl, setAnchorEl] = useState<VirtualElement | (() => VirtualElement) | null | undefined>(null);
  const [currentItem, setCurrentItem] = useState(item);
  const [state, setState] = useState<any>();
  const { pathname } = useLocation();
  const { menuOrientation } = useConfig();

  const openMini = Boolean(anchorEl);

  useEffect(() => {
    if (lastItem) {
      if (item.id === lastItemId) {
        const localItem: any = { ...item };
        const elements = remItems.map((ele: NavItemType) => ele?.children);
        localItem.children = elements.flat(1);
        setCurrentItem(localItem);
      } else {
        setCurrentItem(item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, lastItem]);

  const checkOpenForParent = (child: NavItemType[], id: string) => {
    child.forEach((ele: NavItemType) => {
      if (ele.children?.length) {
        checkOpenForParent(ele.children, currentItem.id!);
      }

      if (ele.url && !!matchPath({ path: ele?.link ? ele.link : ele.url, end: true }, pathname)) {
        setSelectedID(id);
      }
    });
  };

  const checkSelectedOnload = (data: NavItemType) => {
    const childrens = data.children ?? []; // Use Nullish Coalescing (??) instead of Ternary (?:)
    childrens.forEach((itemCheck: NavItemType | undefined) => {
      if (!itemCheck) return;

      if (itemCheck.children?.length) {
        checkOpenForParent(itemCheck.children, currentItem.id!);
      }

      if (itemCheck.url && matchPath({ path: itemCheck.link ? itemCheck.link : itemCheck.url, end: true }, pathname)) {
        setSelectedID(currentItem.id!);
      }
    });
  };

  useEffect(() => {
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentItem]);

  useEffect(() => {
    if (item.children?.length) {
      setState(() => item.children?.[0]);
    }
  }, [item.children]);

  const navCollapse = item.children?.map((menuItem, index) => {
    switch (menuItem.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={menuItem.id}
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
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <h6 key={index} color="error" className="align-center">
            Fix - Group Collapse or Items
          </h6>
        );
    }
  });
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);

  const { menuMaster } = useGetMenuMaster();

  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const handleClick = () => {
    const isMobile = window.innerWidth <= 1024;
    setSelectedLevel(1);
    if (menuOrientation !== MenuOrientation.HORIZONTAL) {
      setSelectTab(item);
    }
    if (isMobile || !drawerOpen) {
      setOpen(!open);
      setSelected(!selected ? state.id : null);
      setSelectedItems(!selected ? state : null);
    }
  };
  menuOrientation === MenuOrientation.TAB;
  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL ? (
        <ListGroup className={`pc-item pc-hasmenu ${open && menuOrientation !== MenuOrientation.HORIZONTAL ? 'pc-trigger' : ''}`}>
          <a className="pc-link " onClick={handleClick}>
            {state?.icon && (
              <span className="pc-micon">
                <i className={typeof state?.icon === 'string' ? state?.icon : state?.icon?.props.className} />
              </span>
            )}
            <span className="pc-mtext">
              <FormattedMessage id={item.title?.toString()} />
            </span>
            <span className="pc-arrow">
              <i className={`ti ti-chevron-right`} />
            </span>
          </a>
          {open === true && <ul className="pc-submenu">{navCollapse}</ul>}
        </ListGroup>
      ) : (
        <>
          {menuOrientation !== MenuOrientation.TAB ? (
            <Fragment>
              <li className="pc-item pc-caption" key={item.id}>
                <label>
                  <FormattedMessage id={item.title?.toString()} />
                </label>
              </li>
              {navCollapse}
            </Fragment>
          ) : (
            <li className="nav-item">
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-${item?.title ?? ''}`}>
                    <FormattedMessage id={item.title?.toString()} />
                  </Tooltip>
                }
              >
                <a className={`nav-link ${item.id === selected ? 'active' : ''}`} onClick={handleClick}>
                  {state?.icon && <i className={`f-20  ${typeof state?.icon === 'string' ? state?.icon : state?.icon?.props.className}`} />}
                </a>
              </OverlayTrigger>
            </li>
          )}
        </>
      )}
    </>
  );
}
