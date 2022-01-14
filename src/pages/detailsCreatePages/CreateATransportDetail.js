import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CreateATransportDetail = () => {
  const [transportationMean, setTransportationMean] = useState(null);
  const [durationStart, setDurationStart] = useState(null);
  const [durationEnd, setDurationEnd] = useState(null);

  const [arrivalCountry, setArrivalCountry] = useState(null);
  const [arrivalCity, setArrivalCity] = useState(null);
  const [arrivalStreet, setArrivalStreet] = useState(null);
  const [arrivalPostalCode, setArrivalPostalCode] = useState(null);
  const [arrivalBuildingNumber, setArrivalBuildingNumber] = useState(null);
  const [arrivalFlatNumber, setArrivalFlatNumber] = useState(null);

  const [departureCountry, setDepartureCountry] = useState(null);
  const [departureCity, setDepartureCity] = useState(null);
  const [departureStreet, setDepartureStreet] = useState(null);
  const [departurePostalCode, setDeparturePostalCode] = useState(null);
  const [departureBuildingNumber, setDepartureBuildingNumber] = useState(null);
  const [departureFlatNumber, setDepartureFlatNumber] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const submitButtonHandler = () => {
    console.log("click");
  };

  useEffect(() => {
    if (queryParams.get("id")) {
      const dateStartHtmlFormat = convertISOtoHtml(
        queryParams.get("dateStart")
      );
      const dateEndHtmlFormat = convertISOtoHtml(queryParams.get("dateEnd"));

      setDurationStart(dateStartHtmlFormat);
      setDurationEnd(dateEndHtmlFormat);

      setTransportationMean(queryParams.get("transportationMean"));
      setArrivalCountry(queryParams.get("arrivalCountry"));
      setArrivalCity(queryParams.get("arrivalCity"));
      setArrivalStreet(queryParams.get("arrivalStreet"));
      setArrivalPostalCode(queryParams.get("arrivalPostalCode"));
      setArrivalBuildingNumber(queryParams.get("arrivalBuildingNumber"));
      setArrivalFlatNumber(queryParams.get("arrivalFlatNumber"));

      setDepartureCountry(queryParams.get("departureCountry"));
      setDepartureCity(queryParams.get("departureCity"));
      setDepartureStreet(queryParams.get("departureStreet"));
      setDeparturePostalCode(queryParams.get("departurePostalCode"));
      setDepartureBuildingNumber(queryParams.get("departureBuildingNumber"));
      setDepartureFlatNumber(queryParams.get("departureFlatNumber"));
    }
  }, []);

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="form-group mt-5">
          <label htmlFor="transportation-mean" className="mb-1">
            Transportation Mean:
          </label>
          <select
            className="form-control"
            id="transportation-mean"
            placeholder="Enter Transportation Mean:"
            value={transportationMean}
            onChange={(e) => {
              setTransportationMean(e.target.value);
            }}
          >
            <option>Bus</option>
            <option>Plane</option>
            <option>Tren</option>
            <option>Ship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="duration-starts" className="mb-1">
            Duration Starts:
          </label>
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
          <label htmlFor="duration-ends" className="mb-1">
            Duration Ends:
          </label>
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

        <p className="mb-1 mt-4">Arrival Address Information:</p>
        <div className="form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder=" Arrival Country:"
              value={arrivalCountry}
              onChange={(e) => {
                setArrivalCountry(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Arrival City:"
              value={arrivalCity}
              onChange={(e) => {
                setArrivalCity(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Arrival Street:"
              value={arrivalStreet}
              onChange={(e) => {
                setArrivalStreet(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Arrival Postal Code:"
              value={arrivalPostalCode}
              onChange={(e) => {
                setArrivalPostalCode(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Arrival Building Number:"
              value={arrivalBuildingNumber}
              onChange={(e) => {
                setArrivalBuildingNumber(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Arrival Flat Number:"
              value={arrivalFlatNumber}
              onChange={(e) => {
                setArrivalFlatNumber(e.target.value);
              }}
            />
          </div>
        </div>

        <p className="mb-1 mt-4">Departure Address Information:</p>
        <div className="form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder=" Departure Country:"
              value={departureCountry}
              onChange={(e) => {
                setDepartureCountry(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Departure City:"
              value={departureCity}
              onChange={(e) => {
                setDepartureCity(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Departure Street:"
              value={departureStreet}
              onChange={(e) => {
                setDepartureStreet(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Departure Postal Code:"
              value={departurePostalCode}
              onChange={(e) => {
                setDeparturePostalCode(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Departure Building Number:"
              value={departureBuildingNumber}
              onChange={(e) => {
                setDepartureBuildingNumber(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Departure Flat Number:"
              value={departureFlatNumber}
              onChange={(e) => {
                setDepartureFlatNumber(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          className="btn btn-primary btn-block mt-4 mb-5"
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

export default CreateATransportDetail;
