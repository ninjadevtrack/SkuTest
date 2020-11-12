import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import Planets from 'components/Planets';

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" component={Planets} exact />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Container>
  );
};

export default Routes;
