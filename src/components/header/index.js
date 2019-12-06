import React from 'react';
import {Link} from 'react-router-dom'
import {Navigation, List} from './style'
import {useSelector} from "react-redux";

const Header = () => {
    const counter = useSelector(data => data.counter);
    return (
        <div>
            <nav>
                <Navigation>
                    <List>
                        <Link to="/">View Starship</Link>
                    </List>
                    <List>
                        <Link to={`/ships/page=${counter}`}>View more Starships</Link>
                    </List>
                    <List>
                        <Link to="/test-page">to Testing Redux</Link>
                    </List>
                </Navigation>
            </nav>
        </div>
    );
};

export {Header};