import { combineReducers } from 'redux';
import DashboardReducer from '../screens/Dashboard/redux/DashboardReducer';
import LoginReducer from '../screens/Login/redux/LoginReducer';

export default combineReducers({
    login: LoginReducer,
    dashboard: DashboardReducer,
})