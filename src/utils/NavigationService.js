import { NavigationActions, StackActions } from 'react-navigation';

let navigator = {};
const NavigationService = {
    setTopLevelNavigator: (navigatorRef) => {
        navigator = navigatorRef;
    },
    navigate: (routeName, params) => navigator.dispatch(
        NavigationActions.navigate({ routeName, params }),
    ),  
}
export default NavigationService;