import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import queryString from 'query-string';
import styled from 'styled-components'
import {getAll, findOne, getOne} from "../store/actions";
import {Link, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import Pagination from "./Pagination";
import Ship from "./Ship";
import Spinner from "react-bootstrap/Spinner";
import Button from "../common/Button";
import Input from "../common/Input";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
   input {
    margin-right: 5px;
   }
`;

const StarShipsList = props => {
    const { getStarships, ships, findShip, getOne, loading } = props;
    const history = useHistory();
    let { path } = useRouteMatch();
    const [value, setValue] = useState('');
    const [showSorry, setShowSorry] = useState(false);
    useEffect(() => {
        const paramsString = window.location.search;
        const pageParams = new URLSearchParams(paramsString).get('page');
        const searchParams = new URLSearchParams(paramsString).get('search');
        // getStarships();
        if (pageParams) {
            getStarships(pageParams);
        }
        if (searchParams) {
            findShip(searchParams);
        }
        return undefined
    },[findShip, getStarships]);
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
        if(value && filter.length === 0) setShowSorry(true);
        history.push(`?search=${value}`)
    };
    return (
        <div style={{textAlign: 'center'}}>
            <h1>StarShipsList</h1>
            <Button onClick={() => getStarships()}>Click to show Starships</Button>
            <SearchWrapper>
                <Input type="text" onChange={(e) => setValue(e.target.value)} />
                <Button onClick={handleSearching} >Find!</Button>
            </SearchWrapper>
                {showSorry && <h1 className="list_item">Sorry, we can't find your star ship... May the Force be with you</h1>}
            {loading ? <Spinner animation='border' /> :
                <ul className="list-group">
                    {getReformatShipsList && getReformatShipsList.map(({name, url}) =>
                            <li key={name} className="list_item">
                                <Link to={`/ship/${matchID(url)}`} onClick={() => getOne(matchID(url))}>
                                  {name}
                                </Link>
                            </li>
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
                <Route path={`${path}ship/:id`}>
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