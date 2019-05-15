import DATA from '../dummyData';

const DashboardActionTypes = {
    SET_LOADING_STATUS: 'DASHBOARD/SET_LOADING_STATUS',
    SET_EMPLOYEE_DATA: 'DASHBOARD/SET_EMPLOYEE_DATA',
}
const DashboardActions = {
    setLoadingStatus: (payload) => ({ type: DashboardActionTypes.SET_LOADING_STATUS, payload }),
    setEmployeeData: (payload) => ({ type: DashboardActionTypes.SET_EMPLOYEE_DATA, payload }),
    getEmployeeData: () => (dispatch) => {
        dispatch(DashboardActions.setLoadingStatus(true));
        dispatch(DashboardActions.setEmployeeData(DATA));
        dispatch(DashboardActions.setLoadingStatus(false));
    }
}
export {
    DashboardActionTypes,
    DashboardActions,
}