import { useState } from "react";

import { useHistory } from "react-router-dom";

const Register = (props) => {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [buildingNumber, setBuildingNumber] = useState(null);
  const [flatNumber, setFlatNumber] = useState(null);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const history = useHistory();

  const submitButtonHandler = (e) => {
    e.preventDefault();
    props.setIsLoggedIn(true);

    // Validation Check
    // Send Post Request

    // If status code 200 or 201
    history.push("/welcome");
  };

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="form-group mt-5 mb-1">
          <label htmlFor="name" className="mb-1">
            Username:
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Enter Name:"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-1">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="name"
            placeholder="Enter Email:"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="password" className="mb-1">
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Enter Password:"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
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

export default Register;
