import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./global_components/Redux/Store/store";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter key=''>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
