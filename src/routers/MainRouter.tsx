import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoriesScreen from "../screens/categories/CategoriesScreen";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CategoriesScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;