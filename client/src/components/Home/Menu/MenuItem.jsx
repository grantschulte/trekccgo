// @flow

import * as React from "react";
import { Link } from "react-router-dom";

type Props = {
  page: Object
};

function MenuItem(props: Props): React.Node {
  return (
    <li>
      <Link to={props.page.path}>{props.page.label}</Link>
    </li>
  );
}

export default MenuItem;
