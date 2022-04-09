import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import AlertElement from "./components/elements/AlertElement";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AlertElement />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
