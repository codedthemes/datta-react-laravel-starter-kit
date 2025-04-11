// types
// import { DefaultConfigProps } from 'types/config';

// ==============================|| THEME CONSTANT ||============================== //

export const APP_DEFAULT_PATH = '/dashboard/analytics';
export const HORIZONTAL_MAX_ITEM = 7;
export const DRAWER_WIDTH = 260;

export type FontFamily = "'Public Sans', sans-serif";

export type I18n = 'en' | 'fr' | 'ro' | 'zh';

export type PresetColor = 'default'; // Add all valid options

export enum SimpleLayoutType {
  SIMPLE = 'simple',
  LANDING = 'landing'
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum MenuOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  COMPACT = 'compact',
  TAB = 'tab',
  LAYOUT2 = 'layout-2',
  LAYOUT3 = 'layout-3'
}

export enum ThemeDirection {
  LTR = 'ltr',
  RTL = 'rtl'
}

export enum NavActionType {
  FUNCTION = 'function',
  LINK = 'link'
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female'
}

export enum DropzopType {
  DEFAULT = 'default',
  STANDARD = 'standard'
}

// export const APP_AUTH: AuthProvider = AuthProvider.JWT;

// ==============================|| THEME CONFIG ||============================== //

const config = {
  fontFamily: `'Public Sans', sans-serif` as FontFamily,
  i18n: 'en' as I18n,
  menuOrientation: MenuOrientation.VERTICAL,
  miniDrawer: false,
  container: true,
  mode: ThemeMode.LIGHT,
  presetColor: 'default' as PresetColor,
  themeDirection: ThemeDirection.LTR
};

export default config;
