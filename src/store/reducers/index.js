import * as actionType from '../actions/actionTypes'

export const starShips = (state = {
    loading: true,
    ships: {}
}, action) => {
    switch (action.type) {
        case actionType.GET_SHIPS:
            return {
                ships: action.ships,
                loading: false
            };
        default:
            return state
    }
};
export const findStarShips = (state = {
    filteredShips: {}
}, action) => {
    switch (action.type) {
        case actionType.FIND_SHIPS:
            return {
                filteredShips: action.filteredShips,
            };
        default:
            return state
    }
};
export const testReducer = (state = 0, action) => {
    switch (action.type) {
        case 'TEST':
            return state + action.value;
        default:
            return state
    }
};
export const counterReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT':
            if (state < 4) {
                return state + 1;
            }
            return state;
        case 'DECREMENT' :
            if (state > 1) {
                return state - 1;
            }
            return state;
        case 'GET_PAGE_NUMBER':
            return action.number;
        default:
            return state
    }
};