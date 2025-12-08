import { createContext, ReactElement, useEffect } from 'react';

// project-imports
import useLocalStorage from '@/hooks/useLocalStorage';
import config, { MenuOrientation, ThemeDirection, ThemeMode } from '@/config';

// types
import { CustomizationProps, I18n } from '@/types/config';

// initial state
const initialState: CustomizationProps = {
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

type ConfigProviderProps = {
  children: ReactElement;
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage('datta-able-react-ts-config', initialState);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1510 && config.menuOrientation == 'horizontal') {
        setConfig((prevConfig: any) => ({
          ...prevConfig,
          menuOrientation: 'vertical'
        }));
      } else {
        if (width < 1025 && config.menuOrientation !== 'vertical') {
          setConfig((prevConfig: any) => ({
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

  const onChangeLocalization = (lang: I18n) => {
    setConfig({
      ...config,
      i18n: lang
    });
  };

  const onChangeMenuOrientation = (layout: MenuOrientation) => {
    if (window.innerWidth >= 1025 || layout === MenuOrientation.VERTICAL) {
      setConfig({
        ...config,
        menuOrientation: layout
      });
    }
  };

  const onChangeMode = (selectedMode: ThemeMode) => {
    setConfig({
      ...config,
      mode: selectedMode
    });
  };

  const onChangeCaption = (caption: boolean) => {
    setConfig({
      ...config,
      caption: caption
    });
  };

  const onChangeSideTheme = (sidebarTheme: boolean) => {
    setConfig({
      ...config,
      sidebarTheme: sidebarTheme
    });
  };

  const onChangeDirection = (direction: ThemeDirection) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeContainer = (container: boolean) => {
    setConfig({
      ...config,
      container: container
    });
  };

  const onChangeThemePreset = (key: string, value: string) => {
    setConfig({
      ...config,
      [key]: value
    });
  };

  const onChangeMenuIcon = (key: string, value: string) => {
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
      }}
    >
      {children}
    </ConfigContext>
  );
}

export { ConfigProvider, ConfigContext };
