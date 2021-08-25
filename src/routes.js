import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";


const Routes = () => {
  window.scrollTo(0, 0);
  return (
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/registrar" exact={true} component={Register} />
    </Switch>
  );
};
export default withRouter(Routes);
