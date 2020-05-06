import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import StarShipsList from "./components/StarShipsList";
import Logo from "./components/Logo";

function App() {

  return (
   <>
       <div className="layer"/>
       <div className="sub_layer"/>
       <Logo/>
       <Route path="/">
           <StarShipsList />

       </Route>
   </>
  );
}

export default App;
