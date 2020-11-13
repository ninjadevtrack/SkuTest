import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './Planets.css';
import Grid from '../Grid';

const Planets = ({ title, planets, fetchData, isLoading, isFetched }) => {
  const history = useHistory();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <p>Loading Data...</p>;
  }

  if (!isFetched) {
    return <p>Fetching Data...</p>;
  }

  const { count, next, previous, results } = planets;
  const gridData = !!results.length ? results : [];

  const gridProps = {
    columns: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
    ],
    config: {
      itemCount: count || 0,
      nextPage: next || null,
      prevPage: previous || null,
    },
    actions: [
      {
        label: 'Go to Films',
        action: (row) => {
          history.push({
            pathname: 'planets/' + row.name + '/films',
            state: { filmUrls: row.films },
          });
        },
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          history.push({
            pathname: 'planets/' + row.name + '/residents',
            state: { residentUrls: row.residents },
          });
        },
      },
    ],
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <Grid data={gridData} gridProps={gridProps} />
    </div>
  );
};

Planets.propTypes = {
  title: PropTypes.string.isRequired,
  planets: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
};

Planets.defaultProps = {
  title: 'Star Wars Planets',
  planets: {},
};

export default Planets;
