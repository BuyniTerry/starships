import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import {
    GET_ALL_STARSHIPS_DATA,
    GET_ALL_STARSHIPS_DATA_FAIL,
    GET_ALL_STARSHIPS_DATA_SUCCESS,
    SEARCH_STARSHIP_DATA,
    SEARCH_STARSHIP_DATA_SUCCESS,
    SEARCH_STARSHIP_DATA_FAIL,
} from "../actionTypes";
const INITIAL_URL = 'https://swapi.dev/api/';

function* getAllShipsData({payload}) {
    try {
        const response = yield axios.get(`${INITIAL_URL}starships/?page=${payload ? payload : 1}`);
        yield put({
            type: GET_ALL_STARSHIPS_DATA_SUCCESS,
            payload: { ...response }
        });
    } catch (error) {
        yield put({
            type: GET_ALL_STARSHIPS_DATA_FAIL,
            payload: { ...error }
        });
        console.log(error)
    }
}
function* searchShip({payload}) {
    try {
        const response = yield axios.get(`${INITIAL_URL}starships/?search=${payload}`);
        yield put({
            type: SEARCH_STARSHIP_DATA_SUCCESS,
            payload: { ...response }
        });
    } catch (error) {
        yield put({
            type: SEARCH_STARSHIP_DATA_FAIL,
            payload: { ...error }
        });
        console.log(error)
    }
}

export default function* watchStarShips() {
    yield takeEvery(GET_ALL_STARSHIPS_DATA, getAllShipsData);
    yield takeEvery(SEARCH_STARSHIP_DATA, searchShip)
}