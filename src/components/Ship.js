import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import startCase from 'lodash/startCase'
import {connect} from "react-redux";
import {getOne} from "../store/actions";


const Ship = props => {
    const { ship, getOne } = props;
    const { id } = useParams();
    useEffect(() => {
        getOne(id);
        return undefined
    },[]);
    return (
        <>
            {
                ship && (
                    <div>
                        <ul>
                            {ship.name}
                            {
                                Object.entries(ship).map( prop =>
                                    <li>{startCase(prop[0])}: {prop[1]}</li>
                                 )
                            }
                        </ul>

                    </div>
                )
            }
        </>
    );
};
const mapStateToProps = ( {getStarships} ) => ({
    ...getStarships,
});
const mapDispatchToProps = dispatch => ({
    getOne: (v) => dispatch(getOne(v)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Ship);