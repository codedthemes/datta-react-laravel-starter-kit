import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react-bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project imports
import navigation from 'menu-items';

// types
import { NavItemType } from 'types/menu';

interface Props {
  id: string;
  url: string;
  type: string;
  title: string;
  breadcrumbs: boolean;
}

// ==============================|| MAIN BREADCRUMB ||============================== //

export default function CustomBreadcrumbs(): React.ReactElement {
  const location = useLocation();

  const [main, setMain] = useState<Partial<Props>>({});
  const [item, setItem] = useState<Partial<Props>>({});

  const getCollapse = useCallback(
    (item: NavItemType) => {
      if (item.children) {
        item.children.forEach((collapse) => {
          if (collapse.type === 'collapse') {
            getCollapse(collapse);
          } else if (collapse.type === 'item' && location.pathname === collapse.url) {
            setMain((prev) => ({
              ...prev,
              type: 'collapse', // Add this
              title: typeof item.title === 'string' ? item.title : undefined
            }));
            setItem((prev) => ({
              ...prev,
              type: 'item', // Add this
              title: typeof collapse.title === 'string' ? collapse.title : undefined
            }));
          }
        });
      }
    },
    [location.pathname]
  );

  useEffect(() => {
    navigation.items.forEach((navItem) => {
      if (navItem.type === 'group') {
        getCollapse(navItem);
      }
    });
  }, [location.pathname, getCollapse]);

  let mainContent;
  let itemContent;
  let breadcrumbContent;
  let title = '';

  if (main?.type === 'collapse') {
    mainContent = (
      <Breadcrumb.Item as={Link} to="#" className="text-capitalize">
        {main.title}
      </Breadcrumb.Item>
    );
  }

  if (item?.type === 'item') {
    title = item.title ?? '';
    itemContent = (
      <Breadcrumb.Item as={Link} to="#" className="text-capitalize">
        {title}
      </Breadcrumb.Item>
    );

    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <div className="page-header">
          <div className="page-block">
            <Row className="align-items-center">
              <Col md={12}>
                <Breadcrumb className="page-header-title text-capitalize">
                  <h5 className="m-b-0">{title}</h5>
                </Breadcrumb>
              </Col>
              <Col md={12}>
                <Breadcrumb className="breadcrumb">
                  <Breadcrumb.Item as={Link} to="/dashboard/analytics">
                    Home
                  </Breadcrumb.Item>
                  {mainContent}
                  {itemContent}
                </Breadcrumb>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
  }

  return <>{breadcrumbContent}</>;
}
