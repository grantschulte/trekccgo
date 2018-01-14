// @flow

import * as React from "react";
import LcarsInterface from "./LcarsInterface/LcarsInterface";
import "./Lcars.scss";

function LcarsPage(): React.Node {
  return (
    <div id="LcarsPage">
      <LcarsInterface />
    </div>
  );
}

export default LcarsPage;
