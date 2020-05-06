import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Starjedi.ttf'
import './index.css';
import App from './App';
import ReduxProvider from "./store/ReduxProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <ReduxProvider>
        <Router><App /></Router>
    </ReduxProvider>
    , document.getElementById('root'));
serviceWorker.unregister();
