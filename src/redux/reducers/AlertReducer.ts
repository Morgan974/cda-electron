import { ActionType } from "../actions/AlertAction";
import {AlertActionTypes} from "../actionTypes/AlertActionTypes";

const initialState = {
    alertData : {},
    user : {}
};

const AlertReducer = (state : any = initialState, action : ActionType) => {
    console.log("state", state);
    console.log("state connectedUser", state?.connectedUser);

    switch (action.type) {
        case AlertActionTypes.ALERT_SUCCESS :
            return { ...state, alertData : action.alertData};
        case AlertActionTypes.ALERT_ERROR :
            return { ...state, alertData : action.alertData};
        case AlertActionTypes.ALERT_WARNING :
            return { ...state, alertData : action.alertData};
        default:
            return null;
    }
}

export default AlertReducer;