import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
/** containers  */
import { Home, Navbar, Post, Profile, Setting } from './containers/index';
import { Login, Register } from './screens/index';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/setting" component={Setting} />

        </Switch>
      </>
    )
  }
}
