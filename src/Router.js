import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnimationContainer from './containers/Animation';
import HomeContainer from './containers/Home';

export default function DefaultRouter() {
    return (
      <Router>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/anime/:type/:page">
          <AnimationContainer />
        </Route>
      </Router>
    );
}
