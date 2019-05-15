import {DashboardActionTypes} from './DashboardActions';

const initialState = {
    isLoading: true,
    employeesData: {},
};

const DashboardReducer = (state=initialState,action) => {
    switch(action.type){
        case DashboardActionTypes.SET_LOADING_STATUS:
        return ({
            ...state,
            isLoading: action.payload,
        })
        case DashboardActionTypes.SET_EMPLOYEE_DATA: 
        return ({
            ...state,
            employeesData: action.payload
        })
        default:
            return state;
    }
}

export default DashboardReducer;
