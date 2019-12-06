import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {testAction} from "../../store/actions"

const TestPage = () => {
    const counter = useSelector(state => state.test);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(testAction())}>ADD +1</button>
            <h1>{counter}</h1>
        </div>
    );
};

export default TestPage;