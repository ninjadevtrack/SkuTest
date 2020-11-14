import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import Planets from 'containers/Planets';
import Films from 'containers/Films';
import Residents from 'containers/Residents';
import PlanetDetail from 'components/PlanetDetail';
import './App.css';

const App = function () {
  const gridProps = {
    columns: [
      {
        id: 1,
        field: 'name',
        label: 'name',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 2,
        field: 'rotation_period',
        label: 'rotation_period',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
      {
        id: 3,
        field: 'orbital_period',
        label: 'orbital_period',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
      {
        id: 4,
        field: 'diameter',
        label: 'diameter',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
      {
        id: 5,
        field: 'climate',
        label: 'climate',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 6,
        field: 'gravity',
        label: 'gravity',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 7,
        field: 'terrain',
        label: 'terrain',
        isSortable: false,
        isHidden: false,
        type: 'sstring',
      },
      {
        id: 8,
        field: 'surface_water',
        label: 'surface_water',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
      {
        id: 9,
        field: 'population',
        label: 'population',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
    ],
    config: {
      itemCount: 0,
      nextPage: null,
      prevPage: null,
      showAction: true,
    },
    customFields: [
      {
        id: 10,
        field: 'fims_count',
        label: 'Fims Count',
        isSortable: false,
        isHidden: false,
        type: 'number',
        value: (row) => {
          return row.films?.length;
        },
      },
      {
        id: 11,
        field: 'residents_count',
        label: 'Residents Count',
        isSortable: false,
        isHidden: false,
        type: 'number',
        value: (row) => {
          return row.residents?.length;
        },
      },
    ],
  };

  return (
    <Container>
      <Switch>
        <Route
          path="/"
          render={() => <Planets gridProps={gridProps} />}
          exact
        />
        <Route path="/planets/:planet" component={PlanetDetail} exact />
        <Route path="/planets/:planet/films" component={Films} exact />
        <Route
          path="/planets/:resident/residents"
          component={Residents}
          exact
        />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Container>
  );
};

export default App;
