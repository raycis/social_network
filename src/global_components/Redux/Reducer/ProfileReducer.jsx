import {APIProfile} from "../../api/api";

let SET_USERS_PROFILE = 'SET_USERS_PROFILE';
let SET_USERS_STATUS = 'SET_USERS_STATUS';


let initialState = {
    profile:{
        aboutMe: null,
        fullName: null,
        photos:{
            large: null,
            small: null
        },
        lookingForAJob: true
    },
    status: ""
};

const ProfileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_USERS_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_USERS_STATUS:{

            return {...state, status: action.status}
        }
        default:
            return state;
    }
};


export const setUsersProfile = (profile)=>({type: SET_USERS_PROFILE, profile});
export const setUsersStatus = (status) =>({type: SET_USERS_STATUS, status});

export const profileThunkCreator = (userId)=> async (dispatch)=>{

    const response = await APIProfile.getProfile(userId);
    dispatch(setUsersProfile(response.data))

};
export const statusThunkCreator = (userId) => async (dispatch) =>{
    const response = await APIProfile.getStatus(userId);

    dispatch(setUsersStatus(response.data))

};
export const updateStatusThunkCreator = (status) => async (dispatch) =>{

    const response = await APIProfile.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(setUsersStatus(status))
    }
}

export default ProfileReducer;