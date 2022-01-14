import { NavLink, Link } from "react-router-dom";

import classes from "./MainNavigator.module.css";

function MainNavigator(props) {
  let navigator;

  if (props.isLoggedIn) {
    navigator = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/plans"
          >
            Plans
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/log-out"
          >
            Log out
          </NavLink>
        </li>
      </ul>
    );
  } else {
    navigator = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/welcome">
          Group Trip Planning
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {navigator}
        </div>
      </div>
    </nav>
  );
}

export default MainNavigator;
