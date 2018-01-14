// @flow

import * as React from "react";
import Menu from "./Menu/Menu";
import "./Home.scss";

const pages = [
  {
    label: "LCARS",
    path: "/lcars"
  },
  {
    label: "Cards",
    path: "/cards"
  }
];

function HomePage(): React.Node {
  return (
    <div id="HomePage" className="page--padding">
      <Menu pages={pages} />
    </div>
  );
}

export default HomePage;
