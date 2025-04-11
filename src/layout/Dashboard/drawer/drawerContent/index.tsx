import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// third-party
import SimpleBar from 'simplebar-react';
import { FormattedMessage } from 'react-intl';

// project-imports
import Navigation from './navigation';
import { useGetMenuMaster } from 'api/menu';
import useConfig from 'hooks/useConfig';
import { MenuOrientation } from 'config';

// types
import { NavItemType } from 'types/menu';

interface Props {
  selectedItems: NavItemType | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

// Function to check if a menu item is selected
const isSelected = (item: NavItemType, selectedItem: NavItemType | undefined) => {
  return selectedItem?.id === item.id;
};

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent({ selectedItems, setSelectedItems }: Props) {
  const { pathname } = useLocation();
  const { onChangeMenuOrientation, menuOrientation } = useConfig();
  const [selectTab, setSelectTab] = useState<NavItemType | undefined>();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleClick = (item: NavItemType) => {
    if (!item.id) return;
    const isMobile = window.innerWidth <= 1024;

    if (isMobile || !drawerOpen) {
      setOpen((prev) => ({
        ...prev,
        [item.id as string]: !prev[item.id as string]
      }));
    }

    setSelectedItems(item);
  };

  return (
    <>
      {menuOrientation !== MenuOrientation.HORIZONTAL ? (
        <div className={`${menuOrientation === MenuOrientation.TAB ? 'tab-sidemenu' : ''}`}>
          <SimpleBar style={{ height: 'calc(100vh - 74px)' }}>
            <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} setSelectTab={setSelectTab} />
          </SimpleBar>
        </div>
      ) : (
        <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      )}

      {['/layouts/tab'].includes(pathname) && (
        <div className="tab-link">
          <div className={`navbar-content pc-trigger`}>
            <SimpleBar style={{ height: 'calc(100vh - 74px)' }}>
              <ul className="pc-navbar">
                {selectTab?.children?.map((item: NavItemType, index: number) => (
                  <ListGroup key={index} className={`pc-item pc-hasmenu ${open[item?.id as string] ? 'pc-trigger' : ''}`}>
                    <a className={`pc-link ${isSelected(item, selectedItems) ? 'active' : ''}`} onClick={() => handleClick(item)}>
                      {item.icon && (
                        <span className="pc-micon">
                          <i className={typeof item.icon === 'string' ? item.icon : item.icon?.props.className} />
                        </span>
                      )}
                      <span className="pc-mtext">
                        <FormattedMessage id={item.title?.toString()} />
                      </span>
                      <span className="pc-arrow">
                        <i className="ti ti-chevron-right" />
                      </span>
                    </a>
                    {open[item.id as string] && (
                      <ul className="pc-submenu">
                        {item.children?.map((child: NavItemType) => (
                          <li key={child.id} className={`pc-item ${isSelected(child, selectedItems) ? 'active' : ''}`}>
                            <Link
                              className="pc-link"
                              to={child?.url || ''}
                              onClick={() => {
                                handleClick(child);
                                if (child.layout === child.title) {
                                  onChangeMenuOrientation(child.layout as MenuOrientation);
                                }
                              }}
                            >
                              {child.icon && (
                                <span className="pc-micon">
                                  <i className={typeof child.icon === 'string' ? child.icon : child.icon?.props.className} />
                                </span>
                              )}
                              <FormattedMessage id={child.title?.toString()} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </ListGroup>
                ))}
              </ul>
            </SimpleBar>
          </div>
        </div>
      )}
    </>
  );
}
