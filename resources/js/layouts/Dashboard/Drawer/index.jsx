// project-imports
import { MenuOrientation } from '@/config';
import useConfig from '@/hooks/useConfig';
import { VerticalDrawer } from '../Drawer/vertical';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

export default function MainDrawer() {

  const { menuOrientation } = useConfig();

  switch (menuOrientation) {
    case MenuOrientation.VERTICAL:
      return <VerticalDrawer />;
    default:
      return <VerticalDrawer />;
  }
}
