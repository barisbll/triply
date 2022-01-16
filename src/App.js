import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plans from "./pages/Plans";
import CreateAPlan from "./pages/CreateAPlan";
import Logout from "./pages/Logout";
import Stages from "./pages/Stages";
import CreateAStage from "./pages/CreateAStage";
import Details from "./pages/Details";

import CreateAnAccomadationDetail from "./pages/detailsCreatePages/CreateAnAccomadationDetail";
import CreateARestaurantDetail from "./pages/detailsCreatePages/CreateARestaurantDetail";
import CreateATouristicPlaceDetail from "./pages/detailsCreatePages/CreateATouristicPlaceDetail";
import CreateATransportDetail from "./pages/detailsCreatePages/CreateATransportDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  console.log(userId);

  // if (localStorage.getItem("userId")) {
  //   setUserId(localStorage.getItem("userId"));
  //   setIsLoggedIn(true);
  // }

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />
        </Route>
        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />
        </Route>
        <Route path="/plans" exact>
          {isLoggedIn ? <Plans userId={userId} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/create-a-plan">
          {isLoggedIn ? (
            <CreateAPlan userId={userId} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/plans/:planId" exact>
          {isLoggedIn ? <Stages /> : <Redirect to="/login" />}
        </Route>
        <Route path="/plans/:planId/create-a-stage" exact>
          {isLoggedIn ? <CreateAStage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/plans/:planId/:stageId" exact>
          {isLoggedIn ? <Details /> : <Redirect to="/login" />}
        </Route>
        <Route path="/plans/:planId/:stageId/create-a-restaurant" exact>
          {isLoggedIn ? <CreateARestaurantDetail /> : <Redirect to="/login" />}
        </Route>
        <Route path="/plans/:planId/:stageId/create-an-accomadation" exact>
          {isLoggedIn ? (
            <CreateAnAccomadationDetail />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/plans/:planId/:stageId/create-a-transport" exact>
          {isLoggedIn ? <CreateATransportDetail /> : <Redirect to="/login" />}
        </Route>
        <Route path="/plans/:planId/:stageId/create-a-touristic-place" exact>
          {isLoggedIn ? (
            <CreateATouristicPlaceDetail />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/log-out">
          {isLoggedIn ? (
            <Logout setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
