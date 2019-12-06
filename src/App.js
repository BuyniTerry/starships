import React from 'react';
import './App.css';
import {HashRouter as Router,Switch, Route, withRouter } from "react-router"
import Ship from "./pages/starship/Ship";
import ShipsList from "./pages/starships/ShipsList";
import TestPage from "./pages/testPage/TestPage"
import {Header} from "./components/header";
import {useSelector} from "react-redux";

function App(history) {
    const counter = useSelector(data => data);
  return (
   <>
     <Header />
     <Switch>
       <Route path="/test-page">
          <TestPage />
       </Route>
       <Route exact path="/ships/page=:counter">
           <ShipsList totalPages={4} pageNumber={counter} />
       </Route>
        <Route path="/ships/:url" >
            <Ship history={history} />
        </Route>
     </Switch>
   </>
  );
}

export default withRouter(App);
