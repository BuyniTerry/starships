import { all } from 'redux-saga/effects'
import watchStarShips from './starship'
export default function* rootSaga() {
    yield all([
        watchStarShips(),
    ])
}