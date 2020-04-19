import React from 'react';
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnchancers = `undefined` !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
    reducers,
    composeEnchancers(applyMiddleware(sagaMiddleware))
);


const ReduxProvider = props => {
    const { children } = props;
    sagaMiddleware.run(rootSaga);
    // useEffect(() => {
    //     sagaMiddleware.run(rootSaga)
    // }, [rootSaga]);
    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default ReduxProvider;