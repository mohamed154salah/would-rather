import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Error from "./error";

import Dashboard from "../components/Dashboard";
import LeaderBoard from "../components/Leaderboard";
import Login from "../components/Login";
import NewQuestion from "../components/NewQuestion";
import AnswerQuestion from "./AnswerQuestion";

function Routes(props) {
  return (
    <div className="container">
      <Switch>
        {props.notLoggedIn ? (
          <Route   component={Login} />
        ) : (
          <Fragment>
            <Route path="/" exact component={Dashboard} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/questions/:id" component={AnswerQuestion} />
          </Fragment>
        )}
        <Route component={Error} />
      </Switch>
    </div>
  );
}

Routes.propTypes = { notLoggedIn: PropTypes.any };

export default Routes;
