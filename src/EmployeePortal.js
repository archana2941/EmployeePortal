import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import AppNavigator from './navigators/AppNavigator';
import NavigationService from './utils/NavigationService/';

class EmployeePortal extends Component {
    render() {
        return(
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}> 
                <AppNavigator
                    ref={ref => NavigationService.setTopLevelNavigator(ref)}
                />
            </SafeAreaView>
        )
    }
}
export default EmployeePortal;