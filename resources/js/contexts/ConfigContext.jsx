import PropTypes from 'prop-types';
import { createContext, useEffect } from 'react';

// project-imports
import useLocalStorage from '@/hooks/useLocalStorage';
import config, { MenuOrientation } from '@/config';

// initial state
const initialState = {
  ...config,
  onChangeLocalization: () => {},
  onChangeMenuOrientation: () => {},
  onChangeDirection: () => {},
  onChangeContainer: () => {},
  onChangeCaption: () => {},
  onChangeSideTheme: () => {},
  onChangeThemePreset: () => {},
  onChangeMenuIcon: () => {},
  onChangeMode: () => {},
  onReset: () => {}
};

const ConfigContext = createContext(initialState);

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

function ConfigProvider({
  children
}) {
  const [config, setConfig] = useLocalStorage('datta-able-react-ts-config', initialState);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1510 && config.menuOrientation == 'horizontal') {
        setConfig((prevConfig) => ({
          ...prevConfig,
          menuOrientation: 'vertical'
        }));
      } else {
        if (width < 1025 && config.menuOrientation !== 'vertical') {
          setConfig((prevConfig) => ({
            ...prevConfig,
            menuOrientation: 'vertical'
          }));
        }
      }
    };

    window.addEventListener('resize', handleResize);
    // run once on mount to ensure correct state without refresh
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [config.menuOrientation, setConfig]);

  const onReset = () => {
    setConfig(initialState);
  };

  const onChangeLocalization = (lang) => {
    setConfig({
      ...config,
      i18n: lang
    });
  };

  const onChangeMenuOrientation = (layout) => {
    if (window.innerWidth >= 1025 || layout === MenuOrientation.VERTICAL) {
      setConfig({
        ...config,
        menuOrientation: layout
      });
    }
  };

  const onChangeMode = (selectedMode) => {
    setConfig({
      ...config,
      mode: selectedMode
    });
  };

  const onChangeCaption = (caption) => {
    setConfig({
      ...config,
      caption: caption
    });
  };

  const onChangeSideTheme = (sidebarTheme) => {
    setConfig({
      ...config,
      sidebarTheme: sidebarTheme
    });
  };

  const onChangeDirection = (direction) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeContainer = (container) => {
    setConfig({
      ...config,
      container: container
    });
  };

  const onChangeThemePreset = (key, value) => {
    setConfig({
      ...config,
      [key]: value
    });
  };

  const onChangeMenuIcon = (key, value) => {
    setConfig({
      ...config,
      [key]: value
    });
  };

  return (
    <ConfigContext
      value={{
        ...config,
        onChangeLocalization,
        onChangeMenuOrientation,
        onChangeMode,
        onChangeDirection,
        onChangeContainer,
        onChangeCaption,
        onChangeSideTheme,
        onChangeThemePreset,
        onChangeMenuIcon,
        onReset
      }}>
      {children}
    </ConfigContext>
  );
}

export { ConfigProvider, ConfigContext };


ConfigProvider.propTypes = {children:PropTypes.node};