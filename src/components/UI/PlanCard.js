import { Fragment } from "react";
import { Link } from "react-router-dom";

import ShareModal from "./ShareModal";
import DeleteModal from "./DeleteModal";

const PlanCard = (props) => {
  // Change date to human readable string
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dateStart = new Date(props.dateStart);
  const dateEnd = new Date(props.dateEnd);

  const dateStartReadable = dateTimeFormat.format(dateStart);
  const dateEndReadable = dateTimeFormat.format(dateEnd);

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center">{props.planName}</h4>
          <p className="text-center">
            {dateStartReadable} - {dateEndReadable}
          </p>
          <p className="text-center">Number of people: {props.numOfPeople}</p>
          <Link
            className="btn btn-outline-dark btn-block mb-3"
            to={`/plans/${props.planId}`}
          >
            Create Stages
          </Link>
          <div className="btn-group d-flex ">
            <button
              className="btn btn-dark "
              data-toggle="modal"
              data-target="#shareModal"
            >
              Share
            </button>
            <Link
              className="btn btn-dark"
              to={`/create-a-plan/?planName=${props.planName}&dateStart=${props.dateStart}&dateEnd=${props.dateEnd}&numOfPeople=${props.numOfPeople}`}
            >
              Update
            </Link>
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#deleteModal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <ShareModal userId={null} planId={null} stageId={null} isPlan={true} />
      <DeleteModal userId={null} planId={null} stageId={null} isPlan={true} />
    </Fragment>
  );
};

export default PlanCard;
