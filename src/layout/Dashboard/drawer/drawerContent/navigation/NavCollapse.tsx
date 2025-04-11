import React, { useEffect, useState, useMemo } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import NavItem from './NavItem';
import { useGetMenuMaster } from 'api/menu';

// types
import { NavItemType } from 'types/menu';

interface Props {
  menu: NavItemType;
  level: number;
  parentId: string;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
  selectedItems: any;
  setSelectedLevel: React.Dispatch<React.SetStateAction<number>>;
  selectedLevel: number;
}

// ==============================|| NAVIGATION - COLLAPSE ||============================== //

export default function NavCollapse({ menu, level, parentId, setSelectedItems, selectedItems, setSelectedLevel, selectedLevel }: Props) {
  const { menuMaster } = useGetMenuMaster();
  const navigation = useNavigate();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);

  const handleClick = (isRedirect: boolean) => {
    const isMobile = window.innerWidth <= 1024;
    setSelectedLevel(level);

    if (isMobile || !drawerOpen) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
      setSelectedItems(!selected && menu ? menu : selectedItems);
      if (menu.url && isRedirect) navigation(`${menu.url}`);
    }
  };

  useMemo(() => {
    if (selected === selectedItems?.id) {
      if (level === 1) {
        setOpen(true);
      }
    } else {
      if (level === selectedLevel) {
        setOpen(false);

        if (drawerOpen) {
          setSelected(null);
        }
      }
    }
  }, [selectedItems, level, selected, drawerOpen, selectedLevel]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === menu.url) {
      setSelected(menu.id);
    }
    // eslint-disable-next-line
  }, [pathname]);

  const checkOpenForParent = (child: NavItemType[], id: string) => {
    child.forEach((item: NavItemType) => {
      if (item.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };

  // menu collapse for sub-levels
  useEffect(() => {
    setOpen(false);
    if (menu.children) {
      menu.children.forEach((item: NavItemType) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id!);
        }

        if (item.link && !!matchPath({ path: item?.link, end: false }, pathname)) {
          setSelected(menu.id);
          setOpen(true);
        }

        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menu.children]);

  useEffect(() => {
    if (menu.url === pathname) {
      setSelected(menu.id);
      setOpen(true);
    }
  }, [pathname, menu]);

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            menu={item}
            level={level + 1}
            parentId={parentId}
          />
        );
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <h6 key={item.id} color="error" className="align-center">
            Fix - Collapse or Item
          </h6>
        );
    }
  });

  return (
    <>
      {window.location.pathname !== '/layouts/compact' && window.location.pathname !== '/layouts/tab' ? (
        <ListGroup className={`pc-item pc-hasmenu ${open && window.location.pathname !== '/layouts/horizontal' ? 'pc-trigger' : ''}`}>
          <a className="pc-link " onClick={() => handleClick(true)}>
            {menu.icon && (
              <span className="pc-micon">
                <i className={typeof menu.icon === 'string' ? menu.icon : menu.icon?.props.className} />
              </span>
            )}
            <span className="pc-mtext">
              <FormattedMessage id={menu.title?.toString()} />
            </span>
            <span className="pc-arrow">
              <i className={`ti ti-chevron-right`} />
            </span>
          </a>
          {open === true && <ul className="pc-submenu">{navCollapse}</ul>}
        </ListGroup>
      ) : (
        <>
          {window.location.pathname !== '/layouts/tab' && (
            <ListGroup className={`pc-item pc-hasmenu ${(open && window.location.pathname === '/layouts/compact') ?? 'pc-trigger'}`}>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-${menu.title?.toString()}`}>
                    <FormattedMessage id={menu.title?.toString()} />
                  </Tooltip>
                }
              >
                <a className="pc-link " onClick={() => handleClick(true)}>
                  {menu.icon && (
                    <span className="pc-micon">
                      <i className={typeof menu.icon === 'string' ? menu.icon : menu.icon?.props.className} />
                    </span>
                  )}
                </a>
              </OverlayTrigger>
            </ListGroup>
          )}
        </>
      )}
    </>
  );
}
