import {APIAuth} from "../../api/api";

const AUTH_INFO  = 'AUTH_INFO';

let initialState = {
    email: null,
    id: null,
    login: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_INFO:

            return {...state, ...action.data};

        default:
            return state;
    }
}




const AuthInfoActionCreater = (email, id, login) =>{
    return {type: AUTH_INFO, data: {email, id, login}}
}

export const AuthInfoThunk = () => async (dispatch)=>{
    let response = await APIAuth.getAuthInfo();
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data;
        dispatch(AuthInfoActionCreater(email, id, login))
    }

};

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch)=>{

    const response = await APIAuth.login(email, password, rememberMe)

    if(response.data.resultCode === 0){
        let id  = response.data.data.userId
        dispatch(AuthInfoActionCreater(email, id ))

    }

};

export const logoutThunkCreator = () => async (dispatch)=>{
    const response = await APIAuth.logout()

    if(response.data.resultCode === 0){
        dispatch(AuthInfoActionCreater(null, null, null));


    }
}

export default AuthReducer;