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
    // filter
    const linkFilter = prop => {
        return (<li key={prop[0]}>{startCase(prop[0])}:
            <ul>
                {typeof prop[1] === `object` && prop[1].map( link => <li key={link}><a href={link}>{link}</a></li>)}
                {typeof prop[1] === `string` && <li key={prop[1]}><a href={prop[1]}>{prop[1]}</a></li>}
            </ul>
        </li>);
    };
    return (
        <>
            {
                ship && (
                    <div>
                        <ul>
                            {ship.name}
                            {
                                Object.entries(ship).map( prop => {
                                    if (prop[0] === 'pilots') return linkFilter(prop);
                                    if (prop[0] === 'films') return linkFilter(prop);
                                    if (prop[0] === 'url') return linkFilter(prop);
                                        return <li key={prop[0]}>{startCase(prop[0])}: {prop[1]}</li>
                                    }
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