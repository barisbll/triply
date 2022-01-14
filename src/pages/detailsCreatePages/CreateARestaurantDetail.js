import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CreateARestaurantDetail = () => {
  const [restaurantName, setRestaurantName] = useState(null);
  const [durationStart, setDurationStart] = useState(null);
  const [durationEnd, setDurationEnd] = useState(null);

  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [buildingNumber, setBuildingNumber] = useState(null);
  const [flatNumber, setFlatNumber] = useState(null);

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

      setRestaurantName(queryParams.get("name"));
      setCountry(queryParams.get("country"));
      setCity(queryParams.get("city"));
      setStreet(queryParams.get("street"));
      setPostalCode(queryParams.get("postalCode"));
      setBuildingNumber(queryParams.get("buildingNumber"));
      setFlatNumber(queryParams.get("flatNumber"));
    }
  }, []);

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="form-group mt-5">
          <label htmlFor="restaurant-name" className="mb-1">
            Name of the Restaurant:
          </label>
          <input
            className="form-control"
            type="text"
            id="restaurant-name"
            placeholder="Enter Restaurant's Name:"
            value={restaurantName}
            onChange={(e) => {
              setRestaurantName(e.target.value);
            }}
          />
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

        <p className="mb-1">Address Information:</p>
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

export default CreateARestaurantDetail;
