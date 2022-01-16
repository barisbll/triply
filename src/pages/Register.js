import { useState } from "react";

import { useHistory } from "react-router-dom";

const Register = (props) => {
  const [title, setTitle] = useState("Mr.");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const submitButtonHandler = (e) => {
    e.preventDefault();
    props.setIsLoggedIn(true);

    // Validation Check
    // Send Post Request
    fetch("http://192.168.43.93:8080/pts/user/register", {
      method: "POST",
      body: JSON.stringify({
        Title: title,
        FirstName: firstName,
        MiddleName: middleName,
        LastName: lastName,
        Suffix: suffix,
        Gender: gender,
        Email: email,
        Password: password,
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
          history.push("/register?error=true");
        }
        props.setUserId(resData.userID);
      });

    // If status code 200 or 201
    history.push("/welcome");
  };

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="form-group mt-5 mb-1">
          <label htmlFor="title" className="mb-1">
            Title:
          </label>
          <select
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          >
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>
        <div className="form-group mb-1">
          <label htmlFor="first-name" className="mb-1">
            Firstname:
          </label>
          <input
            className="form-control"
            type="text"
            id="first-name"
            placeholder="Enter Firstname:"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-1">
          <label htmlFor="middle-name" className="mb-1">
            Middlename:
          </label>
          <input
            className="form-control"
            type="text"
            id="middle-name"
            placeholder="Enter Middlename:"
            value={middleName}
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-1">
          <label htmlFor="last-name" className="mb-1">
            Lastname:
          </label>
          <input
            className="form-control"
            type="text"
            id="last-name"
            placeholder="Enter Lastname:"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-1">
          <label htmlFor="suffix" className="mb-1">
            Suffix:
          </label>
          <input
            className="form-control"
            type="text"
            id="suffix"
            placeholder="Enter Suffix:"
            value={suffix}
            onChange={(e) => {
              setSuffix(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-1">
          <label htmlFor="gender" className="mb-1">
            Gender:
          </label>
          <select
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group mb-1">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
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
