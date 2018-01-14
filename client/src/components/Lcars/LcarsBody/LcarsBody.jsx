// @flow

import * as React from "react";
import "./LcarsBody.scss";

function LcarsBody(): React.Node {
  return (
    <div className="LcarsBody">
      <h1 className="color--blue">
        LCARS Database Search Results 02-0933
      </h1>

      <div className="LcarsBody__row">
        <span>SRF-02-0933-3440:</span>
        <span>Transfer of an officer to another starship</span>
      </div>
    </div>
  );
}

export default LcarsBody;
