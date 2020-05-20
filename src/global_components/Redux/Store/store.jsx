import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "../Reducer/ProfileReducer";
import thunkMiddlewere from "redux-thunk";
import AuthReducer from "../Reducer/AuthReduser";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profile: ProfileReducer,
    auth: AuthReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

export default store;






