import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitButtonHandler = (e) => {
    e.preventDefault();

    fetch("http://192.168.43.93:8080/pts/user/login", {
      method: "POST",
      body: JSON.stringify({ Email: email, Password: password }),
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
          history.push("/login?error=true");
        }

        props.setIsLoggedIn(true);
        props.setUserId(resData.userID);
        localStorage.setItem("userId", resData.userID);
      });

    // If status code 200 or 201
    history.push("/welcome");
  };

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="form-group mt-5">
          <label htmlFor="name" className="mb-1">
            Email:
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email:"
          />
        </div>
        <div className="form-group">
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
        <Link to="/register" className="mb-3 d-block">
          I don't have an account
        </Link>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={submitButtonHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
