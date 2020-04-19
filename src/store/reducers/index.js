import { combineReducers } from "redux";
import { getStarships } from './starship'
const reducers = {
    getStarships,
};

export default combineReducers(reducers)