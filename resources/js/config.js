// ==============================|| THEME CONSTANT ||============================== //

export const APP_DEFAULT_PATH = '/dashboard/default';
export const DRAWER_WIDTH = 260;

export let MenuOrientation;

(function(MenuOrientation) {
  MenuOrientation["VERTICAL"] = "vertical";
})(MenuOrientation || (MenuOrientation = {}));

export let ThemeMode;

(function(ThemeMode) {
  ThemeMode["LIGHT"] = "light";
  ThemeMode["DARK"] = "dark";
  ThemeMode["AUTO"] = "auto";
})(ThemeMode || (ThemeMode = {}));

export let Gender;

(function(Gender) {
  Gender["MALE"] = "Male";
  Gender["FEMALE"] = "Female";
})(Gender || (Gender = {}));

export let ThemeDirection;

(function(ThemeDirection) {
  ThemeDirection["LTR"] = "ltr";
  ThemeDirection["RTL"] = "rtl";
})(ThemeDirection || (ThemeDirection = {}));

// ==============================|| THEME CONFIG ||============================== //

const config = {
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  menuOrientation: MenuOrientation.VERTICAL,
  container: false,
  mode: ThemeMode.LIGHT,
  presetColor: 'default',
  caption: true,
  sidebarTheme: false,
  themeDirection: ThemeDirection.LTR,
  customColor: 'preset-1',
  headerColor: '',
  navbarColor: '',
  logoColor: '',
  navbarCaptionColor: '',
  navbarImg: '',
  menuIcon: 'preset-1',
  menuLinkIcon: 'preset-1'
};

export default config;
