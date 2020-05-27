import {APIProfile} from "../../api/api";

let SET_USERS_PROFILE = 'SET_USERS_PROFILE';
let SET_USERS_STATUS = 'SET_USERS_STATUS';
let ADD_POST = 'ADD_POST';

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
    status: "",
    post:[
        {text: "Новые посты не проходят на серверную часть, поэтому после обновления пропадают."},
        {text: "пост 1"},
        {text: "пост 2"}

    ]
};

const ProfileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_USERS_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_USERS_STATUS:{

            return {...state, status: action.status}
        }
        case ADD_POST:{
            return{...state,post:[{text:action.newPost},...state.post]}
        }
        default:
            return state;
    }
};


export const setUsersProfile = (profile)=>({type: SET_USERS_PROFILE, profile});
export const setUsersStatus = (status) =>({type: SET_USERS_STATUS, status});
export const addPostAC = (newPost)=>({ type: ADD_POST, newPost});

export const profileThunkCreator = (userId)=> async (dispatch)=>{

    const response = await APIProfile.getProfile(userId);
    dispatch(setUsersProfile(response.data))

};
export const statusThunkCreator = (userId) => async (dispatch) =>{
    const response = await APIProfile.getStatus(userId);

    dispatch(setUsersStatus(response.data))

};
export const updateStatusThunkCreator = (status) => async (dispatch) =>{

    const response = await APIProfile.updateStatus(status);
    if(response.data.resultCode === 0){
        dispatch(setUsersStatus(status))
    }
};

export default ProfileReducer;