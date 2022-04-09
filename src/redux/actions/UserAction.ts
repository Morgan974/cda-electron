import { UserActionTypes } from "../actionTypes/UserActionTypes";

export type ActionType = UserConnectedActionInterface | UserNotConnectedActionInterface;

interface UserConnectedActionInterface {
    type : UserActionTypes.USER_CONNECTED,
    firstname : string,
    lastname : string,
    role : string,
    email : string
}

interface UserNotConnectedActionInterface {
    type : UserActionTypes.USER_NOT_CONNECTED
}