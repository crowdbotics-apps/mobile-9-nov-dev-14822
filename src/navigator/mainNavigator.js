import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014166Navigator from '../features/BlankScreen014166/navigator';
import BlankScreen114165Navigator from '../features/BlankScreen114165/navigator';
import CopyOfBlankScreen114164Navigator from '../features/CopyOfBlankScreen114164/navigator';
import BlankScreen314156Navigator from '../features/BlankScreen314156/navigator';
import BlankScreen014129Navigator from '../features/BlankScreen014129/navigator';
import BlankScreen114128Navigator from '../features/BlankScreen114128/navigator';
import BlankScreen014126Navigator from '../features/BlankScreen014126/navigator';
import BlankScreen114125Navigator from '../features/BlankScreen114125/navigator';
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
BlankScreen014166: { screen: BlankScreen014166Navigator },
BlankScreen114165: { screen: BlankScreen114165Navigator },
CopyOfBlankScreen114164: { screen: CopyOfBlankScreen114164Navigator },
BlankScreen314156: { screen: BlankScreen314156Navigator },
BlankScreen014129: { screen: BlankScreen014129Navigator },
BlankScreen114128: { screen: BlankScreen114128Navigator },
BlankScreen014126: { screen: BlankScreen014126Navigator },
BlankScreen114125: { screen: BlankScreen114125Navigator },
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
