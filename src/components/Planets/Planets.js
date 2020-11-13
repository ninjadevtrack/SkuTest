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
      itemCount: count || 0,
      nextPage: next || null,
      prevPage: previous || null,
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
    actions: [
      {
        label: 'Go to Films',
        action: (row) => {
          history.push({
            pathname: 'planets/' + row.name + '/films',
            state: { filmUrls: row.films },
          });
        },
        inActive: false,
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          history.push({
            pathname: 'planets/' + row.name + '/residents',
            state: { residentUrls: row.residents },
          });
        },
        inActive: false,
      },
      {
        label: 'Go to Detail',
        action: (row) => {
          history.push({
            pathname: 'planets/' + row.name,
            state: { data: row },
          });
        },
        inActive: false,
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
