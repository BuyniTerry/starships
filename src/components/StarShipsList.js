import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import queryString from 'query-string';
import {getAll, findOne, getOne} from "../store/actions";
import {Link, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import Pagination from "./Pagination";
import Ship from "./Ship";
import Spinner from "react-bootstrap/Spinner";

const StarShipsList = props => {
    const { getStarships, ships, findShip, getOne, loading } = props;
    const history = useHistory();
    let { path } = useRouteMatch();
    const [value, setValue] = useState('');
    useEffect(() => {
        const paramsString = window.location.search;
        const pageParams = new URLSearchParams(paramsString).get('page');
        const searchParams = new URLSearchParams(paramsString).get('search');
        if (pageParams) {
            getStarships(pageParams);
        }
        if (searchParams) {
            findShip(searchParams);
        }
        return undefined
    },[]);
    // get array
    const getReformatShipsList = `undefined` !== typeof ships && ships && Object.values(ships.results);
    // filter ships
    const filter = getReformatShipsList && getReformatShipsList.filter( ship => ship.name.toLowerCase().includes(value));
    // get ship id
    const matchID = (url) => url.match(/[0-9]+/);
    // handles
    const handlePageChange = ({ selected }) => {
        getStarships(`${selected + 1}`);
        history.push(`?page=${selected + 1}`)
    };
    const handleSearching = () => {
        findShip(value);
        history.push(`?search=${value}`)
    };

    return (
        <div>
            <h1>StarShipsList</h1>
            <button onClick={() => getStarships()}>Click to show Starships</button>
                <input type="text" onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleSearching} >Find!</button>
            <ul>
                {value && filter && filter.map(item => (
                    <p key={item.name}>{item.name}</p>
                ))}
            </ul>
            {loading ? <Spinner animation='border' /> :
                <ul>
                    {getReformatShipsList && getReformatShipsList.map(({name, url}) =>
                        <>
                            <li key={name}>
                                <Link to={`/${name}/${matchID(url)}`} onClick={() => getOne(matchID(url))}>
                                  {name}
                                </Link>
                            </li>
                        </>
                        )}
                </ul>
            }
            {ships &&
            <Pagination
                pageCount={ships && Math.ceil(ships.count/10 )}
                forcePage={(() => {
                    const params = window.location.search;
                    const { page } = queryString.parse(params);
                    return page && parseInt(page) > 0 ? parseInt(page) - 1 : 0
                })()}
                onPageChange={handlePageChange}
            />}
            <Switch>
                <Route path={`${path}:shipName/:id`}>
                    <Ship />
                </Route>
                <Route  path={`${path}?search=:name`}>
                    <Ship />
                </Route>
            </Switch>
        </div>
    );
};
const mapStateToProps = ( {getStarships} ) => ({
    ...getStarships,
});
const mapDispatchToProps = dispatch => ({
    getStarships: (val) => dispatch(getAll(val)),
    getOne: (val) => dispatch(getOne(val)),
    findShip: (val) => dispatch(findOne(val))
});
export default connect(mapStateToProps,mapDispatchToProps)(StarShipsList);