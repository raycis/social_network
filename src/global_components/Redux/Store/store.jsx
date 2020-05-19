import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "../Reducer/ProfileReducer";
import thunkMiddlewere from "redux-thunk";

let reducers = combineReducers({
    profile: ProfileReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

export default store;






