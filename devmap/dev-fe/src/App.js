import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** auth containers */
import {
  AppBar,
  Login,
  Register,
  Developer,
  Account,
  Home,
  PageNotFound,
} from "./containers/index";

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/" component={PageNotFound} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/developer" component={Developer} />
          <Route exact path="/account" component={Account} />

          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
        </Switch>
      </Router>
    );
  }
}
