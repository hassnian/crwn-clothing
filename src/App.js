import React from 'react';
import './App.css';
import  HomePage from "./pages/homepage/HomePage"
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/shop/hats" render={()=><h1>Hats</h1>}/>
        <Route exact path="/" component={HomePage}/>
      </Switch> 
    </div>
  );
}

export default App;
