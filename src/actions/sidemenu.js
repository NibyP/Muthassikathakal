import { TOGGLE_SIDEMENU, UPDATE_SIDEMENUSTATE, ON_SIDEMENUITEM_SELECTED} from './types';

export const toggleSideMenu = (sidemenu) =>(
    {
        type: TOGGLE_SIDEMENU,
        data: sidemenu
    }
);
export const updateSideMenuState = (sidemenu) =>(
    {
        type: UPDATE_SIDEMENUSTATE,
        data: sidemenu
    }
);
export const onMenuItemSelected = (sidemenu) =>(
  {
      type: ON_SIDEMENUITEM_SELECTED,
      data: sidemenu
  }
);

