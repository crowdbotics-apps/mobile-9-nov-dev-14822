import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen114110Navigator from '../features/CopyOfBlankScreen114110/navigator';
import BlankScreen114109Navigator from '../features/BlankScreen114109/navigator';
import BlankScreen014107Navigator from '../features/BlankScreen014107/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen114110: { screen: CopyOfBlankScreen114110Navigator },
BlankScreen114109: { screen: BlankScreen114109Navigator },
BlankScreen014107: { screen: BlankScreen014107Navigator },

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
