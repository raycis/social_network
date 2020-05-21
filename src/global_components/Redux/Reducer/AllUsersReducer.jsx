import {APIUsers} from "../../api/api";
import {getFriendsThunk} from "./FriendsReducer";

let GET_ALL_USERS = 'GET_ALL_USERS';
let GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';
let SET_CURENTPAGE = 'SET_CURENTPAGE';

let initialState = {
    users: [],
    totalCount: null,
    curentPage: 1,
    pageSize: 5,
    followProgress: []
};




const AllUsersReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_ALL_USERS:{
            return{...state, users: [...action.users ]}
        }
        case GET_TOTAL_COUNT:{
            return{...state, totalCount: action.totalCountNumber}
        }
        case SET_CURENTPAGE:{
            return{...state, curentPage: action.curentPage}
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {

                        if (action.id === users.id) {

                            return {...users, followed: true}
                        }
                        return users;
                    }
                )};
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {

                        if (action.id === users.id) {

                            return {...users, followed: false}
                        }
                        return users;
                    }
                )};
        case FOLLOWING_PROGRESS:{

            return{...state, followProgress: action.progress
                    ? [...state.followProgress, action.id]
                    : state.followProgress.filter(id=>id !== action.id)
            }
        }
        default:
            return state
    }
};
export const setCurentPageActionCreater =(curentPage)=>{
    return{type: SET_CURENTPAGE, curentPage}
};

export const followActionCreater =(id)=>{
    return{type: FOLLOW, id}
};
export const unfollowActionCreater =(id)=>{
    return{type: UNFOLLOW, id}
};
export const setButtonDisabled = (progress, id) =>{
    return{type: FOLLOWING_PROGRESS, progress, id}
};

export const getAllUsersActionCreater=(users) => {
    return{type: GET_ALL_USERS, users}
};
export const totalCountActionCreater = (totalCountNumber) =>{
    return{type: GET_TOTAL_COUNT, totalCountNumber}
};
//Thunk
export const getAllUsersThunk = (curentPage, pageSize)=> async (dispatch)=>{
    dispatch(setCurentPageActionCreater(curentPage))
    let response = await APIUsers.getAllUsers(curentPage, pageSize);
    dispatch(totalCountActionCreater(response.data.totalCount));
    dispatch(getAllUsersActionCreater(response.data.items));
};
export const followThunkCreator = (id) => async (dispatch)=>{
    dispatch(setButtonDisabled(true, id));
    const response = await APIUsers.getFollow(id);
    if(response.data.resultCode === 0){
        dispatch(followActionCreater(id))}
    dispatch(setButtonDisabled(false, id))


};


export const unfollowThunkCreator = (id) => async (dispatch)=>{
    dispatch(setButtonDisabled(true, id));
    const response = await APIUsers.getUnfollow(id);
    if(response.data.resultCode === 0){
        dispatch(unfollowActionCreater(id))}
    dispatch(setButtonDisabled(false, id))

   dispatch(getFriendsThunk())


};

export default AllUsersReducer;