import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnimationContainer from './containers/Animation';

export default function DefaultRouter() {
    return (
      <Router>
        <Route exact path={["/", "/anime/:type"]}>
          <AnimationContainer />
        </Route>
      </Router>
    );
}
