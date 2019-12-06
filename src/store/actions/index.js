import * as actionType from './actionTypes'
import axios from 'axios'

export const testAction = () => ({
    type: actionType.TEST,
    value: 5
});
export const increment = () => ({
    type: actionType.INCREMENT,
});
export const decrement = () => ({
    type: actionType.DECREMENT,
});
export const getPageNumber = (number) => ({
    type: actionType.GET_PAGE_NUMBER,
    number : number
});
const getData = ( data) => ({
    type: actionType.GET_SHIPS,
    ships: data
});
const searchData = (data) => ({
    type: actionType.FIND_SHIPS,
    filteredShips: data
});

export const fetchShips = counter => dispatch => {
        axios.get('https://swapi.co/api/starships/?page=' + counter)
            .then(res => {
                return res.data
            })
            .then(data => dispatch(getData(data)))
};
export const findShip = input => dispatch => {
    axios.get('https://swapi.co/api/starships/?search=' + input)
        .then(res => {
            return res.data
        })
        .then(data => dispatch(searchData(data)))
};

