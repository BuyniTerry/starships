import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import StarShipsList from "./components/StarShipsList";
import Ship from "./components/Ship";

function App() {
  return (
   <>
       <Route exact path="/">
           <StarShipsList />
       </Route>
       <Route  path="/ship/:shipName">
           <Ship />
       </Route>
       <Route  path="/ship/?search=:name">
           <Ship />
       </Route>
   </>
  );
}

export default App;
