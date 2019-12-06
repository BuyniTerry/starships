import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router'
import {fetchShips, findShip} from '../../store/actions'
import {Link} from 'react-router-dom'
import {ShipCard, ShipsDetails, ShipsName, ShipsListSection} from "../starships/style";
import PageList from '../../components/pagination/Pagination'
import Search from "../../components/search";

const ShipsList = (props) => {
    const [input, setInput] = useState('');
    const ship = useSelector(state => state.ship);
    const find = useSelector(state => state.find);
    const ownProps = useSelector(ownProps => ownProps.router);
    const counter = useSelector(data => data.counter);
    const dispatch = useDispatch();
    useEffect(
        () => {
            console.log('use effect')
            dispatch(fetchShips(counter));
            dispatch(findShip(input))
        }, [counter, input]
    );
    // useEffect(() => console.log())
    const items = ship.ships.results && ship.ships.results.map((ship) =>
        <ShipCard key={ship.url}>
            <Link to={`/ships/${ship.url.replace(/^https?:\/\/(swapi.co)?\/(api)?\/(starships)?\//, '')}`}>
            <ShipsName>{ship.model}</ShipsName>
            </Link>
        </ShipCard>
    );
    const searchedItems = find.filteredShips.results && find.filteredShips.results.map((ship) =>
        <ShipCard key={ship.url}>
            <Link to={`/ships/${ship.url.replace(/^https?:\/\/(swapi.co)?\/(api)?\/(starships)?\//, '')}`}>
                <ShipsName>{ship.model}</ShipsName>
            </Link>
        </ShipCard>
    );
    const getContent = input === '' && find.filteredShips.previous === null ? items : searchedItems;
    return (

        <div>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            {console.log(find.filteredShips.previous)}

            {/*<input type="text" ref={input => {inputName.value = input}}/>*/}
            {/*<button></button>*/}
            <ShipsListSection>
            {/*{console.log(typeof ship.ships.next === 'string' && ship.ships.next.slice(-1))}*/}
            {ship.loading ? <h1>Loading...</h1> : getContent}
            </ShipsListSection>
            <PageList />
        </div>


    )
};

// class ShipsList extends Component {
//     state = {
//         ships: {},
//         loading: true,
//     };
//     componentDidMount() {
//         axios.get(`https://swapi.co/api/starships/`)
//             .then(res => {
//                 const ships = res.data;
//                 this.setState({ ships, loading: false });
//             })
//     }
//     render() {
//         const items = this.state.ships.results && this.state.ships.results.map((ship) =>
//                 <ShipCard key={ship.model}>
//                     <ShipsName>{ship.model}</ShipsName>
//                 </ShipCard>
//             );
//         return (
//             <ShipsListSection>
//                 {this.state.loading ? <h1>Loading...</h1> : items}
//             </ShipsListSection>
//         );
//     }
// }


export default withRouter(ShipsList);