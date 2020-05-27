import {APIUsers} from "../../api/api";

let GET_FRIENDS = 'GET_FRIENDS';


let initialState = {
    friends: []
};

const FriendsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_FRIENDS: {
            return {...state, friends: [...action.friends]}
        }
        default:
            return state
    }
};


export const getFriendsActionCreater=(friends) => {
    return{type: GET_FRIENDS, friends}
};

export const getFriendsThunk = (curentPage, pageSize)=> async (dispatch)=>{
    let response = await APIUsers.getAllUsers(1, 90);
    let friends = response.data.items.filter(items=>items.followed ===true);
    dispatch(getFriendsActionCreater(friends));

};

export default FriendsReducer;