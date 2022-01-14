import { Link } from "react-router-dom";

const CreateCard = (props) => {
  return (
    <div className="card border-dark" style={{}}>
      <div className="card-body text-center ">
        <Link to="/create-a-plan" style={{ color: "#3f3f3f" }}>
          <i className="bi bi-plus-circle" style={{ fontSize: "3rem" }}></i>
        </Link>

        <div className="card-title mb-5 " style={{ fontSize: "1.5rem" }}>
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
