import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Planets from 'components/Planets';

const ControlledRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const routes = () => (
  <Switch>
    <ControlledRoute path="/" component={Planets} />
  </Switch>
);

export default routes;
