import { LoginActionTypes} from './LoginActions'
const initialState = {
    isLoading: true,
    loginData: {},
}
const LoginReducer = (state=initialState,action) => {
    switch(action.type){
        case LoginActionTypes.SET_LOADING_STATUS: 
        return ({
            ...state,
            isLoading: action.payload,
        })
        default:
            return state;
    }
}
export default LoginReducer;