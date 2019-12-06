import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {starShips, testReducer, counterReducer, findStarShips} from './store/reducers'
import {combineReducers } from "redux";
import configureStore from './store/index'
import { connectRouter} from "connected-react-router";
import * as serviceWorker from './serviceWorker';
// import {BrowserRouter as Router,Switch, Route, withRouter } from "react-router-dom"
import {ConnectedRouter as Router} from "connected-react-router";
import { history} from "./store/index";

export const rootReducer = history => combineReducers({
    test: testReducer,
    ship: starShips,
    find: findStarShips,
    counter: counterReducer,
    router: connectRouter(history),
});

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <Router history={history}><App /></Router></Provider>, document.getElementById('root'));
serviceWorker.unregister();
