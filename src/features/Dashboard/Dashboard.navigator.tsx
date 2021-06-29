import {
    createStackNavigator,
    CardStyleInterpolators,
} from 'react-navigation-stack';
import Home from './Home/Home.component';

export const DashboardNavigatorConfig: any = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const navigationOptions = () => ({
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
});

const RouteConfigs = {
    SignIn: {
        screen: Home,
        navigationOptions,
    }
};

const DashboardNavigator = createStackNavigator(RouteConfigs, DashboardNavigatorConfig);

export default DashboardNavigator;
