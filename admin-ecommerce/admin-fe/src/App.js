import React, { Component } from 'react';
import './index.css';

import { Container } from 'react-bootstrap';

import { Login, Register } from "./screens/index";
import { Header, Home, Layout } from './containers/index';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
        </Switch>

      </>
    )
  }
}
