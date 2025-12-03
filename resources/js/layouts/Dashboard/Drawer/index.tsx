// project-imports
import { MenuOrientation } from '@/config';
import useConfig from '@/hooks/useConfig';
import { VerticalDrawer } from '../Drawer/vertical';
import { TabDrawer } from '../Drawer/tab';
import { Layout2Drawer } from '../Drawer/layout2';
import { Layout3Drawer } from '../Drawer/layout3';
import { HorizontalDrawer } from '../Drawer/horizontal';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

export default function MainDrawer() {

  const { menuOrientation } = useConfig();

  switch (menuOrientation) {
    case MenuOrientation.VERTICAL:
      return <VerticalDrawer />;
    case MenuOrientation.HORIZONTAL:
      return <HorizontalDrawer />;
    case MenuOrientation.TAB:
      return <TabDrawer />;
    case MenuOrientation.LAYOUT2:
      return <Layout2Drawer />;
    case MenuOrientation.LAYOUT3:
      return <Layout3Drawer />;
    default:
      return <VerticalDrawer />;
  }
}