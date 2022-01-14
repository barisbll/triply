// dateStart - dateEnd - stageId - country- city- street- postalCode - buildingNumber - flatNumber

import { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import ShareModal from "./ShareModal";
import DeleteModal from "./DeleteModal";

const StageCard = (props) => {
  const match = useRouteMatch();

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
          <h4 className="card-title text-center">{props.country}</h4>
          <p className="text-center">
            {props.city} - {props.street}
          </p>
          <p className="text-center">
            {dateStartReadable} - {dateEndReadable}
          </p>

          <Link
            className="btn btn-outline-dark btn-block mb-3"
            to={`/plans/${props.planId}/${props.stageId}`}
          >
            Create Details
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
              to={{
                pathname: `/plans/${match.params.planId}/create-a-stage`,
                search: `?stageId=${props.stageId}&country=${props.country}&city=${props.city}&street=${props.street}&postalCode=${props.postalCode}&buildingNumber=${props.buildingNumber}&flatNumber=${props.flatNumber}&dateStart=${props.dateStart}&dateEnd=${props.dateEnd}`,
              }}
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

      <ShareModal userId={null} planId={null} stageId={null} isPlan={false} />
      <DeleteModal userId={null} planId={null} stageId={null} isPlan={false} />
    </Fragment>
  );
};

export default StageCard;
