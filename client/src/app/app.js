// @flow

import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "../Home/Home";
import LcarsPage from "../Lcars/Lcars";
import CardsPage from "../Cards/Cards";

import "./App.scss";

function App() {
  return (
    <Router>
      <div id="App">
        <div id="App__page">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/lcars" component={LcarsPage} />
          <Route exact path="/cards" component={CardsPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
