import { Link, useRouteMatch } from "react-router-dom";

import classes from "./DetailsCard.module.css";

const DetailsCard = (props) => {
  // Beware that id's are differently named per detail type
  // Also to stages and plans add the human readable date function

  const match = useRouteMatch();

  let url;
  let name, dateStart, dateEnd, id, address, departureAddress, arrivalAddress;
  switch (props.type) {
    case 1:
      url = "create-a-restaurant";
      break;
    case 2:
      url = "create-an-accomadation";
      break;
    case 3:
      url = "create-a-transport";
      break;
    case 4:
      url = "create-a-touristic-place";
      break;
  }

  const deleteButtonHandler = (e) => {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;

    console.log(id, type);
  };

  const shareButtonHandler = (e) => {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;

    console.log(id, type);
  };

  const liItems = props.dataArray?.map((dataObject) => {
    const [dateStartReadable, dateEndReadable] = dateToHumanReadable(
      dataObject.dateStart,
      dataObject.dateEnd
    );

    name = dataObject.name;
    dateStart = dataObject.dateStart;
    dateEnd = dataObject.dateEnd;

    switch (props.type) {
      case 1:
        id = dataObject.restaurantId;
        address = dataObject.address;
        break;
      case 2:
        id = dataObject.accomadationId;
        address = dataObject.address;
        break;
      case 3:
        id = dataObject.transportationId;
        arrivalAddress = dataObject.arrivalAddress;
        departureAddress = dataObject.departureAddress;
        break;
      case 4:
        id = dataObject.touristicPlaceId;
        address = dataObject.address;
        break;
    }

    if (dataObject.transportationMean) {
      dataObject.name =
        dataObject.transportationMean + " - " + dataObject.arrivalAddress.city;
    }

    return (
      <li
        className={`list-group-item border-dark pb-0 px-0 ${classes.listItem}`}
      >
        <div className="row px-3">
          <div className="col-9">
            <p className="mb-1">{dataObject.name}</p>
            <p>
              {dateStartReadable} - {dateEndReadable}
            </p>
          </div>
          <div className="col-3 d-flex align-items-center">
            <button
              onClick={deleteButtonHandler}
              className="btn btn-link"
              data-id={id}
            >
              <i
                class="bi bi-x d-inline-block text-danger"
                style={{ fontSize: "3rem", marginTop: "-1rem" }}
                data-id={id}
                data-type={props.type}
              ></i>
            </button>
          </div>
          <div className="btn-group d-flex mx-auto mb-2">
            {props.type !== 3 ? (
              <Link
                className="btn btn-dark"
                to={{
                  pathname: `/plans/${match.params.planId}/${match.params.stageId}/${url}`,
                  search: `?id=${id}&name=${name}&country=${address.country}&city=${address.city}&street=${address.street}&postalCode=${address.postalCode}&buildingNumber=${address.buildingNumber}&flatNumber=${address.flatNumber}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
                }}
              >
                Update
              </Link>
            ) : (
              <Link
                className="btn btn-dark"
                to={{
                  pathname: `/plans/${match.params.planId}/${match.params.stageId}/${url}`,
                  search: `?id=${id}&transportationMean=${dataObject.transportationMean}&dateStart=${dateStart}&dateEnd=${dateEnd}&arrivalCountry=${arrivalAddress.country}&arrivalCity=${arrivalAddress.city}&arrivalStreet=${arrivalAddress.street}&arrivalPostalCode=${arrivalAddress.postalCode}&arrivalBuildingNumber=${arrivalAddress.buildingNumber}&arrivalFlatNumber=${arrivalAddress.flatNumber}&departureCountry=${departureAddress.country}&departureCity=${departureAddress.city}&departureStreet=${departureAddress.street}&departurePostalCode=${departureAddress.postalCode}&departureBuildingNumber=${departureAddress.buildingNumber}&departureFlatNumber=${departureAddress.flatNumber}`,
                }}
              >
                Update
              </Link>
            )}

            <button
              className="btn btn-dark"
              onClick={shareButtonHandler}
              data-id={id}
              data-type={props.type}
            >
              Share
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div
      className={`card mb-3 col-xl-3 col-md-6 col-sm-12 px-0 ${classes.detailsCard}`}
      style={{ width: "16rem !important", border: "#3f3f3f 1px solid" }}
    >
      <div className="card-body border-dark text-center py-2">
        <h5 className="card-title">{props.title}</h5>
        <Link
          className="btn btn-outline-dark d-block w-100"
          to={{
            pathname: `/plans/${match.params.planId}/${match.params.stageId}/${url}`,
          }}
        >
          Click to Add
        </Link>
      </div>
      <ul className="list-group list-group-flush">{liItems}</ul>
    </div>
  );
};

const dateToHumanReadable = (dateStartString, dateEndString) => {
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dateStart = new Date(dateStartString);
  const dateEnd = new Date(dateEndString);

  const dateStartReadable = dateTimeFormat.format(dateStart);
  const dateEndReadable = dateTimeFormat.format(dateEnd);

  return [dateStartReadable, dateEndReadable];
};

export default DetailsCard;
