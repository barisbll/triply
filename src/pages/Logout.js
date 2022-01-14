import { useHistory } from "react-router-dom";

const Logout = (props) => {
  props.setIsLoggedIn(false);

  const history = useHistory();
  history.push("/welcome");

  return <p className="text-center mt-5">Logging out...</p>;
};

export default Logout;
