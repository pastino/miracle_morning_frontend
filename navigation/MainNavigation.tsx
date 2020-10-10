import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TabNavigation from './TapNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = createStackNavigator(
  {
    TabNavigation,
    AuthNavigation,
  },
  {headerMode: 'none'},
);

export default createAppContainer(MainNavigation);
