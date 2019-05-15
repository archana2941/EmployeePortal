import React, { Component } from 'react';
import {ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from './views/components/Dashboard';
import NavigationService from '../../utils/NavigationService';
import {DashboardActions} from './redux/DashboardActions';

class DashboardContainer extends Component {
    static propTypes = {
        dashboard: PropTypes.object.isRequired,
    }
    componentDidMount() {
        this.props.dispatch(DashboardActions.getEmployeeData());
    }
    onSignIn = () => {
        console.log('press')
        NavigationService.navigate(Dashboard);
    }
    render() {
        if(this.props.dashboard.isLoading){
            return (
                <ActivityIndicator/>
            )
        }
        return (
            <Dashboard
                employeeData={this.props.dashboard.employeeData}
            />
        )
    }
}
const mapStateToProps = store => ({
    dashboard: store.dashboard,
})
export default connect(mapStateToProps)(DashboardContainer);