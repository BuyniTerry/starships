import React, {Component, useEffect} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router'
import {connect, useDispatch} from 'react-redux'
import {ShipSection,ShipCard,ShipsName,ShipsDetails} from "./style";
import {fetchShips} from "../../store/actions";

class Ship extends Component {
    // state = {
    //     ship: {
    //         MGLT: "10 MGLT",
    //         cargo_capacity: "1000000000000",
    //         consumables: "3 years",
    //         cost_in_credits: "1000000000000",
    //         created: "2014-12-10T16:36:50.509000Z",
    //         crew: "342953",
    //         edited: "2014-12-10T16:36:50.509000Z",
    //         hyperdrive_rating: "4.0",
    //         length: "120000",
    //         manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
    //         max_atmosphering_speed: "n/a",
    //         model: "DS-1 Orbital Battle Station",
    //         name: "Death Star",
    //         passengers: "843342",
    //         films: [
    //             "https://swapi.co/api/films/1/"
    //         ],
    //         pilots: [],
    //         starship_class: "Deep Space Mobile Battlestation",
    //         url: "https://swapi.co/api/starships/9/"
    //     }
    // };
    // state = {
    //     ship: {}
    // };
    // componentDidMount() {
    //     axios.get(`https://swapi.co/api/starships/9/`)
    //         .then(res => {
    //             const ship = res.data;
    //             this.setState({ ship });
    //         })
    // }
     stripTrailingSlash = (string = '') => string.replace(/\/$/, '')
     stripStrapiUri = (url = '') => url.replace(/^https?:\/\/(swapi.co)?\/(api)?\/(starships)?\//, '')

    render() {
        // const getShip = Object.entries(this.state.ship);
        // const getAllInfoAboutShip = getShip.map(item => (<ShipsDetails key={item[0]}>{item[0]}: {item[1]}</ShipsDetails>));
        // console.log(item.url.replace(/^https?:\/\/(swapi.co)?\/(api)?\/(starships)?\//, '').replacte(/\/$/, ''))
        console.log(this.props.match)
        const get = this.props.oneShip.results.find(item =>
            this.stripTrailingSlash(this.stripStrapiUri(item.url)) === this.props.match.params.url
        );
        return (
            <ShipSection>
                <ShipCard>
                    <ShipsName>{get.model}</ShipsName>
                    <ShipsDetails>MGLT: <span>{get.MGLT}</span></ShipsDetails>
                    <ShipsDetails>cargo_capacity: <span>{get.cargo_capacity}</span></ShipsDetails>
                    <ShipsDetails>consumables: <span>{get.consumables}</span></ShipsDetails>
                    <ShipsDetails>cost_in_credits: <span>{get.cost_in_credits}</span></ShipsDetails>
                    <ShipsDetails>created: <span>{get.created}</span></ShipsDetails>
                    <ShipsDetails>crew: <span>{get.crew}</span></ShipsDetails>
                    <ShipsDetails>edited: <span>{get.edited}</span></ShipsDetails>
                    <ShipsDetails>hyperdrive_rating: <span>{get.hyperdrive_rating}</span></ShipsDetails>
                    <ShipsDetails>length: <span>{get.length}</span></ShipsDetails>
                    <ShipsDetails>manufacturer: <span>{get.manufacturer}</span></ShipsDetails>
                    <ShipsDetails>max_atmosphering_speed: <span>{get.max_atmosphering_speed}</span></ShipsDetails>
                    <ShipsDetails>name: <span>{get.name}</span></ShipsDetails>
                    <ShipsDetails>passengers: <span>{get.passengers}</span></ShipsDetails>
                    <ShipsDetails>name: <span>{get.name}</span></ShipsDetails>
                    <ShipsDetails>films: <span>{get.films && get.films.map(film => <a href={film} key={film}>{film}, </a>)}</span></ShipsDetails>
                    <ShipsDetails>pilots: <span>{get.pilots && get.pilots.map(pilot => <a href={pilot} key={pilot}>{pilot}, </a>)}</span></ShipsDetails>
                    <ShipsDetails>starship_class: <span>{get.starship_class}</span></ShipsDetails>
                    <ShipsDetails>url: <span>{get.url}</span></ShipsDetails>
                </ShipCard>
            </ShipSection>
        );
    }
}

const mapStateToProps = (ownProps) => {
    // console.log(ownProps.ship.results);
    return {
        oneShip: ownProps.ship.ships
    }
};

export default withRouter(connect(mapStateToProps)(Ship));
// export default withRouter(Ship)