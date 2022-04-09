import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import AlertReducer from "./AlertReducer";

const reducers = combineReducers({
    connectedUser : UserReducer,
    alert : AlertReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;