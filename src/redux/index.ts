import {store} from "./store";
export * as userActionCreators from "./actionCreators/UserActionCreators";
export * as alertActionCreators from "./actionCreators/AlertActionCreators";
export * from "./store";
export * from "./reducers/CombineReducers";

// Log the initial state
console.log('Initial state: ', store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
    console.log('State after dispatch: ', store.getState())
);

console.log(unsubscribe);