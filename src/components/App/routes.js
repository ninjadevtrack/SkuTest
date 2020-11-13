import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import Planets from 'containers/Planets';
import Films from 'containers/Films';

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" component={Planets} exact />
        <Route path="/planets/:planet/films" component={Films} exact />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Container>
  );
};

export default Routes;
