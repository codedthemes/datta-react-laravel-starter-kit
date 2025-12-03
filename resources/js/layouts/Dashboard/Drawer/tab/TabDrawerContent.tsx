import React, { useCallback, useEffect, useState } from 'react';

// react-bootstrap
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import Navigation from '../DrawerContent';
import { useGetMenuMaster, handlerDrawerOpen } from '@/api/menu';
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import { MenuOrientation } from '@/config';
import useConfig from '@/hooks/useConfig';
import menuItems from '@/menu-items';

// types
import { NavItemType } from '@/types/menu';
import { usePage } from '@inertiajs/react';

// ==============================|| TAB DRAWER CONTENT ||============================== //

interface TabDrawerContentProps {
  selectedItems: NavItemType | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

export default function TabDrawerContent({ selectedItems, setSelectedItems }: TabDrawerContentProps) {
  const { onChangeMenuOrientation } = useConfig();
  const [selectTab, setSelectTab] = useState<NavItemType | undefined>(menuItems.items[0]);
  const { menuMaster } = useGetMenuMaster();
  const  pathname  = usePage();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const [open, setOpen] = useState<Record<string, boolean>>({});

  const collectDescendantIds = useCallback((entry?: NavItemType): string[] => {
    const ids: string[] = [];
    const walk = (node?: NavItemType) => {
      if (!node?.children) return;
      node.children.forEach((child) => {
        if (child.id) ids.push(child.id as string);
        walk(child);
      });
    };
    walk(entry);
    return ids;
  }, []);

  const handleClick = (item: NavItemType, siblings?: NavItemType[]) => {
    if (!item.id) return;

    const isMobile = window.innerWidth <= 1024;

    setOpen((prev) => {
      const next: Record<string, boolean> = { ...prev };

      // Close siblings at the same level (accordion behavior)
      if (Array.isArray(siblings)) {
        siblings.forEach((sib) => {
          if (sib.id && sib.id !== item.id) {
            next[sib.id as string] = false;
            // also close all descendants of closed sibling
            collectDescendantIds(sib).forEach((descId) => {
              next[descId] = false;
            });
          }
        });
      }

      // Toggle the clicked item
      const willOpen = !prev[item.id as string];
      next[item.id as string] = willOpen;

      // If closing the clicked item, also close its descendants
      if (!willOpen) {
        collectDescendantIds(item).forEach((descId) => {
          next[descId] = false;
        });
      }

      return next;
    });

    if (isMobile || !drawerOpen) {
      setSelectedItems(item);

      // On mobile, close sidebar when clicking on items with URLs (same as vertical layout)
      if (isMobile && item.url) {
        handlerDrawerOpen(false);
      }
    }
  };

  const isActive = useCallback(
    (item: NavItemType) => {
      if (!item.url) return false;
      // return pathname.toLowerCase().includes(item.url.toLowerCase());
      return typeof pathname === "string" &&
       typeof item?.url === "string" &&
       pathname.toLowerCase().includes(item.url.toLowerCase());
    },
    [pathname]
  );

  const autoOpenParents = useCallback(
    (items?: NavItemType[]) => {
      const openMap: Record<string, boolean> = {};

      const findAndMark = (entries: NavItemType[] = []) => {
        entries.forEach((item) => {
          if (item.children) {
            const match = item.children.find((child) => isActive(child) || child.children?.some(isActive));
            if (match) openMap[item.id as string] = true;

            findAndMark(item.children);
          }
        });
      };

      findAndMark(items);
      setOpen(openMap);
    },
    [isActive, setOpen]
  );

  useEffect(() => {
    autoOpenParents(selectTab?.children);
  }, [autoOpenParents, selectTab]);

  return (
    <>
      <div className="tab-sidemenu">
        <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
          <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} setSelectTab={setSelectTab} />
        </SimpleBarScroll>
      </div>
      <div className="tab-link">
        <div className="navbar-content pc-trigger">
          <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
            <ul className="pc-navbar">
              {selectTab?.children?.map((item) => (
                <ListGroup
                  key={item.id}
                  className={`pc-item pc-hasmenu ${open[item.id as string] ? 'pc-trigger' : ''} ${isActive(item) ? 'active' : ''}`}
                >
                  <a href={item.url || '#'} className="pc-link" onClick={() => handleClick(item, selectTab?.children)}>
                    {item.icon && (
                      <span className="pc-micon">
                        <i className={item.icon} />
                      </span>
                    )}
                    <span className="pc-mtext">
                      <FormattedMessage id={item.title as string} />
                    </span>
                    {item.type === 'collapse' && (
                      <span className="pc-arrow">
                        <i className="ti ti-chevron-right" />
                      </span>
                    )}
                  </a>

                  {item.children && (
                    <Collapse in={!!open[item.id as string]} mountOnEnter unmountOnExit>
                      <div>
                        <ul className="pc-submenu">
                          {item.children.map((child) => (
                            <li
                              key={child.id}
                              className={`pc-item ${child.type === 'collapse' ? 'pc-hasmenu' : ''} ${open[child.id as string] ? 'pc-trigger' : ''} ${isActive(child) ? 'active' : ''}`}
                            >
                              <a
                                href={child.url || '#'}
                                className="pc-link"
                                onClick={() => {
                                  handleClick(child, item.children);
                                  if (child?.layout === child?.title) {
                                    onChangeMenuOrientation(child?.layout as MenuOrientation);
                                  }
                                }}
                              >
                                {child.icon && (
                                  <span className="pc-micon">
                                    <i className={child.icon} />
                                  </span>
                                )}
                                <FormattedMessage id={child.title as string} />
                                {child.type === 'collapse' && (
                                  <span className="pc-arrow">
                                    <i className="ti ti-chevron-right" />
                                  </span>
                                )}
                              </a>

                              {child.children && (
                                <Collapse in={!!open[child.id as string]} mountOnEnter unmountOnExit>
                                  <div>
                                    <ul className="pc-submenu">
                                      {child.children.map((value) => (
                                        <li
                                          key={value.id}
                                          className={`pc-item ${value.type === 'collapse' ? 'pc-hasmenu' : ''} ${open[value.id as string] ? 'pc-trigger' : ''} ${isActive(value) ? 'active' : ''}`}
                                        >
                                          <a
                                            className="pc-link"
                                            href={value.url || ''}
                                            onClick={() => {
                                              handleClick(value, child.children);
                                              if (value?.layout === value?.title) {
                                                onChangeMenuOrientation(value?.layout as MenuOrientation);
                                              }
                                            }}
                                          >
                                            {value.icon && (
                                              <span className="pc-micon">
                                                <i className={value.icon} />
                                              </span>
                                            )}
                                            <FormattedMessage id={value.title as string} />
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </Collapse>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Collapse>
                  )}
                </ListGroup>
              ))}
            </ul>
          </SimpleBarScroll>
        </div>
      </div>
    </>
  );
}
