const initialState = {
    isLoading: true,
    loginData: {},
}

const LoginReducer = (state=initialState,action) => {
    switch(action.type){
        case SET_LOADING_STATUS: 
        return ({
            ...state,
            isLoading: action.payload,
        })
        default:
            return state;
    }
}
export default LoginReducer;