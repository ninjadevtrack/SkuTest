import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Films.css';
import Grid from '../Grid';
import { Container, Spinner } from 'react-bootstrap';

const Films = ({ title, films, fetchData, isLoading, isFetched, history }) => {
  const filmUrls = history.location.state?.filmUrls;
  useEffect(() => {
    if (!!filmUrls && filmUrls.length > 0) {
      fetchData({ filmUrls });
    }
  }, [filmUrls, fetchData]);

  if (isLoading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} />
        &nbsp;&nbsp;
        <p>Loading...</p>
      </Container>
    );
  }

  if (!isFetched) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} />
        &nbsp;&nbsp;
        <p>Fetching...</p>
      </Container>
    );
  }

  const gridData = films || [];
  const gridProps = {
    columns: [
      {
        id: 1,
        field: 'title',
        label: 'title',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 2,
        field: 'episode_id',
        label: 'episode_id',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
      {
        id: 3,
        field: 'director',
        label: 'director',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 4,
        field: 'producer',
        label: 'producer',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 5,
        field: 'release_date',
        label: 'release_date',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
    ],
    config: {
      itemCount: filmUrls?.length,
      showAction: false,
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
