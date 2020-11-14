import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './Planets.css';
import Grid from '../Grid';
import FeatureModal from 'containers/Form';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Planets = ({
  title,
  planets,
  fetchData,
  isLoading,
  isFetched,
  gridProps,
}) => {
  const history = useHistory();
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const [toggleModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});

  const onEditConfirm = () => {
    setOpenModal(false);
  };

  if (isLoading) {
    return <p>Loading Data...</p>;
  }

  if (!isFetched) {
    return <p>Fetching Data...</p>;
  }

  const { count, next, previous, results } = planets;
  const gridData = !!results.length ? results : [];

  const newGridProps = {
    ...gridProps,
    config: {
      itemCount: count || 0,
      nextPage: next || null,
      prevPage: previous || null,
      showAction: true,
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
        status: (row) => {
          return !!row.films && row.films.length > 0;
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
        status: (row) => {
          return !!row.residents && row.residents.length > 0;
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
        status: (row) => {
          return true;
        },
        inActive: false,
      },
      {
        label: 'Show Modal',
        action: (row) => {
          setOpenModal(true);
          setFormData({
            name: row.name,
            rotation_period: Number(row.rotation_period),
            orbital_period: Number(row.orbital_period),
            diameter: Number(row.diameter),
            climate: row.climate,
            gravity: row.gravity,
            terrain: row.terrain.split(', '),
            surface_water: Number(row.surface_water),
          });
        },
        status: (row) => {
          return true;
        },
        inActive: false,
      },
    ],
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <Grid data={gridData} gridProps={newGridProps} />
      <Rodal
        visible={toggleModal}
        width={550}
        height={550}
        duration={500}
        onClose={() => setOpenModal(false)}
      >
        <FeatureModal data={formData} onSubmitClick={onEditConfirm} />
      </Rodal>
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
