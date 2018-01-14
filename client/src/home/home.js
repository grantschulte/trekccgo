// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function HomePage(): React.Node {
  return (
    <div id="HomePage" className="page--padding">
      <ul id="HomePage__menu">
        <li>
          <Link to="/lcars">LCARS</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
