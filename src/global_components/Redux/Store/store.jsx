import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "../Reducer/ProfileReducer";
import thunkMiddlewere from "redux-thunk";
import AuthReducer from "../Reducer/AuthReduser";
import {reducer as formReducer} from "redux-form";
import AllUsersReducer from "../Reducer/AllUsersReducer";

let reducers = combineReducers({
    profile: ProfileReducer,
    auth: AuthReducer,
    form: formReducer,
    allUsers: AllUsersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

export default store;






