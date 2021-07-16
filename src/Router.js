import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnimationContainer from './containers/Animation';

export default function DefaultRouter() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path={["/", "/anime/:type"]}>
          <AnimationContainer />
        </Route>
      </Router>
    );
}
