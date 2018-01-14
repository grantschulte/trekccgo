// @flow

import * as React from "react";
import MenuItem from "./MenuItem";
import "./Menu.scss";

type Props = {
  pages: Array<{ label: string, path: string }>
};

function Menu(props: Props): React.Node {
  let listItems = props.pages.map((page, index) => {
    return <MenuItem key={index.toString()} page={page} />;
  });

  return (
    <nav>
      <ul id="HomeMenu">
        {listItems}
      </ul>
    </nav>
  );
}

export default Menu;
