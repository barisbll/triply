import { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const CreateAStage = () => {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [buildingNumber, setBuildingNumber] = useState(null);
  const [flatNumber, setFlatNumber] = useState(null);
  const [durationStart, setDurationStart] = useState(null);
  const [durationEnd, setDurationEnd] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const dateStartHtmlFormat = convertISOtoHtml(queryParams.get("dateStart"));
    const dateEndHtmlFormat = convertISOtoHtml(queryParams.get("dateEnd"));

    setDurationStart(dateStartHtmlFormat);
    setDurationEnd(dateEndHtmlFormat);

    setCountry(queryParams.get("country"));
    setCity(queryParams.get("city"));
    setPostalCode(queryParams.get("postalCode"));
    setBuildingNumber(queryParams.get("buildingNumber"));
    setStreet(queryParams.get("street"));
    setFlatNumber(queryParams.get("flatNumber"));
  }, []);

  const submitButtonHandler = (e) => {
    e.preventDefault();

    // Validation check
    // Make the post request to the server
    // Check if status code is okay

    history.push(`/plans/${match.params.stageId}`);
  };

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <p className="mb-1 mt-5">Address Information:</p>
        <div className="form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Country:"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="City:"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Street:"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Postal Code:"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Building Number:"
              value={buildingNumber}
              onChange={(e) => {
                setBuildingNumber(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Flat Number:"
              value={flatNumber}
              onChange={(e) => {
                setFlatNumber(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="duration-starts">Duration Starts:</label>
          <input
            className="form-control"
            type="date"
            id="duration-starts"
            placeholder="Enter Trip Start Date:"
            value={durationStart}
            onChange={(e) => {
              setDurationStart(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration-ends">Duration Ends:</label>
          <input
            className="form-control"
            type="date"
            id="duration-ends"
            placeholder="Enter Trip End Date:"
            value={durationEnd}
            onChange={(e) => {
              setDurationEnd(e.target.value);
            }}
          />
        </div>

        <button
          className="btn btn-primary btn-block mt-4"
          type="submit"
          onClick={submitButtonHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const convertISOtoHtml = (ISOString) => {
  const date = new Date(ISOString);
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    "-" +
    date.getDate()
  );
};

export default CreateAStage;
