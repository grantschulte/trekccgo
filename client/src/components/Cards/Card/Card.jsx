// @flow

import * as React from "react";
import "./Card.scss";

type Props = {

};

function Card(props: Props): React.Node {
  return (
    <div className="Card">
      <div className="Card__inner">
        <div className="Card__heading">
          <span className="Card__heading__affiliation"></span>
          <span className="Card__heading__title"></span>
        </div>

        <div className="Card__image">

        </div>

        <div className="Card__summary">
          <div className="Card__summary__type"></div>
        </div>

        <div className="Card__skills"></div>
        <div className="Card__attributes"></div>
      </div>
    </div>
  );
}

export default Card;
