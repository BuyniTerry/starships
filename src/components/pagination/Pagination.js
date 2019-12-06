import React, {Component} from 'react';
import styled from 'styled-components'
import {HashRouter as Router,Switch, Route, withRouter } from "react-router"
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, getPageNumber} from "../../store/actions";

const PagesNumbers = styled.div`
  margin-top: 25px;
  span {
  cursor: pointer;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
}
  span.active {
  background-color: #0099FF;
  color: white;
  border: 1px solid #0099FF;
}
`;

const PageList = () => {
    const counter = useSelector(state => state.counter);
    const ownProps = useSelector(ownProps => ownProps.router);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(increment())
    };
    const del = () => {
        dispatch(decrement())
    };
    // const get = (number) => {
    //     dispatch(getPageNumber(number))
    // };
    return (
        <PagesNumbers>
            <Link to={`/ships/page=${counter}`}><span onClick={del}>&laquo;</span></Link>
            <Link to={`/ships/page=${counter}`}><span onClick={add}>&raquo;</span></Link>
        </PagesNumbers>
    );
};

export default withRouter(PageList);