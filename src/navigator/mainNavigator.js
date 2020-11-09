import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen114124Navigator from '../features/CopyOfBlankScreen114124/navigator';
import BlankScreen014123Navigator from '../features/BlankScreen014123/navigator';
import BlankScreen114122Navigator from '../features/BlankScreen114122/navigator';
import BlankScreen014120Navigator from '../features/BlankScreen014120/navigator';
import BlankScreen114119Navigator from '../features/BlankScreen114119/navigator';
import BlankScreen014117Navigator from '../features/BlankScreen014117/navigator';
import BlankScreen114116Navigator from '../features/BlankScreen114116/navigator';
import BlankScreen014113Navigator from '../features/BlankScreen014113/navigator';
import BlankScreen114112Navigator from '../features/BlankScreen114112/navigator';
import CopyOfBlankScreen114111Navigator from '../features/CopyOfBlankScreen114111/navigator';
import BlankScreen114109Navigator from '../features/BlankScreen114109/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen114124: { screen: CopyOfBlankScreen114124Navigator },
BlankScreen014123: { screen: BlankScreen014123Navigator },
BlankScreen114122: { screen: BlankScreen114122Navigator },
BlankScreen014120: { screen: BlankScreen014120Navigator },
BlankScreen114119: { screen: BlankScreen114119Navigator },
BlankScreen014117: { screen: BlankScreen014117Navigator },
BlankScreen114116: { screen: BlankScreen114116Navigator },
BlankScreen014113: { screen: BlankScreen014113Navigator },
BlankScreen114112: { screen: BlankScreen114112Navigator },
CopyOfBlankScreen114111: { screen: CopyOfBlankScreen114111Navigator },
BlankScreen114109: { screen: BlankScreen114109Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
