import { ActionType } from "../actions/UserAction";
import { UserActionTypes } from "../actionTypes/UserActionTypes";

const initialState = {
    alertData : {},
    user : {}
};

const UserReducer = (state : any = initialState, action : ActionType) => {
    switch (action.type) {
        case UserActionTypes.USER_CONNECTED :
            return { ...state, user : {...action}};
        case UserActionTypes.USER_NOT_CONNECTED :
            return { ...state, user : {...action}};
        default:
            return null;
    }
}

export default UserReducer;