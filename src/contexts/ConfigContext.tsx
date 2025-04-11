import { createContext, ReactElement } from 'react';

// project-imports
import useLocalStorage from 'hooks/useLocalStorage';
import config, { MenuOrientation } from 'config';

// types
import { CustomizationProps, I18n } from 'types/config';

// initial state
const initialState: CustomizationProps = {
  ...config,
  onChangeLocalization: () => {},
  onChangeMenuOrientation: () => {}
};

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
  children: ReactElement;
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage('datta-able-react-ts-config', initialState);

  const onChangeLocalization = (lang: I18n) => {
    setConfig({
      ...config,
      i18n: lang
    });
  };

  const onChangeMenuOrientation = (layout: MenuOrientation) => {
    setConfig({
      ...config,
      menuOrientation: layout
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeLocalization,
        onChangeMenuOrientation
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
