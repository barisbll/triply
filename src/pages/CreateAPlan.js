import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const CreateAPlan = (props) => {
  const userId = props.userId;

  const [planName, setPlanName] = useState(null);
  const [durationStart, setDurationStart] = useState(null);
  const [durationEnd, setDurationEnd] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const dateStartHtmlFormat = convertISOtoHtml(queryParams.get("dateStart"));
    const dateEndHtmlFormat = convertISOtoHtml(queryParams.get("dateEnd"));

    setPlanName(queryParams.get("planName"));
    setDurationStart(dateStartHtmlFormat);
    setDurationEnd(dateEndHtmlFormat);
    setNumOfPeople(queryParams.get("numOfPeople"));
  }, []);

  const submitButtonHandler = (e) => {
    e.preventDefault();

    // Validation check
    // Make the post request to the server
    // Check if status code is okay
    fetch(`http://192.168.43.93:8080/pts/user/${userId}/plans`, {
      method: "POST",
      body: JSON.stringify({
        TripStartDate: durationStart,
        TripEndDate: durationEnd,
        NumberOfTravelers: numOfPeople,
        Name: planName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        if (!resData.Success) {
          // Display some error messages
          history.push("/create-a-plan?error=true");
        }
      });

    // history.push("/plans");
  };

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="form-group mt-5">
          <label htmlFor="plan-name">Name of the plan:</label>
          <input
            className="form-control"
            type="text"
            id="plan-name"
            placeholder="Enter Plan's Name:"
            value={planName}
            onChange={(e) => {
              setPlanName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="num-people">Number of people:</label>
          <input
            className="form-control"
            type="number"
            id="num-people"
            placeholder="Enter Number of People:"
            value={numOfPeople}
            onChange={(e) => {
              setNumOfPeople(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
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

export default CreateAPlan;
