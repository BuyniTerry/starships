import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import StarShipsList from "./components/StarShipsList";

function App() {
  return (
   <>
       <Route path="/">
           <StarShipsList />
       </Route>
   </>
  );
}

export default App;
