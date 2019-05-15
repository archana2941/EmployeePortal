import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginContainer from '../screens/Login/LoginContainer';
import DashboardContainer from '../screens/Dashboard/DashboardContainer';

const AppNavigator = createStackNavigator({
    Login: LoginContainer,
    Dashboard: DashboardContainer,
},{
    initialRouteName: 'Login'
});
export default createAppContainer(AppNavigator);