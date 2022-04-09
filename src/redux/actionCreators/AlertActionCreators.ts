import {Dispatch} from "redux";
import {ActionType} from "../actions/AlertAction";

export const alertAction = (data : any) => {
    return (dispatch : Dispatch<ActionType>) => {
        dispatch({
            type : data.type,
            alertData : {
                type : data.type,
                message : data.message
            }
        });
    };
};