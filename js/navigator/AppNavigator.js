import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage
  }
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  DetailPage: {
    screen: DetailPage
  }
});

export default createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
})