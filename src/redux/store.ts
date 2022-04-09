import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers/CombineReducers";
import thunk from "redux-thunk";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

let preloadedState;
const persistedAlertString = localStorage.getItem('alert');
const persistedConnectedUserString = localStorage.getItem('alert');

if (persistedAlertString || persistedConnectedUserString) {
    preloadedState = {
        connectedUser: JSON.parse(persistedConnectedUserString),
        alert: JSON.parse(persistedAlertString),
    };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)