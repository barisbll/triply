import { Link } from "react-router-dom";

const NoItemsCard = (props) => {
  return (
    <div
      className="card border-dark"
      style={{ width: "18rem", height: "20rem" }}
    >
      <div className="card-body text-center justify-">
        <Link to={props.linkTo} style={{ color: "black" }}>
          <i className="bi bi-plus-circle" style={{ fontSize: "5.5rem" }}></i>
        </Link>

        <div className="card-title" style={{ fontSize: "2rem" }}>
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default NoItemsCard;
