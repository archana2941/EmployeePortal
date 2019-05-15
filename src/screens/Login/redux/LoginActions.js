const LoginActionTypes = {
    SET_LOADING_STATUS: 'LOGIN/SET_LOADING_STATUS',
}
const LoginActions = {
    setLoadingStatus: payload => ({ type: SET_LOADING_STATUS, payload}),
}
export {
    LoginActionTypes,
    LoginActions,
}