// @flow

import * as React from "react";
import LcarsBar from "../LcarsBar/LcarsBar";
import LcarsBody from "../LcarsBody/LcarsBody";
import bars from "./bars";
import "./LcarsInterface.scss";

function LcarsInterface(): React.Node {
  return (
    <div id="LcarsInterface">
      <LcarsBar colors={bars.top.colors} knockout={bars.top.knockout} />
      <LcarsBody />
      <LcarsBar colors={bars.bottom.colors} />
    </div>
  );
}

export default LcarsInterface;
