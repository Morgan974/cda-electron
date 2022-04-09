import {AlertActionTypes} from "../actionTypes/AlertActionTypes";

export type ActionType = AlertActionInterface;

interface AlertActionInterface {
    type : AlertActionTypes,
    alertData : {
        type : AlertActionTypes,
        message : string
    }
}