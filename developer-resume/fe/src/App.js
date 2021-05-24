import React, { Component } from "react";
import { Switch, Route } from "react-router";

import { Navigation, Home, About, Project, Contact } from "./components/index";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
      </>
    );
  }
}

export default App;
