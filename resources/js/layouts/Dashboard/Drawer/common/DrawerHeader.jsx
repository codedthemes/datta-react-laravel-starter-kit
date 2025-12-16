import React from 'react';

// react-bootstrap
import Image from 'react-bootstrap/Image';

// project-import
import { APP_DEFAULT_PATH, MenuOrientation, ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';

// assets
import logo from '@assets/images/logo-white.svg';
import DarkLogo from '@assets/images/logo-dark.svg';

export const DrawerHeader = ({ sidebarTheme }) => {
  const imgSrc = sidebarTheme === true ? DarkLogo : logo;

  return (
    <div className="m-header">
      <a href={APP_DEFAULT_PATH} className="b-brand text-primary">
        <Image src={imgSrc} fluid className="logo logo-lg" alt="logo" />
      </a>
    </div>
  );
};
