import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginNavigator from '../features/Login/Login.navigator';
import DashboardNavigator from '../features/Dashboard/Dashboard.navigator';

const RootNavigator = createSwitchNavigator(
  {
    Login: LoginNavigator,
    // Dashboard: DashboardNavigator
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RootNavigator);