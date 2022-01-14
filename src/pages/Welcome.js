import { Fragment } from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <Fragment>
      <div className="row text-center mt-5">
        <div className="col-sm mt-5">
          <h1 className="display-2">Discover The World</h1>
          <Link
            className="btn btn-outline-dark mt-4"
            to={props.isLoggedIn ? "/plans" : "/login"}
          >
            {props.isLoggedIn ? "Create New Plans!" : "Login to Start!"}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
