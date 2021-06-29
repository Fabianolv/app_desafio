import {
    createStackNavigator,
    CardStyleInterpolators,
} from 'react-navigation-stack';
import SignUp from './SignUp/SignUp.component';
import SignIn from './SignIn/SignIn.component';

export const LoginNavigatorConfig: any = {
    initialRouteName: 'SignIn',
    // header: null,
    // headerMode: 'none',
};

const navigationOptions = () => ({
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
});

const RouteConfigs = {
    SignIn: {
        screen: SignIn,
        navigationOptions,
    },
    SignUp: {
        screen: SignUp,
        navigationOptions,
    }
};

const LoginNavigator = createStackNavigator(RouteConfigs, LoginNavigatorConfig);

export default LoginNavigator;


// const RouterStackWithInitialRoute = () => {
//     return <LoginNavigator />;
// };

// export default RouterStackWithInitialRoute;
