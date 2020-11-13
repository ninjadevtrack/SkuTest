import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Residents.css';
import Grid from '../Grid';

const Residents = ({
  title,
  residents,
  fetchData,
  isLoading,
  isFetched,
  history,
}) => {
  const residentUrls = history.location.state.residentUrls;
  useEffect(() => {
    if (!!residentUrls && residentUrls.length > 0) {
      fetchData({ residentUrls });
    }
  }, [residentUrls, fetchData]);

  if (isLoading) {
    return <p>Loading Data...</p>;
  }

  if (!isFetched) {
    return <p>Fetching Data...</p>;
  }

  const gridData = residents || [];
  const gridProps = {
    columns: [
      'name',
      'height',
      'mass',
      'gender',
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
    ],
    config: {
      itemCount: residentUrls?.length,
    },
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <Grid data={gridData} gridProps={gridProps} />
    </div>
  );
};

Residents.propTypes = {
  title: PropTypes.string.isRequired,
  residents: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
};

Residents.defaultProps = {
  title: 'Residents List',
};

export default Residents;
