import { Fragment } from "react";

import MainNavigator from "./MainNavigator";

function Layout(props) {
  return (
    <Fragment>
      <header>
        <MainNavigator isLoggedIn={props.isLoggedIn} />
      </header>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </Fragment>
  );
}

export default Layout;
