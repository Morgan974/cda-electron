import {UserActionTypes} from "../actionTypes/UserActionTypes";
import {Dispatch} from "redux";
import {ActionType} from "../actions/UserAction";

export const login = (data : any) => {
    return (dispatch : Dispatch<ActionType>) => {
        dispatch({
            type : UserActionTypes.USER_CONNECTED,
            firstname : data.firstname,
            lastname : data.lastname,
            role : data.role,
            email : data.role
        });
    };
};

export const logout = () => {
    return (dispatch : Dispatch<ActionType>) => {
        dispatch({
            type : UserActionTypes.USER_NOT_CONNECTED
        });
    };
};