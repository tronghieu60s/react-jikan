import React from "react";
import { Route } from "react-router-dom";
import AnimationContainer from "./containers/Animation";

export default function DefaultRouter() {
  return (
    <Route exact path={["/", "/anime/:type"]}>
      <AnimationContainer />
    </Route>
  );
}
