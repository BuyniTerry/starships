import React from 'react';
import {useParams} from "react-router-dom";

const Ship = props => {
    let { shipName, name } = useParams();
    console.log(name);
    return (
        <div>
            <h1>SHIP-page</h1>
            {shipName}
        </div>
    );
};

export default Ship;