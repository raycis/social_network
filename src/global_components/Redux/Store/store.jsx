import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "../Reducer/ProfileReducer";
import thunkMiddlewere from "redux-thunk";
import AuthReducer from "../Reducer/AuthReduser";
import {reducer as formReducer} from "redux-form";
import AllUsersReducer from "../Reducer/AllUsersReducer";
import FriendsReducer from "../Reducer/FriendsReducer";

let reducers = combineReducers({
    profile: ProfileReducer,
    auth: AuthReducer,
    form: formReducer,
    allUsers: AllUsersReducer,
    friends: FriendsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

export default store;






