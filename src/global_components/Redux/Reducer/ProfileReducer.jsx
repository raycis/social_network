import {api} from "../../api/api";

let getId = "getId"


let initialState = {
    id: 1
};

const ProfileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case getId:
            return{...state,id: 2};
        default:
            return state;
    }
}

export const profileThunkCreator = () => async (dispatch)=>{

    const response = await api.getAuth();
    if(response.data.resultCode === 0) {
        let {email, id, login} = response.data.data;
        debugger
    }

    }




export default ProfileReducer;