import React from "react";
import { Switch, Route } from "react-router-dom";
import AnimationContainer from "./containers/Animation";
import NoMatchContainer from "./containers/NoMatch";

export default function DefaultRouter() {
  return (
    <Switch>
      <Route exact path={["/", "/animation/:type/:subtype"]}>
        <AnimationContainer />
      </Route>
      <Route path="*">
        <NoMatchContainer />
      </Route>
    </Switch>
  );
}
