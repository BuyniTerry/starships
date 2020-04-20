import {GET_ALL_STARSHIPS_DATA, GET_ONE_STARSHIPS_DATA, SEARCH_STARSHIP_DATA} from "../actionTypes";

export const getAll = payload => {
    return {
        type: GET_ALL_STARSHIPS_DATA,
        payload,
    }
};
export const getOne = payload => {
    return {
        type: GET_ONE_STARSHIPS_DATA,
        payload,
    }
};
export const findOne = payload => {
    return {
        type: SEARCH_STARSHIP_DATA,
        payload,
    }
};