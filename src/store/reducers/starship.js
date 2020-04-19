import {
    GET_ALL_STARSHIPS_DATA,
    GET_ALL_STARSHIPS_DATA_SUCCESS,
    GET_ALL_STARSHIPS_DATA_FAIL,
    SEARCH_STARSHIP_DATA,
    SEARCH_STARSHIP_DATA_SUCCESS,
    SEARCH_STARSHIP_DATA_FAIL,
} from "../actionTypes";

const INITIAL_STATE = {
    ships: {},
    loading: false,
};
export const getStarships = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ALL_STARSHIPS_DATA:
        case SEARCH_STARSHIP_DATA:
        return {
            loading: true,
        };
        case GET_ALL_STARSHIPS_DATA_SUCCESS:
        case SEARCH_STARSHIP_DATA_SUCCESS:
            return {
                ships: {
                    ...action.payload.data,
                },
                loading: false,
            };
        case GET_ALL_STARSHIPS_DATA_FAIL:
        case SEARCH_STARSHIP_DATA_FAIL:
            return {
                error: action.payload.response.data.detail,
            };
        default:
            return null
    }
};
