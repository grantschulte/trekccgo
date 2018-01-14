// @flow

import * as React from "react";
import "./LcarsBar.scss";

type Props = {
  colors: {
    begin: string,
    middle: string,
    end: string
  },
  knockout?: {
    text: string,
    color: string
  },
  label?: {
    text: string,
    color: string
  }
};

function LcarsBar(props: Props): React.Node {
  return (
    <div className={`LcarsBar bg--${props.colors.middle}`}>
      <span className={`LcarsBar__end bg--${props.colors.begin}`}></span>
      <span className={`LcarsBar__blank bg--black`}></span>
      <span className={`LcarsBar__mid`}>
        { props.knockout &&
          <span
            className={`LcarsBar__knockout bg--black color--${props.knockout.color}`}>
              {props.knockout.text}
          </span>
        }
        { props.label &&
          <span
            className={`LcarsBar__label color--${props.label.color}`}>
              {props.label.text}
          </span>
        }
      </span>
      <span className={`LcarsBar__blank bg--black`}></span>
      <span className={`LcarsBar__end bg--${props.colors.end}`}></span>
    </div>
  );
}

export default LcarsBar;
