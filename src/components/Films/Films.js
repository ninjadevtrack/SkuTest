import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Films.css';
import Grid from '../Grid';

const Films = ({ title, films, fetchData, isLoading, isFetched, history }) => {
  const filmUrls = history.location.state.filmUrls;
  useEffect(() => {
    if (!!filmUrls && filmUrls.length > 0) {
      fetchData({ filmUrls });
    }
  }, [filmUrls, fetchData]);

  if (isLoading) {
    return <p>Loading Data...</p>;
  }

  if (!isFetched) {
    return <p>Fetching Data...</p>;
  }

  const gridData = films || [];
  const gridProps = {
    columns: [
      'title',
      'episode_id',
      'director',
      'producer',
      'release_date',
      'url',
    ],
    config: {
      itemCount: filmUrls?.length,
    },
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <Grid data={gridData} gridProps={gridProps} />
    </div>
  );
};

Films.propTypes = {
  title: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
};

Films.defaultProps = {
  title: 'Films List',
};

export default Films;
